import { Component, OnInit } from '@angular/core';
import { site } from '../site';
import { siteList } from '../siteList';
import { LatestSiteService } from '../latest-site.service';

@Component({
  selector: 'app-featured-site',
  templateUrl: './featured-site.component.html',
  styleUrls: ['./featured-site.component.css',
              '../app.component.css']
})
export class FeaturedSiteComponent implements OnInit {

  featuredSite: site[];
  siteTitle: String;
  siteDesc: String;
  siteLink: String;
  siteDate: String;
  siteCommit: String;
  siteIsComplete: Boolean;
 
  constructor(private latestSiteService: LatestSiteService) { 
    this.siteTitle = '';
    this.siteDesc = '';
    this.siteLink = '';
    this.siteDate = '';
    this.siteCommit = 'NA';
    this.siteIsComplete = false;
  }

  ngOnInit() {
    this.getSites();
  }

  getSites(): void {
    this.featuredSite = this.latestSiteService.getSites();
    this.siteTitle = this.featuredSite['siteTitle'];
    this.siteDesc = this.featuredSite['siteDesc'];
    this.siteLink = this.featuredSite['siteLink'];
    this.siteDate = this.featuredSite['completionDate'];
    this.siteCommit = this.featuredSite['gitCommit'];
    this.siteIsComplete = this.featuredSite['isComplete'];

    console.log(this.siteIsComplete);

    if(this.siteCommit = ' ') {
      this.siteCommit = 'NA';
    }
  }
}