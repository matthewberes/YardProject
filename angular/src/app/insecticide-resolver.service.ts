import { Injectable } from '@angular/core';
import { InsecticideService } from './insecticide.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InsecticideResolverService {

  constructor(private insecticideService: InsecticideService, private http: HttpClient) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string> | Promise<string> | string {
    const insecticideName = route.paramMap.get('insecticide');
    if (this.insecticideService.currInsecticide.value?.name) {
      return this.insecticideService.currInsecticide.value.name + " - Canada Lawn Guide";
    } else {
      return this.http.get<any>('insecticide-index.json').pipe(
        map(data => {
          const insecticide = data.insecticides.find(i => i.link === insecticideName);
          return (insecticide ? insecticide.name : 'Insecticide not found') + ' - Canada Lawn Guide';
        })
      );
    }
  }
}
