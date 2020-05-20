import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-survey-name',
  templateUrl: './survey-name.component.html',
  styleUrls: ['./survey-name.component.css']
})
export class SurveyNameComponent implements OnInit {

  getDetails = [];
  emptyerror;
  survey = [];
  list = [];
  surveyId;
  surveyname;
  surveynames;
  message;
  display3 = 'none';
  isToShow;
  showMessage;
  showError;
  url: string = "http://localhost:8080/tyss";


  constructor( private router:Router,private http:HttpClient,private SpinnerService:NgxSpinnerService) { }

  responses:Response[];
 
  
  ngOnInit() {
    this.submit1();
   
  }

  submit1() {
    this.http.get(`${this.url}/survey-details`).subscribe((res: any) => {
      console.log(res);
if(res.error == true){
  this.emptyerror = res.message;
  console.log(this.emptyerror);
 
}
else if(res.error == false){
  this.responses=res.data;
}
    
    
    });
  }


  navigations(item) {
    console.log(item);
    localStorage.clear();
    localStorage.setItem("myform", JSON.stringify(item));
    this.router.navigateByUrl('/edit');
    this.SpinnerService.show();
    setTimeout(() => {
    this.SpinnerService.hide();
    }, 1000);
    }


  disablePopUp(item) {
    console.log(item);
    this.survey=item;
    this.surveyId = item.surveyId;
    this.surveyname = item.surveyName;
    console.log(this.surveyId);
    this.display3 = 'block';
  }


  closeModal() {
    this.display3 = 'none';
   }


  disableSurvey(){
    console.log(this.surveyId);
    this.http.delete(`${this.url}/${this.surveyId}`).subscribe((res: any) => {
    console.log(res);
    if(res.message == "Survey is deleted" && res.error == false){
      this.isToShow = true;
      this.showMessage = res.message; 
      this.display3 = 'none';
      this.submit1();
    }
    else if(res.error == true){
      this.showError = true;
     }
    setTimeout(() => {
      this.isToShow = null;
      this.showError = false;
      }, 5000);
    });
  }

  redirect(item){
   console.log(item);
    this.http.get(`${this.url}/${item}`).subscribe((res: any) => {
    console.log(res);
    // console.log(JSON.stringify(res.list));
     this.list = res.data;
    // this.list.push(res.list);
    console.log(this.list)
  
    // console.log(this.surveynames);
    localStorage.clear();
    localStorage.setItem("showQuestions", JSON.stringify(this.list));
    this.router.navigateByUrl('/userSurvey');
    });
  }

}
