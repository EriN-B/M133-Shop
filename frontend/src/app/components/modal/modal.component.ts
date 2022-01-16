import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(private productService : ProductService) { }

  product: any;
  priceWithDiscount: number = 0;

  ngOnInit(): void {
    this.product = this.productService.getProduct();
    this.getPriceWithDiscount();
  }


  getPriceWithDiscount(): void {
    this.priceWithDiscount = (this.product.price / 100) * (100 - this.product.discount);
  }
}
