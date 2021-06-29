import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoNovidadeComponent } from './info-novidade.component';

describe('InfoNovidadeComponent', () => {
  let component: InfoNovidadeComponent;
  let fixture: ComponentFixture<InfoNovidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoNovidadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoNovidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
