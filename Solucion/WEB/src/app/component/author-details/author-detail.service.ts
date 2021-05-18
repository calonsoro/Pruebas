import { Injectable } from '@angular/core';
import { AuthorDetail } from './author-detail.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthorDetailService {

  constructor(private http: HttpClient) { }

  readonly baseURL = 'https://localhost:44368/api/Author'

  formData:AuthorDetail = new AuthorDetail();
  list: AuthorDetail[];

  postAuthor() {
    return this.http.post(this.baseURL, this.formData);
  }

  putAuthor() {
    return this.http.put(`${this.baseURL}/${this.formData.idAuthor}`, this.formData);
  }

  deleteAuthor(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as AuthorDetail[]);
  }

}
