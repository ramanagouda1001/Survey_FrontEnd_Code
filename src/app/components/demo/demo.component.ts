import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  myForm: FormGroup;
  anyquestions: {questionName: string, questionType: string, options: string[]}[];
  optionsArray: String[];
  showMainContent: Boolean = true;
  title = 'app';
  public progress: number;
  public message: string;
  mydata;
  
  data = [];
  

  constructor(private fb: FormBuilder, private router:Router) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      surveyName: this.fb.control(null),
      questions: this.fb.array([
        this.returnQuestion()
      ])
    });
    console.log(this.myForm);  
  this.mydata=(JSON.parse(localStorage.getItem('anyquestions'))) ;
  console.log(this.mydata);
  this.editSurvey(this.mydata)
  }

  editSurvey(data) {
    this.myForm.patchValue({
      surveyName: data.surveyName
    });
    this.myForm.setControl(
      "questions",
      this.populateQuestions(data.addresses)
    );
  }
 
  populateQuestions(adresses): FormArray {
    let formArray = new FormArray([]);

    adresses.map(element => {
      formArray.push(
        this.fb.group({
          street: element.street,
          postalCode: element.postalCode,
          region: element.region
        })
      );
    });

    return formArray;
  }


  returnQuestion(): FormGroup { 
    return this.fb.group({
      surveyName: this.fb.control(null),
      questionName: this.fb.control(null),
      questionType: this.fb.control(null),
      options: this.fb.array([
        this.fb.control(null)
      ])
    })
  }
 

  addQuestion() {
    (this.myForm.get('questions') as FormArray).push(this.returnQuestion());
  }

  addOption(i) {
    (((this.myForm.get('questions') as FormArray).controls[i] as FormGroup).controls.options as FormArray).push(this.fb.control(null));
  }

  removeOption(i, j) {
    (((this.myForm.get('questions') as FormArray).controls[i] as FormGroup).controls.options as FormArray).removeAt(j);
  }

  submit(form: NgForm) {
    console.log(this.myForm.value);
    
  }

  previewQuestions() {
    this.anyquestions = this.myForm.value.questions; //array
    localStorage.clear();
    localStorage.setItem('anyquestions',JSON.stringify(this.myForm.value.questions));
    console.log(this.anyquestions);
    // for (let question of this.anyquestions) {
    //   for (let option of question.options) {
    //     console.log(option)   
    //   }
    // }
  }

 

  praveen(questions) {
    console.log(questions)
  }
  



}


