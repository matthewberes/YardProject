import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolService {
  allTools: any[] = [];
  currTool: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor() { }
}
