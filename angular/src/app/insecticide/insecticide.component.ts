import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InsecticideService } from '../insecticide.service';
import { HttpClient } from '@angular/common/http';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-insecticide',
  imports: [NgIf, CdkAccordionModule],
  templateUrl: './insecticide.component.html',
  styleUrl: './insecticide.component.css'
})
export class InsecticideComponent implements OnInit {
  constructor(private route: ActivatedRoute, private insecticideService: InsecticideService, private http: HttpClient) { }

  insecticideParam: string;
  currInsecticide: any = "Insecticide not found...";
  set404: boolean = true;
  accordionTitles: string[] = ["Application", "Legality", "Pros", "Cons", "Notes"];
  expandedIndex = 0;

  ngOnInit(): void {
    if (this.insecticideService.currInsecticide.value) {
      this.currInsecticide = this.insecticideService.currInsecticide.value;
      this.set404 = false
    } else {
      this.insecticideParam = this.route.snapshot.paramMap.get('insecticide');
      this.http.get<any>('insecticide-index.json').subscribe(data => {
        let insecticides = data.insecticides;
        insecticides.forEach(insecticide => {
          if (insecticide.link == this.insecticideParam) {
            this.currInsecticide = insecticide
            this.set404 = false
          }
        })
      });
    }
  }

  goBack(): void {
    this.insecticideService.currInsecticide.next(null);
    window.history.back();
  }
}
