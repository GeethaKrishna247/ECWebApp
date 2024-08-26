import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';


@Injectable()
export class DataService {


  reminderChanged = new Subject<any>();
  private primaryName = new BehaviorSubject('');
  private primaryLink = new BehaviorSubject('');
  private secondaryName = new BehaviorSubject('');
  private secondaryLink = new BehaviorSubject('');
  private tertiaryName = new BehaviorSubject('');
  private tertiaryLink = new BehaviorSubject('');

  primaryPage = this.primaryName.asObservable();
  primaryPagename = this.primaryLink.asObservable();
  secondaryPage = this.secondaryName.asObservable();
  secondaryPagename = this.secondaryLink.asObservable();
  tertiaryPage = this.tertiaryName.asObservable();
  tertiaryPagename = this.tertiaryLink.asObservable();

  //Added to reset the filter date when reset was happen - 10/08/2020
  public clearFilterDates = new Subject();

  /*private resultSource = new BehaviorSubject('');
  private resultLink = new BehaviorSubject('');
  private viewAllSource = new BehaviorSubject('');
  private cardDetailsSource = new BehaviorSubject('');
  private viewAllLink = new BehaviorSubject('');
  private detailsLink = new BehaviorSubject('');
  private socialSource = new BehaviorSubject('');
  private socialLink = new BehaviorSubject('');
  private favoritesSource = new BehaviorSubject('');
  private favoritesLink = new BehaviorSubject('');
  private preferenceSource = new BehaviorSubject('');
  private preferenceLink = new BehaviorSubject('');
  private learningSource = new BehaviorSubject('');
  private learningLink = new BehaviorSubject('');
  private associateSource = new BehaviorSubject('');
  private associateLifeLink = new BehaviorSubject('');


  

  cardDetails = this.cardDetailsSource.asObservable();
  viewAll = this.viewAllSource.asObservable();
  searchPage = this.resultSource.asObservable();
  searchLink = this.resultLink.asObservable();
  allLink = this.viewAllLink.asObservable();
  cardDetailsLink = this.detailsLink.asObservable();
  socialPage = this.socialSource.asObservable();
  socialPageLink = this.socialLink.asObservable();
  favoritesPage = this.favoritesSource.asObservable();
  favoritesPageLink = this.favoritesLink.asObservable();
  preferencePage = this.preferenceSource.asObservable();
  preferencePageLink = this.preferenceLink.asObservable();
  learningPage = this.learningSource.asObservable();
  learningPageLink = this.learningLink.asObservable();
  associateLifePage = this.associateSource.asObservable(); 
  associateLifePageLink = this.associateLifeLink.asObservable();*/

  constructor() { }

  getBreadcrumbDetails(primaryPage: string, primaryLink: string, secondaryPage: string,
    secondaryLink: string, tertiaryPage: string, tertiaryLink: string) {
    this.primaryName.next(primaryPage);
    this.primaryLink.next(primaryLink);
    if (secondaryPage != "") {
      this.secondaryName.next(secondaryPage);
      this.secondaryLink.next(secondaryLink);
    }
    else
    {
      this.secondaryName.next("");
      this.secondaryLink.next("");
    }
    if (tertiaryPage != "") {
      this.tertiaryName.next(tertiaryPage);
      this.tertiaryLink.next(tertiaryLink);
    }
    else
    {
      this.tertiaryName.next("");
      this.tertiaryLink.next("");
    }
  }
  getSecondaryPage(secondaryPage: string, link: string) {
    
    this.secondaryName.next(secondaryPage);
    this.secondaryLink.next(link);
  }
  getTertiaryPage(tertiaryPage: string, link: string) {
    
    this.tertiaryName.next(tertiaryPage);
    this.tertiaryLink.next(link);
  }




/*  getResultsPage(resultsPage: string, link: string) {
    this.resultSource.next(resultsPage);
    this.resultLink.next(link);
  }
  getViewAllPage(viewAllPage: string, link: string) {
    this.viewAllSource.next(viewAllPage);
    this.viewAllLink.next(link);
  }
  getCardDetailsPage(cardDetails: string, link: string) {
    this.cardDetailsSource.next(cardDetails);
    this.detailsLink.next(link);
  }
  getSocialPage(socialPage: string, link: string) {
    this.socialSource.next(socialPage);
    this.socialLink.next(link);
  }
  getFavoritePage(favoritesPage: string, link: string) {
    this.favoritesSource.next(favoritesPage);
    this.favoritesLink.next(link);
  }
  getLearningPage(learningPage: string, link: string) {
    this.learningSource.next(learningPage);
    this.learningLink.next(link);
  }
  getPreferencePage(preferencePage: string, link: string) {
    this.preferenceSource.next(preferencePage);
    this.preferenceLink.next(link);
  }
  getAssociateLifePage(associateLifePage: string, link: string) {
    this.associateSource.next(associateLifePage);
    this.associateLifeLink.next(link);
  }*/
}
