import { Component } from '@angular/core';
import { FieldType } from '@fse-form/core';

@Component({
  selector: 'fse-form-syncfusion-textarea',
  template: `
  <ejs-textbox
  [multiline]='true'
  [formlyAttributes]="field"
  [placeholder]="to.placeholder"
  [formControl]="formControl"></ejs-textbox>
  `,
})
export class FormlyFieldTextArea extends FieldType {}
