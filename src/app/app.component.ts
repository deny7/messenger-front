import { Component, OnInit } from '@angular/core';
import { IpService } from './service/ipservice.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { MessageService } from './service/message.service';
import { RequestApiService } from './service/request-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private ipService : IpService, private message: MessageService, private request: RequestApiService){}

  ngOnInit(){
    this.ipService.setIpComplete.subscribe(() =>{
      if(!this.request.isSigned()){
        // alert('인증되지 않은 아이디 입니다.');
      };
    });
  }

  title = 'm';

}
