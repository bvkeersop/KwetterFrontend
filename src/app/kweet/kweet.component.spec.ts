/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KweetComponent } from './kweet.component';

describe('KweetComponent', () => {
  let component: KweetComponent;
  let fixture: ComponentFixture<KweetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KweetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
