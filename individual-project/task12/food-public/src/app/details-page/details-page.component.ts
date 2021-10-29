import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FoodDataService } from '../food-service.service';
import { switchMap } from 'rxjs/operators';
import { Food } from '../food';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css'],
  providers: [FoodDataService],
})
export class DetailsPageComponent implements OnInit {
  constructor(
    private foodDataService: FoodDataService,
    private route: ActivatedRoute
  ) {}

  food!: Food;
  pageContent = {
    header: {
      title: ''
    },
  };

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((params: Params) => {
          return this.foodDataService.getSingleFood(params['foodid']);
        })
      )
      .subscribe((newFood: Food) => {
        this.food = newFood;
        this.pageContent.header.title = newFood.name;
      });
  }
}
