import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, FormArray, Validators, FormControl } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { DatepickerDateCustomClasses } from "ngx-bootstrap/datepicker/models";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-editsurvey",
  templateUrl: "./editsurvey.component.html",
  styleUrls: ["./editsurvey.component.css"]
})
export class EditsurveyComponent implements OnInit {
  formData;
  editForm: FormGroup;
  spinner = false
  showBtn = false;
  anyquestions: {
    questionName: string;
    questionType: string;
    options: string[];
  }[];
  optionsArray: String[];
  file: any;
  showError;
  showMessage;
  isToShow = false;
  minDate: Date;
  maxDate: Date;
  date;
  dateCustomClasses: DatepickerDateCustomClasses[];
  error: any = {
    isError: false,
    errorMessage: ''
  };
  url: string = "http://localhost:8080/tyss";
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private SpinnerService: NgxSpinnerService) {


    const today = new Date();
    const date = today.getDate();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    if (today.getMonth() > 1) { 
      this.date = year + '-' + '0'+ month + '-' + date;
    } else {
      this.date = year + '-' + '0' + month + '-' + date;
    }
  }

  ngOnInit() {
    this.editForm = this.fb.group({
      surveyName: this.fb.control(null),
      description: this.fb.control(null, [Validators.required,
      Validators.maxLength(255)]),
      startDate: this.fb.control(null, [Validators.required]),
      endDate: this.fb.control(null, [Validators.required]),
      uploadImage: this.fb.control(null),
      questions: this.fb.array([this.returnQuestion()])
    });

    // THIS IS FOR EDIT

    this.formData = JSON.parse(localStorage.getItem("myform"));
    console.log(this.formData);
    this.editForm = this.fb.group({
      surveyId: this.fb.control(this.formData.surveyId),
      surveyName: this.fb.control(this.formData.surveyName),
      description: this.fb.control(this.formData.description),
      startDate: this.fb.control(this.formData.startDate),
      endDate: this.fb.control(this.formData.endDate),
      questions: this.fb.array(
        this.formData.questions.map(question => this.createQuestion(question))
      )
    });
    // for array refer this example:: https://stackblitz.com/edit/angular-dynamic-form-array-eg?file=src%2Fapp%2Fapp.component.ts
  }

  get surveyName() {
    return this.editForm.get('surveyName') as FormControl;
  }

  get description() {
    return this.editForm.get('description') as FormControl;
  }

  get startDate() {
    return this.editForm.get('startDate') as FormControl;
  }
  get endDate() {
    return this.editForm.get('endDate') as FormControl;
  }

  compareTwoDates() {
    if ((new Date(this.editForm.controls['startDate'].value) >= new Date(this.editForm.controls['endDate'].value))) {
      this.error = { isError: true, errorMessage: 'End Date Should be grater than start date' };
    }
    else {
      this.error = false;
    }
  }
  returnQuestion(): FormGroup {
    return this.fb.group({

      questionName: this.fb.control(null),
      questionType: this.fb.control(null),
      options: this.fb.array([
        this.addOptionsArray()
      ])
    });
  }
  addOptionsArray(): FormGroup {
    return this.fb.group({
      value: this.fb.control(null)
    })
  }


  addQuestion() {
    (this.editForm.get("questions") as FormArray).push(this.returnQuestion());
  }

  addOption1(i, e) {
    console.log(e.target.hidden);
    e.target.hidden = true;
    let control = (this.editForm.get("questions") as FormArray).controls[i].get('options') as FormArray
    control.push(this.addOptionsArray());
  }

  addOption2(i, e) {
    let control = (this.editForm.get("questions") as FormArray).controls[i].get('options') as FormArray
    control.push(this.addOptionsArray());
  }

  removeOption(i, j) {
    if (j == 0) {
      this.showBtn = true;
    }
    (((this.editForm.get("questions") as FormArray).controls[i] as FormGroup)
      .controls.options as FormArray).removeAt(j);
  }

  submit() {
    console.log(this.editForm.value)
    this.http.post(this.url + "/update-survey-details", this.editForm.value).subscribe((res: any) => {
      console.log(JSON.stringify(res));
      if (res.error == false) {
        this.isToShow = true;
        this.showMessage = "Survey is updated successfully";


      }
      else if (res.error == true) {
        this.showError = true;

      }
      setTimeout(() => {
        this.isToShow = null;
        this.router.navigateByUrl('/surveyName');


      }, 3000);
    });
  }

  createQuestion(question): FormGroup {
    return this.fb.group({
      questionName: this.fb.control(question.questionName),
      questionType: this.fb.control(question.questionType),
      options: this.fb.array(
        question.options.map(option => this.addOption(option))
      )
    });
  }

  addOption(option) {
    return this.fb.group({
      value: this.fb.control(option.value)
    })

  }

  deleteQuestion(i) {
    ((this.editForm.get("questions") as FormArray)).removeAt(i);
  }

  activate($e){
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });

      }
}
