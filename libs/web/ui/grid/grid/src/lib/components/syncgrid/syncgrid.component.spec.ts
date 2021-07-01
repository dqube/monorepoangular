import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncGridComponent } from './syncgrid.component';

describe('SyncGridComponent', () => {
  let component: SyncGridComponent;
  let fixture: ComponentFixture<SyncGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyncGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyncGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
