import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';




@Component({
  selector: 'app-root',
  template: `<div *ngIf="loading">
  Loading...
</div>
<div *ngIf="error">
  Error :(
</div>
<div >
  <div *ngFor="let post of posts">
  <p>{{post.title}}</p>
  <p>{{post.content}}</p>
  <p>{{post.author.firstname}}</p>
  </div>
</div>
`,
  styleUrls: ['./app.component.css']
})


export class AppComponent  {

  posts: any[];
  loading = true;
  error: any;

  constructor(private apollo:Apollo) {

  
    this.apollo
      .watchQuery<any>({
        query: gql `
        {
          posts {
            author {
              firstName
              lastName
            }
            
            title
            content
            
          }
        }
        
        `
      })
      .valueChanges.subscribe(result =>{
        this.posts = result.data.posts;
        this.loading = result.loading;
        this.error = result.errors;
        console.log(this.posts);
        
      })
  }
}

