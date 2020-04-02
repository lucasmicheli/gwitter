import { Component, OnInit } from '@angular/core';
import { TrendDetail } from "./trend-detail.model";
import { Trend } from "../model/trend.model";
import { TwitterAPIService } from "../service/twitter-api.service";

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})
export class TrendsComponent implements OnInit {
  trends : TrendDetail[];

  constructor(
    private twitterService: TwitterAPIService,
  ) { }

  ngOnInit(): void {
    this.twitterService.getArgentinaTrends().
      subscribe(trendsData => {
        this.trends= trendsData[0].trends;
        this.trendId();
    })
  }

  trendId():void {
    let i = 1;
    this.trends.forEach(trendItem => {
      trendItem.id = i++; // Agregar un aributo ID a Trend
    })
  }


}
