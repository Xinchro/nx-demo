import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RandomlibComponent } from './randomlib.component';

describe('RandomlibComponent', () => {
  let component: RandomlibComponent;
  let fixture: ComponentFixture<RandomlibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomlibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RandomlibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
