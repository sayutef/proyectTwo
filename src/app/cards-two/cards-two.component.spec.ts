import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsTwoComponent } from './cards-two.component';

describe('CardsTwoComponent', () => {
  let component: CardsTwoComponent;
  let fixture: ComponentFixture<CardsTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
