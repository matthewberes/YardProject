import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InsecticideService {
  allInsecticides: any[] = [];
  currInsecticide: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor() { }
}
