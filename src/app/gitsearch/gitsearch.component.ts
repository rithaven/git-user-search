import { Component, OnInit } from '@angular/core';
import { Githubservice  } from '@Github-;
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-gitsearch',
  templateUrl: './gitsearch.component.html',
  styleUrls: ['./gitsearch.component.css']
})
export class GitsearchComponent implements OnInit {
  user: any[];
  repos: any[];
  userName: string;
  constructor(private githubService: Githubservice , private http: HttpClient) {
    this.githubService.getUser().subscribe(user => {
      this.user = user;
    });
    this.githubService.getRepo().subscribe(repos => {
      this.repos = repos;
    });
  }
  findProfile() {
    this.githubService.updateUser(this.userName);
    this.githubService.getUser().subscribe(user => {
      this.user = user;
    });
    this.githubService.getRepo().subscribe(repos => {
      this.repos = repos;
    });
  }
  ngOnInit() {
  }

}
