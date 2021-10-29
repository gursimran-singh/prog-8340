import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form!: FormGroup;
  title = 'Create New Movie';
  id!: string;
  isAddMode!: boolean;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieServiceService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['movieid'];
    this.isAddMode = !this.id;
    if(!this.isAddMode){
      this.title = "Update Movie";
    }

    this.form = this.fb.group({
      name: [null, Validators.required],
      genre: [null, Validators.required],
      price: [null, Validators.required],
      rating: [null, Validators.required],
      image: [null, Validators.required],
      cast: this.fb.group({
        director: [null, Validators.required],
        actor1: [null, Validators.required],
        actor2: [null, Validators.required],
        actor3: [null, Validators.required],
      }),
    });

    if (!this.isAddMode) {
      this.movieService
        .getSingleMovie(this.id)
        .then((x) => {
          this.form.patchValue({
            name: x.name,
            genre: x.genre,
            price: x.price,
            rating: x.rating,
            image: x.image,
            cast:{
              director: x.cast[0].director,
              actor1: x.cast[0].actors[0],
              actor2: x.cast[0].actors[1],
              actor3: x.cast[0].actors[2],
            }
          })
        });
    }
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    if (this.isAddMode) {
      this.movieService
        .createMovie(this.form.value)
        .then(() => {
          this.router.navigate(['/list']);
        })
        .catch(this.handleError);
    } else {
      this.movieService
        .updateMovie(this.id, this.form.value)
        .then(() => {
          this.router.navigate(['/list']);
        })
        .catch(this.handleError);
    }
  }

  private handleError(error: any) {
    console.log('error: ', error);
  }
}
