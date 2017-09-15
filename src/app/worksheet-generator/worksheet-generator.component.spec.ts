import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksheetGeneratorComponent } from './worksheet-generator.component';

describe('WorksheetGeneratorComponent', () => {
  let component: WorksheetGeneratorComponent;
  let fixture: ComponentFixture<WorksheetGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorksheetGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksheetGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
