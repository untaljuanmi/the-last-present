import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./modules/home/home.component'),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
