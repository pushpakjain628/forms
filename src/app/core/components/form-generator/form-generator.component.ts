import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.scss'],
})
export class FormGeneratorComponent {
  form: FormGroup;
  formStructure: any = [];

  @Output() formSubmit = new EventEmitter<any>(); // create new output property
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({});
    this.formStructure.forEach((field: any) => {
      this.form.addControl(
        field.name,
        this.formBuilder.control('')
      );
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.formSubmit.emit(this.form.value); // emit form values
    }
  }
}
