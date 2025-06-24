import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-walmart-button',
  imports: [],
  templateUrl: './walmart-button.component.html',
  styleUrl: './walmart-button.component.css'
})
export class WalmartButtonComponent {
  @Input() walmartLink: string;

  goToWalmart(): void {
    if (this.walmartLink) {
      window.open(this.walmartLink, '_blank');
    } else {
      console.error('Walmart link is not provided.');
    }
  }
}
