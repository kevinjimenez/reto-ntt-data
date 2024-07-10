import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'image',
	standalone: true
})
export class ImagePipe implements PipeTransform {
	transform(filename?: string, folder?: string): string {
		if (!filename) return '';
		if (filename.includes('http')) return filename;
		if (!folder) return `assets/${filename}`;
		console.log(`assets/${folder}/${filename}`);

		return `assets/${folder}/${filename}`;
	}
}
