import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessengerComponent } from './messenger/messenger.component';
import { MainComponent } from './main/main.component';
import { FriendComponent } from './friend/friend.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'messenger',
    component: MessengerComponent
  },
  {
    path: 'friend',
    component: FriendComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
