import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TeacherState } from '../state/teacher-state';
import { AllStudents } from 'src/app/shared/interfaces/teacher';

export const selectStudentState = (state: any) => state.students

export const selectAllStudentData = createSelector(
    selectStudentState,
    (state: AllStudents) =>{
        console.log('STATE ===> ' , state);
        
         state.data
        }
)