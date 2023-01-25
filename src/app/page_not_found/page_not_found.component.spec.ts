/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Page_not_foundComponent } from './page_not_found.component';

describe('Page_not_foundComponent', () => {
  let component: Page_not_foundComponent;
  let fixture: ComponentFixture<Page_not_foundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page_not_foundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page_not_foundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
