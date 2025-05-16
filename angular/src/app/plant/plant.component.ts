import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plant',
  imports: [NgIf],
  templateUrl: './plant.component.html',
  styleUrl: './plant.component.css'
})
export class PlantComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }

  plantList = ["dandelion", "hawkweed", "hedge-bedstraw", "creeping-charlie"];
  plantParam: string;
  currPlant: string;
  set404: boolean = false;

  ngOnInit(): void {
    this.plantParam = this.route.snapshot.paramMap.get('plant');
    if (this.plantList.includes(this.plantParam)) {
      this.currPlant = this.plantParam;
    } else {
      this.currPlant = "Plant not found...";
      this.set404 = true;
    }

  }
}
