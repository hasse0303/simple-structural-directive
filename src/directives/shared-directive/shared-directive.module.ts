import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HideLinkDirective } from './hide-link.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [HideLinkDirective],
  exports: [HideLinkDirective],
})
export class SharedDirectiveModule {}
