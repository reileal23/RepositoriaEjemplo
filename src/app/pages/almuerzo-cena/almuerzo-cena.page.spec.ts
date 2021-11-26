import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlmuerzoCenaPage } from './almuerzo-cena.page';

describe('AlmuerzoCenaPage', () => {
  let component: AlmuerzoCenaPage;
  let fixture: ComponentFixture<AlmuerzoCenaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AlmuerzoCenaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlmuerzoCenaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
