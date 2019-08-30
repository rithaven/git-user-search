import { Component, OnInit } from '@angular/core';
import { Githubservice} from '../Github-service/github-search.service';
import { HttpClient } from '@angular/common/http';
import { Gitsearch } from '../gitsearch';

@Component({
  selector: 'app-gitsearch',
  templateUrl: './gitsearch.component.html',
  styleUrls: ['./gitsearch.component.css']
})
export class GitsearchComponent implements OnInit {
  user: any[];
  repos: any[];
  userName: string;
  clientSecret: string;
  gitsearch: Gitsearch;

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

    this.githubService.gitUser().subscribe(user => {
      this.user = user;
    });
    this.githubService.gitRepos().subscribe(repos => {
      this.repos = repos;
    });
  }
  ngOnInit() {
    interface ApiResponse {
      name: string;
      created_at: Date;
      login: string;
    }
    this.http.get<ApiResponse>('https://api.github.com/users/' + this.userName + '?access_token='
    + '&client_secret=' + this.clientSecret).subscribe(data => {
    this.gitsearch = new Gitsearch (data.name, data.created_at, data.login);

    });

}
}
