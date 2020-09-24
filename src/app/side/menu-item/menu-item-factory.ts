import { Input, Output, EventEmitter } from '@angular/core';


export type MenuType  = 'NORMAL' | 'CLOSABLE';


export class MenuItemFactory {
    private type : MenuType;
    private clicked : boolean = false;

    @Input() url : string;
    @Input() text : string;
    @Input() removable: boolean = false;

    @Output() click : EventEmitter<any> = new EventEmitter();
    @Output() remove : EventEmitter<any> = new EventEmitter();

    constructor(type : MenuType){
        this.type = type;

        if(type === 'CLOSABLE'){
            this['onRemoveClick'] = () =>{
                this.remove.emit(event);
            }
        }
    }

    doClick(){
        this.clicked = true;
    }

    unClick(){
        this.clicked = false;
    }

    setStyle(){
        if(this.clicked){
            return {'background-color' : '#3d6c95'};
        }
    }
}