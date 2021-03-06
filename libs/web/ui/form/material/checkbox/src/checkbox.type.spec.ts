import { FormlyFieldConfig } from '@fse-form/core';
import { createFieldComponent } from '@fse-form/core/testing';
import { FormlyMatCheckboxModule } from '@fse-form/web/material/checkbox';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

const renderComponent = (field: FormlyFieldConfig) => {
  return createFieldComponent(field, {
    imports: [NoopAnimationsModule, FormlyMatCheckboxModule],
  });
};

describe('ui-material: Checkbox Type', () => {
  it('should render checkbox type', () => {
    const { query } = renderComponent({
      key: 'name',
      type: 'checkbox',
    });

    expect(query('formly-wrapper-mat-form-field')).not.toBeNull();

    const { attributes } = query('mat-checkbox');
    expect(attributes).toMatchObject({ id: 'formly_1_checkbox_name_0' });
    expect(query('input[type="checkbox"]').properties).toMatchObject({
      indeterminate: true,
    });
  });

  it('should render boolean type', () => {
    const { query } = renderComponent({
      key: 'name',
      type: 'boolean',
    });

    expect(query('formly-wrapper-mat-form-field')).not.toBeNull();

    const { attributes } = query('mat-checkbox');
    expect(attributes).toMatchObject({ id: 'formly_1_boolean_name_0' });
    expect(query('input[type="checkbox"]').properties).toMatchObject({
      indeterminate: true,
    });
  });

  it('should bind control value on change', () => {
    const { query, field, detectChanges } = renderComponent({
      key: 'name',
      type: 'checkbox',
    });

    const inputDebugEl = query('input[type="checkbox"]');
    const evt = { stopPropagation: () => {} };

    inputDebugEl.triggerEventHandler('click', evt);
    detectChanges();
    expect(field.formControl.value).toBeTrue();

    inputDebugEl.triggerEventHandler('click', evt);
    detectChanges();
    expect(field.formControl.value).toBeFalse();
  });
});
