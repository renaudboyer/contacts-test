import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsComponent } from './contacts.component';
import { ContactService } from './contact.service';
import { Observable, of } from 'rxjs';
import { Contact } from './Contact';
import { ContactComponent } from './contact.component';

describe('ContactsComponent', () => {
  let component: ContactsComponent;
  let fixture: ComponentFixture<ContactsComponent>;
  let contactServiceMock: { getContacts: () => Observable<Contact[]> };
  let contactList: Contact[];
  let contactComponentList: ContactComponent[];

  beforeEach(async () => {
    contactList = [
      {
        id: 'id1',
        firstName: 'john',
        lastName: 'doe',
        email: 'johndoe@email.com'
      },
      {
        id: 'id2',
        firstName: 'jane',
        lastName: 'doe',
        email: 'janedoe@email.com'
      }
    ];

    // Mock ContactService for test purposes
    contactServiceMock = {
      getContacts: () => of(contactList)
    };

    await TestBed.configureTestingModule({
      declarations: [ ContactsComponent ],
      providers: [{ provide: ContactService, useValue: contactServiceMock }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create contact list', () => {
    expect(component).toBeTruthy();

    contactComponentList = fixture.nativeElement.querySelectorAll('cnt-contact');

    expect(contactComponentList.length).toEqual(2);
  });
});
