import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject as rxSubject, Subscription } from 'rxjs';
import { ExchangeApiService } from 'src/app/data/api/exchange-api.service';
import { ExchangeRequest } from 'src/app/data/entities/exchangeRequest';

@Component({
  selector: 'app-incoming-exchanges',
  templateUrl: './incoming-exchanges.component.html',
  styleUrls: ['./incoming-exchanges.component.scss']
})
export class IncomingExchangesComponent implements OnInit, OnDestroy {
  navPathList: string[] = ['home', 'exchanges', 'incoming'];
  exchangeNavIcon: string = 'incomingRequests';
  requestType: string = 'incoming';
  
  allRequests: ExchangeRequest[] = [];
  allRequestsChange: rxSubject<ExchangeRequest[]> = new rxSubject<ExchangeRequest[]>();
  
  filteredRequests: ExchangeRequest[] = [];

  private subscription: Subscription;

  constructor(
    private exchangeApi: ExchangeApiService
  ) { }

  ngOnInit(): void {
    this.fetchRequests();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  fetchRequests() {
    this.subscription = this.exchangeApi.getRequestsToUser().subscribe(requests => {
      this.allRequests = requests;
      this.allRequestsChange.next(this.allRequests);
    });
  }

  setFilteredRequests(requests: ExchangeRequest[]) {
    this.filteredRequests = requests;
  }

}