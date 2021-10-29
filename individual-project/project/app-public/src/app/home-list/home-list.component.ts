import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../movie';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css'],
  providers: [MovieServiceService]
})
export class HomeListComponent implements OnInit {
  movies: Movie[] = [];
  constructor(
    private movieService: MovieServiceService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.movieService
      .getMovies()
      .then((movies: Movie[]) => {
        this.movies = movies;
      })
      .catch(this.handleError);
  }

  deleteMovie(id: string, name: string) {
    if (confirm('Are you sure to delete the movie "' + name + '"')) {
      this.movieService.deleteMovie(id).then(() => {
        //window.location.reload();
        this.route.routeReuseStrategy.shouldReuseRoute = () => false;
        this.route.onSameUrlNavigation = 'reload';
        this.route.navigate(['/list']);
      });
    } else {
      return;
    }
  }

  private handleError(error: any) {
    console.log('error: ', error);
  }
}
