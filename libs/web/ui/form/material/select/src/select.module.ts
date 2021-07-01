import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@fse-form/core';
import { FormlySelectModule } from '@fse-form/core/select';

import { FormlyMatFormFieldModule } from '@fse-form/web/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { FormlyFieldSelect } from './select.type';
import { MatPseudoCheckboxModule } from '@angular/material/core';

@NgModule({
  declarations: [FormlyFieldSelect],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatPseudoCheckboxModule,

    FormlyMatFormFieldModule,
    FormlySelectModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'select',
          component: FormlyFieldSelect,
          wrappers: ['form-field'],
        },
        { name: 'enum', extends: 'select' },
      ],
    }),
  ],
})
export class FormlyMatSelectModule {}
