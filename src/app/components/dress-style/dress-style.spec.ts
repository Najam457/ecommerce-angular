import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DressStyle } from './dress-style';

describe('DressStyle', () => {
  let component: DressStyle;
  let fixture: ComponentFixture<DressStyle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DressStyle],
    }).compileComponents();

    fixture = TestBed.createComponent(DressStyle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
