import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github/github.service';
import { Repo } from 'src/app/models/repo';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-repo-display',
  templateUrl: './repo-display.component.html',
  styleUrls: ['./repo-display.component.css']
})
export class RepoDisplayComponent implements OnInit {
  username: any;
  repo: Repo

  constructor(private githubService: GithubService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.githubService.getUser(this.username)
    console.log(this.username)

    this.githubService.fetchRepos(this.username)
    this.repo = this.githubService.repo
    console.log(this.repo)
    this.spinner.hide();
  }

}
