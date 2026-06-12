import { Routes } from '@angular/router';
import { Cdr } from '../cdr/cdr';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'fragment',
  },
  {
    path: 'fragment',
    component: Cdr,
  },
];
