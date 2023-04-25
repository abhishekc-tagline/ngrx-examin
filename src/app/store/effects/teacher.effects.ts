import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getAllStudents, getAllStudentsFailure, getAllStudentsSuccess, getStudentById, getStudentByIdFailure, getStudentByIdSuccess } from '../actions/teacher.actions';
import { EMPTY, catchError, exhaustMap, map, of, tap } from 'rxjs';
import { TeacherService } from 'src/app/shared/services/teacher.service';


@Injectable()
export class TeacherEffects {

  constructor(
    private actions$: Actions,
    private teacherService: TeacherService
  ) { }

  getAllStudents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllStudents),
      exhaustMap(() => {
        return this.teacherService.getAllStudents().pipe(
          map((students) => {
            console.log('GET ALL STUDENTS ===> ', students);
            if (students.statusCode !== 200) {
              return getAllStudentsFailure({ error: students.message })
            } else {
              return getAllStudentsSuccess({ students })
            }
          }),
          catchError((error) => {
            console.log('ERROR ==> ', error);
            return of(getAllStudentsFailure({ error: error.message }))
          })
        )
      }))
  );

  getStudentById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getStudentById),
      exhaustMap((action: any) => {
        console.log('ID ====> ', action);

        return this.teacherService.getStudentById(action.id).pipe(
          map((student) => {
            console.log('STUDENT ===> ', student);

            if (student.statusCode !== 200) {
              return getStudentByIdFailure({ error: student.message })
            } else {
              return getStudentByIdSuccess({ student })
            }
          }),
          catchError((error) => {
            console.log('ERROR ==> ', error);
            return of(getStudentByIdFailure({ error: error.message }))
          })
        )
      }))
  );
}
