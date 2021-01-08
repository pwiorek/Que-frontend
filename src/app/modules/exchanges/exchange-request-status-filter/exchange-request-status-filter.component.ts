import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject as rxSubject, Subscription } from 'rxjs';
import { ExchangeRequest, RequestStatus } from 'src/app/data/entities/exchangeRequest';

@Component({
  selector: 'app-exchange-request-status-filter',
  templateUrl: './exchange-request-status-filter.component.html',
  styleUrls: ['./exchange-request-status-filter.component.scss']
})
export class ExchangeRequestStatusFilterComponent implements OnInit, OnDestroy {
  navPathList: string[] = ['home', 'exchanges', 'incoming'];
  requestStatuses: string[] = [RequestStatus.ALL, RequestStatus.PENDING, RequestStatus.ACCEPTED, RequestStatus.DECLINED, RequestStatus.INVALID];
  
  selectedFilter: string = this.requestStatuses[0];

  @Input() allRequests: ExchangeRequest[] = [];
  @Input('requestsChange') private allRequestsChange: rxSubject<ExchangeRequest[]> = new rxSubject<ExchangeRequest[]>();
  @Output('filteredRequests') filteredRequests: EventEmitter<ExchangeRequest[]> = new EventEmitter<ExchangeRequest[]>();

  private subscription: Subscription

  constructor() { }

  ngOnInit(): void {
    this.subscription = this.allRequestsChange.subscribe(requests => {
      this.allRequests = requests
      this.filterRequests();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  addFilteredRequests(requests: ExchangeRequest[]) {
    this.filteredRequests.emit(requests);
  }

  filterRequests() {
    switch(this.selectedFilter) {
      case RequestStatus.ALL:       this.addFilteredRequests(this.allRequests); break;
      case RequestStatus.PENDING:   this.addFilteredRequests(this.allRequests.filter(request => request.status === RequestStatus.PENDING.toString().toUpperCase())); break;
      case RequestStatus.ACCEPTED:  this.addFilteredRequests(this.allRequests.filter(request => request.status === RequestStatus.ACCEPTED.toString().toUpperCase())); break;
      case RequestStatus.DECLINED:  this.addFilteredRequests(this.allRequests.filter(request => request.status === RequestStatus.DECLINED.toString().toUpperCase())); break;
      case RequestStatus.INVALID:   this.addFilteredRequests(this.allRequests.filter(request => request.status === RequestStatus.INVALID.toString().toUpperCase())); break;
    }
  }
}
