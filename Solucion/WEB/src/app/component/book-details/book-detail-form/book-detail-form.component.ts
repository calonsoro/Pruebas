import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BookDetail } from 'src/app/component/book-details/book-detail.model';
import { BookDetailService } from 'src/app/component/book-details/book-detail.service';

@Component({
  selector: 'app-book-detail-form',
  templateUrl: './book-detail-form.component.html',
  styles: []
})
export class BookDetailFormComponent implements OnInit {

  constructor(public service: BookDetailService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    
    if (this.service.formData.idBook == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postBook().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Registro Creado', 'BIBLIOTECA')
      },
      err => { 
        if(err.error.text == "Exitoso")
        {
          this.resetForm(form);
          this.service.refreshList();
          this.toastr.success('Registro Creado', 'BIBLIOTECA')
        }else{
          this.toastr.error(err.error, 'ERROR')
          console.log(err); 
        }
      }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putBook().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('Modificacion Exitosa', 'BIBLIOTECA')
      },
      err => { 
        if(err.error.text == "Exitoso")
        {
          this.resetForm(form);
          this.service.refreshList();
          this.toastr.success('Registro Modificado', 'BIBLIOTECA')
        }else{
          this.toastr.error(err.error, 'ERROR')
          console.log(err); 
        }
      }
    );
  }


  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new BookDetail();
  }

}
