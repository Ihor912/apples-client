import { Injectable } from '@angular/core';
import { IApple } from '../common/protocol';

@Injectable({
  providedIn: 'root'
})
export class ApplesService {
  public apples: Array<IApple> = [
    {
      name: 'X',
      weight: 2
    },
    {
      name: 'Y',
      weight: 4
    }
  ];
}
