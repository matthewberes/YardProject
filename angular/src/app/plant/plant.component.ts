import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlantService } from '../plant.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-plant',
  imports: [NgIf],
  templateUrl: './plant.component.html',
  styleUrl: './plant.component.css'
})
export class PlantComponent implements OnInit {
  constructor(private route: ActivatedRoute, private plantService: PlantService, private http: HttpClient) { }

  plantParam: string;
  currPlant: any = "Plant not found...";
  set404: boolean = true;

  ngOnInit(): void {
    if (this.plantService.currPlant.value) {
      this.currPlant = this.plantService.currPlant.value;
      this.set404 = false
    } else {
      this.plantParam = this.route.snapshot.paramMap.get('plant');
      this.http.get<any>('plant-index.json').subscribe(data => {
        let plants = data.plants;
        plants.forEach(plant => {
          if (plant.link == this.plantParam) {
            this.currPlant = plant
            this.set404 = false
          }
        })
      });
    }
  }
}
