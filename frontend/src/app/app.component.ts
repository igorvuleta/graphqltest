import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

export interface IResponse  {
  posts: any
};


@Component({
  selector: 'app-root',
  template: `<div *ngIf="loading">
  Loading...
</div>
<div *ngIf="error">
  Error :(
</div>
<div *ngIf="posts">
  <div *ngFor="let post of posts">
  <p>{{post.title}}</p>
  <p>{{post.content}}</p>
  </div>
</div>`,
  styleUrls: ['./app.component.css']
})


export class AppComponent  {

  posts: [];
  loading = true;
  error: any;

  constructor(private apollo:Apollo) {

  
    this.apollo
      .watchQuery<IResponse>({
        query: gql `
        {
          posts
          {
            title
            content
          }
        }
        
        `
      })
      .valueChanges.subscribe(result =>{
        this.posts = result.data && result.data.posts;
        this.loading = result.loading;
        this.error = result.errors;
      })
  }
}

