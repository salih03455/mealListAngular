import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

	transform(value: any): any {
		if (value) {
			return value.toLowerCase().split(' ').map(function (i) {
				if (i.length > 2) {
					return i.charAt(0).toUpperCase() + i.substr(1);
				} else {
					return i;
				}
			}).join(' ');
		}
	}

}
