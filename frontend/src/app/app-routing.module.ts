import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FrameworkComponent } from './framework/framework.component';
import { HomeComponent } from './home/home.component';
import { AddFrameworkComponent } from './add-framework/add-framework.component';
import { FrameworkItemComponent } from './framework-item/framework-item.component';
import { EditFrameworkComponent } from './edit-framework/edit-framework.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'frameworks', component: FrameworkComponent },
  { path: 'frameworks/:id', component: FrameworkItemComponent },
  { path: 'frameworks/:id/edit', component: EditFrameworkComponent },
  { path: 'framework/add', component: AddFrameworkComponent,  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
