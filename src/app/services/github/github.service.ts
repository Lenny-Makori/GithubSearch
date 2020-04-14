import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user';
import { Repo } from 'src/app/models/repo';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  user: User;
  repo: Repo;
  // repos: any[];
  username: string;

  
  constructor(private http: HttpClient) { 
    this.user = new User("", "", "", 0, 0, 0);
    this.repo = new Repo("", "");
    this.username ="Lenny-Makori" 
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
      this.http.get<UserApiResponse>(`${environment.url}/users/${this.username}?access_token=${environment.apiKey}`)
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

  fetchRepos(username: any){
    interface ReposApiResponse{
      name: string;
      description: string;
    }

  

    const promise = new Promise((resolve,reject) =>{
      // this.getUser(this.username)
      this.http.get<ReposApiResponse>(`${environment.url}/users/${this.username}/repos?access_token=${environment.apiKey}`)
      .toPromise().then(response => {
        // this.repos.push(response)
        this.repo = response;
        // this.repo.description = response.description;

        // console.log(this.repos)

        // resolve();
      },
      error =>{
        reject(error);
      })
    })
    return promise;
  }

  

  

}
