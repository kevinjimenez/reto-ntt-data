import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
	{
		path: 'home',
		component: LayoutComponent,
		children: [
			{
				path: '',
				loadChildren: () => import('./pages/financials/financials.routes').then((m) => m.routes)
			}
		]
	},
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	}
	// {
	//   path: '**',
	//   loadComponent: () =>
	//     import('./pages/not-found/not-found.component').then(m => m.default),
	// },
];
