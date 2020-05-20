import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-survey-list',
  templateUrl: './user-survey-list.component.html',
  styleUrls: ['./user-survey-list.component.css']
})
export class UserSurveyListComponent implements OnInit {
surveyNames=[];
  constructor(private router:Router) { }

  ngOnInit() {
    console.log(localStorage.getItem('adminPreiew'));
    this.surveyNames = JSON.parse(localStorage.getItem('adminPreiew'));
    console.log(this.surveyNames);

  }
  navigateToQuiz(){
    this.router.navigateByUrl('/quiz');
}
}
