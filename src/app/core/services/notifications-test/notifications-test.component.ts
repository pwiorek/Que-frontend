import { Component, OnInit } from '@angular/core';
import {NotificationsService} from '../notifications.service';

@Component({
  selector: 'app-notifications-test',
  templateUrl: './notifications-test.component.html',
  styleUrls: ['./notifications-test.component.scss']
})
export class NotificationsTestComponent implements OnInit {
  isClicked = false;
  constructor(
    private notificationsService: NotificationsService
  ) { }

  ngOnInit(): void {
  }

  subToNotifications(): void {
    this.notificationsService.subscribeToNotifications();
    this.isClicked = true;
  }

}
