import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

export class AbstractWithSubscription implements OnDestroy {

  private subscriptions: Subscription[] = [];

  public addSubscriptions(subscriptions: Subscription[]): void {
    this.subscriptions.concat(subscriptions);
  }

  public addSubscription(subscription: Subscription): void {
    this.subscriptions.push(subscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
