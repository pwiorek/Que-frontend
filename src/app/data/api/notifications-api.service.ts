import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Globals} from '../../globals';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotificationsApiService {

  constructor(
    private http: HttpClient,
    private globals: Globals,
  ) { }

  addPushSubscriber(pushSubscription: PushSubscription) {
    const enc = new TextDecoder('utf-8');

    const requestUrl = `${this.globals.BASE_URL}/notifications/subscribe`;
    return this.http.post(requestUrl, { endpoint: pushSubscription.endpoint, key: this.arrayBufferToBase64(pushSubscription.getKey('p256dh')), auth: this.arrayBufferToBase64(pushSubscription.getKey('auth')) });
  }

  getVapidKey(): Observable<string> {
    const requestUrl = `${this.globals.BASE_URL}/notifications/vapid-key`;
    return this.http.get<any>(requestUrl).pipe(map(o => o.publicVapidKey));
  }

  arrayBufferToBase64( buffer ): string {
    let binary = '';
    let bytes = new Uint8Array( buffer );
    let len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode( bytes[ i ] );
    }
    return window.btoa( binary );
  }
}
