import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { PlantComponent } from './plant/plant.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: IndexComponent },
    { path: 'index', component: IndexComponent },
    { path: 'index/:plant', component: PlantComponent }
];
