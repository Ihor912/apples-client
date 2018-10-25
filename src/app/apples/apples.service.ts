import { Injectable, OnDestroy } from '@angular/core';
import { IApple } from '../common/protocol';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplesService implements OnDestroy {
  public applesData: IApple[] = [
    {
      name: 'X',
      weight: 2
    },
    {
      name: 'Y',
      weight: 4
    },
    {
      name: 'A',
      weight: 6
    },
    {
      name: 'C',
      weight: 38
    }
  ];

  applesSource: BehaviorSubject<IApple[]>;

  constructor() {
    this.applesSource = new BehaviorSubject<IApple[]>(this.applesData);

    this.applesSource.subscribe(data => {
      console.log('dataUpdated: ', data);
    });
  }

  getApples(): IApple[] {
    return this.applesSource.getValue();
  }

  public create(apple: IApple) {
    const apples = this.getApples();
    this.applesSource.next([...apples, apple]);
  }

  public modify(apple: IApple) {
    const itemIndex = this.remove(apple);
    const apples = this.getApples();
    if (itemIndex !== -1) {
      apples.splice(itemIndex, 0, apple);
    }

    this.applesSource.next(apples);
  }

  public remove(apple: IApple) {
    const apples = this.getApples();
    const index = apples.indexOf(apple);
    if (index !== -1) {
      apples.splice(index, 1);
    }
    this.applesSource.next(apples);

    return index;
  }

  ngOnDestroy() {
    this.applesSource.unsubscribe();
  }
}
