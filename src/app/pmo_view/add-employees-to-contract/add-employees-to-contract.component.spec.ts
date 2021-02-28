import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeesToContractComponent } from './add-employees-to-contract.component';

describe('AddEmployeesToContractComponent', () => {
  let component: AddEmployeesToContractComponent;
  let fixture: ComponentFixture<AddEmployeesToContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEmployeesToContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmployeesToContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
