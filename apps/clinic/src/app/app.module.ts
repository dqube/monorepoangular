import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { FormlyModule } from '@fse-form/core';
import { FormlySelectModule } from '@fse-form/core/select';
import { FormlySyncfusionModule} from '@fse-form/web/sync'
import { LookupModule} from '@fse/lookup'

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormlyModule,
    FormlySelectModule,
    FormlySyncfusionModule,
    LookupModule,
    ReactiveFormsModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
