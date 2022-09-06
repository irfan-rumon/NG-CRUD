import { Component, OnInit, Input } from '@angular/core';
import { Framework } from '../framework';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() framework:Framework;
  @Input() errMessage: boolean;

  constructor() {
    this.errMessage = false;
   }

  ngOnInit(): void {
  }

}
