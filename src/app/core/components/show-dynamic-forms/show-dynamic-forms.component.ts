import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { APICallSService } from 'src/app/service/apicall-s.service';

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
  constructor(private service: APICallSService) {
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
    console.log(formData); // handle emitted form values
  }
}
