import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/modal/item';
import { Response } from 'src/app/modal/response';
import { AddToCartService } from 'src/app/services/add-to-cart.service';
import { AddressService } from 'src/app/services/address.service';
import { FmlService } from 'src/app/services/fml.service';
import { Cart } from '../../modal/cart'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cartService: AddToCartService, private  addressService: AddressService,private _fmlService: FmlService) { }

  Data = [];
  cartItems = [];
  productExist = false;
  permit = true;
  cartPrice = 0;
  restrictionForm
  permitForm
  permitvalue
  // ageRestriction
  deliveryAddress:any
  ngOnInit(): void {
    this.Data = JSON.parse(localStorage.getItem('cartData'));
    if(!!this.Data){
      this.cartItems = this.Data
      this.cartTotal()
    }
    this.address();

  }
  decreaseQuatity(item,variationNo){

    if(item.itemallowvariation === '1'){
      item.variation[variationNo].quantity--
    } else {
      item.item_quantity--
    }
    this.setToLocalStorage(item)
    this.cartTotal()
  }
  increaseQuatity(item,variationNo){
    if(item.itemallowvariation === '1'){
      item.variation[variationNo].quantity++
    } else {
      item.item_quantity++
    }
    this.setToLocalStorage(item)
    this.cartTotal()
  }

  // //add to cart logic end

  localStorage(){
    if(!!localStorage.getItem('cartData')){
      this.cartItems = JSON.parse(localStorage.getItem('cartData'))
    } else {
      this.cartItems = []
    }
  }

  setToLocalStorage(itemData){
    this.localStorage()
    let item = itemData
    this.cartItems.forEach( e => {
      if(e.itemid === item.itemid){
        this.productExist = true
      }
    })

    if(this.productExist){
      this.productExist = false
      this.cartItems.forEach((e, i) => {
        if(e.itemid === item.itemid){
          this.cartItems[i] = item
        }
      })
    } else {
      this.cartItems.push(item)
    }

    let remove = true

    this.cartItems.forEach((e,i) => {
      if(e.itemallowvariation === '1'){
        e.variation.forEach(el => {
          if(el.quantity != 0){
           remove = false
          }
        });
        if(remove){
          this.cartItems.splice(i,1)
        }
      } else {
        if(e.item_quantity === 0){
          this.cartItems.splice(i,1)
        }
      }
    })
    this._fmlService.cart.next(this.cartItems)
    localStorage.setItem('cartData', JSON.stringify(this.cartItems))
  }

  permitData(){
    let select = document.querySelector('#HavePermitNumberDisplay') as HTMLSelectElement;
    let getvalue = select.value;
    if(getvalue === 'true'){
      this.permit = false
    } else {
      this.permit = true;
    }
  }
  cartTotal(){
    let add
    let price = 0
    this.cartItems.forEach((e) => {
      if(e.itemallowvariation === '1'){
        e.variation.forEach(el => {
          if(el.quantity >= 1){
            add = 0;
            add = el.quantity * el.price
            price += add
          }
        });
      } else{
        add = 0;
        add = e.item_quantity * e.price
        price += add
      }
    })
    this.cartPrice = price
  }
  address(){

    this.addressService.getAddress().subscribe((res: Response) => {
      if(!!JSON.parse(localStorage.getItem('address'))){
        this.deliveryAddress = JSON.parse(localStorage.getItem('address'))
      } else {
        this.deliveryAddress = res.data[(res.data.length -1)]
      }
    })
  }
  // editAddress(data){
  //   localStorage.setItem('editAddress', JSON.stringify(data))
  // }

  onSubmit(data,permit){
      let price
      if(permit === undefined){
        price = (this.cartPrice + 5)
      } else {
        price = this.cartPrice
      }

      let date = new Date()
      let address = this.deliveryAddress
      let order = this.getOrderItem()


      const Restaurant = {details: {res_name: 'API User',address: 'G-31, Bani Square, Sohna Road, South City II, \\r\\nSector 50, Ahmedabad, Gujarat',contact_information: 1234567890,restID: 4083}}

      const Customer = {details: {email: address.email,name: `${address.firstName} ${address.lastName}`,address: `${address.flatNo},${address.landmark}, ${address.locality}`,phone: address.phoneNumber,locality: address.locality}}

      const Order = {
        details: {
          orderID: '',
          preorder_date: `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`,
          preorder_time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
          minimum_order_amount: '',
          delivery_charges: '',
          order_type: '',
          packing_charges: '',
          advance_order: '',
          payment_type: '',
          discount: '',
          discount_total: '',
          description: '',
          discount_type: '',
          tax_total: '',
          total: '',
          created_on: `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
          callback_url: ''
        }
      }

      const OrderItem = {details: order}

      const Tax = {details: [{id: 1704,title: '',price: '',type: ''}]}

      const orderinfo = {OrderInfo: {Restaurant: Restaurant, Customer: Customer, Order: Order, OrderItem: OrderItem,Tax : Tax}}

      console.log(orderinfo)


      // const cartData = {
      //   cartItems: this.cartItems,
      //   address: this.deliveryAddress,
      //   totalPrice: {permitNumber: permit,cartPrice: price}
      // }

      // console.log(cartData)
  }

  getOrderItem(){
    let order = []
    this.cartItems.forEach(e => {
      let orderItem
      if(e.itemallowvariation === '1'){
        e.variation.forEach(el => {
          if(el.quantity >= 1){
            orderItem = {id: el.id,name: e.itemname,price: el.price,quantity: el.quantity,description: `${e.itemname} ${el.name}`}
            order.push(orderItem)
          }
        });

      } else {
        orderItem = {id: e.itemid,name: e.itemname,price: e.price,quantity: e.item_quantity,description: e.itemdescription}
        order.push(orderItem)
      }
    })
    return order

  }

}
