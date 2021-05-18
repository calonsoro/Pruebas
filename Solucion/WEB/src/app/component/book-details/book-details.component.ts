import { Component, OnInit } from '@angular/core';
import { BookDetailService } from './book-detail.service';
import { BookDetail } from './book-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styles: []
})
export class BookDetailsComponent implements OnInit {

  constructor(public service: BookDetailService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord: BookDetail) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id: number) {
    if (confirm('¿Esta seguro de eliminar este ejemplar?')) {
      this.service.deleteBook(id)
        .subscribe(
          res => {
            this.service.refreshList();
            this.toastr.success("Eliminacion Extiosa", 'BIBLIOTECA');
          },
          err => { 
            this.toastr.error(err, 'ERROR')
            console.log(err) 
          }
        )
    }
  }

}
