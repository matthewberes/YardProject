import { Injectable } from '@angular/core';
import { PlantService } from './plant.service';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PlantResolverService {

  constructor(private plantService: PlantService, private http: HttpClient) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string> | Promise<string> | string {
    const plantName = route.paramMap.get('plant');
    if (this.plantService.currPlant.value?.name) {
      return this.plantService.currPlant.value.name + " - Canada Lawn Guide";
    } else {
      return this.http.get<any>('plant-index.json').pipe(
        map(data => {
          const plant = data.plants.find(i => i.link === plantName);
          return (plant ? plant.name : 'Plant not found') + ' - Canada Lawn Guide';
        })
      );
    }
  }
}
