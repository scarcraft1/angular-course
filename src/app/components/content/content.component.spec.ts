import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentComponent } from './content.component';

describe('ContentComponent', () => {
  let component: ContentComponent;
  let fixture: ComponentFixture<ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'angular-course'`, () => {
    const fixture = TestBed.createComponent(ContentComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Content Component');
  });
});
