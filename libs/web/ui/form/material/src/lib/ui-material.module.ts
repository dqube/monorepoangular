import { NgModule } from '@angular/core';

import { FormlyMatFormFieldModule } from '@fse-form/web/material/form-field';
import { FormlyMatInputModule } from '@fse-form/web/material/input';
import { FormlyMatTextAreaModule } from '@fse-form/web/material/textarea';
import { FormlyMatRadioModule } from '@fse-form/web/material/radio';
import { FormlyMatCheckboxModule } from '@fse-form/web/material/checkbox';
import { FormlyMatMultiCheckboxModule } from '@fse-form/web/material/multicheckbox';
import { FormlyMatSelectModule } from '@fse-form/web/material/select';

@NgModule({
  imports: [
    FormlyMatFormFieldModule,
    FormlyMatInputModule,
    FormlyMatTextAreaModule,
    FormlyMatRadioModule,
    FormlyMatCheckboxModule,
    FormlyMatMultiCheckboxModule,
    FormlyMatSelectModule,
  ],
})
export class FormlyMaterialModule {}
