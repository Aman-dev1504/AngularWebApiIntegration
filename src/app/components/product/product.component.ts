import { Component } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/models/product';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(products => this.products = products);
  }
  AddProduct(productForm:NgForm):void{
    console.log(productForm.value)
    let product:Product = productForm.value;
    this.productService['addProduct'](product).subscribe((product: Product)=>{
       console.log("Product response from server ",product) })
    }
  // deleteProduct(id: number): void {
  //   this.productService.deleteProduct(id).subscribe(() => {
  //     this.products = this.products.filter(product => product.id !== id);
  //   });
 // }
}