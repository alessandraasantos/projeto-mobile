import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalhesPage } from './detalhes.page';
import { IonicModule } from '@ionic/angular';

describe('DetalhesPage', () => {
  let component: DetalhesPage;
  let fixture: ComponentFixture<DetalhesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalhesPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalhesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
 