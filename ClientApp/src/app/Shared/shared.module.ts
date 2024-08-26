import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { BsDatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionComponent } from 'src/app/accordion/accordion.component';
import { PanelComponent } from 'src/app/accordion/panel/panel.component';
import { ErrorComponent } from 'src/app/error/error.component';
import { LoadingComponent } from 'src/app/loading/loading.component';
import { TabComponent } from 'src/app/tab/tab.component';
import { PaginationUiComponent } from 'src/app/pagination-ui/pagination-ui.component';
import { ModalComponent } from 'src/app/modal/modal.component';
import { TabsComponent } from 'src/app/tabs/tabs.component';
import { PopoverModule } from '@easiangular/ngx-smart-popover';


@NgModule({
  declarations: [
    AccordionComponent,
    PanelComponent,
    ErrorComponent,
    ModalComponent,
    TabComponent,
    TabsComponent,
    PaginationUiComponent,
    LoadingComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgScrollbarModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    PopoverModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgScrollbarModule,
    BsDatepickerModule,
    BrowserAnimationsModule,
    PopoverModule,
    AccordionComponent,
    PanelComponent,
    ErrorComponent,
    ModalComponent,
    TabComponent,
    TabsComponent,
    PaginationUiComponent,
    LoadingComponent
  ],
  providers: [BsDatepickerConfig],
})
export class SharedModule { }
