import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/SharedPortal/Service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
MyData:any=[]
  constructor(private Products:ProductService) { }

  ngOnInit(): void {
  }
dataishere(){
this.MyData=this.Products.productData()
}
}
