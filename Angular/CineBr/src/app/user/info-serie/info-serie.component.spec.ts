import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSerieComponent } from './info-serie.component';

describe('InfoSerieComponent', () => {
  let component: InfoSerieComponent;
  let fixture: ComponentFixture<InfoSerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoSerieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
