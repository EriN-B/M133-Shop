import { Component, OnInit } from '@angular/core';
import { faShoppingCart, faWarehouse, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  
  products: any = [];

  constructor(private toastr: ToastrService, private http: HttpClient) {
  }

  async ngOnInit() {
    this.http.get<any>('http://localhost:8000/api/products/').subscribe(data => {
        this.products = data;
    })
  }

  //Font-Awesome icons
  faShoppingCart = faShoppingCart;
  faWarehouse = faWarehouse;
  faCartPlus = faCartPlus;

  showSuccess(title : string) {
    this.toastr.success(title + ' \n wurde zu deinem Account hinzugefügt');
  }
}
