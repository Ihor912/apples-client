import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IDialogData } from 'src/app/common/protocol';

@Component({
  selector: 'app-apples-dialog',
  templateUrl: './apples-dialog.component.html',
})
export class ApplesDialogComponent {
  name = '';
  weight = 0;

  constructor(
    public dialogRef: MatDialogRef<ApplesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDialogData
  ) {
    if (data && data.apple) {
      this.name = data.apple.name;
      this.weight = data.apple.weight;
    }
  }

  updateData(name = '', weight = 0) {
    this.data.apple.name = name;
    this.data.apple.weight = weight;
  }

  onOk(): void {
    this.updateData(this.name, this.weight);
    this.dialogRef.close(this.data.apple);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
