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
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { InsectResolverService } from './insect-resolver.service';
import { InsecticideResolverService } from './insecticide-resolver.service';
import { ToolResolverService } from './tool-resolver.service';
import { PesticideResolverService } from './pesticide-resolver.service';
import { PlantResolverService } from './plant-resolver.service';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, title: 'Canada Lawn Guide' },
    { path: 'maintenance', component: MaintenanceComponent, title: 'Maintenance - Canada Lawn Guide' },
    { path: 'plants', component: IndexComponent, title: 'Plants - Canada Lawn Guide' },
    { path: 'plant/:plant', component: PlantComponent, title: PlantResolverService },
    { path: 'herbicides', component: PesticideIndexComponent, title: 'Herbicides - Canada Lawn Guide' },
    { path: 'herbicide/:herbicide', component: PesticideComponent, title: PesticideResolverService },
    { path: 'tools', component: ToolIndexComponent, title: 'Tools - Canada Lawn Guide' },
    { path: 'tool/:tool', component: ToolComponent, title: ToolResolverService },
    { path: 'insects', component: InsectIndexComponent, title: 'Insects - Canada Lawn Guide' },
    { path: 'insect/:insect', component: InsectComponent, title: InsectResolverService },
    { path: 'insecticides', component: InsecticideIndexComponent, title: 'Insecticides - Canada Lawn Guide' },
    { path: 'insecticide/:insecticide', component: InsecticideComponent, title: InsecticideResolverService },
    { path: 'about', component: AboutComponent, title: 'About - Canada Lawn Guide' },
    { path: 'contact', component: ContactComponent, title: 'Contact - Canada Lawn Guide' },
    { path: 'sitemap', component: SitemapComponent, title: 'Sitemap - Canada Lawn Guide' },
    { path: '**', redirectTo: 'home' },
];
