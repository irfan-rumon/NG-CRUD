import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { FrameworkComponent } from './framework/framework.component';
import { FooterComponent } from './footer/footer.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
}
