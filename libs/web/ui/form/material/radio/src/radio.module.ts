import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@fse-form/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlySelectModule } from '@fse-form/core/select';

import { FormlyMatFormFieldModule } from '@fse-form/web/material/form-field';
import { MatRadioModule } from '@angular/material/radio';

import { FormlyFieldRadio } from './radio.type';

@NgModule({
  declarations: [FormlyFieldRadio],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatRadioModule,

    FormlyMatFormFieldModule,
    FormlySelectModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'radio',
          component: FormlyFieldRadio,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class FormlyMatRadioModule {}
