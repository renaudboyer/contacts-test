import {Component, Input, OnInit} from '@angular/core';
import {Contact} from './Contact';

@Component({
  selector: 'cnt-contact',
  template: `
    <div [class.selected]="selected" *ngIf="contact">{{contact.firstName}} - {{contact.lastName}}: {{ contact.email }}</div>
  `,
  styles: [
  ]
})
export class ContactComponent implements OnInit {
  @Input() contact: Contact;
  @Input() selected: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
