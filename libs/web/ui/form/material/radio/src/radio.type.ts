import { Component, ChangeDetectionStrategy, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { FieldType } from '@fse-form/web/material/form-field';
import { MatRadioGroup } from '@angular/material/radio';
import { ɵobserve as observe } from '@fse-form/core';

@Component({
  selector: 'formly-field-mat-radio',
  template: `
    <mat-radio-group
      [formControl]="formControl"
      [formlyAttributes]="field"
      [required]="to.required"
      [tabindex]="to.tabindex"
    >
      <mat-radio-button
        *ngFor="let option of to.options | formlySelectOptions: field | async; let i = index"
        [id]="id + '_' + i"
        [color]="to.color"
        [labelPosition]="to.labelPosition"
        [disabled]="option.disabled"
        [value]="option.value"
      >
        {{ option.label }}
      </mat-radio-button>
    </mat-radio-group>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldRadio extends FieldType implements AfterViewInit, OnDestroy {
  @ViewChild(MatRadioGroup, { static: true }) radioGroup!: MatRadioGroup;
  defaultOptions = {
    templateOptions: {
      hideFieldUnderline: true,
      floatLabel: 'always' as const,
      options: [],
      tabindex: -1,
    },
  };

  private focusObserver!: ReturnType<typeof observe>;
  ngAfterViewInit() {
    this.focusObserver = observe(this.field, ['focus'], ({ currentValue }) => {
      if (this.to.tabindex === -1 && currentValue && this.radioGroup._radios.length > 0) {
        // https://github.com/fse-form/web/fse-form/web/issues/2498
        setTimeout(() => {
          const radio = this.radioGroup.selected ? this.radioGroup.selected : this.radioGroup._radios.first;
          radio.focus();
        });
      }
    });
  }

  // TODO: find a solution to prevent scroll on focus
  onContainerClick() {}

  ngOnDestroy() {
    this.focusObserver && this.focusObserver.unsubscribe();
  }
}
