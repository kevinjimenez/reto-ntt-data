import { Component, inject } from '@angular/core';
import { ButtonComponent, InputComponent } from '../../../../shared/components';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomValiationForm } from '../../../../utils/custom-validation-form';

@Component({
	selector: 'app-new-product',
	standalone: true,
	imports: [InputComponent, ButtonComponent, ReactiveFormsModule],
	templateUrl: './new-product.component.html',
	styleUrl: './new-product.component.css'
})
export class NewProductComponent {
	private readonly formBuilder = inject(NonNullableFormBuilder);

	public registerForm = this.formBuilder.group({
		id: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
		name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
		description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]],
		logo: ['', Validators.required],
		date_release: ['', [Validators.required, CustomValiationForm.currentDateValidator]],
		date_revision: ['', Validators.required]
	});

	onSubmit() {
		if (this.registerForm.valid) {
			console.log({ value: this.registerForm.value });
		} else {
			this.registerForm.markAllAsTouched();
		}
	}

	onReset() {
		this.registerForm.reset();
	}
}
