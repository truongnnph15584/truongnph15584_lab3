import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }


  products = [
    {
      id: 1,
      name: "iphone1",
      price: 1000,
      desc: "blabla",
      img: "https://flyclipart.com/thumb2/huawei-nova-android-phone-huawei-new-zealand-56044.png"
    },
    {
      id: 2,
      name: "iphone2",
      price: 1000,
      desc: "blabla",
      img: "https://flyclipart.com/thumb2/huawei-nova-android-phone-huawei-new-zealand-56044.png"
    }
  ]

  product = {
    id: 0,
    name: "",
    price: 0,
    desc: "",
    img: ""
  }


  update_product(data: any) {
    this.product = data
    
  }

  submit(data: any) {
    if (data.id) {
      var product_ud = this.products.findIndex(item => item.id == data.id);
      this.products[product_ud] = data
    }
    else {
      this.product = {
        ...this.product,
        id: this.products.length + 1
      }
      console.log(this.product)
      this.products.push(this.product)
    }
    this.product = {
      id: 0,
      name: "",
      price: 0,
      desc: "",
      img: ""
    }
  }
}
