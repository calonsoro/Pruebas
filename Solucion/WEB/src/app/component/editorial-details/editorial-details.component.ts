import { Component, OnInit } from '@angular/core';
import { EditorialDetailService } from './editorial-detail.service';
import { EditorialDetail } from './editorial-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editorial-details',
  templateUrl: './editorial-details.component.html',
  styles: []
})
export class EditorialDetailsComponent implements OnInit {

  constructor(public service: EditorialDetailService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord: EditorialDetail) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id: number) {
    if (confirm('¿Esta seguro de eliminar esta casa editorial?')) {
      this.service.deleteEditorial(id)
        .subscribe(
          res => {
            this.service.refreshList();
            this.toastr.success("Eliminacion Extiosa", 'EDITORIAL');
          },
          err => {
            this.toastr.error(err.error, 'ERROR')
            console.log(err) 
          }
        )
    }
  }

}
