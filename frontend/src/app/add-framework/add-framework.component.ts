import { Component, OnInit, Output,  EventEmitter } from '@angular/core';

import { Framework } from '../framework';
import { ApiService } from '../framework/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-framework',
  templateUrl: './add-framework.component.html',
  styleUrls: ['./add-framework.component.css']
})
export class AddFrameworkComponent implements OnInit {
  id: number ;
  name: string;
  version: string; 
  @Output() onAdd: EventEmitter<Framework> = new EventEmitter();

  framework = {} as Framework;

  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    

    if (!this.name) {
      alert('Please add a name of the framework!');
      return;
    }

    if (!this.version) {
      alert('Please add a version of the framework!');
      return;
    }

   // console.log(this.id, this.name, this.version);
    this.framework.id = this.id;
    this.framework.version = this.version;
    this.framework.name = this.name;
    //console.log("ai porjonto asce");
    console.log(this.framework);
    this.onAdd.emit(this.framework);
    this.router.navigate(['/frameworks']);
   
  }

}
