import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlannerContainerComponent } from './containers/planner-container/planner-container.component';

const routes: Routes = [
  {
    path: 'planner',
    component: PlannerContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlannerRoutingModule { }
