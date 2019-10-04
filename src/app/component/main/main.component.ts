import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Movies } from "../../model/movies";
import { MoviesService } from "../../service/movies.service";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.sass"],
  providers: [MoviesService]
})
export class MainComponent implements OnInit {
  private movies: Movies[];

  constructor(private routes: Router, private movieService: MoviesService) {}

  ngOnInit() {
    this.getAllMovie();
  }

  getAllMovie(): void {
    // console.log("GROUP FROM SERVER");
    this.movieService.getMovies().subscribe(
      cat => {
        this.movies = cat;
        console.log(this.movies);
      },
      er => console.log(er)
    );
  }
}
