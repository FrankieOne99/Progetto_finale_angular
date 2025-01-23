import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorsiPrenotatiComponent } from './corsi-prenotati.component';

describe('CorsiPrenotatiComponent', () => {
  let component: CorsiPrenotatiComponent;
  let fixture: ComponentFixture<CorsiPrenotatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorsiPrenotatiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorsiPrenotatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
