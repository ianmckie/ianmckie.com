import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.scss']
})
export class SingleProjectComponent implements OnInit {

  private sub: any;
  id: number = 0;

  constructor(private dataservice:DataService, private route: ActivatedRoute) { 

  }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });

    this.dataservice.getProject(this.id).subscribe((response) => {
      console.log(response);

    });
  }

}
