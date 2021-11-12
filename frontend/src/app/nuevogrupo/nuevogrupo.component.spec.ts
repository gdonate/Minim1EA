import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevovacunaComponent } from './nuevogrupo.component';

describe('NuevovacunaComponent', () => {
  let component: NuevovacunaComponent;
  let fixture: ComponentFixture<NuevovacunaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevovacunaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevovacunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
