import {Component, Input, OnInit} from '@angular/core';
import {NavigationModule} from './navigation.module';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    NavigationModule,
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/',
      },
      {
        label: 'About Us',
        icon: 'pi pi-user',
        routerLink: '/about',
      }
    ];
  }
}
