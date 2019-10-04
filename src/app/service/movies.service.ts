import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/map";
import "rxjs/add/operator/publishReplay";
import "rxjs/add/operator/do";

import { Movies } from "../model/movies";

@Injectable()
export class MoviesService {
  private url = "https://ghibliapi.herokuapp.com/films";

  constructor(private http: Http) {}

  getMovies(): Observable<Movies[]> {
    return this.http
      .get(this.url)
      .map(res => {
        return <Movies[]>res.json();
      })
      .catch(this.handleError);
  }

  getMovie(id: number | string) {
    return this.getMovies().pipe(
      map((heroes: Movies[]) => heroes.find(movie => movie.id === id))
    );
  }

  private handleError(res) {
    return Observable.throw(res.statusText);
  }
}
