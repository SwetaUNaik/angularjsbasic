import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponentComponent } from './mycomponents/about-component/about-component.component';
import { FirstprojectComponent } from './mycomponents/firstproject/firstproject.component';


const routes: Routes = [
{ path: '', component:FirstprojectComponent },
{path: 'about', component:AboutComponentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
