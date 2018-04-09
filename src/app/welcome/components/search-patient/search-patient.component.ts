import { Component, OnInit, NgZone } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgxElectronService } from './../../../ngx-electron/ngx-electron.service';
import { ipcRenderer } from 'electron';
import { PouchDBService } from './../../../_pouchdb/pouchdb2.service';

interface IPatient {
  id: string,
  optionalPatientId: string,
  rev: string
}

@Component({
  selector: 'search-patient-started',
  templateUrl: './search-patient.component.html',
  styleUrls: ['./search-patient.component.scss']
})
export class SearchPatientComponent implements OnInit {
    ipcRenderer: typeof ipcRenderer;
    patients: Array<IPatient>;
    patientsOnLoad: Array<IPatient>;

    constructor(
      private router: Router,
      private database: PouchDBService,
      private zone: NgZone
    ) {
      this.ipcRenderer = (<any>window).require('electron').ipcRenderer;
    }

    filterPatients(search): void {
      this.patients = this.patientsOnLoad.filter((el) => {
        return el.id.indexOf(search) > -1
      });
    }

    addPatient() {
      let modalLocation = '/search-patient-modal';

      this.ipcRenderer.send('open-modal', {
        location: modalLocation
      });

      return false;
    }

    goToPatientPage(id): void {
      this.zone.run(() => this.router.navigateByUrl('/calendar/' + id));
    }

    ngOnInit() {
      this.database.fetch('patient').then(
        (res) => {
          this.patients = res.patients;
          this.patientsOnLoad = res.patients;
        }
      );
    }
}
