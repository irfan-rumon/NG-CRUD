import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FrameworkComponent } from './framework/framework.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AddFrameworkComponent } from './add-framework/add-framework.component';
import { EditFrameworkComponent } from './edit-framework/edit-framework.component';
import { ShowFrameworkComponent } from './show-framework/show-framework.component';
import { SearchComponent } from './search/search.component';
import { FrameworkItemComponent } from './framework-item/framework-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    FrameworkComponent,
    HomeComponent,
    AddFrameworkComponent,
    EditFrameworkComponent,
    ShowFrameworkComponent,
    SearchComponent,
    FrameworkItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
