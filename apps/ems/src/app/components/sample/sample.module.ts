import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { SampleRoutingModule } from './sample-routing.module';
import { SampleComponent } from './sample.component';

import { FormlyModule } from '@fse-form/core';
import { FormlySelectModule } from '@fse-form/core/select';
import { FormlySyncfusionModule} from '@fse-form/web/sync'
import { LookupModule} from '@fse/lookup'

import { ReactiveFormsModule } from '@angular/forms';
import { WebUiDrawerModule} from '@fse/web/drawer'
import { WebUiGridGridModule} from '@fse/web/grid'
import { SamplecontentComponent } from '../samplecontent/samplecontent.component';


@NgModule({
  imports: [
    CommonModule,  
    SharedModule,
    FormlyModule,
    WebUiDrawerModule,
    FormlySelectModule,
    FormlySyncfusionModule,
    WebUiGridGridModule,
    LookupModule,
    ReactiveFormsModule,
    SampleRoutingModule
  ],
  declarations: [SampleComponent, SamplecontentComponent]
})
export class SampleModule { }
