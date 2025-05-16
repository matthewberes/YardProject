import { CommonModule, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlantService } from '../plant.service';

@Component({
  selector: 'app-index',
  imports: [NgFor, CommonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit {
  plants = [];

  constructor(private http: HttpClient, private router: Router, private plantService: PlantService) { }

  ngOnInit(): void {
    this.http.get<any>('plant-index.json').subscribe(data => {
      this.plants = data.plants;
      this.plantService.allPlants = data.plants;
    });
  }

  onCardClick(plant: any): void {
    this.plantService.currPlant.next(plant);
    this.router.navigate(['/plant', plant.link]);
  }
}
