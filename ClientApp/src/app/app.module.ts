import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


import { CreatorActivityDetailsComponent } from 'src/app/creator-activity-details/creator-activity-details.component';
import { LoadingService } from './loading.service';
import { AdminActivityDetailsComponent } from './admin-activity-details/admin-activity-details.component';
import { MeritMapperComponent } from './merit-mapper/merit-mapper.component';
import { LiveSearchComponent } from './live-search/live-search.component';
import { DataService } from './data.service';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ClearBreadcrumService } from './ClearBreadcrumService.service';
import { SharedDataService } from './SharedData.service';
import { LoadingComponent } from './loading/loading.component';
import { SharedModule } from './Shared/shared.module';





@NgModule({
  declarations: [
    AppComponent,
    
    CreatorActivityDetailsComponent,
    AdminActivityDetailsComponent,
    MeritMapperComponent,
    LiveSearchComponent,
    NavMenuComponent,
    // LoadingComponent

  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    // PopoverModule.forRoot(),
  ],
  providers: [LoadingService, DataService, ClearBreadcrumService, SharedDataService],
  bootstrap: [AppComponent],
})
export class AppModule { }
