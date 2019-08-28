import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitsDetailComponent } from './gits-detail.component';

describe('GitsDetailComponent', () => {
  let component: GitsDetailComponent;
  let fixture: ComponentFixture<GitsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
