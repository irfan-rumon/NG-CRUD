import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FrameworkComponent } from './framework/framework.component';
import { HomeComponent } from './home/home.component';
import { AddFrameworkComponent } from './add-framework/add-framework.component';

const routes: Routes = [
  { path: '', component: AppComponent,

  children: [
    { path: '', component: HomeComponent },
    {path: 'frameworks', component: FrameworkComponent },
    {path: 'add', component: AddFrameworkComponent },

  ]


  } 
  
 
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
