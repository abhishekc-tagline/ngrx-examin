import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AllStudents, AllStudentsData } from 'src/app/shared/interfaces/teacher';
import { TeacherService } from 'src/app/shared/services/teacher.service';
import { getAllStudents, getStudentById } from 'src/app/store/actions/teacher.actions';
import { selectAllStudentData } from 'src/app/store/selectors/teacher.selectors';

@Component({
  selector: 'app-all-student-details',
  templateUrl: './all-student-details.component.html',
  styleUrls: ['./all-student-details.component.scss']
})
export class AllStudentDetailsComponent implements OnInit {
  studentsDetails: AllStudentsData[] = []

  constructor(
    private teacherService: TeacherService,
    private store: Store<{ students: { students: AllStudents } }>
  ) { }

  ngOnInit(): void {
   
  }

  getData() {
    this.getAllStudentsData()
  }

  getAllStudentsData() {
    this.store.dispatch(getAllStudents())

  
  }

  selectData() {
    // this.store.select('students').subscribe((res) => {
    //   console.log('RESSSS ==> ', res);
    // })
    // this.store.pipe(select(selectAllStudentData)).subscribe((res) => {
    //   console.log('RES SELECT ==> ' , res);
      
    // })
  }
  getDataById() {
    this.store.dispatch(getStudentById({ id: '601bd6f333b0d50e793b37a9' }))
  }
}
