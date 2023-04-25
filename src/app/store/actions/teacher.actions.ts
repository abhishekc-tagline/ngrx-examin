import { createAction, props } from '@ngrx/store';
import { AllStudents, AllStudentsData, StudentDetails } from 'src/app/shared/interfaces/teacher';

export const GET_ALL_STUDENTS = '[Teacher] Get All Students';
export const GET_ALL_STUDENTS_SUCCESS = '[Teacher] Get All Students Success'
export const GET_ALL_STUDENTS_FAILURE = '[Teacher] Get All Students Failure'

export const getAllStudents = createAction(GET_ALL_STUDENTS);
export const getAllStudentsSuccess = createAction(GET_ALL_STUDENTS_SUCCESS, props<{ students: AllStudents }>());
export const getAllStudentsFailure = createAction(GET_ALL_STUDENTS_FAILURE, props<{ error: any }>());


export const GET_STUDENT_BY_ID = '[Teacher] Get Studnt By Id';
export const GET_STUDENT_BY_ID_SUCCESS = '[Teacher] Get Studnt By Id Success';
export const GET_STUDENT_BY_ID_FAILURE = '[Teacher] Get Studnt By Id Failure';

export const getStudentById = createAction(GET_STUDENT_BY_ID, props<{ id: string }>());
export const getStudentByIdSuccess = createAction(GET_STUDENT_BY_ID_SUCCESS, props<{ student: StudentDetails }>());
export const getStudentByIdFailure = createAction(GET_STUDENT_BY_ID_FAILURE, props<{ error: any }>());
