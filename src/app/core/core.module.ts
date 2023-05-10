import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGeneratorComponent } from './components/form-generator/form-generator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { JsonFormComponent } from './components/json-form/json-form.component';
import { ShowDynamicFormsComponent } from './components/show-dynamic-forms/show-dynamic-forms.component';

@NgModule({
  declarations: [
    FormGeneratorComponent,
    JsonFormComponent,
    ShowDynamicFormsComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, BrowserModule],
  exports: [FormGeneratorComponent, JsonFormComponent],
})
export class CoreModule {}
