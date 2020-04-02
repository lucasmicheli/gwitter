import { Component, OnInit, Input } from "@angular/core";
import { TwitterAPIService } from "../service/twitter-api.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  tweets: any;
  result: string = "messi";

  constructor(private twitterService: TwitterAPIService) {}

  ngOnInit(): void {
    console.log(this.result);
    this.getSearchingTweets();
  }

  getSearchInput(input: string) {
    this.result = input;
  }

  getSearchingTweets() {
    return this.twitterService
      .getSearchingTweets(this.result)
      .subscribe(tweets => {
        this.tweets = tweets.statuses;
        console.log(this.tweets);
      });
  }
}
