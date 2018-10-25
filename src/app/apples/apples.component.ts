import { Component, OnInit } from '@angular/core';
import { ApplesService } from './apples.service';
import { IApple, IDialogData } from '../common/protocol';
import { MatDialog } from '@angular/material';
import { ApplesDialogComponent } from './apples-dialog/apples-dialog.component';

@Component({
  selector: 'app-apples',
  templateUrl: './apples.component.html',
  styleUrls: ['./apples.component.css']
})
export class ApplesComponent implements OnInit {

  constructor(public applesService: ApplesService, public dialog: MatDialog) { }

  ngOnInit() {
    this.applesService.getApples();
  }

  create() {
    const emptyData = { weight: 0, name: '' };
    this.openDialog('Create New Apple', emptyData).subscribe(result => {
      if (result) {
        this.applesService.create(result);
      }
    });
  }

  modify(apple: IApple) {
    this.openDialog('Modify Apple', apple).subscribe(result => {
      if (result) {
        this.applesService.modify(result);
      }
    });
  }

  remove(apple: IApple) {
    this.applesService.remove(apple);
  }

  openDialog(header: string, apple: IApple) {
    const data: IDialogData = { header, apple };
    const dialogRef = this.dialog.open(ApplesDialogComponent, {
      width: '230px',
      data
    });

    return dialogRef.afterClosed();
  }

}
