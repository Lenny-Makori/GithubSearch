import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github/github.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  users: User[]

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    // this.githubService.getUsers().subscribe((users)=>{
    //   this.users = users;
    //   console.log(users)

    // })

  }

}
