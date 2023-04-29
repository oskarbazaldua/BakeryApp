import { PrimeNgModule } from './../prime-ng/prime-ng.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { HomeComponent } from './pages/home/home.component';
import { StaffComponent } from './pages/staff/staff.component';
import { LoginComponent } from './pages/login/login.component';
import { ViewsRoutingModule } from './views-routing.module';


@NgModule({
  declarations: [
    HomeComponent,
    StaffComponent,
    LoginComponent
  ],
  imports: [

    CommonModule,
    PrimeNgModule,
    ViewsRoutingModule,
  ]
})
export class ViewsModule { }
