import { TestBed, inject } from '@angular/core/testing';

import { RecipeService } from './recipes.service';

describe('SearchEngineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipeService]
    });
  });

  it('should be created', inject([RecipeService], (service: RecipeService) => {
    expect(service).toBeTruthy();
  }));
});