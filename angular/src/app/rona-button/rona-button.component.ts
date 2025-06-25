import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rona-button',
  imports: [],
  templateUrl: './rona-button.component.html',
  styleUrl: './rona-button.component.css'
})
export class RonaButtonComponent {
  @Input() ronaLink: string;

  goToRona(): void {
    if (this.ronaLink) {
      window.open(this.ronaLink, '_blank');
    } else {
      console.error('Rona link is not provided.');
    }
  }
}
