import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertahotelComponent } from './ofertahotel.component';

describe('OfertahotelComponent', () => {
  let component: OfertahotelComponent;
  let fixture: ComponentFixture<OfertahotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfertahotelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfertahotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
