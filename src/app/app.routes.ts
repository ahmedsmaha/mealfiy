import {Routes} from '@angular/router';
import {MainLayoutComponent} from "./main-layout/main-layout.component";
import {DescriptionLayoutComponent} from "./description-layout/description-layout.component";

export const routes: Routes = [
  {path: '', redirectTo: '/category/all', pathMatch: 'full'},
  {path: 'category', redirectTo: '/category/all', pathMatch: 'full'},
  {path: 'category/:name', component: MainLayoutComponent},
  {path: 'meal/:id', component: DescriptionLayoutComponent},
  {path: '**', component: MainLayoutComponent}
];
