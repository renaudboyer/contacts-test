import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let div: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not display anything if contact is not defined', () => {
    expect(fixture.nativeElement.querySelector('div')).toBeNull();
  });

  it('should display firstname, lastname, email if contact is defined', () => {
    component.contact = {
      id: 'id',
      firstName: 'first',
      lastName: 'last',
      email: 'test@test.com',
    };

    // Allow data binding
    fixture.detectChanges();

    div = fixture.nativeElement.querySelector('div');

    expect(div.textContent).toEqual('first - last: test@test.com');
  });

  it('should have `selected` class when selected', () => {
    component.contact = {
      id: 'id',
      firstName: 'first',
      lastName: 'last',
      email: 'test@test.com',
    };
    component.selected = true;

    // Allow data binding
    fixture.detectChanges();

    div = fixture.nativeElement.querySelector('div');

    expect(div.classList).toContain('selected');
  });
});
