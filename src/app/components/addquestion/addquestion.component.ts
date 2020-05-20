
import { Component, OnInit, DoCheck } from "@angular/core";
import { FormBuilder, Validators, FormGroup, FormArray, NgForm, FormControl } from "@angular/forms";
import { QuestiondataService } from "src/app/services/questiondata.service";
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { DatepickerDateCustomClasses } from "ngx-bootstrap/datepicker/models";
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: "app-addquestion",
  templateUrl: "./addquestion.component.html",
  styleUrls: ["./addquestion.component.css"]
})
export class AddquestionComponent implements OnInit {
  myForm: FormGroup;

  showBtn: boolean = false;
  spinner = false
  showError;
  public userfile: any = File;
  showMessage;
  isToShow = false;
  anyquestions: { questionName: string; questionType: string; options: string[]; }[];
  optionsArray: String[];
  file: any;
  minDate: Date;
  maxDate: Date;
  dateCustomClasses: DatepickerDateCustomClasses[];
  error: any = {
    isError: false,
    errorMessage: ''
  };
  date;
  _url: string = "http://localhost:8080/tyss";
  responses:Response[];

  constructor(private fb: FormBuilder, private questiondata: QuestiondataService, private router: Router, private http: HttpClient, private SpinnerService: NgxSpinnerService) {
 
    // const today = new Date();
    // const date = today.getDate();
    // const year = today.getFullYear();
    // const month = today.getMonth() + 1;
    // if (today.getMonth() > 1) {
    //   this.date = year + '-' + month + '-' + date;
    // } else {
    //   this.date = year + '-' + '0' + month + '-' + date;
    // }
   
    this.minDate = new Date();
    this.maxDate = new Date();
    this.maxDate.setMonth(this.maxDate.getMonth() + 10);
    const now = new Date();
    const todaydate = new Date();
    todaydate.setDate(now.getDate());
    console.log(todaydate);
    this.dateCustomClasses = [
      { date: now, classes: [] },
      { date: todaydate, classes: ['bg-warning'] }
    ];

  }


  ngOnInit() {
    this.myForm = this.fb.group({
      userName: this.fb.control("Hema",),
      surveyName: this.fb.control(null,
        [Validators.required,]),
      description: this.fb.control(null,
        [Validators.required,
        Validators.maxLength(255)]),
      startDate: this.fb.control(null, [Validators.required]),
      endDate: this.fb.control(null, [Validators.required]),
      
      questions: this.fb.array([this.returnQuestion()])
    });
    console.log(this.myForm);
  
  }

  get surveyName() {
    return this.myForm.get('surveyName') as FormControl;
  }

  get description() {
    return this.myForm.get('description') as FormControl;
  }

  get startDate() {
    return this.myForm.get('startDate') as FormControl;
  }
  get endDate() {
    return this.myForm.get('endDate') as FormControl;
  }
  
  compareTwoDates() {
    if ((new Date(this.myForm.controls['startDate'].value) >= new Date(this.myForm.controls['endDate'].value))) {
      this.error = { isError: true, errorMessage: 'End Date Should be grater than start date' };
    }
    else {
      this.error = false;
    }
  }

  returnQuestion(): FormGroup {
    return this.fb.group({
  
      questionName: this.fb.control(null, [Validators.required]),
      questionType: this.fb.control(null, [Validators.required]),
      options: this.fb.array([
        this.addOptionsArray()
      ])
    });
  }
  get questionName() {
    return this.myForm.get('questionName') as FormControl;
  }
  get questionType() {
    return this.myForm.get('questionType') as FormControl;
  }

  addOptionsArray(): FormGroup {
    return this.fb.group({
      value: this.fb.control(null)
    })
  }

  addQuestion() {
    (this.myForm.get("questions") as FormArray).push(this.returnQuestion());
  }

  deleteQuestion(i) {
    ((this.myForm.get("questions") as FormArray)).removeAt(i);
  }

  addOption(i, e) {
    console.log(e.target.hidden);
    e.target.hidden = true;
    let control = (this.myForm.get("questions") as FormArray).controls[i].get('options') as FormArray
    control.push(this.addOptionsArray());
  }


  addOption1(i, e) {
    console.log(e.target.hidden);

    let control = (this.myForm.get("questions") as FormArray).controls[i].get('options') as FormArray
    control.push(this.addOptionsArray());
  }

  removeOption(i, j): void {
    console.log(j);
    if (j == 0) {
      this.showBtn = true;
    }
    (((this.myForm.get("questions") as FormArray).controls[i] as FormGroup)
      .controls.options as FormArray).removeAt(j);
  }

  previewQuestions() {
    this.anyquestions = this.myForm.value.questions; //array
    localStorage.clear();
    localStorage.setItem(
      "anyquestions",
      JSON.stringify(this.myForm.value.questions)
    );
    console.log(this.anyquestions);
    
  }


  // for image and text upload
  onselectednewFile(event) {
    const file = event.target.files[0];
    this.userfile = file;
  }

  submit() {
    console.log(this.myForm.value);
    if (this.myForm.value) {
      const survey = this.myForm.value;
      let formData = new FormData();

      formData.append('user', JSON.stringify(survey));
      formData.append('file', this.userfile);
      console.log(formData);
      this.http.post(this._url + '/add-survey-details', formData).subscribe((res: any) => {
        console.log(res);
        if (res.error == false) {
          this.isToShow = true;
          this.showMessage = "Survey added successfully";
          this.SpinnerService.show();
          this.spinner = true;
        }
        else if (res.error == true) {
          this.showError = true;
          this.SpinnerService.hide();
          this.spinner = false;
        }

        setTimeout(() => {
          this.isToShow = null;
          this.showError = false;
          this.router.navigateByUrl('/surveyName');
          this.myForm.reset();
          this.error = false;
          this.SpinnerService.hide();
          this.spinner = false;
        }, 2000);

      });
      err => {
        this.showError = true;

      }

    }

  }

  activate($e){
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });

      }
}

