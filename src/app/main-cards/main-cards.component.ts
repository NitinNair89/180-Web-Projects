import { Component, OnInit } from '@angular/core';
import { siteList } from '../siteList';
import { MainCardsService } from '../main-cards.service';
import { RouterModule} from '@angular/router';

@Component({
  selector: 'app-main-cards',
  templateUrl: './main-cards.component.html',
  styleUrls: ['./main-cards.component.css', '../app.component.css']
})
export class MainCardsComponent implements OnInit {

  cards = siteList;
  whichCards: string;
  
  constructor(private MainCardsService: MainCardsService) {
    this.whichCards = '';
  }

  receiveCardType($event) {
    this.whichCards = $event;
    this.getAllSites(this.whichCards);
  }

  ngOnInit() {
    this.getAllSites('all');
  }

  getAllSites(whichCards: string): void {
    this.cards = this.MainCardsService.getAllSites(whichCards);
  }
}