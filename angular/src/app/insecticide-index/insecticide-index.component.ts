import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PesticideService } from '../pesticide.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { InsecticideService } from '../insecticide.service';

@Component({
  selector: 'app-insecticide-index',
  imports: [NgFor, NgIf, CommonModule],
  templateUrl: './insecticide-index.component.html',
  styleUrl: './insecticide-index.component.css'
})
export class InsecticideIndexComponent {
  insecticides = [];

  constructor(private http: HttpClient, private router: Router, private insecticideService: InsecticideService) { }

  ngOnInit(): void {
    this.http.get<any>('insecticide-index.json').subscribe(data => {
      this.insecticides = data.insecticides;
      this.insecticideService.allInsecticides = data.insecticides;
    });
  }

  onCardClick(insecticide: any): void {
    this.insecticideService.currInsecticide.next(insecticide);
    this.router.navigate(['/insecticide', insecticide.link]);
  }

  isLast(insecticide: any): boolean {
    let length = this.insecticides.length - 1;
    return this.insecticides[length].name === insecticide.name;
  }

}
