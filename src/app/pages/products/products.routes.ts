import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () => import('../products/products.component').then((m) => m.ProductsComponent)
	},
	{
		path: 'new-product',
		loadComponent: () =>
			import('../products/components/new-product/new-product.component').then(
				(m) => m.NewProductComponent
			)
	}
];
