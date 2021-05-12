import { Component, OnInit, Renderer2 } from '@angular/core';
import { Response } from 'src/app/modal/response';
import { AddToCartService } from 'src/app/services/add-to-cart.service';
import { DrinkService } from 'src/app/services/drink.service';
import { FmlService } from 'src/app/services/fml.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent implements OnInit {

  constructor(private drinkservice: DrinkService, private render: Renderer2,private cartService: AddToCartService , private fmlService: FmlService) { }

  public favouriteData = [];
  public allData = [];
  public user;
  ngOnInit(): void {
    // this.user = JSON.parse(localStorage.getItem('user'))
    // this.drinkservice.getAllCategories().subscribe((res: any) => {
    //   this.allData = res.data
    // })
    // this._favouriteService.getFavourite().subscribe((res: any) => {
    //   let data = res.data
    //   setTimeout(()=>{
    //     // this.filterData(data)
    //   },500)
    // })
    this.getData();
  }


  getData(){
    this.fmlService.getFavourite().subscribe((res : Response) => {
      this.allData = res.data
      this.getFmlData(this.allData)
    })
  }
  getFmlData(data){
    this.fmlService.fmlData().subscribe((res : any) => {
      data.forEach(e => {
      const result = res.items.find( ({ itemid }) => itemid === e );
      if(!!result){
        this.favouriteData.push(result)
      }
      });
    })
  }



  // ngAfterViewInit():void{
  //   setTimeout(()=>{
  //     this.price()
  //   },1000)
  // }

  // filterData(fData){
  //   let findData = []
  //   this.allData.forEach(res => {
  //     if(res.sub){
  //       res.subCategory.forEach(res1 => {
  //         res1.drinks.forEach(res2 => {
  //           findData.push(res2)
  //         })
  //       })
  //     } else {
  //       res.drinks.forEach(res => {
  //         findData.push(res)
  //       })
  //     }
  //   })
  //   fData.forEach(resData => {
  //     findData.forEach(res => {
  //       if(res.name === resData){
  //         let data = []
  //         data.push(res)
  //         this.drinkservice.quantityFilter(data, this.favouriteData)
  //         this.cartService.checkInCart(this.favouriteData)
  //       }
  //     })
  //   })
  // }
  // changequantity($event, item, item1){
  //   this.drinkservice.changequantity($event, item, item1,this.render)
  // }
  // price(){
  //   let element = document.querySelectorAll('.drinks-card .card-footer .theme-btn:nth-child(1)')
  //   element.forEach(e => {
  //     this.render.addClass(e, 'active')
  //   })
  // }

}
