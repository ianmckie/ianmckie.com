import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/concat';
import 'rxjs/add/operator/do';

abstract class HttpCache {
  /**
   * Returns a cached response, if any, or null if not present.
   */
  abstract get(req: HttpRequest<any>): HttpResponse<any>|null;

  /**
   * Adds or updates the response in the cache.
   */
  abstract put(req: HttpRequest<any>, resp: HttpResponse<any>): void;
}

@Injectable()
export class CacheInteceptor implements HttpInterceptor {
 
    constructor(private cache: HttpCache) {
      console.log('connected Cache')
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      console.log('connected Cache')
      // Still skip non-GET requests.
      if (req.method !== 'GET') {
        return next.handle(req);
      }
     
      // This will be an Observable of the cached value if there is one,
      // or an empty Observable otherwise. It starts out empty.
      let maybeCachedResponse: Observable<HttpEvent<any>> = Observable.empty();
     
      // Check the cache.
      const cachedResponse = this.cache.get(req);
      if (cachedResponse) {
        maybeCachedResponse = Observable.of(cachedResponse);
      }
     
      // Create an Observable (but don't subscribe) that represents making
      // the network request and caching the value.
      const networkResponse = next.handle(req).do(event => {
        // Just like before, check for the HttpResponse event and cache it.
        if (event instanceof HttpResponse) {
          this.cache.put(req, event);
        }
      });
     
      // Now, combine the two and send the cached response first (if there is
      // one), and the network response second.
      return Observable.concat(maybeCachedResponse, networkResponse);
    }
}