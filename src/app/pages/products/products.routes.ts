import { Routes } from '@angular/router';
import { productsResolver } from '../../core/resolvers/products.resolver';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () => import('../products/products.component').then((m) => m.ProductsComponent),
		resolve: {
			products: productsResolver
		}
	},
	{
		path: 'new-product',
		loadComponent: () =>
			import('../products/components/new-product/new-product.component').then(
				(m) => m.NewProductComponent
			)
	},
	{
		path: ':id',
		loadComponent: () =>
			import('../products/components/new-product/new-product.component').then(
				(m) => m.NewProductComponent
			)
	}
];
