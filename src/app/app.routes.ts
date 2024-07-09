import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
	{
		path: 'home',
		component: LayoutComponent,
		children: [
			{
				path: 'product',
				loadChildren: () => import('./pages/products/products.routes').then((m) => m.routes)
			},
			{
				path: '',
				redirectTo: 'product',
				pathMatch: 'full'
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
