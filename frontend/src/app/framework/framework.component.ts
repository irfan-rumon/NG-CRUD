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
  currentShowingFr : Framework;
  isSearchOnAction: boolean = false;
  isFrameworkFound: boolean = false;
  
  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.api.getFrameworks().subscribe((frameworks) => (this.frameworks = frameworks));
    console.log(this.frameworks);
  }

  setAllFalse(){
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

 onView(fr: Framework){
     this.router.navigate(['/frameworks', fr.id]);
 }

 onEdit(framework: Framework){
     this.router.navigate(['/frameworks', framework.id, 'edit']);
  }

  onAdd(){
    this.router.navigate(['/framework', 'add']);
  }  
  
  deleteFramework(framework: Framework) {
    this.api
      .deleteFramework(framework)
      .subscribe(
        () => (this.frameworks = this.frameworks.filter((t) => t.id !== framework.id))
      );
      this.router.navigate(['/frameworks']);  
  }
}
