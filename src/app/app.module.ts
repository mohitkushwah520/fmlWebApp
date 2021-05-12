import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PincodeComponent } from './auth/pincode/pincode.component';
import { DrinkService } from './services/drink.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CartComponent } from './pages/cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { FavouriteComponent } from './pages/favourite/favourite.component';
import { SearchComponent } from './pages/search/search.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UserComponent } from './auth/user/user.component';
import { HomeModule } from './pages/home/home.module';
import { AuthInterceptor } from './services/auth.interceptor'
import { UserGuardGuard } from './services/user-guard.guard';
import { FmlService } from './services/fml.service'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PincodeComponent,
    CartComponent,
    ProductDetailComponent,
    FavouriteComponent,
    SearchComponent,
    ProfileComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HomeModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    DrinkService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    UserGuardGuard,
    FmlService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
