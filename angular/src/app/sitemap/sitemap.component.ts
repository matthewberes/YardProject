import { Component } from '@angular/core';

@Component({
  selector: 'app-sitemap',
  imports: [],
  templateUrl: './sitemap.component.html',
  styleUrl: './sitemap.component.css'
})
export class SitemapComponent {
  onClick() {
    window.open('/CanadaLawnRepair/sitemap.xml', '_blank');
  }
}
