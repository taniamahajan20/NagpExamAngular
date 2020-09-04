import { BrowserModule } from '@angular/platform-browser';
import { ProductsDetailComponent } from './products-detail.component';
import { ProductServiceService } from '../product-service.service';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        ProductsDetailComponent,
    ],
    imports: [
        BrowserModule,
    ],
    providers: [
        ProductServiceService
    ]
})

export class ProductDetailModule { }