import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Movie } from '../movie';
import { MovieServiceService } from '../movie-service.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css'],
  providers: [MovieServiceService]
})
export class DetailsPageComponent implements OnInit {
  constructor(
    private movieService: MovieServiceService,
    private route: ActivatedRoute
  ) {}

  movie!: Movie;
  pageContent = {
    header: {
      title: ''
    },
  };

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((params: Params) => {
          return this.movieService.getSingleMovie(params['movieid']);
        })
      )
      .subscribe((newMovie: Movie) => {
        this.movie = newMovie;
        this.pageContent.header.title = newMovie.name;
      });
  }
}
