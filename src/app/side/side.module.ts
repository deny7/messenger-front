import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './side.component';
import { MenuItemComponent } from './menu-item/menu-item.component';

@NgModule({
  declarations: [
    SideMenuComponent
    ,MenuItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule
  ],
  exports: [
    SideMenuComponent
    ,MenuItemComponent
  ],
  providers: []
})
export class SideModule { }
