import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsTestComponent } from './notifications-test.component';

describe('NotificationsTestComponent', () => {
  let component: NotificationsTestComponent;
  let fixture: ComponentFixture<NotificationsTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationsTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
