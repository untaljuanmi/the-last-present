import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./modules/home/home.component'),
  },
  {
    path: 'clues',
    loadComponent: () => import('./modules/clues/clues.component'),
  },
  {
    path: 'clue/:id',
    loadComponent: () => import('./modules/clue/clue.component'),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
