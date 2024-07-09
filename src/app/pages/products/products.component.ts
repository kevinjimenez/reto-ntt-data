import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs';
import { ButtonComponent, InputComponent } from '../../shared/components';
import { TableComponent } from './components/table/table.component';

@Component({
	selector: 'app-products',
	standalone: true,
	imports: [TableComponent, InputComponent, ButtonComponent, ReactiveFormsModule],
	templateUrl: './products.component.html',
	styleUrl: './products.component.css'
})
export class ProductsComponent {
	private readonly _router = inject(Router);

	public fieldSearch = new FormControl();

	constructor() {
		this.fieldSearch.valueChanges.pipe(debounceTime(500)).subscribe((search: string) => {
			console.log({ search });
		});
	}

	onNewProduct(): void {
		this._router.navigate(['home', 'product', 'new-product']);
	}
}
