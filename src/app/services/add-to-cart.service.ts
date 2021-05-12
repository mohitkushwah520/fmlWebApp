import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cart } from '../modal/cart';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {
  subject = new Subject()
  remove = new Subject()
  cartItem = new Subject()
  constructor() { }

  public cartItems = []
  productExist = false
  sndMsg(item){
    this.subject.next(item)
  }
  rcvMsg(){
    return this.subject.asObservable().pipe(
      map(e => {
        let localdata = JSON.parse(localStorage.getItem('cartData'))
        if(localdata === null){}else {
          this.cartItems = localdata
        }
        this.cartData(e)
        return this.cartItems
      })
    )
  }

  cartData(itemData){
    let item = itemData
    this.cartItems.forEach( e => {
      if(e.id === item.id){
        this.productExist = true
      }
    })
    if(this.productExist){
      this.cartItems.forEach(e => {
        if(e.id === item.id){
          e.quantity++
        }
      })
      this.productExist = false
    } else {
      this.cartItems.push(item)
    }
    localStorage.setItem('cartData', JSON.stringify(this.cartItems))
  }

  updateCartSnd(item){
    this.remove.next(item)
  }
  updateCartRcv(){
    return this.remove.asObservable().pipe(
      map((item : any) => {
        let updatecart = JSON.parse(localStorage.getItem('cartData'))
        return updatecart
      })
    )
  }

  checkInCart(apiData){
    const LocalData = JSON.parse(localStorage.getItem('cartData'))
    if(!!LocalData){
      apiData.forEach((res,i) => {
        LocalData.forEach(element => {
          if(element.name === res.name){
            apiData[i].cartQuantity = element.cartQuantity
          }
        });
      })
    }
  }

  addToCart(item,variation,variationNo){
    console.log(item,variation,variationNo)
    let cart
    if(item.itemallowvariation === '1'){
      cart = new Cart(item.itemid,item.itemallowvariation,variation.id,null,1)
    } else {
      cart = new Cart(item.itemid,item.itemallowvariation,null,1,null)
    }
    this.cartItems.push(cart)
  }

}
