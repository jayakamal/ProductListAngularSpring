import { Component, OnInit } from '@angular/core';
import { MyproductsService } from '../myproducts.service';

@Component({
  selector: 'app-myproducts',
  templateUrl: './myproducts.component.html',
  styleUrls: ['./myproducts.component.css']
})
export class MyproductsComponent implements OnInit {

  myListOfProducts:any;
  constructor(private serviceVariable: MyproductsService) { }
  
  ngOnInit() {
   this.serviceVariable.getMyProducts().subscribe((data: any) => this.myListOfProducts = data);

  }
  
  
 

}
