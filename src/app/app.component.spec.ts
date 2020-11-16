import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts.component';
import { ContactService } from './contact.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ContactsComponent
      ],
      providers: [ { provide: ContactService, useValue: {} }]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should contains 'cnt-contacts' component`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const contactsComponent = fixture.nativeElement.querySelector('cnt-contacts');

    expect(contactsComponent).toBeTruthy();
  });

});
