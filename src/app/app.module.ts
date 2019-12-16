import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { FeaturedSiteComponent } from './featured-site/featured-site.component';
import { FooterComponent } from './footer/footer.component';
import { LatestSiteService } from './latest-site.service';
import { MainCardsComponent } from './main-cards/main-cards.component';
import { MainCardsService } from './main-cards.service';

@NgModule({
  imports: [BrowserModule, NgbModule.forRoot() ],
  declarations: [AppComponent, NavbarComponent, FeaturedSiteComponent, FooterComponent, MainCardsComponent],
  bootstrap: [AppComponent],
  providers: [LatestSiteService, MainCardsService]
})
export class AppModule { }
