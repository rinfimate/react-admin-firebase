import { Subscription } from 'rxjs';

export const cleanFirebaseReadsLoggerSubscriptions = (
  currentCounterSubscription: Subscription,
  lastCounterSubscription: Subscription,
  callback: () => any = null as any
) => {
  if (currentCounterSubscription) {
    currentCounterSubscription.unsubscribe();
  }
  if (lastCounterSubscription) {
    lastCounterSubscription.unsubscribe();
  }
  if (callback) {
    callback();
  }
};
