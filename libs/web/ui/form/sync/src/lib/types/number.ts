import { Component } from '@angular/core';
import { FieldType } from '@fse-form/core';

@Component({
  selector: 'fse-form-syncfusion-number',
  template: `   
    <ejs-numerictextbox
    [formlyAttributes]="field"
    [placeholder]="to.placeholder"
    [format]="to.displayFormat"
    [min]="to['min']" [max]="to['max']"
    [class.e-error]="showError"
    [formControl]="formControl"></ejs-numerictextbox>
  `,
})
export class FormlyFieldNumber extends FieldType {}
