import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';

@Component({
  selector: 'cnt-contacts',
  template: `
    <ul>
      <li *ngFor="let contact of (contactService.getContacts()|async)"><cnt-contact [contact]="contact"></cnt-contact></li>
    </ul>
  `,
  styles: [
  ]
})
export class ContactsComponent implements OnInit {

  constructor(public contactService: ContactService) { }

  ngOnInit(): void {}

}
