import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { DrinksComponent } from './drinks/drinks.component';
import { NoopAnimationPlayer } from '@angular/animations';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { SubCategoriesComponent } from './sub-categories/sub-categories.component';
import { DrinkComponent }from '../../shared/drink/drink.component'
import { UserGuardGuard } from 'src/app/services/user-guard.guard';

const rouets: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [UserGuardGuard]
  },
  {
    path : 'categories',
    component: CategoriesListComponent,
    canActivate: [UserGuardGuard]
  },
  {
    path :'product-categories/:parentCategoryId',
    component: SubCategoriesComponent,
    canActivate: [UserGuardGuard]
  },
  {
    path: 'product-categories/drinks/:categoryid',
    component: DrinksComponent,
    canActivate: [UserGuardGuard]
  }
]

@NgModule({
  declarations: [
    HomeComponent,
    CategoryComponent,
    DrinksComponent,
    CategoriesListComponent,
    DrinkComponent,
    SubCategoriesComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    RouterModule.forChild(rouets)
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [DrinkComponent]
})
export class HomeModule { }
