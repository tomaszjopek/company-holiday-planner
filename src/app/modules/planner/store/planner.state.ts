import { Worker } from '../model/planner-data';
import { Action, Selector, State, StateContext, StateToken } from '@ngxs/store';
import { Planner } from './planner.actions';
import FetchAll = Planner.FetchAll;
import { Observable } from 'rxjs';

export class PlannerStateModel {
  workers: Worker[];
  loading: boolean;
}

const PLANNER_STATE_TOKEN = new StateToken<PlannerStateModel>('planner');


@State<PlannerStateModel>({
  name: PLANNER_STATE_TOKEN,
  defaults: {
    workers: [],
    loading: false
  }
})
export class PlannerState {

  @Selector()
  static isLoading(state: PlannerStateModel): boolean {
    return state.loading;
  }

  @Action(FetchAll)
  fetchAll(ctx: StateContext<PlannerStateModel>): void {
    const state = ctx.getState();
    ctx.patchState({...state, loading: true});
  }

}
