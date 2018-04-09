import { NgModule, Component, OnInit, NgZone  } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ipcRenderer } from 'electron';
import { PouchDBService } from '../../../../_pouchdb/pouchdb2.service';
import AsyncValidator from '../../../../async.validator';

export interface Patients {
  id: string;
  optionalPatientId: string;
}

@Component({
  selector: 'seed-search-patient-modal',
  templateUrl: './search-patient-modal.component.html',
  styleUrls: ['./search-patient-modal.component.scss']
})
export class SearchPatientModalComponent implements OnInit {
  ipcRenderer: typeof ipcRenderer;
  patientForm: FormGroup;
  id: FormControl;
  optionalPatientId: FormControl;

  // Load default step -> 1
  step = 1;

  constructor(
    private database: PouchDBService,
    private router: Router,
    private zone: NgZone
  ) {
    this.ipcRenderer = (<any>window).require('electron').ipcRenderer;
  }

  closeModal(): void {
    this.ipcRenderer.send('close-modal');
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.id = new FormControl('', Validators.required);
    this.optionalPatientId = new FormControl('');
  }

  createForm() {
    this.patientForm = new FormGroup({
      id: this.id,
      optionalPatientId: this.optionalPatientId
    });
  }

  goBack() {
    this.step--;
  }

  nextStep() {
    if (this.id.valid) {
      this.step++;
    }
  }

  onSubmit({ value, valid }: { value: Patients, valid: boolean }) {

    if (valid) {
      // insert into DB
      this.database.put('patient', value);

      // at last step, close modal.
      this.closeModal();

      this.patientForm.reset();

      //this.zone.run(() => this.router.navigateByUrl('/calendar/' + this.id));
    }
  }
}
