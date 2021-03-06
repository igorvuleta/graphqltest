import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

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

  DeletePost(id:number) {
    const DeletePostMutation = gql`
      mutation DeletePost($id: Int!) {
        deletePost(id: $id)
      }
    `;
    this.apollo
      .mutate({
        mutation: DeletePostMutation,
        variables: {
          id:id
        }
      })
      .subscribe(
        ({ data }) => {
          console.log("deleted", data);
        },
        error => {
          console.log("there was a error", error);
        }
      );
  }
}
