import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-previewquestions',
  templateUrl: './previewquestions.component.html',
  styleUrls: ['./previewquestions.component.css']
})
export class PreviewquestionsComponent implements OnInit {
  previewQuestions: {questionName: string, questionType: string, options: string[]}[];


  constructor(private http: HttpClient) { }

  ngOnInit() {
    // console.log(localStorage.getItem('anyquestions'));
    this.previewQuestions = JSON.parse(localStorage.getItem('anyquestions'));
    console.log(this.previewQuestions)
    for (let question of this.previewQuestions) {
      for (let option of question.options) {
        console.log(option)
        
      }
    }
  }

}
