import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllStudentDetailsComponent } from './all-student-details/all-student-details.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AllStudentDetailsComponent,
  },
  // {
  //   path: '',
  //   component: HomeComponent,
  //   children: [
  //     {
  //       path: 'student',
  //       component: AllStudentDetailsComponent,
  //       resolve: { allDetails: StudentDetailsResolver },
  //     },
  // {
  //   path: 'student/:studentId',
  //   component: StudentDetilsComponent,
  // },
  // {
  //   path: 'create-exam',
  //   component: CreateExamComponent,
  // },  
  // {
  //   path: 'view-exam',
  //   component: ViewExamComponent,
  //   resolve: { viewExam: ViewExamDetailsResolver },
  // },
  // {
  //   path: 'view-exam/:examDetailId',
  //   component: ViewExamDetailComponent,
  // },
  // ],
  // },
  // {
  //   path: 'teacher',
  //   component: HeaderComponent,
  // },
  {
    path: '**',
    redirectTo: 'student',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
