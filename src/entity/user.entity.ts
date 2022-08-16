import {Subscription} from './subscription.entity';
import {StreamingService} from './streamingService.entity';

export class User {
    constructor(public subscriptions: Subscription[] = []) {
    }

    subscribe(streamingService: StreamingService): Subscription {
        const subscription = new Subscription(streamingService);
        this.subscriptions.push(subscription)
        return subscription
    }
}
