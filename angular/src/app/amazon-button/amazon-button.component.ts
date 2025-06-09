import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-amazon-button',
  imports: [],
  templateUrl: './amazon-button.component.html',
  styleUrl: './amazon-button.component.css'
})
export class AmazonButtonComponent {
  @Input() amazonLink: string;

  goToAmazon(): void {
    if (this.amazonLink) {
      window.open(this.amazonLink, '_blank');
    } else {
      console.error('Amazon link is not provided.');
    }
  }
}
