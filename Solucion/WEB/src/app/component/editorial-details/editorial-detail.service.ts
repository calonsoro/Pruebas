import { Injectable } from '@angular/core';
import { EditorialDetail } from './editorial-detail.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EditorialDetailService {

  constructor(private http: HttpClient) { }

  readonly baseURL = 'https://localhost:44368/api/Editorial'

  formData:EditorialDetail = new EditorialDetail();
  list: EditorialDetail[];

  postEditorial() {
    return this.http.post(this.baseURL, this.formData);
  }

  putEditorial() {
    return this.http.put(`${this.baseURL}/${this.formData.idEditorial}`, this.formData);
  }

  deleteEditorial(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as EditorialDetail[]);
  }

}
