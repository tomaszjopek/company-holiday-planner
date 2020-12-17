import { NgModule } from '@angular/core';
import { PlannerContainerComponent } from './containers/planner-container/planner-container.component';
import { CoreModule } from '../../core/core.module';


@NgModule({
  declarations: [PlannerContainerComponent],
  imports: [
    CoreModule
  ]
})
export class PlannerModule { }
