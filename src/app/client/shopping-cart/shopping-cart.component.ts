import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product';
import {ProductService} from '../../services/product.service';
import {Order} from '../../models/order';
import {OrderService} from '../../services/order.service';
import {User} from '../../models/user';
import {Router} from "@angular/router";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent implements OnInit {
  listItems: Product[];
  listOrders: Order[];
  activeOrder: Order;
  coupon: string;
  isApplied = false;

  constructor(private productService: ProductService, private orderService: OrderService, private router: Router) { }

  ngOnInit(): void {

    this.orderService.getAllOrders().subscribe(
      (data) => {
        this.listOrders = data.filter(order =>
          order.userId == (JSON.parse(localStorage.getItem('currentUser')).id) );
        this.activeOrder = this.listOrders.filter(order => order.etat)[0];
        this.listItems = this.activeOrder.prodList;
        console.log('listOrders' + JSON.stringify(this.listOrders, null, 1));
        console.log('activeOrder' + JSON.stringify(this.activeOrder, null, 1));
        console.log('listItems' + JSON.stringify(this.listItems, null, 1));
      }
    );
    console.log(this.listItems);
  }

  deleteItem(index: Product) {
    this.listItems.splice(this.listItems.indexOf(index), 1);
    this.activeOrder.prodList = this.listItems;
    this.activeOrder.totalPrice -= (index.price * index.quantity);
    if (this.activeOrder.prodList.length == 0 ){this.activeOrder.totalPrice = 0; }
    this.orderService.putOrder(this.activeOrder).subscribe();
    console.log(this.activeOrder.prodList);
  }

  decQuantity(product: Product) {
    console.log('-');
    if (product.quantity > 1){
      const index = this.listItems.indexOf(product);
      this.listItems[index].quantity--;
      this.activeOrder.totalPrice -= product.price;
      this.activeOrder.prodList = this.listItems ;
      this.orderService.putOrder(this.activeOrder).subscribe();
    }
  }

  incQuantity(product: Product) {
    console.log('+');
    this.productService.getProductById(product.id).subscribe(data => {
      if (data.quantity > product.quantity ){
        const index = this.listItems.indexOf(product);
        this.listItems[index].quantity++;
        this.activeOrder.totalPrice += product.price;
        this.activeOrder.prodList = this.listItems ;
        this.orderService.putOrder(this.activeOrder).subscribe();
      }
    });
  }

  checkOut() {
    if (this.activeOrder.address !== '' && this.activeOrder.address !== undefined && this.activeOrder.prodList.length > 0){
    this.activeOrder.etat = false;
    this.activeOrder.totalPrice += 5;
    this.activeOrder.date = new Date();
    const currUser = JSON.parse(localStorage.getItem('currentUser')) as User;
    const newOrder = new Order();
    newOrder.ref = 'ref' + currUser.username + 'v' + Date.now().valueOf();
    newOrder.userId = currUser.id;
    newOrder.etat = true;
    newOrder.validated = false;
    newOrder.totalPrice = 0;
    newOrder.prodList = [];
    console.log('new order created');
    let allProducts: Product[];
    this.productService.getProductsWS().subscribe(data => {
      allProducts = data;
      this.activeOrder.prodList.forEach(orderProd => {
        allProducts.forEach(prod => {
          if (prod.title === orderProd.title) {
            prod.quantity -= orderProd.quantity;
            this.productService.putProduct(prod);
          }
        });
      });
      this.orderService.putOrder(this.activeOrder)
        .subscribe(() => {
          this.orderService.postOrder(newOrder).subscribe();
          this.router.navigate(['home']);
        });
    });
  } else { alert('something went wrong! Please try again');}
  }

  setAddress(address: string){
    console.log(address);
    this.activeOrder.address = address;
    console.log(this.activeOrder);
  }

  applyCoupon() {
    if ( !this.isApplied && this.coupon === '10off') {
      this.activeOrder.totalPrice *= 0.9;
       this.isApplied = true;}
  }
}
