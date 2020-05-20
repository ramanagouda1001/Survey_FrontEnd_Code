import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-survey-questions',
  templateUrl: './survey-questions.component.html',
  styleUrls: ['./survey-questions.component.css']
})
export class SurveyQuestionsComponent implements OnInit {
  showData;
  isToShow;
  showMessage;
  showError;
  spinner = false
  url: string = "http://localhost:8080/tyss";
  
  constructor(private http:HttpClient,private router:Router,private SpinnerService: NgxSpinnerService) { }


  ngOnInit() {
    this.showData = JSON.parse(localStorage.getItem("showQuestions"));
    // console.log(this.showData[0].questions);
    
  }

  
  onSelectRadio(question, option) {
    const getQustion = this.showData.questions.find(
      x => x.questionId === question
    );

    getQustion.options.forEach(o => {
      if (o.value === option) {
        o.selected = true;
      } else {
        o.selected = false;
      }
    });
    console.log(this.showData);
  }

  

  onSelectCheckbox(question, option) {
    const getQustion = this.showData.questions.find(
      x => x.questionId === question
    );

    // Toggle for checkbox
    getQustion.options.forEach(o => {
      if (o.value === option) {
        o.selected = !o.selected;
      }
    });
    console.log(this.showData);
  }

  onSubmit() {
    // Send the same Data as we're modifying the same
    console.log(this.showData);
    this.http.post(`${this.url}/saving-response`,this.showData).subscribe((res: any) => {
      console.log(res);
      if(res.error == false){
        this.isToShow = true;
        this.showMessage = "Your survey has been recorded!!!"; 
        this.SpinnerService.show();  
        this.spinner = true; 
       }
      else if(res.error == true){
        this.showError = true;
        this.SpinnerService.hide(); 
        this.spinner = false; 
       }
       setTimeout(() => {
        this.isToShow = null;
        this.showError = false;
          this.router.navigateByUrl('/surveyName');
         this.SpinnerService.hide();
         this.spinner = false;
       }, 3000);
     
 }) ;
      
  
  }
}
