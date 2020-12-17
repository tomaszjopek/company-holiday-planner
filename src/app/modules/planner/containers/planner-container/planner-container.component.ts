import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { Planner } from '../../store/planner.actions';
import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';
import { AbstractWithSubscription } from '../../../../core/components/abstract-with-subscription';
import { SpinnerService } from '../../../../core/services/spinner.service';
import FetchAll = Planner.FetchAll;
import { PlannerState } from '../../store/planner.state';

@Component({
  selector: 'app-planner-container',
  templateUrl: './planner-container.component.html',
  styleUrls: ['./planner-container.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlannerContainerComponent extends AbstractWithSubscription implements OnInit {

  @Select(PlannerState.isLoading)
  isLoading$: Observable<boolean>;

  constructor(private spinnerService: SpinnerService) {
    super();
  }

  ngOnInit(): void {
    this.addSubscription(
      this.isLoading$.subscribe(isLoading => this.handleSpinner(isLoading))
    );

    this.fetchAll();
  }

  private handleSpinner(isLoading: boolean): void {
    isLoading ? this.spinnerService.show() : this.spinnerService.hide();
  }

  @Dispatch()
  private fetchAll(): FetchAll {
    return new FetchAll();
  }

}
