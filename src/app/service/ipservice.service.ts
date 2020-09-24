import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable()
export class IpService{

    private userIp : string;
    constructor(private http: HttpClient){
        this.setIp();
    }

    setIpComplete: Subject<any> = new Subject();

    setIp(): void{
        this.http.get<any>('https://api.ipify.org?format=json').toPromise().then((result) =>{
            this.userIp = result.ip;
            this.setIpComplete.next();
        });
    }

    getIp(): string{
        return this.userIp;
    }
}