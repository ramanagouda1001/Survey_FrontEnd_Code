import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestiondataService {
  // _url:string = 'http://10.10.12.189:8080'

  constructor( private http: HttpClient) { }
  // postQuestionData(question) {
  //   return this.http.post(`${this._url}/add`,question);
  // }


 
}
 

