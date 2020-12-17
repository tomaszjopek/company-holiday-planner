import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlannerRoutingModule } from './modules/planner/planner-routing.module';

const routes: Routes = [
  {
    path: 'planner',
    loadChildren: () => import('./modules/planner/planner.module').then(m => m.PlannerModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    PlannerRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
