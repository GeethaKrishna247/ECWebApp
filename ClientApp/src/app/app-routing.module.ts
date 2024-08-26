import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminActivityDetailsComponent } from './admin-activity-details/admin-activity-details.component';
import { CreatorActivityDetailsComponent } from './creator-activity-details/creator-activity-details.component';
import { MeritMapperComponent } from './merit-mapper/merit-mapper.component';

const routes: Routes = [
  { path: '', redirectTo: 'merit-mapper', pathMatch: 'full' },
  { path: 'creatorActivityDetails', component: CreatorActivityDetailsComponent },
  { path: 'adminActivityDetails', component: AdminActivityDetailsComponent },
  { path: 'merit-mapper', component:  MeritMapperComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
