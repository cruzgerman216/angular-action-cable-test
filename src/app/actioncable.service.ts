import { Injectable } from '@angular/core';
import { createConsumer } from '@rails/actioncable';

@Injectable({
  providedIn: 'root',
})
export class ActionCableService {
  private consumer = createConsumer('ws://localhost:3090/cable');

  subscribe(channelName: string, callbacks: any): any {
    return this.consumer.subscriptions.create(
      { channel: channelName },
      callbacks
    );
  }
}
