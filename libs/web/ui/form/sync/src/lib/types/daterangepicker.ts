import { Component } from '@angular/core';
import { FieldType } from '@fse-form/core';

@Component({
  selector: 'fse-form-syncfusion-daterangepicker',
  template: `  
  <ejs-daterangepicker
  [min]="to.min"
  [max]="to.max"
  [formlyAttributes]="field"
  [formControl]="formControl">
   </ejs-daterangepicker>     
  `,
})
export class FormlyFieldDateRange extends FieldType {}