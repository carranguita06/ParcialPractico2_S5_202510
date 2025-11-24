/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed  } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IngredienteListComponent } from './ingrediente-list.component';

describe('IngredienteListComponent', () => {
  let component: IngredienteListComponent;
  let fixture: ComponentFixture<IngredienteListComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ IngredienteListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredienteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
