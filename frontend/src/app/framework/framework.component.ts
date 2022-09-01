import { Component, OnInit, Input } from '@angular/core';
import { Framework } from '../framework';
import { ApiService } from './api.service';
import {Router} from "@angular/router"

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
  @Input() currentModelFramework:Framework;
  currentEditableFr: Framework;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.api.getFrameworks().subscribe((frameworks) => (this.frameworks = frameworks));
    console.log(this.frameworks);
  }

  

  addFramework(framework: Framework) {
    console.log('add framework!!');
    this.api.addFramework(framework).subscribe((framework) => this.frameworks.push(framework));
    this.router.navigate(['/list']);
  }

  deleteFramework(framework: Framework) {
    this.api
      .deleteFramework(framework)
      .subscribe(
        () => (this.frameworks = this.frameworks.filter((t) => t.id !== framework.id))
      );
      this.isEdit = false; this.isList=true; this.isAdd=false; this.isHome=false;
      this.router.navigate(['/list']);
  }

  editFramework(framework: Framework) {
    console.log("edite entered------>!!");
    this.api.editFramework(framework).subscribe(
      (res) => console.log(res)
    );
    this.isEdit = false;
    console.log(this.frameworks);
    this.router.navigate(['/list']);
  }

}
