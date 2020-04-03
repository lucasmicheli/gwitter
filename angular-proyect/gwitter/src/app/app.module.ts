import { TweetDetailsComponent } from "./tweet-details/tweet-details.component";
import { ScreenUserPipe } from "./pipe/screen-user.pipe";
import { HeaderComponent } from "./header/header.component";
import { SearchComponent } from "./search/search.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSpinnerModule } from "ngx-spinner";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TrendsComponent } from './trends/trends.component';
import { TwitListComponent } from './twit-list/twit-list.component';
import { TwitterAPIService  } from './service/twitter-api.service';
import { TwitComponent } from './twit/twit.component';
import { HttpClientModule } from '@angular/common/http';


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
    TrendsComponent
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, BrowserAnimationsModule, InfiniteScrollModule, NgxSpinnerModule, FontAwesomeModule],
  providers: [TwitterAPIService],
  bootstrap: [AppComponent]
})
export class AppModule {}
