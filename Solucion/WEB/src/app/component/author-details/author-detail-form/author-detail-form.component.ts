import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthorDetail } from 'src/app/component/author-details/author-detail.model';
import { AuthorDetailService } from 'src/app/component/author-details/author-detail.service';


@Component({
  selector: 'app-author-detail-form',
  templateUrl: './author-detail-form.component.html',
  styles: []
})
export class AuthorDetailFormComponent implements OnInit {

  constructor(public service: AuthorDetailService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    
  }

  onSubmit(form: NgForm) {
    
    if (this.service.formData.idAuthor == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postAuthor().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Registro Creado', 'AUTOR')
      },
      err => { 
        this.toastr.error('Error Creando Registro', 'ERROR')
        console.log(err); 
      }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putAuthor().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('Modificacion Exitosa', 'AUTOR')
      },
      err => { 
        this.toastr.error('Error Modificando Registro', 'ERROR')
        console.log(err); 
      }
    );
  }


  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new AuthorDetail();
  }

}
