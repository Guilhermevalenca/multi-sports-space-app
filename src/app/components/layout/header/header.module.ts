import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Toolbar } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import {InputIcon} from 'primeng/inputicon';
import {IconField} from 'primeng/iconfield';
import {SplitButton} from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import {RouterLink, RouterLinkActive} from '@angular/router';

const primeNgExports = [
  Toolbar,
  AvatarModule,
  ButtonModule,
  InputIcon,
  IconField,
  SplitButton,
  InputTextModule,
  RouterLink,
  RouterLinkActive,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...primeNgExports,
  ],
  exports: [
    ...primeNgExports,
  ]
})
export class HeaderModule { }
