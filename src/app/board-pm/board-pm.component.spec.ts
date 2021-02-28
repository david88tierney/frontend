import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardPmComponent } from './board-pm.component';

describe('BoardPmComponent', () => {
  let component: BoardPmComponent;
  let fixture: ComponentFixture<BoardPmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardPmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardPmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
