import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessComponent } from './success.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SuccessComponent,
  },
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), SuccessComponent],
})
export class SuccessModule {}
