import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatesSapComponent } from './templates-sap.component';

describe('TemplatesSapComponent', () => {
  let component: TemplatesSapComponent;
  let fixture: ComponentFixture<TemplatesSapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplatesSapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplatesSapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
