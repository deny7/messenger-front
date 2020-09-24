import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { AddTopicComponent } from './add-topic/add-topic.component';
import { AddFriendComponent } from './add-friend/add-friend..component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
      AddTopicComponent
      , AddFriendComponent
  ],
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [
    AddTopicComponent,
      AddFriendComponent
  ],
  providers: []
})
export class PopupModule { }
