import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user';
import { Repo } from 'src/app/models/repo';
import { GithubService } from 'src/app/services/github/github.service';
import { GithubComponent } from '../../github/github/github.component';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  @Input() githubComponent: GithubComponent

  user: User;
  username: any;
  repo: Repo;
  // repos: any[]
  // form: any;

  getUserProfile() {
    this.githubService.fetchUser()
    this.user = this.githubService.user
    console.log(this.user)

    this.githubService.getUser(this.username)
    console.log(this.username)

  
    this.githubService.fetchRepos(this.username)
    this.repo = this.githubService.repo
    console.log(this.repo)

  }

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    
    this.githubService.fetchUser()
    this.user = this.githubService.user
    console.log(this.user)
    
    this.githubService.fetchRepos(this.username)
    this.repo = this.githubService.repo
    console.log(this.repo)

    }
      // this.form.reset();

        
      
    
  }

