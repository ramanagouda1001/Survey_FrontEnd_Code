import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class QuizService {
  showData = [];
  constructor(private http: HttpClient) { 
    this.getAll();
  }

  get(url: string) {
    return this.http.get(url);
  }

  getAll() {
    
    return [
      { id: 'data/javascript.json', name: 'JavaScript' },
      { id: 'data/aspnet.json', name: 'Asp.Net' },
      { id: 'data/csharp.json', name: 'C Sharp' },
      { id: 'data/designPatterns.json', name: 'Design Patterns' }
    ];
    //  this.showData = JSON.parse(localStorage.getItem("showQuestions"));
    //  console.log(this.showData)

    
      
   
  }

}
