import { Injectable } from '@angular/core';
import MyProducts from '../JSONDATA/product.json'
@Injectable({
  providedIn: 'root'
})
export class ProductService {
Products=MyProducts 
  constructor() { }
  productData(){
    return this.Products
  }
}
