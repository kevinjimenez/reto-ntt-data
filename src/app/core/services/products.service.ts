import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { catchError, Observable, switchMap, throwError } from 'rxjs';
import { DefaultResponse } from '../../common/interfaces/default-response.interface';
import { Product } from '../../common/interfaces/product.interface';

@Injectable({
	providedIn: 'root'
})
export class ProductsService {
	private readonly _httpClient = inject(HttpClient);

	getAll() {
		const url = `${environment.apiUrl}/products`;
		return this._httpClient.get<any>(url).pipe(
			catchError(this.handleErrorResponse)
			// switchMap((response) => {
			// 	console.log({ response });
			// 	return response.data;
			// })
		);
	}

	create(payload: Product) {
		const url = `${environment.apiUrl}/products`;
		return this._httpClient
			.post<DefaultResponse<Product>>(url, payload)
			.pipe(catchError(this.handleErrorResponse));
	}

	updateById(id: string, payload: Partial<Product>) {
		const url = `${environment.apiUrl}/products/${id}`;
		return this._httpClient
			.put<DefaultResponse<Product>>(url, payload)
			.pipe(catchError(this.handleErrorResponse));
	}

	deleteById(id: string) {
		const url = `${environment.apiUrl}/products/${id}`;
		return this._httpClient
			.delete<DefaultResponse<unknown>>(url)
			.pipe(catchError(this.handleErrorResponse));
	}

	checkIdAvailable(id: string) {
		const url = `${environment.apiUrl}/products/verification/${id}`;
		return this._httpClient.get<boolean>(url).pipe(catchError(this.handleErrorResponse));
	}

	private handleErrorResponse(
		// error: HttpErrorResponse,
		error: HttpErrorResponse
	): ReturnType<typeof throwError> {
		return throwError(() => error);
	}
}
