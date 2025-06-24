import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lowes-button',
  imports: [],
  templateUrl: './lowes-button.component.html',
  styleUrl: './lowes-button.component.css'
})
export class LowesButtonComponent {
  @Input() lowesLink: string;

  goToLowes(): void {
    if (this.lowesLink) {
      window.open(this.lowesLink, '_blank');
    } else {
      console.error('Lowes link is not provided.');
    }
  }
}
