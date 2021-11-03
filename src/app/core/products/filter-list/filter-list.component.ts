import { Component, Input, OnInit } from '@angular/core';
import { filter } from 'src/app/models/filter.model';

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.sass']
})
export class FilterListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

@Input() filterArray!:filter[]
}
