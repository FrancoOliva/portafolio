import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarBotComponent } from './navbar-bot.component';

describe('NavbarBotComponent', () => {
  let component: NavbarBotComponent;
  let fixture: ComponentFixture<NavbarBotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarBotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
