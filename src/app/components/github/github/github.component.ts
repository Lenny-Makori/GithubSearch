import { Component, OnInit, } from '@angular/core';
import { GithubService } from 'src/app/services/github/github.service';
import { ActivatedRoute } from '@angular/router'
// import { User } from 'src/app/models/user';
// import { SearchFormComponent } from '../../search-form/search-form/search-form.component';
// import { Repo } from 'src/app/models/repo';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  // @Input() users: User; repo: Repo;
  user: any;
  username: string;
  repo: any;

  constructor(private activatedRoute: ActivatedRoute, private githubService: GithubService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.username = params.get('username')
    })
    this.githubService.fetchUser()
    this.user = this.githubService.user
    console.log(this.user)
    
    this.githubService.fetchRepos(this.username)
    this.repo = this.githubService.repo
    console.log(this.repo)


  }

}
