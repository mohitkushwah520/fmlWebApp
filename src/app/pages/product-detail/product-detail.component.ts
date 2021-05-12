import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cart } from 'src/app/modal/cart';
import { AddToCartService } from 'src/app/services/add-to-cart.service';
import { DrinkService } from 'src/app/services/drink.service';
import { FavouriteService } from 'src/app/services/favourite.service';
import { FmlService } from 'src/app/services/fml.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(private router: ActivatedRoute, private service: DrinkService, private _favouriteService: FavouriteService,private cartService: AddToCartService,private fmlService: FmlService) { }

  public slug;
  public cartData = []
  public data:any = {};
  public favourite = false;
  // public user;
  ngOnInit(): void {
    this.router.paramMap.subscribe(res => {
      this.slug = res.get('itemId')
      this.getData(this.slug)
    })
  }

  getData(id){
    this.fmlService.fmlData().subscribe((res: any) => {
      res.items.forEach(e => {
        if(e.itemid === id){
          if(e.itemallowvariation === '1'){
            e.variation.forEach(el => {
              el.quantity = 0
            });
          } else {
            e.item_quantity = 0
          }
          this.data = e
          this.checkFavourite(e)
          this.cart(e)
        }
      });
    })
  }
  cart(item){
    const product = item
    if(!!localStorage.getItem('cartData')){
      this.cartData = JSON.parse(localStorage.getItem('cartData'))
      this.cartData.forEach(e => {
        if(e.itemid === product.itemid){
          this.data = e
        }
      })
    } else {
      this.data
    }
  }
  checkFavourite(data){
    this.fmlService.getFavourite().subscribe((res : any) => {
      res.data.forEach(name => {
        if(name === data.itemid){
          this.favourite = true
        }
      })
    })
  }
  addToFavouriteList(name){
    if(this.favourite){
      this.fmlService.removeFavourite({name: name}).subscribe(res => {
        this.favourite = false
      },
      err => {
        console.log(err)
      })
    } else {

      this.fmlService.addFavourite({name: name}).subscribe(res => {
        this.favourite = true
      },
      err => {
        console.log(err)
      })
    }

  }




  // cartData = []
  productExist = false
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
    this.fmlService.cart.next(this.cartData)
    localStorage.setItem('cartData', JSON.stringify(this.cartData))
  }






}
