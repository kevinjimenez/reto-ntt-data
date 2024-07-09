import { Component, input, Input } from '@angular/core';

@Component({
	selector: 'app-input',
	standalone: true,
	imports: [],
	templateUrl: './input.component.html',
	styleUrl: './input.component.css'
})
export class InputComponent {
	// @Input() inputType: 'text' | 'number' = 'text';
	public inputType = input<'text' | 'number'>('text');
	// @Input() placeholder: string = 'Search';
	public placeholder = input<string>('Search');
}
