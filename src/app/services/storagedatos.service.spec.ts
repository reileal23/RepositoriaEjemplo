import { TestBed } from '@angular/core/testing';

import { ServicedatosService } from './storagedatos.service';

describe('StoragedatosService', () => {
  let service: ServicedatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicedatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
