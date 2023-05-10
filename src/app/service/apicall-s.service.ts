import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/assets/environment';

@Injectable({
  providedIn: 'root',
})
export class APICallSService {
  constructor(private http: HttpClient) {}

  getListFormJson() {
    return this.http.get(environment.getListOfForms);
  }

  getFormJson(key: any) {
    return this.http.get(environment.getFormData + key);
  }
}
