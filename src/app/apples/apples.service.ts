import { Injectable, OnDestroy } from '@angular/core';
import { IApple } from '../common/protocol';
import { BehaviorSubject } from 'rxjs';

import { HttpRequestor } from '../common/http-requestor';
import { Paths } from '../common/const';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ApplesService implements OnDestroy {
  applesSource: BehaviorSubject<IApple[]>;

  constructor(public httpRequestor: HttpRequestor, public snackBar: MatSnackBar) {
    this.applesSource = new BehaviorSubject<IApple[]>([]);

    this.applesSource.subscribe(data => {
      console.log('dataUpdated: ', data);
    });
  }

  apples(): IApple[] {
    return this.applesSource.getValue();
  }

  public getApples() {
    this.httpRequestor.getRequest(Paths.Apples)
      .subscribe(apples => {
        this.applesSource.next(apples);
      }, () => this.snackBar.open('You got error on apples data loading!', 'Ok'));
  }

  public create(apple: IApple) {
    this.httpRequestor.postRequest(Paths.CreateApple, apple)
      .subscribe(() => {
        const apples = this.apples();
        this.applesSource.next([...apples, apple]);
      }, () => this.snackBar.open('You cannot create new items with existing weights!', 'Ok'));
  }

  public modify(apple: IApple) {
    this.httpRequestor.putRequest(Paths.ModifyApple, apple.weight, apple)
      .subscribe(() => {
        const apples = this.apples();
        const itemIndex = apples.indexOf(apple);
        if (itemIndex !== -1) {
          apples.splice(itemIndex, 1);
          apples.splice(itemIndex, 0, apple);
        }

        this.applesSource.next(apples);
      }, () => this.snackBar.open('You got error on modify apple!', 'Ok'));
  }

  public remove(apple: IApple) {
    this.httpRequestor.deleteRequest(Paths.DeleteApple, apple.weight)
      .subscribe(() => {
        const apples = this.apples();
        const index = apples.indexOf(apple);
        if (index !== -1) {
          apples.splice(index, 1);
        }
        this.applesSource.next(apples);
      }, () => this.snackBar.open('You got error on remove!', 'Ok'));
  }


  ngOnDestroy() {
    this.applesSource.unsubscribe();
  }
}
