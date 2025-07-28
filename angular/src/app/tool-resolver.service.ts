import { Injectable } from '@angular/core';
import { ToolService } from './tool.service';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ToolResolverService {

  constructor(private toolService: ToolService, private http: HttpClient) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string> | Promise<string> | string {
    const toolName = route.paramMap.get('tool');
    if (this.toolService.currTool.value?.name) {
      return this.toolService.currTool.value.name + " - Canada Lawn Guide";
    } else {
      return this.http.get<any>('tool-index.json').pipe(
        map(data => {
          const tool = data.tools.find(i => i.link === toolName);
          return (tool ? tool.name : 'Tool not found') + ' - Canada Lawn Guide';
        })
      );
    }
  }
}
