import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SideComponent } from './side/side.component';
import { AdComponent } from './ad/ad.component';
import { FooterComponent } from './footer/footer.component';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, AdComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';
  lastScrollTop = 0;
  showHeader = true;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (screen.width > 600) {
      this.showHeader = true;
      return;
    }
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (st < 10) {
      this.showHeader = true;
    } else if (st > this.lastScrollTop) {
      // Scrolling down
      this.showHeader = false;
    } else {
      // Scrolling up
      this.showHeader = true;
    }
    this.lastScrollTop = st <= 0 ? 0 : st;
  }
}
