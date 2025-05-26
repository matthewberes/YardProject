import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PesticideService } from '../pesticide.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-pesticide-index',
  imports: [NgFor, NgIf, CommonModule],
  templateUrl: './pesticide-index.component.html',
  styleUrl: './pesticide-index.component.css'
})
export class PesticideIndexComponent {
  pesticides = [];

  constructor(private http: HttpClient, private router: Router, private pesticideService: PesticideService) { }

  ngOnInit(): void {
    this.http.get<any>('pesticide-index.json').subscribe(data => {
      this.pesticides = data.pesticides;
      this.pesticideService.allPesticides = data.pesticides;
    });
  }

  onCardClick(pesticide: any): void {
    this.pesticideService.currPesticide.next(pesticide);
    this.router.navigate(['/herbicide', pesticide.link]);
  }

  isLast(plant: any): boolean {
    let length = this.pesticides.length - 1;
    return this.pesticides[length].name === plant.name;
  }

}
