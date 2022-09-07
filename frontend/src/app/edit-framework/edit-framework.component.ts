import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Framework } from '../framework';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-framework',
  templateUrl: './edit-framework.component.html',
  styleUrls: ['./edit-framework.component.css']
})
export class EditFrameworkComponent implements OnInit {

  frameworkId: Number;
  framework: Framework;

  name: string;
  version: string; 
  @Output() onEdit: EventEmitter<Framework> = new EventEmitter();
 
 
  constructor( private router:Router, private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id: any =  this.route.snapshot.paramMap.get('id') ;
    this.frameworkId = parseInt (id);
    this.api.getFramework(this.frameworkId).subscribe((framework) => this.framework = framework );
  }

  onSubmit() {
    
    const newFramework: Framework = {
      id: this.framework.id,
      name: this.name,
      version: this.version,
    };
    //console.log(newFramework)
    //this.onEdit.emit(newFramework);
    this.api.editFramework(this.frameworkId, newFramework).subscribe( (framework) => this.framework = framework)
    this.router.navigate(['/frameworks']);
  }

}

