import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VrCompoComponent } from './vr-compo.component';

describe('VrCompoComponent', () => {
  let component: VrCompoComponent;
  let fixture: ComponentFixture<VrCompoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VrCompoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VrCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
