import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})

export class AppComponent {
	title = 'app';
	selectedDate = '';
	data = null;
	dates = [];
	mealList = [];
	mealCategory = [];

	constructor(private http: HttpClient){}

	ngOnInit(): void {
		interface UserResponse {
			value: any,
			fields: object;
		}
		this.http.get<UserResponse>('../assets/data.json').subscribe(data => {
			this.data = data.value;
			let newDateArr = [];
			for (const item of data.value) {
				if (newDateArr.indexOf(item.fields.ItemStartDate) === -1) {
					newDateArr.push(item.fields.ItemStartDate);
				}
			}
			this.dates = newDateArr;
		});	
	}

	selectedDateF(val) {
		let newMealArr = [];
		let newCategoryArr = [];
		for (const item of this.data) {
			if (item.fields.ItemStartDate === val) {
				newMealArr.push(item);
				if (newCategoryArr.indexOf(item.fields.FoodCategory) === -1) {
				newCategoryArr.push(item.fields.FoodCategory);
				}
			}
		}
		this.mealList = newMealArr; // seçilen tarihin kayıtları (obje)
		this.mealCategory = newCategoryArr; // seçilen tarihin kategorileri (string)
	}
}
