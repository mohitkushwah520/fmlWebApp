import { Component, OnInit } from '@angular/core';
import { DrinkService } from 'src/app/services/drink.service';
import { FmlService } from 'src/app/services/fml.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {

  constructor(private services: DrinkService, private fmlService: FmlService) { }

  public categorieslist = []

  ngOnInit(): void {
    this.fmlService.fmlData().subscribe((res : any) => {
      res.parentcategories.forEach(e => {
        this.categorieslist.push(e)
      });
      res.categories.forEach(e => {
        if(e.parent_category_id === "0"){
          this.categorieslist.push(e)
        }
      });

      console.log(this.categorieslist)
    })
    // this.services.getAllCategories().subscribe((res : any) => {
    //   this.categorieslist = res.data
    // })
  }

}
