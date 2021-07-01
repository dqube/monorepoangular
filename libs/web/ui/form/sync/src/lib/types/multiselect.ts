import { Component, OnInit } from '@angular/core';
import { FieldType } from '@fse-form/core';

@Component({
  selector: 'fse-form-syncfusion-multiselect',
  template: `   
    <ejs-multiselect 
    [dataSource]="to.options | formlySelectOptions:field | async"
    [fields]="fields"
    [formlyAttributes]="field"
    [placeholder]="to.placeholder"
    [formControl]="formControl">
    </ejs-multiselect>
  `,
})
export class FormlyFieldMultiSelect extends FieldType implements OnInit {
  
  public fields: Object = { text: 'label', value: 'value' };
  defaultOptions = {
    templateOptions: { options: [] },
  };

  ngOnInit() {
    if (this.to.label && this.to.value) {
      this.fields = { text : this.to.label , value : this.to.value };
    }
  }
}