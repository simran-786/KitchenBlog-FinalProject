import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  uri = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  getIssues() {
    return this.http.get(`${this.uri}/posts`);
  }

getIssueById(id: any) {
  return this.http.get(`${this.uri}/posts/${id}`);
}
addIssue(Recipe: any, content: any) {
  const issue = {
    Recipe: Recipe,
    content: content,

  };
  return this.http.post(`${this.uri}/posts/add`, issue);
}
updateIssue(id: any, Recipe: any, content: any) {
  const issue = {
    Recipe: Recipe,
    content: content,

  };
  return this.http.post(`${this.uri}/posts/update/${id}`, issue);
}
deleteIssue(id: any) {
  return this.http.get(`${this.uri}/posts/delete/${id}`);
}
}
