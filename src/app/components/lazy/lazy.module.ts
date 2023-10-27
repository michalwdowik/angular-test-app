import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';
import { LazyRoutingModule } from './lazy-routing.module';
import { LazyComponent } from './lazy.component';

console.warn('lazy module loaded');
@NgModule({
  declarations: [LazyComponent],
  imports: [CommonModule, MaterialModule, LazyRoutingModule],
})
export class LazyModule {}
