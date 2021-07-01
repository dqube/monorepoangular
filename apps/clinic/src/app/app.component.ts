import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@fse-form/core';
import { LookupService } from '@fse/lookup';
import { authorization, authorizationFormModel } from './models/authorization';
import { products } from './models/product';

@Component({
  selector: 'fse-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  title = 'web-app';
  constructor(private lookup: LookupService) {
    this.fields = lookup.bindLookup(authorizationFormModel);
   
  }
  form = new FormGroup({});
  model: authorization = { name: 'Test Name', authType: '1', autocomplete: "1" };
  products: any[] = products;
 
  fields: FormlyFieldConfig[];
  onSubmit() {
    console.log(this.model);
  }
  onSelected(eve: any) {
    console.log(eve.data);
  }
  onDataStateChanged(eve: any) {
    console.log(eve.data);

  }
  onRecordDeleted(eve: any) {
    console.log(eve);

  }
  onCommandClicked(args: any) {

    console.log('-----------');

    console.log(args);

  }
  onToolbarClicked(args: any) {
    console.log('-----------');
    console.log(args);
  }
}
