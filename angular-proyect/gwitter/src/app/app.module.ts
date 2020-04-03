<<<<<<< HEAD
=======
import { BrowserModule } from "@angular/platform-browser";
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
>>>>>>> c6882b3d2015b82bbc2df35194abc28c44afbe9a
import { TweetDetailsComponent } from "./tweet-details/tweet-details.component";
import { ScreenUserPipe } from "./pipe/screen-user.pipe";
import { HeaderComponent } from "./header/header.component";
import { SearchComponent } from "./search/search.component";
<<<<<<< HEAD
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSpinnerModule } from "ngx-spinner";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TrendsComponent } from './trends/trends.component';
import { TwitListComponent } from './twit-list/twit-list.component';
import { TwitterAPIService  } from './service/twitter-api.service';
import { TwitComponent } from './twit/twit.component';
import { HttpClientModule } from '@angular/common/http';

=======
import { TrendsComponent } from "./trends/trends.component";
import { ConfigurationComponent } from "./configuration/configuration.component";
import { HomeListComponent } from "./home-list/home-list.component";
>>>>>>> c6882b3d2015b82bbc2df35194abc28c44afbe9a

@NgModule({
  declarations: [
    TwitComponent,
    TwitListComponent,
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    TweetDetailsComponent,
    ScreenUserPipe,
    HeaderComponent,
    SearchComponent,
<<<<<<< HEAD
    TrendsComponent
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, BrowserAnimationsModule, InfiniteScrollModule, NgxSpinnerModule, FontAwesomeModule],
=======
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
    InfiniteScrollModule
  ],
>>>>>>> c6882b3d2015b82bbc2df35194abc28c44afbe9a
  providers: [TwitterAPIService],
  bootstrap: [AppComponent]
})
export class AppModule {}
