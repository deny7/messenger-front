import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessengerComponent } from './messenger/messenger.component';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { SideModule } from './side/side.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { IpService } from './service/ipservice.service';
import { HttpClientModule } from '@angular/common/http';
import { RequestApiService } from './service/request-api.service';
import { MessageService } from './service/message.service';
import { PopupModule } from './popup/popup.module';
import { FriendComponent } from './friend/friend.component';

@NgModule({
  declarations: [
    AppComponent,
    MessengerComponent,
    FriendComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SideModule,
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    PopupModule
  ],
  providers: [
    IpService,
    RequestApiService,
    MessageService,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
