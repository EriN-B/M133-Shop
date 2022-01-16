import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(private toastr: ToastrService, private productService : ProductService) { }

  product: any;
  priceWithDiscount: number = 0;

  ngOnInit(): void {
    this.product = this.productService.getProduct();
    this.getPriceWithDiscount();
  }

  showSuccess(title : string) {
    this.toastr.success(title + ' \n wurde zu deinem Account hinzugefügt');
  }

  getPriceWithDiscount(): void {
    this.priceWithDiscount = (this.product.price / 100) * (100 - this.product.discount);
  }

  addToCart(): void {
    this.showSuccess(this.product.title);
  }
}
