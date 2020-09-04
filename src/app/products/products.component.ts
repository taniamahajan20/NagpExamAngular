import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products = [];

  constructor(private productsService:ProductServiceService) { }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((res)=>{
      this.products = res;
    });
  }

}
