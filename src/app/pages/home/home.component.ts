import { Component, OnInit } from '@angular/core';
import { DrinkService } from 'src/app/services/drink.service';
import { FmlService } from 'src/app/services/fml.service';
// import { OwlOptions }from 'ngx-owl-carousel-o'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public categories = []
  public data = []
  constructor(private drinkServices: DrinkService,private fmlService: FmlService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.fmlService.fmlData().subscribe((res: any) => {
      res.parentcategories.forEach(e => {
        this.categories.push(e)
      });
      res.categories.forEach(e => {
        if(e.parent_category_id === "0"){
          this.categories.push(e)
        }
      });
    })
  }


}
