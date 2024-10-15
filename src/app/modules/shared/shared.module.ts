import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorrorTransitionComponent } from './horror-transition/horror-transition.component';

@NgModule({
  declarations: [HorrorTransitionComponent],
  imports: [CommonModule],
  exports: [HorrorTransitionComponent]
})
export class SharedModule { }
