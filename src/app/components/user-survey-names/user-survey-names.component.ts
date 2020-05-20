import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-survey-names',
  templateUrl: './user-survey-names.component.html',
  styleUrls: ['./user-survey-names.component.css']
})
export class UserSurveyNamesComponent implements OnInit {
  getDetails = [];
  list = [];

  url: string = "http://localhost:8080/tyss";
  constructor(private router:Router,private http:HttpClient) { }
  responses:Response[]

  ngOnInit() {
    this.submit();
  }
  submit() {
    this.http.get(`${this.url}/survey-details`).subscribe((res: any) => {
      this.responses=res.data;
      
      console.log(this.responses);
    
    });
  }
  navigationToUserSurveyList(item) {
    console.log(item);
    this.http.get(`${this.url}/${item}`).subscribe((res: any) => {
    console.log(res);
    this.list = res.data;
  
    localStorage.setItem("showQuestions", JSON.stringify(this.list));
    this.router.navigateByUrl('/userSurvey')
    });
  }
}
