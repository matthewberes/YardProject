import { CommonModule, NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InsectService } from '../insect.service';

@Component({
  selector: 'app-insect-index',
  imports: [NgFor, NgIf, CommonModule],
  templateUrl: './insect-index.component.html',
  styleUrl: './insect-index.component.css'
})
export class InsectIndexComponent {
  insects = [];

  constructor(private http: HttpClient, private router: Router, private insectService: InsectService) { }

  ngOnInit(): void {
    this.http.get<any>('insect-index.json').subscribe(data => {
      this.insects = data.insects;
      this.insectService.allInsects = data.insecticides;
    });
  }

  onCardClick(insect: any): void {
    this.insectService.currInsect.next(insect);
    this.router.navigate(['/insect', insect.link]);
  }

  isLast(insect: any): boolean {
    let length = this.insects.length - 1;
    return this.insects[length].name === insect.name;
  }
}
