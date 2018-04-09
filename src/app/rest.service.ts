import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class RestService{
  constructor(private http:Http){}
  post(query: any[]){
      return this.http.post('index.html#/search-patients',query);
  }

  get(){
      return this.http.get('mycal').map((response:Response) => response.json());
  }
}
