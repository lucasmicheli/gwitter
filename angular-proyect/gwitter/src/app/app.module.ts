import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgxSpinnerModule } from "ngx-spinner";
import { InfiniteScrollModule } from "ngx-infinite-scroll";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";

//Service
import { TwitterAPIService } from "./service/twitter-api.service";

//Components
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { TweetDetailsComponent } from "./tweet-details/tweet-details.component";
import { ScreenUserPipe } from "./pipe/screen-user.pipe";
import { HeaderComponent } from "./header/header.component";
import { SearchComponent } from "./search/search.component";
import { TrendsComponent } from "./trends/trends.component";
import { ConfigurationComponent } from "./configuration/configuration.component";
import { HomeListComponent } from "./home-list/home-list.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    TweetDetailsComponent,
    ScreenUserPipe,
    HeaderComponent,
    SearchComponent,
    TrendsComponent,
    ConfigurationComponent,
    HomeListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgxSpinnerModule,
    InfiniteScrollModule,
    BrowserAnimationsModule
  ],
  providers: [TwitterAPIService],
  bootstrap: [AppComponent]
})
export class AppModule {}
