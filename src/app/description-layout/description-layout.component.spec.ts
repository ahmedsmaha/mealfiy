import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionLayoutComponent } from './description-layout.component';

describe('DescriptionLayoutComponent', () => {
  let component: DescriptionLayoutComponent;
  let fixture: ComponentFixture<DescriptionLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescriptionLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptionLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
