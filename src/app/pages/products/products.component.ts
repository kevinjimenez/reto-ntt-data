import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime } from 'rxjs';
import { ButtonComponent, InputComponent } from '../../shared/components';
import { TableComponent } from './components/table/table.component';
import { Product } from '../../common/interfaces/product.interface';

@Component({
	selector: 'app-products',
	standalone: true,
	imports: [TableComponent, InputComponent, ButtonComponent, ReactiveFormsModule],
	templateUrl: './products.component.html',
	styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
	private readonly _router = inject(Router);
	private readonly _activatedRoute = inject(ActivatedRoute);

	public fieldSearch = new FormControl();

	public products = signal<Product[]>([]);

	constructor() {
		this.fieldSearch.valueChanges.pipe(debounceTime(500)).subscribe((search: string) => {
			console.log({ search });
		});
	}

	ngOnInit(): void {
		this._activatedRoute.data.subscribe(({ products }) => {
			this.products.set(products.data);
		});
	}

	onNewProduct(): void {
		this._router.navigate(['home', 'product', 'new-product']);
	}

	onRemoveItem(products: Product[]): void {
		this.products.update(() => products);
	}
}
