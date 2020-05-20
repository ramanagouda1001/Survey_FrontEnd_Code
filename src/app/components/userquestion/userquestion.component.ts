import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-userquestion',
  templateUrl: './userquestion.component.html',
  styleUrls: ['./userquestion.component.css']
})
export class UserquestionComponent implements OnInit {

  // userQuestions: { questionName: string, questionType: string, options: string[] }[];
  userQuestions;

newarray;

  constructor() { }


  ngOnInit() {
    this.userQuestions = [{
      "questionId":1,
      "questionName":"What is your fav color?",
      "questionType":"mcq",
      "options":[{"name":"Red","id":11},{"name":"Green","id":12},{"name":"Blue","id":13},{"name":"Black","id":14}]
     },
      {"questionId":2,
      "questionName":"What is your fav movie?",
      "questionType":"mcq",
      "options":[{"name":"Avengers","id":21},{"name":"Justice League","id":22},{"name":"Batman","id":23},{"name":"Superman","id":24}]
      
     }]
    console.log(this.userQuestions);
  }
  onsubmit(form: NgForm) {
    console.log(form.value)
  
  }
  sendAnswer(q,e) {
    if(e.target.checked){

    }
    this.newarray=[];
    console.log(q.questionName);
    this.newarray.push({questionName:q.questionName,option:e})
  
console.log(this.newarray)
  }

 








}
