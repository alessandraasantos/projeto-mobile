import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilmesPage } from './filmes.page';

describe('FilmesPage', () => {
  let component: FilmesPage;
  let fixture: ComponentFixture<FilmesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
