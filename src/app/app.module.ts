import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { MoviesService } from "./service/movies.service";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HeaderComponent } from "./component/header/header.component";
import { MainComponent } from "./component/main/main.component";
import { CarouselComponent } from "./component/carousel/carousel.component";
import { GaleryComponent } from "./component/galery/galery.component";
import { MovieComponent } from "./component/movie/movie.component";
import { FooterComponent } from "./component/footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    CarouselComponent,
    GaleryComponent,
    MovieComponent,
    FooterComponent
  ],
  imports: [BrowserModule, HttpModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
