import { Component, OnInit, Inject } from "@angular/core";
import { IpService } from 'src/app/service/ipservice.service';
import { RequestApiService } from 'src/app/service/request-api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export class FriendForm{
    user_id : string;
    friend_user_name : string;
    request_time : Date;
}

@Component({
    selector: 'add-friend',
    templateUrl: './add-friend.component.html'
})
export class AddFriendComponent{
    
    constructor(public dialogRef: MatDialogRef<AddFriendComponent>, @Inject(MAT_DIALOG_DATA) public data: FriendForm, private ipService: IpService){
        data.user_id = ipService.getIp();
    }
    
}