import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Menubar } from 'primeng/menubar';

const primeNgExports = [
  Menubar,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...primeNgExports,
  ],
  exports: [
    ...primeNgExports,
  ],
})
export class NavigationModule {}
