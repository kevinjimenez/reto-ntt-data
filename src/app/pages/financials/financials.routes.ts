import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () => import('./financials.component').then((m) => m.FinancialsComponent)
	}
	// {
	//   path: 'product',
	//   loadChildren: () =>
	//     import('../products/products.routes').then(m => m.routes),
	// },
];
