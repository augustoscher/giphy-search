import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaCommomModuleComponent } from './diretiva-commom-module.component';

describe('DiretivaCommomModuleComponent', () => {
  let component: DiretivaCommomModuleComponent;
  let fixture: ComponentFixture<DiretivaCommomModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiretivaCommomModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivaCommomModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
