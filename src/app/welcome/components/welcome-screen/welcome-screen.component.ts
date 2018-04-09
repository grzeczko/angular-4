import { Router } from '@angular/router';
import { Component, OnInit, NgZone } from '@angular/core';
import { NgxElectronService } from './../../../ngx-electron/ngx-electron.service';

@Component({
    selector: 'seed-welcome-screen',
    templateUrl: './welcome-screen.component.html',
    styleUrls: ['./welcome-screen.component.scss']
})
export class WelcomeScreenComponent {
    public error: boolean;

    constructor(
        private electron: NgxElectronService,
        private router: Router,
        private zone: NgZone
      ) {
          this.error = false;
        }

    continue(value: string) {
        if (value) {
          this.electron.send('ping');
          this.electron.listener$.subscribe(message => {
              if (message === 'pong') {
                  this.electron.shell.beep();

                  //let win = BrowserWindow.getFocusedWindow();
                  // Access to the renderers BrowserWindow API
                  //win.setSize(1000, 900);

                  this.zone.run(() => this.router.navigateByUrl('/search-patient'));
                  return false;
              }
          });
        } else {
          this.error = true;
        }
    }
}
