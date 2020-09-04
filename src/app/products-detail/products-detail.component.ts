import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss']
})
export class ProductsDetailComponent implements OnInit {
 id = 0;
  public product: Product;
  constructor(private route: ActivatedRoute, private productsService: ProductServiceService, private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id');
    });
    this.productsService.getProduct(this.id).subscribe((res)=>{
      this.product = res;
    });
  }
  addtoCart(){
    this.productsService.addToCart(this.product.id);
    this.router.navigate(['cart']);
  }
}
