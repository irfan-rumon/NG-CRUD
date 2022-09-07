import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Framework } from '../framework';
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
 

  framework: Framework = {} as Framework;

  constructor( private router:Router, private api: ApiService) { }

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

  
    this.framework.id = this.id;
    this.framework.version = this.version;
    this.framework.name = this.name;

    this.api.addFramework(this.framework).subscribe( (framework) => this.framework = framework);
    this.router.navigate(['/frameworks']);
   
  }

}
