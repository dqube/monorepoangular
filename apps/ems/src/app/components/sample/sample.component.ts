import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@fse-form/core';
import { LookupService } from '@fse/lookup';
import { DrawerService, IDrawerOpenResult, ISyncDialogOpenResult, ISyncDrawerOpenResult, SyncDialogService, SyncDrawerService } from '@fse/web/drawer';
import { GridColumns, GridOptions } from '@fse/web/grid';
import { authorization, authorizationFormModel } from '../../models/authorization';
import { data, products } from '../../models/product';
import { SamplecontentComponent } from '../samplecontent/samplecontent.component';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})


export class SampleComponent implements OnInit {
  public openSidebar: boolean = false;
  public listView: boolean = false;
  public col: string = '3';


  title = 'web-app';
  results: IDrawerOpenResult;
  syncresults: ISyncDrawerOpenResult;
  syncdialogresults: ISyncDialogOpenResult;
  constructor(private lookup: LookupService, private drawer: DrawerService, private syncdrawer: SyncDrawerService, private syncdialog: SyncDialogService) {
    this.fields = lookup.bindLookup(authorizationFormModel);
    this.filterModel=lookup.bindLookup(authorizationFormModel);
    this.bindgrid();
  }
  ngOnInit() {
  }
  form = new FormGroup({});
  model: authorization = { name: 'Test Name', authType: '1', autocomplete: "1" };
  products: any[] = products;
  gridOptions: GridOptions;
  columns: GridColumns[];
  fields: FormlyFieldConfig[];
filterModel:FormlyFieldConfig[];

sidebarToggle() {
  this.openSidebar = !this.openSidebar;
  this.col = '3';
}

toggleListView(val) {
  this.listView = val;
}
gridColumn(val) {
  this.col = val;
}
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
    this.syncresults = this.syncdrawer.open({
      drawerContentComponent: SamplecontentComponent,
      width: '50%',
      type:'Over',
      isCover: true,
      backdropCloseable: false,
      escKeyCloseable: true,
      position: 'right',
      target: '.page-body-wrapper',
      data: {
        title: 'hello from data',
        fields: this.fields,
        model: this.model

      },
      //beforeHidden: () => this.beforeHidden(),
      onClose: () => {
        this.syncresults.drawerInstance.hide();
      }
    });

  }
  onToolbarClicked(args: any) {
    console.log('-----------');
    console.log(args);
  }
  opendrawer() {
    this.results = this.drawer.open({
      drawerContentComponent: SamplecontentComponent,
      width: '500px',
      zIndex: 1000,
      isCover: true,
      type:'over',
      fullScreen: true,
      backdropCloseable: true,
      escKeyCloseable: true,
      position: 'right',
      //beforeHidden: () => this.beforeHidden(),
      onClose: () => {
        this.results.drawerInstance.hide();
      }
    });
    console.log(this.results.drawerContentInstance);
  }
  opensyncdrawer() {
    this.syncresults = this.syncdrawer.open({
      drawerContentComponent: SamplecontentComponent,
      width: '50%',
      type:'Over',
      isCover: true,
      backdropCloseable: false,
      escKeyCloseable: true,
      position: 'right',
      target: '.page-body',
      data: {
        title: 'hello from data',
        fields: this.fields,
        model: this.model

      },
      //beforeHidden: () => this.beforeHidden(),
      onClose: () => {
        this.syncresults.drawerInstance.hide();
      }
    });
    console.log(this.syncresults.drawerContentInstance);
  }
  opensyncdialog() {
    this.syncdialogresults = this.syncdialog.open({
      drawerContentComponent: SamplecontentComponent,
      width: '50%',
      type:'Over',
      isCover: true,
      backdropCloseable: false,
      escKeyCloseable: true,
      position: 'right',
      target: '.page-body',
      data: {
        title: 'hello from data',
        fields: this.fields,
        model: this.model

      },
      //beforeHidden: () => this.beforeHidden(),
      onClose: () => {
        this.syncresults.drawerInstance.hide();
      }
    });
    console.log(this.syncdialogresults.drawerContentInstance);
  }

  bindgrid(){
    
    this.columns = [
      { field: 'ProductID', width: 90, headerText: 'ProductID', type: 'number', visible: true,  allowSorting: false, columnOrder: 1 },
      { field: 'ProductName', width: 120, headerText: 'ProductName', type: 'string', visible: true, allowSearching:true, allowSorting: true, sortDirection: 'Ascending' },
      { field: 'QuantityPerUnit', width: 120, headerText: 'QuantityPerUnit', type: 'string', visible: true, allowSearching:true, allowSorting: true, sortDirection: 'Ascending' },
      { field: 'UnitsInStock', width: 90, headerText: 'UnitsInStock', type: 'string', allowSorting: false }
    ];
    
    this.gridOptions = {
      id: "persongrid",
      columns: this.columns,
      data: this.products,
      allowGrouping: true,
      allowPaging: true,
      allowFiltering: true,
      allowResizing: true,
      allowSorting: true,
      columnChooser: true,
      commands: [{
        title: "edit",
        buttonOption: {
          iconCss: "e-icons e-edit",
          cssClass: "e-flat",
        }
      },
      {
        title: "delete",
        buttonOption: {
          iconCss: "e-icons e-delete",
          cssClass: "e-flat",
        }
      },
      {
        title: "view",
        buttonOption: {
          iconCss: "e-icons e-edit",
          cssClass: "e-flat",
        }
      }
      ],
      toolbars: [
        { text: 'Collapse All', tooltipText: 'collection All', prefixIcon: 'e-collapse', id: 'collapseall' },
        { text: 'Add', tooltipText: 'Add', prefixIcon: "e-create", id: "create" },
        { text: 'Pdf Export', tooltipText: 'Pdf Export', prefixIcon: "e-pdfexport", id: "pdfExport" },
        { text: 'Excel Export', tooltipText: 'Excel Export', prefixIcon: "e-excelexport", id: "excelExport" },
        { text: 'Print', tooltipText: 'Print', prefixIcon: "e-print", id: "print" },
        { text: 'Filter', tooltipText: 'Filter', prefixIcon: "e-print", id: "filter" },
        { text: 'Search', tooltipText: 'Search', id: "search", align: 'Right' },
      ],
      sortOptions: {
        columns: [
          { field: 'ProductName', direction: 'Ascending' },
          { field: 'UnitsInStock', direction: 'Ascending' }
        ]
      },
      searchOption: {
        fields: [
          'ProductName', 'UnitsInStock'
        ],
        operator: 'contains', key: '', ignoreCase: true
      },
      pagingOption: {
        pageSizes: true, pageSize: 10
      },
      // filterOption: {
      //   type: "Menu" ,
      //   columns: [
      //     { field: 'ProductName', matchCase: false, operator: 'startswith', predicate: 'and' },
      //     { field: 'UnitsInStock', matchCase: false, operator: 'startswith', predicate: 'and' }
      //   ]
      // },
      filterFormModel: this.fields,
      filterModel:this.model
    }  
  }
 
 
}
