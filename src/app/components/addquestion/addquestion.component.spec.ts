import { Component, OnInit, DoCheck } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray, NgForm } from '@angular/forms'
import { QuestiondataService } from 'src/app/services/questiondata.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.css']
})
export class AddquestionComponent implements OnInit{

  myForm: FormGroup;
  anyquestions: {questionName: string, questionType: string, options: string[]}[];
  optionsArray: String[];


  constructor(private fb: FormBuilder, private questiondata: QuestiondataService , private router:Router) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      surveyName: this.fb.control(null),
      questions: this.fb.array([
        this.returnQuestion()
      ])
    });
    console.log(this.myForm);  
     
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
    this.questiondata.postQuestionData(this.myForm.value).subscribe(res => {
      console.log(res);
    })
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
}










