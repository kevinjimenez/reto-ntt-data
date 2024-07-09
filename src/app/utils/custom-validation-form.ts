import { AbstractControl, ValidationErrors } from '@angular/forms';
import dayjs from 'dayjs';

const errorMessage: Record<string, string> = {
	required: 'El campo {{label}} es requerido',
	email: 'El campo {{label}} no es un correo valido',
	password:
		'El campo {{label}} debe tener al menos una minuscula, mayuscula, número, caracter especial y longitud sea mayor o igual a 4',
	minlength: 'El campo {{label}} debe tener minimo {{minlength}} caracteres',
	maxlength: 'El campo {{label}} debe tener maximo {{maxlength}} caracteres',
	currentDate: 'La fecha debe ser mayor o igual a la fecha actual'
};

export class CustomValiationForm {
	static message(errors: Record<string, string | object>, label?: string): string | null {
		console.log({ errors });

		for (const key in errors) {
			if (Object.prototype.hasOwnProperty.call(errors!, key)) {
				const msg = errorMessage[key];
				if ((errors[key] as any).requiredLength && label)
					return msg
						.replace('{{label}}', label)
						.replace('{{minlength}}', (errors[key] as any).requiredLength)
						.replace('{{maxlength}}', (errors[key] as any).requiredLength);
				if (label) return msg.replace('{{label}}', label);
				return msg.replace('{{label}}', '');
			}
		}
		return null;
	}

	static currentDateValidator(control: AbstractControl<string>): ValidationErrors | null {
		const value = control.value;
		console.log({ value });
		const currentDate = dayjs();
		const selectedDate = dayjs(value);
		if (currentDate.isAfter(selectedDate) || currentDate.isSame(selectedDate)) {
			return { currentDate: true };
		} else {
			return null;
		}
	}
}
