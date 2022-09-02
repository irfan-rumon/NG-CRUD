import { Component, OnInit, Input } from '@angular/core';
import { Framework } from '../framework';

@Component({
  selector: 'app-show-framework',
  templateUrl: './show-framework.component.html',
  styleUrls: ['./show-framework.component.css']
})
export class ShowFrameworkComponent implements OnInit {

  @Input() framework: Framework;

  constructor() { }

  ngOnInit(): void {
  }

}
