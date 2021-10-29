import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root',
})
export class MovieServiceService {
  private moviesUrl = 'http://localhost:3000/api/movies';
  private movieUrl = 'http://localhost:3000/api/movie';
  constructor(private http: HttpClient) {}

  getMovies(): Promise<Movie[]> {
    return this.http
      .get(this.moviesUrl)
      .toPromise()
      .then((response) => {
        return response as Movie[];
      });
  }

  getSingleMovie(movieid: string): Promise<Movie> {
    return this.http
      .get(this.movieUrl + '/' + movieid)
      .toPromise()
      .then((response) => response as Movie);
  }

  createMovie(newMovie: Movie): Promise<void | Movie> {
    return this.http
      .post(this.moviesUrl, newMovie)
      .toPromise()
      .then((response) => response as Movie);
  }

  updateMovie(id: string, newMovie: Movie): Promise<void | Movie> {
    return this.http
      .put(this.movieUrl + '/' + id, newMovie)
      .toPromise()
      .then((response) => response as Movie);
  }

  deleteMovie(id: string): Promise<object> {
    return this.http
      .delete(this.movieUrl + '/' + id)
      .toPromise();
  }
}
