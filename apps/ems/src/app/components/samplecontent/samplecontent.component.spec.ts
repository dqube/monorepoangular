import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplecontentComponent } from './samplecontent.component';

describe('SamplecontentComponent', () => {
  let component: SamplecontentComponent;
  let fixture: ComponentFixture<SamplecontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamplecontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplecontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
