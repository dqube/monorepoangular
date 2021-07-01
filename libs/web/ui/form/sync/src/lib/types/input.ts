import { Component } from '@angular/core';
import { FieldType } from '@fse-form/core';

@Component({
  selector: 'fse-form-syncfusion-input',
  template: `   
    <ejs-textbox
    [formlyAttributes]="field"
    [placeholder]="to.placeholder"
    [class.e-error]="showError"
    [formControl]="formControl"></ejs-textbox>
  `,
})
export class FormlyFieldInput extends FieldType {}
