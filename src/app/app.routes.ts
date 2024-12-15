import { Routes } from '@angular/router';
import {EmailVerifiedComponent} from './routes/email-verified/email-verified.component';
import {LoginComponent} from './routes/auth/login/login.component';
import {RegisterComponent} from './routes/auth/register/register.component';
import {AboutComponent} from './routes/about/about.component';
import {HomeComponent} from './routes/home/home.component';
import {NoAuthGuard} from './guards/no-auth.guard';
import {AuthGuard} from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Multi-sports Space',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About Us',
  },
  {
    path: 'auth',
    canActivateChild: [NoAuthGuard],
    children: [
      {
        path: 'login',
        component: LoginComponent,
        title: 'Auth Login',
      },
      {
        path: 'register',
        component: RegisterComponent,
        title: 'Auth Register'
      }
    ],
  },
  {
    path: 'dashboard',
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'email-verified',
        component: EmailVerifiedComponent,
        title: 'Email Verified',
      },
    ]
  }
];
