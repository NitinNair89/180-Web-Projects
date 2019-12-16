import { Injectable } from '@angular/core';
import { site } from './site';
import { siteList } from './siteList';

@Injectable()
export class LatestSiteService {

  arrLen: number;
  arrSiteList = [];

  constructor() { 
    this.arrLen = 0;
  }

// Returns the latest site information
  getSites(): site[] {
    this.arrSiteList = siteList;
    this.arrLen = siteList.length;

    return this.arrSiteList[3];
  }

}