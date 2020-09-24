import { Component, OnInit } from "@angular/core";
import * as moment from 'moment';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { IpService } from '../service/ipservice.service';
import { RequestApiService } from '../service/request-api.service';
import { MessageService, Message } from '../service/message.service';
import { AddTopicComponent } from '../popup/add-topic/add-topic.component';

class Topic{
    topic_id: string;
    topic_name: string;
    create_user_id: string;
    create_time: Date;
}

@Component({
    selector: 'messenger',
    templateUrl: './messenger.component.html',
    styleUrls: ['./messenger.component.css']
})
export class MessengerComponent implements OnInit{
    objectKeys = Object.keys;
    // public messages : Message[] = new Array();
    public topics : Topic[] = new Array();

    public selectedTopic: Topic = new Topic();

    constructor(
        public dialog: MatDialog
        , private ipService: IpService
        , private api: RequestApiService
        , public messageService: MessageService
    ){}

    ngOnInit(){
       this.searchTopics();
    }

    searchTopics(){
        this.api.get<any>('/topics/'+this.ipService.getIp())
        .subscribe(data =>{
            this.topics = data;
        });
    }

    showTopic(): void{
        const dialogRef = this.dialog.open(AddTopicComponent, {
            data: {
                topic_name: null
            }
        });
        
        dialogRef.afterClosed().subscribe(result => {
            this.createTopic(result);
        });
    }

    showFriend(): void{
        
    }

    createTopic(data: Topic){
        this.api.post<any>('/topic', {
            topic_name: data.topic_name
            , create_user_id: this.ipService.getIp()
        }).subscribe(data =>{
            this.topics = data;
        });
    }

    deleteTopic(data: Topic){
        this.api.post<any>('/topic/delete', data)
        .subscribe(data =>{
            this.topics = data;
        })
    }

    dayData(data: Array<any>){
        const rtn = {};
        for(let item of data){
            const currentymd = moment(item.submit_time).format('YYYY/MM/DD');
            if(!rtn[currentymd])
                rtn[currentymd] = [];
            
            rtn[moment(item.submit_time).format('YYYY/MM/DD')].push(item);
        }
        return rtn;
    }

    selectTopic(topic){
        this.selectedTopic = topic;
        this.api.post<any>('/get/message/topic_id', topic).subscribe((data : Array<any>) =>{
            data.forEach((item) => {
                item.type = item.user_id === this.ipService.getIp() ? 'MYSELF' : 'OPPONENT'
                item.time = item.submit_time;
            });
            this.messageService.messages = this.dayData(data);
        });

    }

    submit(text){
        this.messageService.sendMessage({
            type: 'MYSELF'
            , user_id: this.ipService.getIp()
            , message: text.target.value
            , time: new Date()
            , topic_id: this.selectedTopic.topic_id
        });
        text.target.value = '';
    }
}