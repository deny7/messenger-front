import { Component } from "@angular/core";
import { AddFriendComponent, FriendForm } from '../popup/add-friend/add-friend..component';
import { MatDialog } from '@angular/material/dialog';
import { IpService } from '../service/ipservice.service';
import { RequestApiService } from '../service/request-api.service';

@Component({
    selector: 'friend',
    templateUrl: './friend.component.html',
    styleUrls: ['./friend.component.css']
})
export class FriendComponent {

    constructor(public dialog : MatDialog, private ipService : IpService, private api : RequestApiService){

    }

    showFriendRequest(): void{
        const dialogRef = this.dialog.open(AddFriendComponent, {
            data: {
                topic_name: null
            }
        });
        
        dialogRef.afterClosed().subscribe(result => {
            this.requestFriend(result);
        });
    }

    requestFriend(data: FriendForm){
        this.api.post<any>('/friend/request', {
            friend_user_name: data.friend_user_name
            , request_time : data.request_time
        }).subscribe(data =>{
            // this.topics = data;
        });
    }

}