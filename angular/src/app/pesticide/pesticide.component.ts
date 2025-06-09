import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PesticideService } from '../pesticide.service';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-pesticide',
  imports: [NgIf, CdkAccordionModule],
  templateUrl: './pesticide.component.html',
  styleUrl: './pesticide.component.css'
})
export class PesticideComponent implements OnInit {
  constructor(private route: ActivatedRoute, private pesticideService: PesticideService, private http: HttpClient) { }

  pesticideParam: string;
  currPesticide: any = "Herbicide not found...";
  set404: boolean = true;
  accordionTitles: string[] = ["Application", "Legality", "Pros", "Cons", "Notes"];
  expandedIndex = 0;

  ngOnInit(): void {
    if (this.pesticideService.currPesticide.value) {
      this.currPesticide = this.pesticideService.currPesticide.value;
      this.set404 = false
    } else {
      this.pesticideParam = this.route.snapshot.paramMap.get('pesticide');
      this.http.get<any>('pesticide-index.json').subscribe(data => {
        let pesticides = data.pesticides;
        pesticides.forEach(pesticide => {
          if (pesticide.link == this.pesticideParam) {
            this.currPesticide = pesticide
            this.set404 = false
          }
        })
      });
    }
  }

  goBack(): void {
    this.pesticideService.currPesticide.next(null);
    window.history.back();
  }
}