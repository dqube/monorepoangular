import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  PageService,
  SortService,
  FilterService,
  GroupService,
  ToolbarService,
  ColumnChooserService,
  ReorderService,
  PdfExportService,
  CommandColumnService,
  SearchService,
  ResizeService,
  GridModule,
  EditService,
  ExcelExportService,
  ColumnMenuService,
  ContextMenuService
} from '@syncfusion/ej2-angular-grids';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { FormlyModule } from '@fse-form/core';
import { FormlySyncfusionModule } from '@fse-form/web/sync'
import { ReactiveFormsModule } from '@angular/forms';
import { SyncGridComponent } from './components/syncgrid/syncgrid.component';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { DatePickerModule} from '@syncfusion/ej2-angular-calendars'
import { FormlySelectModule} from '@fse-form/core/select'


@NgModule({
  imports: [
    CommonModule,
    GridModule,
    SidebarModule,
    CheckBoxModule,
    DatePickerModule,
    FormlySelectModule,
    DropDownListModule,
    TextBoxModule,
    ReactiveFormsModule,
    FormlyModule.forChild(),
    FormlySyncfusionModule,
  ],
  exports: [SyncGridComponent],
  declarations: [SyncGridComponent],
  providers: [
    PageService,
    SortService,
    FilterService,
    GroupService,
    EditService,
    ExcelExportService,
    ColumnChooserService,
    ColumnMenuService,
    SearchService,
    PdfExportService,
    ReorderService,
    CommandColumnService,
    ToolbarService,
    ResizeService,
    PageService,
    ContextMenuService
  ]
})
export class WebUiGridGridModule {}
