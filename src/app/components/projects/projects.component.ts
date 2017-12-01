import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects:any[] = []
  
  constructor(private dataservice:DataService) {
    this.dataservice.getProjects().subscribe((response) => {
      console.log(response);

      for(let x = 0; x < response.length; x++){
        let project: object = {
          id: response[x].id,
          title: response[x].title.rendered,
          excerpt: response[x].excerpt.rendered,
          image: response[x]._embedded['wp:featuredmedia'][0].source_url,
        }
        this.projects.push(project);
      }

    });
  }

  ngOnInit() {
  }

}
