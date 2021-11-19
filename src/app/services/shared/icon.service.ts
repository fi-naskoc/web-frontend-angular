import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IconService {

  public readonly DISCUSSION = '🗨';
  public readonly BACK = '❮';

  constructor() { }
}
