/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { IngredienteService } from './ingrediente.service';

describe('Service: IngredienteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IngredienteService]
    });
  });

  it('should ...', inject([IngredienteService], (service: IngredienteService) => {
    expect(service).toBeTruthy();
  }));
});
