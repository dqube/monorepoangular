import { Component, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'fse-dataview',
  templateUrl: './dataview.component.html',
  styleUrls: ['./dataview.component.scss']
})
export class DataviewComponent implements OnInit {
  headerTemplate: TemplateRef<any>;    
  emptyMessageTemplate: TemplateRef<any>;
    footerTemplate: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
