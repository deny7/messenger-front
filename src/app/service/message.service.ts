import { Injectable, OnInit } from '@angular/core';
import * as moment from 'moment';

// Declare SockJS and Stomp
declare var SockJS;
declare var Stomp;


export class Message{
    type: 'MYSELF'|'OPPONENT';
    user_id: string;
    message: string;
    topic_id: string;
    time: Date;
}

@Injectable()
export class MessageService implements OnInit{
    constructor() {
        this.initializeWebSocketConnection();
    }

    public stompClient;
    public messages = {};

    
    dayData(data: Array<any>){
        const rtn = {};
        for(let item of data){
            const currentymd = moment(item.submit_time).format('YYYYMMDD');
            if(!rtn[currentymd])
                rtn[currentymd] = [];
            
            rtn[moment(item.submit_time).format('YYYYMMDD')].push(item);
        }
        return rtn;
    }

    initializeWebSocketConnection() {
        const serverUrl = 'http://localhost:8081/socket';
        const ws = new SockJS(serverUrl);
        this.stompClient = Stomp.over(ws);
        const that = this;
        // tslint:disable-next-line:only-arrow-functions
        this.stompClient.connect({}, function(frame) {
            that.stompClient.subscribe('/message', (message) => {
                if (message.body) {
                    const item = JSON.parse(message.body);
                    const currentymd = moment(item.submit_time).format('YYYY/MM/DD');
                    if(!that.messages[currentymd])
                    that.messages[currentymd] = [];
                    that.messages[moment(item.submit_time).format('YYYY/MM/DD')].push(item);
                }
            });
        });
    }

    ngOnInit(){
        
    }
    
    sendMessage(message: Message) {
        this.stompClient.send('/app/send/message' , {}, JSON.stringify(message));
    }
}