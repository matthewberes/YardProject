import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InsectService {
  allInsects: any[] = [];
  currInsect: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor() { }
}
