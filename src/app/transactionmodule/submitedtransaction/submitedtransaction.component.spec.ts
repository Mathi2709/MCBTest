import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitedtransactionComponent } from './submitedtransaction.component';

describe('SubmitedtransactionComponent', () => {
  let component: SubmitedtransactionComponent;
  let fixture: ComponentFixture<SubmitedtransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitedtransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitedtransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
