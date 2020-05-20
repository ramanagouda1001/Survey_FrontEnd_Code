import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminview',
  templateUrl: './adminview.component.html',
  styleUrls: ['./adminview.component.css']
})
export class AdminviewComponent implements OnInit {
  quiz:any;
  constructor() { }

  ngOnInit() {
    // console.log((localStorage.getItem('adminPreiew')));
    this.quiz=JSON.parse(localStorage.getItem('getQuestions'))
    console.log(this.quiz);

  }

}


