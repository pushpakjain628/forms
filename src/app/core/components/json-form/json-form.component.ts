import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-json-form',
  templateUrl: './json-form.component.html',
  styleUrls: ['./json-form.component.scss'],
})
export class JsonFormComponent implements OnChanges, OnInit {
  @Input() jsonFormData: any = {};

  ngOnInit() {
    if (this.jsonFormData != undefined) {
      this.createForm(this.jsonFormData.controls);
    }
  }

  public myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({});
  }

  @Output() formSubmit = new EventEmitter<any>(); // create new output property

  ngOnChanges(changes: SimpleChanges) {
    if (changes['jsonFormData'].currentValue != undefined) {
      this.createForm(changes['jsonFormData'].currentValue);
    }
  }

  createForm(data: any) {
    if (data['controls']) {
      let controls = data.controls;
      for (const control of controls) {
        const validatorsToAdd = [];
        let validatorObj = control.validators;
        for (const key of Object.keys(control.validators)) {
          switch (key) {
            case 'min':
              validatorsToAdd.push(Validators.min(validatorObj[key]));
              break;
            case 'max':
              validatorsToAdd.push(Validators.max(validatorObj[key]));
              break;
            case 'required':
              if (validatorObj[key]) {
                validatorsToAdd.push(Validators.required);
              }
              break;
            case 'requiredTrue':
              if (validatorObj[key]) {
                validatorsToAdd.push(Validators.requiredTrue);
              }
              break;
            case 'email':
              if (validatorObj[key]) {
                validatorsToAdd.push(Validators.email);
              }
              break;
            case 'minLength':
              validatorsToAdd.push(Validators.minLength(validatorObj[key]));
              break;
            case 'maxLength':
              validatorsToAdd.push(Validators.maxLength(validatorObj[key]));
              break;
            case 'pattern':
              validatorsToAdd.push(Validators.pattern(validatorObj[key]));
              break;
            case 'nullValidator':
              if (validatorObj[key]) {
                validatorsToAdd.push(Validators.nullValidator);
              }
              break;
            default:
              break;
          }
        }
        this.myForm.addControl(
          control.name,
          this.fb.control(control.value, validatorsToAdd)
        );
      }
    }
  }

  onSubmit() {
    if (this.myForm.valid) {
      this.formSubmit.emit(this.myForm.value); // emit form values
    }
  }
}
