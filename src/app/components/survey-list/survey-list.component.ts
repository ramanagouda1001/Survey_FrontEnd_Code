import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent implements OnInit {
  data;
  displayQuestions;
  constructor(private router:Router) { }

  ngOnInit() {
    this.data=[ 
      {
          "responseId": 10,
          "surveyId": 1,
          "userName": "Hema",
          "surveyName": "Employee",
          "questions": [
              {
                  "responseQuestionId": 11,
                  "questionName": "What is your gender",
                  "questionType": "mcq",
                  "options": [
                      {
                          "responseOptionId": 12,
                          "value": "Male",
                          "selected": true
                      },
                      {
                          "responseOptionId": 13,
                          "value": "Female",
                          "selected": false
                      },
                      {
                          "responseOptionId": 14,
                          "value": "Diclose",
                          "selected": false
                      }
                  ]
              },
        
            {
                "responseQuestionId": 12,
                "questionName": "What is your name",
                "questionType": "checkbox",
                "options": [
                    {
                        "responseOptionId": 13,
                        "value": "hema",
                        "selected": true
                    },
                    {
                        "responseOptionId": 14,
                        "value": "lucky",
                        "selected": false
                    },
                    {
                        "responseOptionId": 15,
                        "value": "pinky",
                        "selected": true
                    },
                    {
                      "responseOptionId": 16,
                      "value": "sunil",
                      "selected": false
                  }
                ]
            },

            {
              "responseQuestionId": 13,
              "questionName": "What is your opinion about company",
              "questionType": "paragraph",
              "options": [
                  {
                      "responseOptionId": 14,
                      "value": "heghjhgujyuyhggggggggggggggggggma"
                      
                  }
                  
              ]
          }
        ]
      }
  //     {
  //       "responseId": 11,
  //       "surveyId": 2,
  //       "userName": "Lucky",
  //       "surveyName": "Ethnic",
  //       "questions": [
  //           {
  //               "responseQuestionId": 12,
  //               "questionName": "What is your fav color",
  //               "questionType": "checkbox",
  //               "options": [
  //                   {
  //                       "responseOptionId": 13,
  //                       "value": "Pink",
                      
  //                       "selected": true
  //                   },
  //                   {
  //                       "responseOptionId": 14,
  //                       "value": "Red",
  //                       "selected": false
  //                   },
  //                   {
  //                       "responseOptionId": 15,
  //                       "value": "Blue",
  //                       "selected": true
  //                   }
  //               ]
  //           }
  //       ]
  //   },
  //   {
  //     "responseId": 12,
  //     "surveyId": 3,
  //     "userName": "Pinky",
  //     "surveyName": "Candidate",
  //     "questions": [
  //         {
  //             "responseQuestionId": 13,
  //             "questionName": "What is your name",
  //             "questionType": "mcq",
  //             "options": [
  //                 {
  //                     "responseOptionId": 14,
  //                     "value": "Hema",
  //                     "selected": true
  //                 },
  //                 {
  //                     "responseOptionId": 15,
  //                     "value": "Lucky",
  //                     "selected": false
  //                 },
  //                 {
  //                     "responseOptionId": 16,
  //                     "value": "Pinky",
  //                     "selected": false
  //                 }
  //             ]
  //         }
  //     ]
  // }
    ]
    // this.data = JSON.parse(localStorage.getItem('adminPreiew'));
    console.log(this.data);
  }

  navigateToAddQuestions(){
   localStorage.setItem('getQuestions',JSON.stringify(this.data));
   this.router.navigateByUrl('admin-view');
  }

}
