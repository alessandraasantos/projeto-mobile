import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilmesPage } from './filmes.page';
import { IonicModule } from '@ionic/angular';

describe('FilmesPage', () => {
  let component: FilmesPage;
  let fixture: ComponentFixture<FilmesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilmesPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FilmesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
