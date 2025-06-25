import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InsecticideService } from '../insecticide.service';
import { HttpClient } from '@angular/common/http';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { NgIf } from '@angular/common';
import { AmazonButtonComponent } from '../amazon-button/amazon-button.component';
import { WalmartButtonComponent } from '../walmart-button/walmart-button.component';
import { HomeHardwareButtonComponent } from '../home-hardware-button/home-hardware-button.component';
import { HomeDepotButtonComponent } from '../home-depot-button/home-depot-button.component';
import { LowesButtonComponent } from '../lowes-button/lowes-button.component';
import { CanadianTireButtonComponent } from '../canadian-tire-button/canadian-tire-button.component';
import { RonaButtonComponent } from '../rona-button/rona-button.component';

@Component({
  selector: 'app-insecticide',
  imports: [NgIf, CdkAccordionModule, AmazonButtonComponent, CanadianTireButtonComponent, HomeDepotButtonComponent, HomeHardwareButtonComponent, LowesButtonComponent, RonaButtonComponent, WalmartButtonComponent],
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
