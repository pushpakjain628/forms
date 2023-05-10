import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowDynamicFormsComponent } from './core/components/show-dynamic-forms/show-dynamic-forms.component';
import { JsonFormComponent } from './core/components/json-form/json-form.component';

const routes: Routes = [
  {
    path: 'select-forms',
    component: ShowDynamicFormsComponent,
  },
  {
    path: 'forms',
    component: JsonFormComponent,
    outlet: 'outlet2',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
