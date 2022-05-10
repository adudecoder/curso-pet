import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatToolbarColorComponent } from './mat-toolbar-color.component';

describe('MatToolbarColorComponent', () => {
  let component: MatToolbarColorComponent;
  let fixture: ComponentFixture<MatToolbarColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatToolbarColorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatToolbarColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
