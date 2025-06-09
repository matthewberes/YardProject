import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { NgIf } from '@angular/common';
import { ToolService } from '../tool.service';
import { AmazonButtonComponent } from '../amazon-button/amazon-button.component';

@Component({
  selector: 'app-tool',
  imports: [NgIf, CdkAccordionModule, AmazonButtonComponent],
  templateUrl: './tool.component.html',
  styleUrl: './tool.component.css'
})
export class ToolComponent {
  constructor(private route: ActivatedRoute, private toolService: ToolService, private http: HttpClient) { }

  toolParam: string;
  currTool: any = "Tool not found...";
  set404: boolean = true;
  accordionTitles: string[] = ["Origins", "Removal", "Pros", "Cons", "Notes"];
  expandedIndex = 0;

  ngOnInit(): void {
    if (this.toolService.currTool.value) {
      this.currTool = this.toolService.currTool.value;
      this.set404 = false
    } else {
      this.toolParam = this.route.snapshot.paramMap.get('tool');
      this.http.get<any>('plant-index.json').subscribe(data => {
        let tools = data.tools;
        tools.forEach(tool => {
          if (tool.link == this.toolParam) {
            this.currTool = tool
            this.set404 = false
          }
        })
      });
    }
  }

  goBack(): void {
    this.toolService.currTool.next(null);
    window.history.back();
  }
}
