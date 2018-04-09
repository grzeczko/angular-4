import { Directive, forwardRef } from "@angular/core";
import { NG_ASYNC_VALIDATORS, Validator, AbstractControl } from "@angular/forms";
import { Observable } from "rxjs/Rx";
import { PouchDBService } from './_pouchdb/pouchdb2.service';
@Directive({
  selector: "[asyncValidator][formControlName], [asyncValidator][ngModel]",
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => AsyncValidator), multi: true
    },
    PouchDBService
  ]
})

export default class AsyncValidator implements Validator {

  constructor(private database: PouchDBService) {}

  validate( c : AbstractControl ) : Promise<{[key : string] : any}> {
    return this.validateUniquePatientIDPromise(c.value);
  }

  validateUniquePatientIDPromise( id : string ) {
    return new Promise(resolve => {
      this.database.get('patient', id).then(function (res) {
        let patients = res.patients.length;

        if( patients > 0 ) {
          resolve({
            asyncInvalid: true
          })
        } else {
          resolve(null);
        }
      });
    })
  }

}
