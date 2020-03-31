import { Component, OnInit } from "@angular/core";
import { TwitterAPIService } from "../service/twitter-api.service";
import { Tweet } from "../model/tweet.model";
import { Trend } from "../model/trend.model";
import { TrendDetail } from "../model/trend-detail.model";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  tweets: Tweet[];
  trend: TrendDetail;

  constructor(private twitterService: TwitterAPIService) {}

  ngOnInit(): void {
    //this.getRecentTweets();
    this.getArgentinaTrends();
  }

  getRecentTweets() {
    return this.twitterService
      .getRecentTweets()
      .subscribe(tweets => (this.tweets = tweets));
  }

  getArgentinaTrends() {
    return this.twitterService.getArgentinaTrends().subscribe(trends => {
      this.trend = trends;
      console.log(this.trend);
    });
  }
}
