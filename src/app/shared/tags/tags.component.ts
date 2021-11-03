import { Component, OnInit } from '@angular/core';
import { Tags } from 'src/app/models/tags.model';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.sass']
})
export class TagsComponent implements OnInit {
tags:Tags[];
  constructor() {
    this.tags=[
      {id:1,name:'tag1'},
      {id:1,name:'tag2'},
      {id:1,name:'tag3'},
      {id:1,name:'tag4'},
      {id:1,name:'tag5'},
      {id:1,name:'tag6'},
      {id:1,name:'tag7'},
      {id:1,name:'tag8'},
      {id:1,name:'tag9'},
      {id:1,name:'tag10'},
    ]
   }

  ngOnInit(): void {
  }

}
