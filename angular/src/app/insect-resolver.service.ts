import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { map, Observable } from 'rxjs';
import { InsectService } from './insect.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InsectResolverService implements Resolve<string> {

  constructor(private insectService: InsectService, private http: HttpClient) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string> | Promise<string> | string {
    const insectName = route.paramMap.get('insect');
    if (this.insectService.currInsect.value?.name) {
      return this.insectService.currInsect.value.name + " - Canada Lawn Guide";
    } else {
      return this.http.get<any>('insect-index.json').pipe(
        map(data => {
          const insect = data.insects.find(i => i.link === insectName);
          return (insect ? insect.name : 'Insect not found') + ' - Canada Lawn Guide';
        })
      );
    }
  }
}
