import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Cart } from './cart.model';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  products = [
    {
      id: 1,
      productName: 'Mobile 1',
      price: 2000,
      description: 'I am Mobile 1',
      tags: [
        'Mobile', 'New'
      ],
      category: 'Mobile',
      quantity: 10
    },
    {
      id: 2,
      productName: 'Mobile 2',
      price: 2000,
      description: 'I am Mobile 2',
      tags: [
        'Mobile', 'New'
      ],
      category: 'Mobile',
      quantity: 10
    },
    {
      id: 3,
      productName: 'Mobile 3',
      price: 2000,
      description: 'I am Mobile 3',
      tags: [
        'Mobile', 'New'
      ],
      category: 'Mobile',
      quantity: 10
    },
    {
      id: 4,
      productName: 'Mobile 4',
      price: 2000,
      description: 'I am Mobile 4',
      tags: [
        'Mobile', 'New'
      ],
      category: 'Mobile',
      quantity: 10
    },
  ]

  cart = {
    products: [],
    total: 0
  }
  constructor() { }

  public getAllProducts() {
    return of(this.products.filter(x => x.quantity > 0));
  }

  public getProduct(id: number) {
    return of(this.products.find(x => x.id === id && x.quantity > 0));
  }

  public addToCart(productId: number) {
    if (this.cart.products?.length > 0) {
      let productIndex = this.cart.products.findIndex(x => x.id === productId);
      if (productId >= 0) {
        ++this.cart.products[productIndex].quantity;
        --this.products[this.products.findIndex(x => x.id === productId)].quantity;
        this.cart.total += this.cart.products[productIndex].price;
      } else {
        let prod = this.products.find(x => x.id === productId);
        --this.products[this.products.findIndex(x => x.id === productId)].quantity;
        prod.quantity = 1;
        this.cart.products.push(prod);
        this.cart.total += prod.price;
      }
    } else {
      let prod = Object.assign({}, this.products.find(x => x.id === productId));
      --this.products[this.products.findIndex(x => x.id === productId)].quantity;
      prod.quantity = 1;
      this.cart.products.push(prod);
      this.cart.total += prod.price;
    }
  }

  public getCart() {
    return of(this.cart);
  }
  public subtractFromCart(index: number) {
    let productId = this.cart.products[index].id;
    if (this.cart.products[index].quantity > 1) {
      this.cart.products[index].quantity--;
      ++this.products[this.products.findIndex(x => x.id === productId)].quantity;
      this.cart.total -= this.cart.products[index].price;
    } else {
      let prod = this.products.find(x => x.id === productId);
      ++this.products[this.products.findIndex(x => x.id === productId)].quantity;
      this.cart.products.splice(index,1);
      this.cart.total -= prod.price;
    }
    return of(this.cart);
  }

  public removeFromCart(index: number) {
    let productId = this.cart.products[index].id;
    let prod = this.products.find(x => x.id === productId);
    this.products[this.products.findIndex(x => x.id === productId)].quantity+=(prod.price* this.cart[index].quantity);
    this.cart.total -= (prod.price* this.cart[index].quantity);
    this.cart.products.splice(index,1);
    return of(this.cart);
  }
}

