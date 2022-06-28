import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstprojectComponent } from './mycomponents/firstproject/firstproject.component';
import { FirstItemComponent } from './mycomponents/first-item/first-item.component';
import { AddFirstComponent } from './mycomponents/add-first/add-first.component';
import { FormsModule } from '@angular/forms';
import { AboutComponentComponent } from './mycomponents/about-component/about-component.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstprojectComponent,
    FirstItemComponent,
    AddFirstComponent,
    AboutComponentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
