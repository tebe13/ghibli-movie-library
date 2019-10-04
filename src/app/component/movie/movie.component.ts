import { Component, OnInit } from "@angular/core";
import { switchMap } from "rxjs/operators";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Observable } from "rxjs";

import { Movies } from "../../model/movies";
import { MoviesService } from "../../service/movies.service";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.sass"],
  providers: [MoviesService]
})
export class MovieComponent implements OnInit {
  movie$: Observable<Movies>;
  private carousels;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: MoviesService
  ) {}

  ngOnInit() {
    this.carousels = [
      {
        id: "dc2e6bd1-8156-4886-adff-b39e6043af0c",
        title: "Spirited Away",
        stat: "active",
        desc:
          "Winner of the Academy Award for Best Animated Feature, Hayao Miyazaki's wondrous fantasy adventure is a dazzling masterpiece. ",
        urlImg:
          "https://www.ghiblicollection.com/userFiles/uploads/Hero%20Panel%20Images/Spirtited-Hero-Desktop.jpg",
        slide: "First Slide"
      },
      {
        id: "2baf70d1-42bb-4437-b551-e5fed5a87abe",
        title: "Castle In The SKy",
        stat: "",
        desc:
          "A timeless story of courage and friendship, with stunning animation from acclaimed Academy Award",
        urlImg:
          "https://www.ghiblicollection.com/userFiles/uploads/Hero%20Panel%20Images/Castle-Hero-2-%C2%A9.jpg",
        slide: "Second Slide"
      },
      {
        id: "0440483e-ca0e-4120-8c50-4c8cd9b965d6",
        title: "Princess Mononoke",
        stat: "",
        desc:
          "-winning director Hayao Miyazaki, comes an epic masterpiece that has dazzled audiences worldwide with its breathtaking imagination, exhilarating battles, and deep humanity.  ",
        urlImg:
          "https://www.ghiblicollection.com/userFiles/uploads/Hero%20Panel%20Images/Mononoke-Hero-Desktop.jpg",
        slide: "Third Slide"
      }
    ];

    this.movie$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.service.getMovie(params.get("id")))
    );
  }
}
