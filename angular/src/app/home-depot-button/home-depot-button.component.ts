import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-depot-button',
  imports: [],
  templateUrl: './home-depot-button.component.html',
  styleUrl: './home-depot-button.component.css'
})
export class HomeDepotButtonComponent {
  @Input() homeDepotLink: string;

  goToHomeDepot(): void {
    if (this.homeDepotLink) {
      window.open(this.homeDepotLink, '_blank');
    } else {
      console.error('Home Depot link is not provided.');
    }
  }
}
