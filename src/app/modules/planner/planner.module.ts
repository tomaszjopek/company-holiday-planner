import { NgModule } from '@angular/core';
import { PlannerContainerComponent } from './containers/planner-container/planner-container.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { NgxsModule } from '@ngxs/store';
import { PlannerState } from './store/planner.state';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [PlannerContainerComponent],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    NgxsModule.forFeature([PlannerState]),
    CommonModule,
    FontAwesomeModule
  ]
})
export class PlannerModule { }
