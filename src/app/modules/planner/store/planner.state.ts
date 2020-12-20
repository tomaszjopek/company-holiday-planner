import { Worker } from '../model/planner-data';
import { Action, NgxsOnInit, Selector, State, StateContext, StateToken } from '@ngxs/store';
import { Planner } from './planner.actions';
import { Emitted, NgxsFirestoreConnect, StreamEmitted } from '@ngxs-labs/firestore-plugin';
import { patch } from '@ngxs/store/operators';
import FetchAll = Planner.FetchAll;
import { Injectable } from '@angular/core';
import { WorkersService } from '../services/workers.service';

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
@Injectable()
export class PlannerState implements NgxsOnInit {

  constructor(private workersService: WorkersService, private ngxsFirestoreConnect: NgxsFirestoreConnect) {
  }

  ngxsOnInit(ctx?: StateContext<PlannerStateModel>): void {
    // this.ngxsFirestoreConnect.connect(FetchAll, {
    //   to: () => this.workersService.collection$()
    // });
  }

  @Selector()
  static isLoading(state: PlannerStateModel): boolean {
    return state.loading;
  }

  @Selector()
  static workers(state: PlannerStateModel): Worker[] {
    return state.workers;
  }

  @Action(FetchAll)
  fetchAll(ctx: StateContext<PlannerStateModel>): void {
    const state = ctx.getState();
    ctx.patchState({...state, loading: true});

    ctx.patchState({
      ...state, workers: [
        {
          firstName: 'Tomasz',
          lastName: 'Jopek',
          img: 'https://via.placeholder.com/50.png',
          position: 'Developer',
          phoneNumber: '777 112 345',
          email: 'tom.jop@planner.pl'
        },
        {
          firstName: 'Jan',
          lastName: 'Nowak',
          img: 'https://via.placeholder.com/50.png',
          position: 'Project Manager',
          phoneNumber: '777 112 345',
          email: 'jan.nowak@planner.pl'
        },
        {
          firstName: 'Daniel',
          lastName: 'Kowalski',
          img: 'https://via.placeholder.com/50.png',
          position: 'Tester',
          phoneNumber: '777 112 345',
          email: 'daniel.kowalski@planner.pl'
        },
        {
          firstName: 'Wiktor',
          lastName: 'Drab',
          img: 'https://via.placeholder.com/50.png',
          position: 'Analityk',
          phoneNumber: '777 112 345',
          email: 'wiktor.drab@test.pl'
        }
      ], loading: false
    });


  }

  @Action(StreamEmitted(FetchAll))
  getAllEmitted(ctx: StateContext<PlannerStateModel>, {action, payload}: Emitted<FetchAll, Worker[]>): void {
    ctx.setState(patch({workers: payload, loading: false}));
  }

}
