import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '../material/material.module';
import { RoutingModule } from '../routing/routing.module';
import { NavigationSmartComponent } from './smart/navigation-smart.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [ToolbarComponent, NavbarComponent, NavigationSmartComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
  ],
  exports: [NavigationSmartComponent],
})
export class NavigationModule {}
