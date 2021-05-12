import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DrinkService } from 'src/app/services/drink.service';
import { FmlService } from 'src/app/services/fml.service';

@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.scss']
})
export class SubCategoriesComponent implements OnInit {

  constructor(private router: ActivatedRoute,private services: DrinkService, private fmlService: FmlService) { }

  public data = []
  public id
  ngOnInit(): void {
    this.router.paramMap.subscribe(res => {
      this.id = res.get('parentCategoryId')
      this.getData(this.id)
    })
  }
  getData(id){
    console.log(id)
    this.fmlService.fmlData().subscribe((res: any) => {
      console.log(res)
      res.categories.forEach(e => {
          if(e.parent_category_id === id){
            this.data.push(e)
            console.log(e)
          }
      });
    })
    // this.services.getAllCategories().subscribe((res : any) => {
    //   let data = res.data
    //   data.forEach(data => {
    //     if(data.name === slug){
    //       this.data = data.subCategory;
    //     }
    //   });
    // })
  }

}
