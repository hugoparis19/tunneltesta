import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroFormTemplateDrivenComponent } from './hero-form-template-driven.component';

describe('HeroFormTemplateDrivenComponent', () => {
  let component: HeroFormTemplateDrivenComponent;
  let fixture: ComponentFixture<HeroFormTemplateDrivenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroFormTemplateDrivenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroFormTemplateDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
