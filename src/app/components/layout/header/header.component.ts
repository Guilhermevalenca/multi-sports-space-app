import {Component, OnInit} from '@angular/core';
import {HeaderModule} from './header.module';
import {MenuItem} from 'primeng/api';
import {UserService} from '../../../services/user.service';
import {User} from '../../../classes/user';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    HeaderModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;
  user: User;

  constructor(private readonly userService: UserService) {
    this.user = userService.user;
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Profile',
        icon: 'pi pi-user'
      },
      {
        label: 'Logout',
        icon: 'pi pi-sign-out'
      }
    ];
  }
}
