import { Component, Input, Output, EventEmitter, ViewChildren, QueryList } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector : 'menu-item',
    templateUrl : './menu-item.component.html',
    styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent {
    
    @ViewChildren('menuItem') menuItems : QueryList<MenuItemComponent>;

    @Input() url : string;
    @Input() text : string;
    @Input() removable: boolean = false;

    @Output() clickItem : EventEmitter<any> = new EventEmitter();
    @Output() remove : EventEmitter<any> = new EventEmitter();

    private clicked : boolean = false;

    constructor(private router: Router){}

    route(event, url: string): void{
        if(!url) return;
        this.clicked = true;
        this.clickItem.emit({event: event, url: url});
        this.router.navigate([url]);
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

    onRemoveClick(event){
        this.remove.emit(event);
    }
}