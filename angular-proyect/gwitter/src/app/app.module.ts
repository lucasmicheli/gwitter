import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";

//Service
import { TwitterAPIService } from "./service/twitter-api.service";

//Components
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { TweetDetailsComponent } from './tweet-details/tweet-details.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, PageNotFoundComponent, TweetDetailsComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [TwitterAPIService],
  bootstrap: [AppComponent]
})
export class AppModule {}
