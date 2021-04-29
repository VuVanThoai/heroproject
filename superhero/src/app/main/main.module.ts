import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutUsComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
