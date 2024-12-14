import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';
import { Password } from 'primeng/password';
import { Message } from 'primeng/message';
import { Button } from 'primeng/button';
import {CardModule} from 'primeng/card';
import { InputIcon } from 'primeng/inputicon';
import { IconField } from 'primeng/iconfield';

const primeNgExports = [
  InputTextModule,
  FloatLabel,
  Password,
  Message,
  Button,
  CardModule,
  InputIcon,
  IconField,
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
export class RegisterModule {}
