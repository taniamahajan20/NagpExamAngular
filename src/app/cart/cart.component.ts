import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Cart } from '../cart.model';
import { ProductServiceService } from '../product-service.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, AfterViewInit {
  public cart: Cart;
  public products: Product[];
  constructor(private cartService: ProductServiceService,
    private cdRef:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getCart();
  }
  ngAfterViewInit():void{
    this.cdRef.detectChanges();
  }

  addToCart(id:number){
    this.cartService.addToCart(id);
    this.getCart();
  }

  getCart(){
    this.cartService.getCart().subscribe((res:Cart)=>{
      this.cart = res;
      this.products = res.products;
    });
  }

  subtractFromCart(index:number){
    this.cartService.subtractFromCart(index).subscribe((res)=>{
      this.cart = res;
      this.products = res.products;
    });
  }
  removeFromCart(index:number){
    this.cartService.removeFromCart(index).subscribe((res)=>{
      this.cart = res;
      this.products = res.products;
    });
  }

}
