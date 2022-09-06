import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Framework } from '../framework';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  serachInputVal:string;
  @Output() dut: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log('Hello', this.serachInputVal);
    this.dut.emit(this.serachInputVal);
  }

}
