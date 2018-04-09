import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PouchDBService } from './../../../_pouchdb/pouchdb2.service';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit, OnDestroy {
  id: string;
  optionalPatientId: string;
  private sub: any;
  public instance: CalendarComponent;

  constructor(
    private database: PouchDBService,
    private route: ActivatedRoute
  ) {
    this.instance = this;
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = params['id'];

       this.database.get('patient', this.id).then(
         (res) => {
           this.optionalPatientId = res.patients[0].optionalPatientId;
           console.log(res.patients[0]);
         }
       );
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
