import { Component, OnInit } from '@angular/core';
import { IContact } from '../icontact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  private contacts: IContact[];

  constructor() { }

  ngOnInit() {
  }

}
