import { Component } from '@angular/core';
import { LogoComponent } from '../../../../shared/components';

@Component({
	selector: 'app-table',
	standalone: true,
	imports: [LogoComponent],
	templateUrl: './table.component.html',
	styleUrl: './table.component.css'
})
export class TableComponent {}
