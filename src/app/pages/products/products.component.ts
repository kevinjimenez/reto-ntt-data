import { Component, inject } from '@angular/core';
import { ButtonComponent, InputComponent } from '../../shared/components';
import { TableComponent } from './components/table/table.component';
import { Router } from '@angular/router';

@Component({
	selector: 'app-products',
	standalone: true,
	imports: [TableComponent, InputComponent, ButtonComponent],
	templateUrl: './products.component.html',
	styleUrl: './products.component.css'
})
export class ProductsComponent {
	private readonly _router = inject(Router);

	onNewProduct(): void {
		this._router.navigate(['home', 'product', 'new-product']);
	}
}
