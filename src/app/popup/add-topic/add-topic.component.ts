import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface TopicData {
    topic_name: string;
}

@Component({
    selector: 'app-add-topic',
    templateUrl: './add-topic.component.html',
    styleUrls: ['./add-topic.component.css']
})
export class AddTopicComponent {
    
    constructor(public dialogRef: MatDialogRef<AddTopicComponent>, @Inject(MAT_DIALOG_DATA) public data: TopicData){

    }
}