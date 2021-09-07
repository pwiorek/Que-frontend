import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
  BASE_URL = 'https://queapi.jupw.net/api/v1';
  VERSION = '1.0.0';
}

export enum ViewBreakpoints {
  phone = '688px',
  tablet = '992px',
  laptop = '1280px',
}
