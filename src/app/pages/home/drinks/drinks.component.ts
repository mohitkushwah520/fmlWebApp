import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cart } from 'src/app/modal/cart';
import { DrinkService } from 'src/app/services/drink.service';
import { FmlService } from 'src/app/services/fml.service';
import { AddToCartService } from '../../../services/add-to-cart.service'

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss']
})
export class DrinksComponent implements OnInit , AfterViewInit {

  constructor(private router: ActivatedRoute, private service: DrinkService, private cartService: AddToCartService, private render: Renderer2,private fmlService: FmlService) { }

  public slug;
  public queryParams;
  public drinks= [];
  public cc = 180;
  public cc1 = "750ml (bottle)";
  public updatedata = []
  ngOnInit(): void {

    this.router.paramMap.subscribe((res) => {
      this.slug = res.get('categoryid')
      // this.getData(this.slug);
      this.fmlData(this.slug)
    })
  }
  ngAfterViewInit():void{
    setTimeout(()=>{
      // this.price()
    },1000)
  }

  fmlData(slug){
    this.fmlService.fmlData().subscribe((res : any) => {
      res.items.forEach(e => {
        if(e.item_categoryid === slug){
          if(e.itemallowvariation === '1'){
              e.variation.forEach(e => {
                e.quantity = 0
              });
          } else {
            e.item_quantity = 0
          }
          this.updatedata.push(e)

        }
      });
    })
  }
  // getData(slug){
  //   this.service.getAllCategories().subscribe((res:any) => {
  //     let data = res.data
  //     this.router.queryParamMap.subscribe(res => {
  //       if(res.get('sub')){

  //         // with sub categories start
  //         this.queryParams = res.get('sub')
  //         this.subCategoriesData(data, slug, this.queryParams)

  //         // with sub categories end

  //       } else {

  //         // without sub categories start
  //         data.forEach((data)=>{
  //           if(slug === data.name){
  //             this.drinks = data.drinks
  //           }
  //         })
  //         // without sub categories end

  //       }
  //     })

  //     this.service.quantityFilter(this.drinks,this.updatedata)
  //     this.cartService.checkInCart(this.updatedata)
  //     // this.checkInCart(this.updatedata)
  //   })
  // }
  // price(){
  //   let element = document.querySelectorAll('.drinks .card-footer .theme-btn:nth-child(1)')
  //   element.forEach(e => {
  //     this.render.addClass(e, 'active')
  //   })
  // }
  // subCategoriesData(data,slug, query){
  //   data.forEach((data)=>{
  //     if(slug === data.name){
  //       data.subCategory.forEach((e)=>{
  //         if(e.name === query){
  //           this.drinks = e.drinks
  //         }
  //       })
  //     }
  //   })
  // }


}
