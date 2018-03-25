import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'filter'
})
export class FilterPipe implements PipeTransform {

	transform(value: any, mealcat: any): any {
		const newArr = [];
		for (const val of value) {
			if (val.fields.FoodCategory == mealcat) {
				newArr.push(val);
			}
		}
		return newArr;
	}

}
