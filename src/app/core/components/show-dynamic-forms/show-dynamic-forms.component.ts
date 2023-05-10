import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { APICallSService } from 'src/app/service/apicall-s.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent, DialogData } from '../dialog/dialog.component';

@Component({
  selector: 'app-show-dynamic-forms',
  templateUrl: './show-dynamic-forms.component.html',
  styleUrls: ['./show-dynamic-forms.component.scss'],
})
export class ShowDynamicFormsComponent implements OnInit {
  public formData: any;
  formSelectControl = new FormControl();
  options: any = [];

  ngOnInit(): void {
    this.getListFormJson();
  }
  isObjectEmpty(obj: any) {
    if (obj === undefined) {
      return false;
    }
    return Object.keys(obj).length > 0;
  }
  constructor(private service: APICallSService, public dialog: MatDialog) {
    this.formSelectControl.valueChanges.subscribe((value) => {
      this.getFormJson(value);
    });
  }

  getListFormJson() {
    this.service.getListFormJson().subscribe((list: any) => {
      this.options = list;
    });
  }

  getFormJson(key: any) {
    if (key == '' || key === '') {
      this.formData = [];
    } else {
      this.service.getFormJson(key).subscribe((formData: any) => {
        this.formData = formData;
      });
    }
  }

  onFormSubmit(formData: any) {
    let endPoint = this.formData['endpoint'];
    this.service.postAPI(endPoint, formData).subscribe(
      (res: any) => {
        this.openDialog(this.formData.title, res['msg'], 1);
      },
      (error: any) => {
        this.openDialog(this.formData.title, error['msg'], 0);
      }
    );

    console.log(formData); // handle emitted form values
  }

  openDialog(title: any, message: any, option: any): void {
    const dialogRef = this.dialog.open<DialogComponent, DialogData>(
      DialogComponent,
      {
        width: '250px',
        data: {
          title,
          message,
          class: option,
        },
      }
    );

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // User confirmed the action
      }
    });
  }
}
