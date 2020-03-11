import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HijoComponent } from './hijo/hijo.component';
import { NietoComponent } from './nieto/nieto.component';

@NgModule({
  declarations: [
    HijoComponent,
    NietoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HijoComponent,
    NietoComponent
  ]
})
export class ContadorModule { }
