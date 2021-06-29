import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRecuperarSenhaComponent } from './admin-recuperar-senha.component';

describe('AdminRecuperarSenhaComponent', () => {
  let component: AdminRecuperarSenhaComponent;
  let fixture: ComponentFixture<AdminRecuperarSenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRecuperarSenhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRecuperarSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
