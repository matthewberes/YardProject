import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  constructor(private router: Router) { }

  onClick(val: string) {
    switch (val) {
      case "email":
        window.open("mailto:mattyberes@gmail.com")
        break;
      case "text":
        window.location.href = "sms:6136390199"
        break;
      case "call":
        window.location.href = "tel:6136390199"
        break;
    }
  }

}
