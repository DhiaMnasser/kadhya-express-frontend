import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../models/product';
import {OrderService} from '../../services/order.service';
import {Order} from '../../models/order';
import {Router} from '@angular/router';
import {User} from "../../models/user";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() addToCartNotif = new EventEmitter<Product>();
  activeOrder: Order;
  listOrders: Order[];
  constructor(private orderService: OrderService, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('currentUser') !== '') {
      this.activeOrder = new Order();
      this.orderService.getAllOrders().subscribe(
        (data) => {
          this.listOrders = data.filter(order =>
            order.userId == ((JSON.parse(localStorage.getItem('currentUser')) as User).id));
          this.activeOrder = this.listOrders.filter(order => order.etat)[0];
          console.log('prod activeOrder' + JSON.stringify(this.activeOrder, null, 1));

        });


    }
  }

  addToCart() {
    // console.log('addToCart activeOrder' + JSON.stringify(this.activeOrder, null, 1));
    // const index = this.activeOrder.prodList.findIndex(prod => {
    //   return prod.title === this.product.title && prod.price === this.product.price;
    // });
    // console.log('addToCart prod activeOrder' + JSON.stringify(this.product, null, 1));
    //
    // console.log('addToCart prod index' + index);
    //
    // if (index === -1) {
    //   const prod = this.product;
    //   prod.quantity = 1;
    //   this.activeOrder.prodList.push(prod);
    //   this.activeOrder.totalPrice += prod.price;
    //   console.log('addToCart prod activeOrder' + JSON.stringify(this.activeOrder, null, 1));
    //
    // }
    // else {
    //   console.log(this.activeOrder.prodList[index]);
    //   this.activeOrder.prodList[index].quantity++;
    //   this.activeOrder.totalPrice += this.product.price;
    //   console.log('addToCart prod activeOrder' + JSON.stringify(this.activeOrder, null, 1));
    //
    // }

    this.addToCartNotif.emit(this.product);
  }


}
