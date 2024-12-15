import {Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AxiosService } from './services/axios.service';
import {NavigationComponent} from './components/layout/navigation/navigation.component';
import {HeaderComponent} from './components/layout/header/header.component';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import {UserService} from './services/user.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavigationComponent,
    HeaderComponent,
    ScrollPanelModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(
    private readonly axiosService: AxiosService,
    private readonly userService: UserService,
  ) {}

  async ngOnInit() {
    await this.axiosService.xsrfToken();
    await this.userService.updateLocalUserData();
  }
}
