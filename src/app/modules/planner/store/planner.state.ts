import { Worker } from '../model/planner-data';
import { State, StateToken } from '@ngxs/store';

export class PlannerStateModel {
  workers: Worker[];
  loading: boolean;
}

const PLANNER_STATE_TOKEN = new StateToken<PlannerStateModel>('planner');


@State<PlannerStateModel>({
  name: PLANNER_STATE_TOKEN,
  defaults: {
    workers: [],
    loading: true
  }
})
export class PlannerState {

}
