import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BookDetail } from 'src/app/component/book-details/book-detail.model';
import { BookDetailService } from 'src/app/component/book-details/book-detail.service';
import { EditorialDetail } from '../editorial-detail.model';
import { EditorialDetailService } from '../editorial-detail.service';

@Component({
  selector: 'app-editorial-detail-form',
  templateUrl: './editorial-detail-form.component.html',
  styles: []
})
export class EditorialDetailFormComponent implements OnInit {

  constructor(public service: EditorialDetailService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    
    if (this.service.formData.idEditorial == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postEditorial().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Registro Creado', 'EDITORIAL')
      },
      err => { 
        this.toastr.error('Error Creando Registro', 'ERROR')
        console.log(err); 
      }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putEditorial().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('Modificacion Exitosa', 'EDITORIAL')
      },
      err => { 
        this.toastr.error('Error Modificando Registro', 'ERROR')
        console.log(err); 
      }
    );
  }


  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new EditorialDetail();
  }

}
