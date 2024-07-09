import { Component } from '@angular/core';
import { ButtonComponent, InputComponent } from '../../../../shared/components';

@Component({
	selector: 'app-new-product',
	standalone: true,
	imports: [InputComponent, ButtonComponent],
	templateUrl: './new-product.component.html',
	styleUrl: './new-product.component.css'
})
export class NewProductComponent {}
