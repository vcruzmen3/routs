import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritaComponent } from './favorita.component';

describe('FavoritaComponent', () => {
  let component: FavoritaComponent;
  let fixture: ComponentFixture<FavoritaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
