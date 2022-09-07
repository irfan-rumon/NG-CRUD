import { Component, OnInit, Input } from '@angular/core';
import { Framework } from '../framework';
import { ApiService } from '../api.service';
import {Router} from "@angular/router"


@Component({
  selector: 'app-framework',
  templateUrl: './framework.component.html',
  styleUrls: ['./framework.component.css']
})
export class FrameworkComponent implements OnInit {
  frameworks : Framework[];
  currentEditableFr : Framework;
  currentShowingFr : Framework;
  isEdit: boolean = false;
  isHome:boolean = false;
  isList: boolean = true;
  isAdd: boolean = false;
  isShow: boolean = false;
  isSearchOnAction: boolean = false;
  isFrameworkFound: boolean = false;
  

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.api.getFrameworks().subscribe((frameworks) => (this.frameworks = frameworks));
    console.log(this.frameworks);
  }

  setAllFalse(){
    this.isEdit = false;
    this.isAdd = false;
    this.isHome = false;
    this.isList = false;
    this.isSearchOnAction = false;
    this.isFrameworkFound = false;
  }

  searchFramework(fr: string){
     
     this.setAllFalse();
     this.isSearchOnAction = true;
     this.isFrameworkFound = false;
   
     for(let i = 0; i < this.frameworks.length; i++){
        
          const myVar = 'na' + 'me';
          type ObjectKey = keyof typeof this.frameworks[0];
          let currentFrName = this.frameworks[i][myVar as ObjectKey];
          if( (currentFrName ==  fr.toUpperCase()) || (currentFrName ==  fr.toLowerCase()) || (currentFrName == fr)){
              this.isFrameworkFound = true;
              this.currentShowingFr = this.frameworks[i];
              break;
          }


     }
  }

  makeIsAddTrue(){
    this.setAllFalse();
    this.isAdd = true;
  }

 onView(fr: Framework){
     this.router.navigate(['/frameworks', fr.id]);
 }

  setEdit(framework: Framework){
    this.setAllFalse();
    this.isEdit = true;
    this.currentEditableFr = framework;
  }

  makeIsHomeTrue(){
    this.setAllFalse();
    this.isHome = true;
  }

  makeIsListTrue(){
    this.setAllFalse();
    this.isList = true;
  }

  addFramework(framework: Framework) {
    
    console.log('add framework!!');
    this.api.addFramework(framework).subscribe((framework) => this.frameworks.push(framework));
    this.makeIsListTrue();
    this.router.navigate(['/frameworks']);
  }

  deleteFramework(framework: Framework) {
    this.api
      .deleteFramework(framework)
      .subscribe(
        () => (this.frameworks = this.frameworks.filter((t) => t.id !== framework.id))
      );
      this.makeIsListTrue();
      this.router.navigate(['/frameworks']);
     
  }

  editFramework(framework: Framework) {
    this.api.editFramework(framework).subscribe(
      (res) => console.log(res)
    );
    this.makeIsListTrue();
    this.router.navigate(['/frameworks']);
   
  }

}
