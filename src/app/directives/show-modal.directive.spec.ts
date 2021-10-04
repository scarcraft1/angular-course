import { Component, DebugElement, Injector } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ShowModalDirective } from './show-modal.directive';

@Component({
  template: '<div appShowModal></div>'
})
class DummyComponent { }

describe('ShowModalDirective', () => {
  let fixture: ComponentFixture<DummyComponent>;
  let debugElement: DebugElement;
  let debugDirective: ShowModalDirective;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ShowModalDirective, DummyComponent
      ],
    }).compileComponents();
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(DummyComponent);
    debugElement = fixture.debugElement.query(By.directive(ShowModalDirective));
    debugDirective = debugElement.injector.get(ShowModalDirective)

    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(debugDirective).toBeTruthy();
  });

  it('should have 0 clicks', () => {
    expect(debugDirective.totalClicks).toBe(0);
  });


  it('should increment totalClicks by 1 per click', () => {
    debugDirective.component = 'Componente';
    debugDirective.totalClicks = 0;
    debugElement.triggerEventHandler('click', null);
    expect(debugDirective.totalClicks).toBe(1);
    debugElement.triggerEventHandler('click', null);
    expect(debugDirective.totalClicks).toBe(2);
  });
});
