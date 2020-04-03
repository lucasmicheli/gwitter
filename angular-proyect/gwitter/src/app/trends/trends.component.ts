import { Component, OnInit } from "@angular/core";
import { TwitterAPIService } from "../service/twitter-api.service";

@Component({
  selector: "app-trends",
  templateUrl: "./trends.component.html",
  styleUrls: ["./trends.component.css"]
})
export class TrendsComponent implements OnInit {
  trends: any;

  constructor(private twitterService: TwitterAPIService) {}

  ngOnInit(): void {
    this.getTrendings();
  }

  getTrendings() {
    this.twitterService.getArgentinaTrends().subscribe(trendsData => {
      this.trends = trendsData;
      console.log(this.trends);
    });
  }
}
