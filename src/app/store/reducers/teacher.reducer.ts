import { createReducer, on } from '@ngrx/store';
import { TeacherState } from '../state/teacher-state';
import { getAllStudentsSuccess, getStudentByIdSuccess } from '../actions/teacher.actions';

// export const teacherFeatureKey = 'teacher';

export const initialState: TeacherState = {
  students: []
};

export const teacherReducer = createReducer(
  initialState,
  on(getAllStudentsSuccess, (state, { students }) => ({ ...state, ...students })),
  on(getStudentByIdSuccess, (state, { student }) => ({ ...state, student }))
);

export function TeacherReducer(state: any, action: any) {
  return teacherReducer(state, action)
}
