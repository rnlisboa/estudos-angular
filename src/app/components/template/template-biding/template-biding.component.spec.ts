import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateBidingComponent } from './template-biding.component';

describe('TemplateBidingComponent', () => {
  let component: TemplateBidingComponent;
  let fixture: ComponentFixture<TemplateBidingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateBidingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplateBidingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
