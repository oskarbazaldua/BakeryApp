import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  public menuItems: MenuItem[] = [];


    ngOnInit() {
      this.menuItems = [
        {
          label: 'Principal',
          icon: 'pi pi-desktop',
          items: [
            {
              label: 'Home',
              icon: 'pi pi-align-left',
              routerLink: '/',
            },
            {
              label: 'Empleados',
              icon: 'pi pi-dollar',
              routerLink: 'staff',
            },
            {
              label: 'Login',
              icon: 'pi-user',
              routerLink: 'login',
            },
          ]
        },
      ];
    }

}
