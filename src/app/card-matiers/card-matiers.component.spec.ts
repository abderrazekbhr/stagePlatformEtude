import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMatiersComponent } from './card-matiers.component';

describe('CardMatiersComponent', () => {
  let component: CardMatiersComponent;
  let fixture: ComponentFixture<CardMatiersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMatiersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMatiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
