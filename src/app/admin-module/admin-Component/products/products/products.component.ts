import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Products } from 'src/app/SharedData/Interface/products';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  selectSize:any=['small', 'medium' ,'large','xlarge'];
  categoryArray:any=['Men','Women']
  ProductForm:FormGroup|any 


  constructor(private formbuilder:FormBuilder) { 
    this.FormProductModel()
  }

  ngOnInit(): void {
  }
FormProductModel(){
  this.ProductForm=this.formbuilder.group({
    productName:['',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]],
    productQuantity:['',[Validators.required,Validators.pattern('^[0-9]$')]],
    productPrice:['',[Validators.required,Validators.pattern('^[0-9]$')]],
    productMaterial:['',[Validators.required,Validators.pattern(/^[A-Za-z ]+$/)]],
    description:['',Validators.required],
    logoMaterial:['',[Validators.required,Validators.pattern(/^[A-Za-z ]+$/)]],
    size:new FormArray([]),
    color: ['',[Validators.required,Validators.pattern(/^[A-Za-z ]+$/)]],
    category:['',Validators.required]
  })
}


formSubmit(){
  let formValue=this.ProductForm.value 
  console.log(formValue)
}
}
