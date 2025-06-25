import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-canadian-tire-button',
  imports: [],
  templateUrl: './canadian-tire-button.component.html',
  styleUrl: './canadian-tire-button.component.css'
})
export class CanadianTireButtonComponent {
  @Input() canadianTireLink: string;

  goToCanadianTire(): void {
    if (this.canadianTireLink) {
      window.open(this.canadianTireLink, '_blank');
    } else {
      console.error('Canadian Tire link is not provided.');
    }
  }
}
