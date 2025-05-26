import { CdkAccordionModule } from '@angular/cdk/accordion';
import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { InsectService } from '../insect.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-insect',
  imports: [NgIf, CdkAccordionModule],
  templateUrl: './insect.component.html',
  styleUrl: './insect.component.css'
})
export class InsectComponent {
  constructor(private route: ActivatedRoute, private insectService: InsectService, private http: HttpClient) { }

  insectParam: string;
  currInsect: any = "Insect not found...";
  set404: boolean = true;
  accordionTitles: string[] = ["Identification", "Removal", "Origins", "Life cycle", "Notes"];
  expandedIndex = 0;

  ngOnInit(): void {
    if (this.insectService.currInsect.value) {
      this.currInsect = this.insectService.currInsect.value;
      this.set404 = false
    } else {
      this.insectParam = this.route.snapshot.paramMap.get('insect');
      this.http.get<any>('insect-index.json').subscribe(data => {
        let insects = data.insects;
        insects.forEach(insect => {
          if (insect.link == this.insectParam) {
            this.currInsect = insect
            this.set404 = false
          }
        })
      });
    }
  }

  goBack(): void {
    this.insectService.currInsect.next(null);
    window.history.back();
  }
}
