import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// electron
import { NgxElectronModule } from './ngx-electron/ngx-electron.module';
// app
import { AppRoutingModule } from './app-routing.module';
import { WelcomeModule } from './welcome/welcome.module';
import { AppComponent } from './app.component';

import { RestService } from './rest.service';
import { PouchDBService } from './_pouchdb/pouchdb2.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        AppRoutingModule,
        NgxElectronModule,
        WelcomeModule,
        NgbModule.forRoot()
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
      RestService,
      PouchDBService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
