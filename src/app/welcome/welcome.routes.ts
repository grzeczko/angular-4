import { Routes } from '@angular/router';
// app
import {
  WelcomeScreenComponent,
  GettingStartedComponent,
  SearchPatientComponent,
  SearchPatientModalComponent,
  CalendarComponent
} from './components/index';


export const WelcomeRoutes: Routes = [
    {
        path: 'welcome',
        component: WelcomeScreenComponent
    },
    {
        path: 'getting-started',
        component: GettingStartedComponent
    },
    {
        path: 'search-patient',
        component: SearchPatientComponent
    },
    {
        path: 'search-patient-modal',
        component: SearchPatientModalComponent
    },
    {
        path: 'calendar/:id',
        component: CalendarComponent
    }
];
