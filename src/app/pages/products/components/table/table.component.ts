import { Component, effect, inject, input, output, signal } from '@angular/core';
import { Product } from '../../../../common/interfaces/product.interface';
import { ButtonComponent, LogoComponent } from '../../../../shared/components';
import { ContextMenuComponent } from '../../../../shared/components/context-menu/context-menu.component';
import { IconButtonComponent } from '../../../../shared/components/icon-button/icon-button.component';
import { AlertCircleComponent } from '../../../../shared/components/icons/alert-circle/alert-circle.component';
import { OverlayComponent } from '../../../../shared/components/overlay/overlay.component';
import { ContextMenuOption } from '../../../../shared/components/context-menu/interfaces/context-menu-option.interface';
import { CONTEXT_MENU_OPTIONS } from '../../../../common/constants/context-menu-options';
import { ContextMenuOptionSelected } from '../../../../shared/components/context-menu/interfaces/context-menu-option-selected.interface';
import { Router } from '@angular/router';
import { ProductsService } from '../../../../core/services/products.service';

@Component({
	selector: 'app-table',
	standalone: true,
	imports: [
		LogoComponent,
		AlertCircleComponent,
		IconButtonComponent,
		OverlayComponent,
		ContextMenuComponent,
		ButtonComponent
	],
	templateUrl: './table.component.html',
	styleUrl: './table.component.css'
})
export class TableComponent {
	private readonly _productsService = inject(ProductsService);

	public overlayVisible = signal<boolean>(false);
	public contextMenuVisible = signal<boolean>(false);
	public contextMenuX = signal<number>(0);
	public contextMenuY = signal<number>(0);
	public contextMenuOptions = signal<ContextMenuOption[]>(CONTEXT_MENU_OPTIONS);
	public itemSelected = signal<Product | null>(null);

	public products = input<Product[]>([]);

	public onRemoveItem = output<Product[]>();

	private readonly _router = inject(Router);

	constructor() {
		// effect(() => {
		// 	console.log(this.products());
		// 	this.newProducts.update(() => this.products());
		// });
	}

	public showOverlay() {
		this.overlayVisible.update(() => true);
	}

	public showContextMenu(event: MouseEvent, item: Product) {
		this.contextMenuX.set(event.clientX);
		this.contextMenuY.set(event.clientY);
		this.itemSelected.set(item);
		this.contextMenuVisible.update((state) => !state);
	}

	public optionSelected(optionSelected: ContextMenuOptionSelected) {
		// delete
		if (optionSelected.option === 2) {
			this.showOverlay();
		}

		// update
		if (optionSelected.option === 1) {
			this.showOverlay();
			this._router.navigate(['home', 'product', this.itemSelected()?.id], {
				state: { payload: this.itemSelected() }
			});
		}
	}

	public onDelete() {
		this._productsService.deleteById(this.itemSelected()?.id || '').subscribe(() => {
			const newProducts = this.products().filter(
				(product) => product.id !== this.itemSelected()?.id
			);

			this.onRemoveItem.emit(newProducts);

			// this.products() = newProducts;
			// = newProducts;
			this.overlayVisible.set(false);
		});
	}
}
