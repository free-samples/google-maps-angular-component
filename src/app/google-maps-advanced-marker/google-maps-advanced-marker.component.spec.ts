import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleMapsAdvancedMarkerComponent } from './google-maps-advanced-marker.component';

describe('GoogleMapsAdvancedMarkerComponent', () => {
  let component: GoogleMapsAdvancedMarkerComponent;
  let fixture: ComponentFixture<GoogleMapsAdvancedMarkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GoogleMapsAdvancedMarkerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleMapsAdvancedMarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
