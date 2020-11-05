import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPlayerManagerComponent } from './main-player-manager.component';

describe('MainPlayerManagerComponent', () => {
  let component: MainPlayerManagerComponent;
  let fixture: ComponentFixture<MainPlayerManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPlayerManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPlayerManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
