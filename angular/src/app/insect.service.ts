import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InsectService {
  allInsects: any[] = [];
  currInsect: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) { }

  async loadInsects() {
    this.http.get<any>('insect-index.json').subscribe(data => {
      this.allInsects = data.insects;
    });
  }
}
