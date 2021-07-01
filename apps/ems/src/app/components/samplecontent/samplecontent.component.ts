import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@fse-form/core';
import { authorization } from '../../models/authorization';

@Component({
  selector: 'fse-samplecontent',
  templateUrl: './samplecontent.component.html',
  styleUrls: ['./samplecontent.component.scss']
})
export class SamplecontentComponent implements OnInit {
  @Input() items;
  @Input() fullScreen;
  @Input() close;
  @Input() title;
  @Input() model: authorization;
  @Input() fields: FormlyFieldConfig[];
  form = new FormGroup({});
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.model);
  }
}
