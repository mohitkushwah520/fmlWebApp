import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PincodeComponent } from './auth/pincode/pincode.component';
import { CartComponent } from './pages/cart/cart.component';
import { FavouriteComponent } from './pages/favourite/favourite.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SearchComponent } from './pages/search/search.component';
import { UserComponent } from './auth/user/user.component'
import { UserGuardGuard } from './services/user-guard.guard';

const routes: Routes = [
  // {
  //   path: '',
  //   component: PincodeComponent
  // },
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'product/:itemId',
    component: ProductDetailComponent,
    canActivate: [UserGuardGuard]
  },
  {
    path : 'cart',
    component: CartComponent,
    canActivate: [UserGuardGuard]
  },
  {
    path: 'wish-list',
    component: FavouriteComponent,
    canActivate: [UserGuardGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [UserGuardGuard]
  },
  {
    path: 'search',
    component: SearchComponent,
    canActivate: [UserGuardGuard]
  },
  {
    path: 'delivery',
    loadChildren: () => import('./pages/delivery/delivery.module').then(m => m.DeliveryModule)
  },
  {
    path : 'user',
    component: UserComponent
  },
  {
    path: 'locality',
    component: PincodeComponent,
    canActivate: [UserGuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
