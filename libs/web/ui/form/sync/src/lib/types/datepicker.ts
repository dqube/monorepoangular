import { Component } from '@angular/core';
import { FieldType } from '@fse-form/core';

@Component({
  selector: 'fse-form-syncfusion-datepicker',
  template: `  
  <ejs-datepicker
  [min]="to.min"
  [max]="to.max"
  [formlyAttributes]="field"
  [formControl]="formControl">
   </ejs-datepicker>     
  `,
})
export class FormlyFieldDate extends FieldType {}