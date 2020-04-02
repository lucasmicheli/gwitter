import { TweetDetailsComponent } from "./tweet-details/tweet-details.component";
import { ScreenUserPipe } from "./pipe/screen-user.pipe";
import { HeaderComponent } from "./header/header.component";
import { SearchComponent } from "./search/search.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSpinnerModule } from "ngx-spinner";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TrendsComponent } from './trends/trends.component';

@NgModule({
  declarations: [
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
