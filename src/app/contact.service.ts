import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './Contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpClient: HttpClient) { }

  public getContacts(): Observable<Array<Contact>> {
    return this.httpClient.get<Array<Contact>>('http://localhost:3000/contacts');
  }
}
