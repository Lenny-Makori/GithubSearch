import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user';
import { Repo } from 'src/app/models/repo';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  user: User;
  repos: Repo;
  username: string;

  apiKey: string = 'b4c6f893e48edf22ce0f8964e559702b07fa1b7a';

  url: string = 'https://api.github.com'

  constructor(private http: HttpClient) { 
    this.user = new User("", "", "", 0, 0, 0);
    this.repos = new Repo("", "");
    this.username = 'Lenny-Makori' 
  }

  getUser(username: string){
    this.username = username;
  }

  fetchUser(){
    interface UserApiResponse{
      login: string;
      avatar_url: string;
      bio: string;
      public_repos: number;
      followers: number;
      following: number;
    }

    const promise = new Promise((resolve,reject) => {
      this.http.get<UserApiResponse>(`${this.url}/users/${this.username}?access_token=${this.apiKey}`)
      .toPromise().then(response => {
        this.user.login = response.login;
        this.user.avatar_url = response.avatar_url;
        this.user.bio = response.bio;
        this.user.public_repos = response.public_repos;
        this.user.followers = response.followers;
        this.user.following = response.following;
        
        resolve();
      },
      error =>{
        reject(error);
      })
    })
    return promise;
  }

  fetchRepos(){
    interface ReposApiResponse{
      name: string;
      description: string;
    }

    const promise = new Promise((resolve,reject) =>{
      this.http.get<ReposApiResponse>(`${this.url}/users/${this.username}/repos?access_token=${this.apiKey}`)
      .toPromise().then(response => {
        this.repos.name = response.name;
        this.repos.description = response.description;

        resolve();
      },
      error =>{
        reject(error);
      })
    })
    return promise;
  }

  

  

}
