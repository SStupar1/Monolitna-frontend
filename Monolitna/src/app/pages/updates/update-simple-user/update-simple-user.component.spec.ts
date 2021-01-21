import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSimpleUserComponent } from './update-simple-user.component';

describe('UpdateSimpleUserComponent', () => {
  let component: UpdateSimpleUserComponent;
  let fixture: ComponentFixture<UpdateSimpleUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSimpleUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSimpleUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
