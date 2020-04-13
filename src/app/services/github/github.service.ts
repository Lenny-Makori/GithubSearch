import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  apiKey: string = 'b4c6f893e48edf22ce0f8964e559702b07fa1b7a';

  url: string = 'https://api.github.com'

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.url}/users?+${this.apiKey}`)
  }

}
