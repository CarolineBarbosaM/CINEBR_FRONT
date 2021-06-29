import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhaListaComponent } from './minha-lista.component';

describe('MinhaListaComponent', () => {
  let component: MinhaListaComponent;
  let fixture: ComponentFixture<MinhaListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinhaListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
