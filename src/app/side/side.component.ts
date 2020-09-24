import { Component, ViewChildren, QueryList, Query } from "@angular/core";
import { Router } from '@angular/router';
import { MenuItemComponent } from './menu-item/menu-item.component';

@Component({
    selector : 'app-sidemenu',
    templateUrl : './side.component.html',
    styleUrls: ['./side.component.css']
})
export class SideMenuComponent {

    @ViewChildren('menuItem') menuItems : QueryList<MenuItemComponent>;

    constructor(private router: Router){}

    route(url: string): void{
        // console.log(url);
        this.router.navigate([url]);
    }

    onClick(event){
        this.menuItems.forEach(component =>{
            component.url !== event.url ? component.unClick() : component.doClick();
        });
    }
}