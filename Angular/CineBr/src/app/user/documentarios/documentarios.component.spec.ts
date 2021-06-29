import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentariosComponent } from './documentarios.component';

describe('DocumentariosComponent', () => {
  let component: DocumentariosComponent;
  let fixture: ComponentFixture<DocumentariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
