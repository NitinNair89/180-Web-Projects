import { Injectable } from '@angular/core';
import { site } from './site';
import { siteList } from './siteList';


@Injectable()
export class MainCardsService {

  cardList = [];
  cardComplete = [];
  cardPending = [];
  i: number;
  displayStatus: string;

  constructor() {
    this.i = 0;
    this.cardList = siteList;
    this.populateCardArray();
  }

  populateCardArray(): void {
    for (this.i = 0; this.i < siteList.length; this.i++) {
      if (siteList[this.i].isComplete == true) {
        this.cardComplete.push(siteList[this.i]);
      } else {
        this.cardPending.push(siteList[this.i]);
      }
    }
  }

  getAllSites(whichCards: string): site[] {
    if (whichCards == 'all') {
      return this.cardList;
    }
    else if (whichCards == 'true') {
      return this.cardComplete;
    }
    else if (whichCards == 'false') {
      return this.cardPending;
    } 
    else {
      return this.cardList;
    }
  }
}