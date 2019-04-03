import { Component, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";

const DeletePostMutation = gql`
  mutation DeletePost($id: Int!) {
    deletePost(id: $id)
  }
`;

@Component({
  selector: "app-delete-button",
  templateUrl: "./delete-button.component.html",
  styleUrls: ["./delete-button.component.css"]
})
export class DeleteButtonComponent {
  constructor(private apollo: Apollo) {}
  
}
