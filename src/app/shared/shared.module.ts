import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatNativeDateModule } from '@angular/material/core';
import { MATERIAL } from './material';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [ConfirmationComponent, NavbarComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ...MATERIAL],
  exports: [
    ConfirmationComponent,
    NavbarComponent,
    FormsModule,
    ReactiveFormsModule,
    ...MATERIAL,
    MatNativeDateModule
  ],
  providers: [],
})
export class SharedModule {}
