import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IpService } from './ipservice.service';


@Injectable()
export class RequestApiService {

    private signed;

    constructor(
        private http: HttpClient,
        private ipService: IpService
    ){}

    get<T>(url: string){
        return this.http.get<T>('/api' + url);
    }

    post<T>(url: string, params: any){
        return this.http.post<T>('/api' + url, params);
    }

    delete<T>(url: string, options?: any){
        return this.http.delete<any>('/api' + url, options);
    }

    isSigned(): boolean {
        if(!this.signed){
            new Promise((resolve) =>{
                this.post<any>('/user/signed', {user_id : this.ipService.getIp()}).subscribe(signed =>{
                    this.signed = signed;
                    resolve();
                });
            }).then(() =>{
                return this.signed;
            });
        }else{
            return this.signed;
        }
     
    }
}