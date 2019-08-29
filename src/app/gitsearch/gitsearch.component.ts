import { Component, OnInit } from '@angular/core';
import { Githubservice} from '../Github-service/github-search.service';
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
    this.githubService.gitUser().subscribe(user => {
      this.user = user;
    });
    this.githubService.gitRepos().subscribe(repos => {
      this.repos = repos;
    });
  }
  findProfile() {
    this.githubService.updateUser(this.userName);
    this.githubService.gitRepos().subscribe(user => {
      this.user = user;
    });
    this.githubService.gitRepos().subscribe(repos => {
      this.repos = repos;
    });
  }
  ngOnInit() {
  }

}
