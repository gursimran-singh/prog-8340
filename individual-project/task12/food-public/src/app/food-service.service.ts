import { Injectable } from '@angular/core';
import { Food } from './food';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FoodDataService {
  private foodsUrl = 'http://localhost:3000/api/foods';

  constructor(private http: HttpClient) {}

  getFoods(): Promise<Food[]> {
    return this.http
      .get(this.foodsUrl)
      .toPromise()
      .then((response) => {
        return response as Food[];
      });
  }

  getSingleFood(foodid: string): Promise<Food> {
    return this.http
      .get(this.foodsUrl + '/' + foodid)
      .toPromise()
      .then((response) => response as Food);
  }

  createFood(newFood: Food): Promise<void | Food>{
    return this.http.post(this.foodsUrl, newFood)
      .toPromise()
      .then(response => response as Food);
  }
}
