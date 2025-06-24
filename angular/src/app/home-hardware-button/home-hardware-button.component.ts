import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-hardware-button',
  imports: [],
  templateUrl: './home-hardware-button.component.html',
  styleUrl: './home-hardware-button.component.css'
})
export class HomeHardwareButtonComponent {
  @Input() homeHardwareLink: string;

  goToHomeHardware(): void {
    if (this.homeHardwareLink) {
      window.open(this.homeHardwareLink, '_blank');
    } else {
      console.error('Home Hardware link is not provided.');
    }
  }
}
