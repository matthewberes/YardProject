import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { PlantComponent } from './plant/plant.component';
import { HomeComponent } from './home/home.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { PesticideIndexComponent } from './pesticide-index/pesticide-index.component';
import { PesticideComponent } from './pesticide/pesticide.component';
import { ToolIndexComponent } from './tool-index/tool-index.component';
import { ToolComponent } from './tool/tool.component';
import { InsectIndexComponent } from './insect-index/insect-index.component';
import { InsecticideIndexComponent } from './insecticide-index/insecticide-index.component';
import { InsectComponent } from './insect/insect.component';
import { InsecticideComponent } from './insecticide/insecticide.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'maintenance', component: MaintenanceComponent },
    { path: 'plants', component: IndexComponent },
    { path: 'plant/:plant', component: PlantComponent },
    { path: 'herbicides', component: PesticideIndexComponent },
    { path: 'herbicide/:herbicides', component: PesticideComponent },
    { path: 'tools', component: ToolIndexComponent },
    { path: 'tool/:tool', component: ToolComponent },
    { path: 'insects', component: InsectIndexComponent },
    { path: 'insect/:insect', component: InsectComponent },
    { path: 'insecticides', component: InsecticideIndexComponent },
    { path: 'insecticides/:insecticide', component: InsecticideComponent },
];
