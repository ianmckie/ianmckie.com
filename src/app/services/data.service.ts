import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http:Http) { 
    console.log('Connected');
  }

  getGitCommits(){
    return this.http.get('https://api.github.com/users/ianmckie/events?client_id=cfd907416fda5c1cb7e4&client_secret=f603d78c3b0f94a221eb09842e92da968af14925')
      .map(res => res.json());
  }

  getProjects(){
    return this.http.get('http://ianmckie.com/wp-json/wp/v2/projects/?_embed')
      .map(res => res.json());
  }

  getProject(id){
    return this.http.get('http://ianmckie.com/wp-json/wp/v2/projects/'+id)
      .map(res => res.json());
  }
  

}
