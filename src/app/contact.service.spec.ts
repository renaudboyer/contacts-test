import { TestBed } from '@angular/core/testing';

import { ContactService } from './contact.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ContactService', () => {
  let contactService: ContactService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ContactService]
    });
    contactService = TestBed.inject(ContactService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(contactService).toBeTruthy();
  });

  it('should perform HTTP GET request when calling getContacts', () => {
    const contactList = [
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

    contactService.getContacts().subscribe(contacts => {
      expect(contacts.length).toBe(2);
      expect(contacts).toEqual(contactList);
    });

    const testRequest = httpTestingController.expectOne('http://localhost:3000/contacts');
    expect(testRequest.request.method).toBe('GET');

    testRequest.flush(contactList);

    httpTestingController.verify();
  });
});
