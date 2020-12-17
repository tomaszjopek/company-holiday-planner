import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannerContainerComponent } from './planner-container.component';

describe('PlannerContainerComponent', () => {
  let component: PlannerContainerComponent;
  let fixture: ComponentFixture<PlannerContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlannerContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlannerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
