import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { AllStudentDetailsComponent } from './all-student-details/all-student-details.component';
import { EffectsModule } from '@ngrx/effects';
import { TeacherEffects } from '../../store/effects/teacher.effects';
import { StoreModule } from '@ngrx/store';
import { TeacherReducer } from '../../store/reducers/teacher.reducer';


@NgModule({
  declarations: [
    AllStudentDetailsComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    // StoreModule.forFeature(TeacherReducer),
    EffectsModule.forFeature([TeacherEffects])
  ]
})
export class TeacherModule { }
