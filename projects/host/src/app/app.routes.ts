import { Routes } from '@angular/router';
import { Fragment } from './fragment/fragment';
import { App } from './app';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'fragment',
        pathMatch: 'full'
    },
    {
        path: 'fragment',
        children: [
            {
                path: '**',
                component: Fragment
            },
        ],
    },
];
