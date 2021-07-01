import { TestBed } from '@angular/core/testing';

import { MidiasService } from './midias.service';

describe('MidiasService', () => {
  let service: MidiasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MidiasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
