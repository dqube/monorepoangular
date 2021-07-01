import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataviewComponent } from './dataview/dataview.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    DataviewComponent
  ],
  exports: [
    DataviewComponent
  ],
})
export class DataviewModule {}
