import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Framework } from '../framework';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-framework',
  templateUrl: './edit-framework.component.html',
  styleUrls: ['./edit-framework.component.css']
})
export class EditFrameworkComponent implements OnInit {

  name: string;
  version: string; 
  @Output() onEdit: EventEmitter<Framework> = new EventEmitter();
  @Input() framework: Framework;

 
  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    
    const newFramework: Framework = {
      id: this.framework.id,
      name: this.name,
      version: this.version,
    };
    //console.log(newFramework)
    this.onEdit.emit(newFramework);
    this.router.navigate(['/frameworks']);
  }

}

