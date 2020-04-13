import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Repo } from 'src/app/models/repo';
import { GithubService } from 'src/app/services/github/github.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  user: User;
  username: string;
  repos: Repo;
  form: any;

  getUserProfile() {
    this.githubService.getUser(this.username)
  console.log(this.username)

  this.githubService.fetchUser()
  this.user = this.githubService.user
  console.log(this.user)
  
  this.githubService.fetchRepos()
  this.repos = this.githubService.repos
  console.log(this.repos)

  }

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    
    {
      this.githubService.getUser(this.username)
    console.log(this.username)

    this.githubService.fetchUser()
    this.user = this.githubService.user
    console.log(this.user)
    
    this.githubService.fetchRepos()
    this.repos = this.githubService.repos
    console.log(this.repos)

    }
      // this.form.reset();

        
      
    
  }

}
