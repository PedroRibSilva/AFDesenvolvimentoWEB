import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercComponent } from './exerc.component';

describe('ExercComponent', () => {
  let component: ExercComponent;
  let fixture: ComponentFixture<ExercComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExercComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExercComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
