import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { QuizComponent } from "./quiz/quiz.component";
import { HttpClientModule } from "@angular/common/http";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from "./components/home/home.component";
import { ContactformComponent } from "./components/contactform/contactform.component";
import { AboutComponent } from "./components/about/about.component";
import { AddquestionComponent } from "./components/addquestion/addquestion.component";
import { PreviewquestionsComponent } from "./components/previewquestions/previewquestions.component";
import { BannerComponent } from "./components/banner/banner.component";
import { UserquestionComponent } from "./components/userquestion/userquestion.component";
import { AdminviewComponent } from "./components/adminview/adminview.component";
import { SurveyListComponent } from "./components/survey-list/survey-list.component";
import { LoginComponent } from "./components/login/login.component";
import { SurveyNameComponent } from "./components/survey-name/survey-name.component";
import { EditsurveyComponent } from "./components/editsurvey/editsurvey.component";
import { UserSurveyListComponent } from "./components/user-survey-list/user-survey-list.component";
import { UserSurveyNamesComponent } from "./components/user-survey-names/user-survey-names.component";
import { ExcelComponent } from "./components/excel/excel.component";
import { DemoComponent } from "./components/demo/demo.component";
import { StatsComponent } from './components/stats/stats.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxSpinnerModule } from "ngx-spinner";
import { ImageCheckComponent } from './image-check/image-check.component';
import { SurveyQuestionsComponent } from './components/survey-questions/survey-questions.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactformComponent,
    AboutComponent,
    AddquestionComponent,
    PreviewquestionsComponent,
    BannerComponent,
    UserquestionComponent,
    QuizComponent,
    AdminviewComponent,
    SurveyListComponent,
    LoginComponent,
    SurveyNameComponent,
    EditsurveyComponent,
    UserSurveyListComponent,
    UserSurveyNamesComponent,
    ExcelComponent,
    DemoComponent,
    StatsComponent,
    ImageCheckComponent,
    SurveyQuestionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule,  
    RouterModule.forRoot([
      { path: "", component: LoginComponent },
      { path: "shahahah", component: HomeComponent },
      { path: "about", component: AboutComponent },
      { path: "contact", component: ContactformComponent },
      { path: "questions", component: AddquestionComponent },
      { path: "preview", component: PreviewquestionsComponent },
      { path: "surveyList", component: SurveyListComponent },
      { path: "surveyName", component: SurveyNameComponent },
      { path: "quiz", component: QuizComponent },
      { path: "userList", component: UserSurveyListComponent },
      { path: "userSurveyNames", component: UserSurveyNamesComponent },
      { path: "admin-view", component: AdminviewComponent },
      { path: "upload-excel", component: ExcelComponent },
      { path: "demo", component: DemoComponent },
      { path: "edit", component: EditsurveyComponent },
      { path: "stats", component: StatsComponent },
      { path: "image", component: ImageCheckComponent },
      { path: "userSurvey", component: SurveyQuestionsComponent }


    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
