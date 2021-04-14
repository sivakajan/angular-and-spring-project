import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartListtComponent } from './part-listt.component';

describe('PartListtComponent', () => {
  let component: PartListtComponent;
  let fixture: ComponentFixture<PartListtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartListtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartListtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
