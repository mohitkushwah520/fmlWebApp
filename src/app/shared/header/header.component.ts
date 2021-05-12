import { Component, OnInit, Renderer2 } from '@angular/core';
import { AddToCartService } from 'src/app/services/add-to-cart.service';
import { gsap } from 'gsap'
import { FmlService } from 'src/app/services/fml.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private cartService: AddToCartService,private _fmlService: FmlService, private render : Renderer2) { }

  public cartItem = []
  public cartData;
  public header = false
  ngOnInit(): void {
    if (localStorage.getItem('cartData')) {
      this.cartItem = JSON.parse(localStorage.getItem('cartData'))
      this.cartcount(this.cartItem)
    } else {
      this.cartItem = []
      this.cartcount(this.cartItem)
    }


    this._fmlService.cartData().subscribe(res => {
      this.cartcount(res)
    })



  }

  cartcount(cartItem){
    let quantity = 0
      cartItem.forEach(e => {
        var add = 0
        if(e.itemallowvariation === '1'){
          e.variation.forEach(el => {
            let variationadd = 0
            variationadd = el.quantity
            add +=variationadd
          });
        } else {
          add = e.item_quantity
        }
        quantity += add
      })
      this.cartData = quantity
  }
  //   if(localStorage.getItem('cartData')){
  //     this.cartItem = JSON.parse(localStorage.getItem('cartData'))
  //     let quantity = 0
  //     this.cartItem.forEach(e => {
  //       var add = 0
  //       add = e.cartQuantity
  //       quantity += add
  //     })
  //     this.cartData = quantity
  //   } else {
  //     this.cartItem = []
  //   }
  //   this.cartService.rcvMsg().subscribe(res => {
  //     let quantity = 0
  //     res.forEach(e => {
  //       var add = 0
  //       add = e.cartQuantity
  //       quantity += add
  //     })
  //     this.cartData = quantity
  //   })

  //   this.cartService.cartItem.subscribe(res => {
  //     setTimeout(() => {
  //       let data = JSON.parse(localStorage.getItem('cartData'))

  //     let quantity = 0
  //     data.forEach(e => {
  //       var add = 0
  //       add = e.cartQuantity
  //       quantity += add
  //     })
  //     this.cartData = quantity
  //   },100)
  //   })
  // }
  mainheader(){
   this.header = !this.header
  }
  hideheader(){
    this.header = false
   }
   logout(){
     this.header = false
     localStorage.removeItem('user')
     localStorage.removeItem('address')
     localStorage.removeItem('cartData')
     localStorage.removeItem('locality')
     this._fmlService.cart.next([])
   }
}
