import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Food } from '../food';
import { FoodDataService } from '../food-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [FoodDataService],
})
export class CreateComponent implements OnInit {
  newFood = new Food('', '', '', '', '', 0, '', []);
  reviewForm = new FormGroup({
    author1: new FormControl(''),
    reviewText1: new FormControl(''),
    rating1: new FormControl(''),
    author2: new FormControl(''),
    reviewText2: new FormControl(''),
    rating2: new FormControl(''),
  });
  constructor(
    private foodDataService: FoodDataService,
    private route: Router
  ) {}

  ngOnInit(): void {}

  public createNewFood(newFood: Food): void {
    newFood.reviews = [this.reviewForm.value];
    this.foodDataService
      .createFood(newFood)
      .then((response) => {
        this.route.navigate(['/']);
      })
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.log('error: ', error);
  }
}
