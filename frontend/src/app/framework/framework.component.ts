import { Component, OnInit, Input } from '@angular/core';
import { Framework } from '../framework';

@Component({
  selector: 'app-framework',
  templateUrl: './framework.component.html',
  styleUrls: ['./framework.component.css']
})
export class FrameworkComponent implements OnInit {
  frameworks : Framework[];
  @Input() isEdit: boolean = false;
  @Input() isHome:boolean = false;
  @Input() isList: boolean = false;
  @Input() isAdd: boolean = false;
  currentEditableFr: Framework;

  constructor() { }

  ngOnInit(): void {
  }

}
