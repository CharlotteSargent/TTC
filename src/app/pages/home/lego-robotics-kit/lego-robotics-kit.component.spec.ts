import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LegoRoboticsKitComponent } from './lego-robotics-kit.component';

describe('LegoRoboticsKitComponent', () => {
  let component: LegoRoboticsKitComponent;
  let fixture: ComponentFixture<LegoRoboticsKitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegoRoboticsKitComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LegoRoboticsKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
