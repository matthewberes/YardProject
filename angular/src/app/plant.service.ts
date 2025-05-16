import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlantService {
  allPlants: any[] = [];
  currPlant: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor() { }
}
