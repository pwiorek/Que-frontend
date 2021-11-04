import { Injectable } from '@angular/core';
import {SwPush} from '@angular/service-worker';
import {NotificationsApiService} from '../../data/api/notifications-api.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  constructor(
    private swPush: SwPush,
    private notificationsApi: NotificationsApiService
  ) {
  }

  subscribeToNotifications(): void {
    this.notificationsApi.getVapidKey().subscribe(key => {
      console.log('nowy przyklad - 11 ');
      const enc = new TextDecoder('utf-8'); // always utf-8
      console.log(this.swPush.isEnabled)
      this.swPush.requestSubscription({
        serverPublicKey: 'BNHHMjQ7tiY1DjPXNGIcjgkpgXKV6+6WB37KVMaBNTu2tZu8tqrtJWlm78MLSv8dAJCEaWlbVtJHCbIJfLSB4n8'
      })
        .then((sub: PushSubscription) => {
          this.notificationsApi.addPushSubscriber(sub).subscribe(() => console.log(sub));
        })
        .catch(err => console.error('Could not subscribe to notifications', err));
    });

    this.swPush.messages.subscribe(value => {
      alert(value);
    })
  }

}

