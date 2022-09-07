import { Component, OnInit } from '@angular/core';
import { Framework } from '../framework';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-framework-item',
  templateUrl: './framework-item.component.html',
  styleUrls: ['./framework-item.component.css']
})
export class FrameworkItemComponent implements OnInit {

  frameworkId: Number;
  framework: Framework;

  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id: any =  this.route.snapshot.paramMap.get('id') ;
    this.frameworkId = parseInt (id);
    this.api.getFramework(this.frameworkId).subscribe((framework) => this.framework = framework );
  }

}
