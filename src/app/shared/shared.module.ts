import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatDatePipe } from '../pipes/format-date.pipe';

@NgModule({
  declarations: [FormatDatePipe],
  exports: [FormatDatePipe],
  imports: [CommonModule],
})
export class SharedModule {}
