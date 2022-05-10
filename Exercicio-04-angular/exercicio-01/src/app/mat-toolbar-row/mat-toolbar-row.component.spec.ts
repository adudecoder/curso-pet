import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatToolbarRowComponent } from './mat-toolbar-row.component';

describe('MatToolbarRowComponent', () => {
  let component: MatToolbarRowComponent;
  let fixture: ComponentFixture<MatToolbarRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatToolbarRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatToolbarRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
