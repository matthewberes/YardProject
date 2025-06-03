import { CommonModule, NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InsecticideService } from '../insecticide.service';
import { ToolService } from '../tool.service';

@Component({
  selector: 'app-tool-index',
  imports: [NgFor, NgIf, CommonModule],
  templateUrl: './tool-index.component.html',
  styleUrl: './tool-index.component.css'
})
export class ToolIndexComponent {
  tools = [];

  constructor(private http: HttpClient, private router: Router, private toolService: ToolService) { }

  ngOnInit(): void {
    this.http.get<any>('tool-index.json').subscribe(data => {
      this.tools = data.tools;
      this.toolService.allTools = data.tools;
    });
  }

  onCardClick(tool: any): void {
    this.toolService.currTool.next(tool);
    this.router.navigate(['/tools', tool.link]);
  }

  isLast(insecticide: any): boolean {
    let length = this.tools.length - 1;
    return this.tools[length].name === insecticide.name;
  }
}
