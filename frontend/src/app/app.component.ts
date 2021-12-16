import { Component } from '@angular/core';
import { faShoppingCart, faWarehouse, faCartPlus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //Font-Awesome icons
  faShoppingCart = faShoppingCart;
  faWarehouse = faWarehouse;
  faCartPlus = faCartPlus;
}
