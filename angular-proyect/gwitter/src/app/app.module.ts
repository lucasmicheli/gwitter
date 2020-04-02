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
import { ScreenUserPipe } from './pipe/screen-user.pipe';
import { SearchComponent } from './search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSpinnerModule } from "ngx-spinner";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TrendsComponent } from './trends/trends.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, PageNotFoundComponent, TweetDetailsComponent, ScreenUserPipe, SearchComponent, TrendsComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, BrowserAnimationsModule, InfiniteScrollModule, NgxSpinnerModule, FontAwesomeModule],
  providers: [TwitterAPIService],
  bootstrap: [AppComponent]
})
export class AppModule {}
