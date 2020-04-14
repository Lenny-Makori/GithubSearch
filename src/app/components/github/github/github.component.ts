import { Component, OnInit, Input } from '@angular/core';
import { GithubService } from 'src/app/services/github/github.service';
import { User } from 'src/app/models/user';
// import { SearchFormComponent } from '../../search-form/search-form/search-form.component';
import { Repo } from 'src/app/models/repo';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  @Input() users: User; repo: Repo;

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    // this.githubService.getUsers().subscribe((users)=>{
    //   this.users = users;
    //   console.log(users)

    // })

  }

}
