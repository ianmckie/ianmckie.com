import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-git-show',
  templateUrl: './git-show.component.html',
  styleUrls: ['./git-show.component.scss']
})
export class GitShowComponent implements OnInit {

  repos: any[] = [];

  constructor(private dataservice:DataService) {

    this.dataservice.getGitCommits().subscribe((response) => {
      
      for(let x = 0; x < 4; x++){
        let gitEvent = response[x];
        if(gitEvent.type === 'PushEvent'){
          let pushEvent: object = {
            name: gitEvent.repo.name.split('ianmckie/')[1],
            message : gitEvent.payload.commits[0].message,
            createdAt: gitEvent.created_at,
            url: gitEvent.repo.url
          }
          this.repos.push(pushEvent);
        }
        else{
          x--;
        }
      }
    });

   }

  ngOnInit() {
  }

}
