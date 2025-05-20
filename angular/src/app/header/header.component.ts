import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router: Router) { }

  path: string = "";

  ngOnInit(): void {
    if (window.location.hash == "") {
      this.path = "/home";
    } else {
      this.path = window.location.hash;
    }
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((ev: NavigationEnd) => {
        if (ev.url == "/") {
          this.path = "/home";
        } else {
          this.path = "" + ev.url
        }
      });
  }

  onLogoClick(): void {
    this.router.navigate(['/home']);
  }
}
