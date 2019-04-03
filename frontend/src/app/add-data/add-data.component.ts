import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {

  title: string='';
  content: string='';


  constructor() { }

  ngOnInit() {
  }

  createPost() {
    
  }

}
