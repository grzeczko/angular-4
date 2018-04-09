import { Injectable, EventEmitter } from '@angular/core';
import PouchDB from 'pouchdb';
PouchDB.plugin(require('relational-pouch'));
PouchDB.plugin(require('pouchdb-find'));

@Injectable()
export class PouchDBService {

    private isInstantiated: boolean;
    private database: any;

    public constructor() {
        if(!this.isInstantiated) {
            this.database = new PouchDB("http://127.0.0.1:5984/mycal", {
              auth: {
                username: 'ufpdbuser',
                password: 'M9xNMJGT/y'
              }
            })
            this.database.info().then(function (info) {
              console.log(info);
            });
            this.isInstantiated = true;

            this.setSchema();
        }
    }

    private setSchema() {
      this.database.setSchema([
        {
          singular: 'patient',
          plural: 'patients'
        }
      ]);
    }

    public fetch(type: string) {
        return this.database.rel.find(type);
    }

    public get(type: string, id: string) {
        return this.database.rel.find(type, id);
    }

    public put(type: string, document: any) {
        return this.database.rel.save(type, document).catch(function (err) {
          if (err.status === 409) { // conflict

          } else {
            throw err; // some other error
          }
        });
    }

}
