import { Component, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { FormlyFieldConfig } from '@fse-form/core';
import { Subscription } from 'rxjs';

// Source copied from https://github.com/cnunciato/ng2-mock-component
export function mockComponent(options: Component): Component {
  const metadata: Component = {
    selector: options.selector,
    template: options.template || '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    inputs: options.inputs,
    outputs: options.outputs || [],
    exportAs: options.exportAs || '',
  };

  class Mock {}

  metadata.outputs.forEach((method) => {
    Mock.prototype[method] = new EventEmitter<any>();
  });

  return Component(metadata)(Mock as any);
}

export function createFieldChangesSpy(field: FormlyFieldConfig): [jest.Mock, Subscription] {
  const spy = jest.fn();

  return [spy, field.options.fieldChanges.subscribe(spy)];
}
