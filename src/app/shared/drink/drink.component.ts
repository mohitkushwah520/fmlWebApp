import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { Cart } from 'src/app/modal/cart';
import { Variation } from 'src/app/modal/variation';
import { AddToCartService } from 'src/app/services/add-to-cart.service';
import { DrinkService } from 'src/app/services/drink.service';
import { FmlService } from 'src/app/services/fml.service';
import { Item } from '../../modal/item'

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.scss']
})
export class DrinkComponent implements OnInit {

  @Input() item:any
  variationNo = 0
  constructor(
    private cartService: AddToCartService,
    private drinkService: DrinkService,
    private _fmlService: FmlService,
    private render: Renderer2
    ) { }

    productExist = false
  ngOnInit(): void {
    this.localStorage()
    this.dataForCart()
  }

  dataForCart(){
    if (this.item.itemallowvariation === '1') {
      this.item.variation.forEach(el => {
        el.quantity = 0
      });
    } else {
      this.item.item_quantity = 0
    }
    this.cartData.forEach(e => {
      if(this.item.itemid === e.itemid){
        this.item = e
      }
    })

  }


  cartData = []

  addTocart(item,variation,variationNo){
      if(item.itemallowvariation === '1'){
        item.variation[variationNo].quantity++
      } else {
        item.item_quantity++
      }
    this.setToLocalStorage(item)

  }
  decreaseQuatity(item,variation,variationNo){

    if(item.itemallowvariation === '1'){
      item.variation[variationNo].quantity--
    } else {
      item.item_quantity--
    }

    this.setToLocalStorage(item)
  }
  increaseQuatity(item,variation,variationNo){
    if(item.itemallowvariation === '1'){
      item.variation[variationNo].quantity++
    } else {
      item.item_quantity++
    }
    this.setToLocalStorage(item)
  }

  // //add to cart logic end

  localStorage(){
    if(!!localStorage.getItem('cartData')){
      this.cartData = JSON.parse(localStorage.getItem('cartData'))
    } else {
      this.cartData = []
    }
  }

  setToLocalStorage(itemData){
    this.localStorage()
    let item = itemData
    this.cartData.forEach( e => {
      if(e.itemid === item.itemid){
        this.productExist = true
      }
    })

    if(this.productExist){
      this.productExist = false
      this.cartData.forEach((e, i) => {
        if(e.itemid === item.itemid){
          this.cartData[i] = item
        }
      })
    } else {
      this.cartData.push(item)
    }

    let remove = true

    this.cartData.forEach((e,i) => {
      if(e.itemallowvariation === '1'){
        e.variation.forEach(el => {
          if(el.quantity != 0){
           remove = false
          }
        });
        if(remove){
          this.cartData.splice(i,1)
        }
      } else {
        if(e.item_quantity === 0){
          this.cartData.splice(i,1)
        }
      }
    })
    this._fmlService.cart.next(this.cartData)
    localStorage.setItem('cartData', JSON.stringify(this.cartData))
  }

}
