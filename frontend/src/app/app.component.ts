import { Component } from '@angular/core';
import { faShoppingCart, faWarehouse, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private toastr: ToastrService) {}
  //Font-Awesome icons
  faShoppingCart = faShoppingCart;
  faWarehouse = faWarehouse;
  faCartPlus = faCartPlus;

  showSuccess() {
    this.toastr.success('Product added to your Cart');
  }
}
