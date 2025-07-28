import { Injectable } from '@angular/core';
import { PesticideService } from './pesticide.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PesticideResolverService {

  constructor(private pesticideService: PesticideService, private http: HttpClient) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string> | Promise<string> | string {
    const pesticideName = route.paramMap.get('herbicide');
    if (this.pesticideService.currPesticide.value?.name) {
      return this.pesticideService.currPesticide.value.name + " - Canada Lawn Guide";
    } else {
      return this.http.get<any>('pesticide-index.json').pipe(
        map(data => {
          const pesticide = data.pesticides.find(i => i.link === pesticideName);
          return (pesticide ? pesticide.name : 'Pesticide not found') + ' - Canada Lawn Guide';
        })
      );
    }
  }
}
