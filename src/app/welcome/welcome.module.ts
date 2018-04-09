import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'angular-calendar';
import { NgbModalModule, NgbDatepickerModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeScreenComponent } from './components/welcome-screen/welcome-screen.component';
import { GettingStartedComponent } from './components/getting-started/getting-started.component';
import { SearchPatientComponent } from './components/search-patient/search-patient.component';
import { CardComponent } from './components/card/card.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchPatientModalComponent } from './components/search-patient/search-patient-modal/search-patient-modal.component';
import AsyncValidator from '../async.validator';
import { CalendarComponent } from './components/calendar/calendar.component';
import { SidePanelComponent } from './components/side-panel/side-panel.component';
import { CalendarBulletinComponent } from './components/calendar-bulletin/calendar-bulletin.component';
import { CalendarHeaderComponent } from './components/calendar-bulletin/calendar-header.component';
import { DateTimePickerComponent } from './components/calendar-bulletin/date-time-picker.component';

@NgModule({
  imports: [
      CommonModule,
      WelcomeRoutingModule,
      FormsModule,
      NgbDatepickerModule.forRoot(),
      NgbTimepickerModule.forRoot(),
      ReactiveFormsModule,
      BrowserAnimationsModule,
      NgbModalModule.forRoot(),
      CalendarModule.forRoot()
  ],
    declarations: [
      WelcomeScreenComponent,
      GettingStartedComponent,
      SearchPatientComponent,
      CardComponent,
      NavigationComponent,
      FooterComponent,
      SearchPatientModalComponent,
      AsyncValidator,
      CalendarComponent,
      SidePanelComponent,
      CalendarBulletinComponent,
      CalendarHeaderComponent,
      DateTimePickerComponent
    ],
    exports: [
      CalendarHeaderComponent,
      DateTimePickerComponent
    ]
})
export class WelcomeModule { }
