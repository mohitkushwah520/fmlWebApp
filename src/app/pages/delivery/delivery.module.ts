import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './address/address.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AddressListComponent } from './address-list/address-list.component';
import { UserGuardGuard } from 'src/app/services/user-guard.guard';

const routes: Routes = [
  {
    path : '',
    redirectTo: 'address',
    canActivate: [UserGuardGuard]
  },
  {
    path: 'address',
    component: AddressComponent,
    canActivate: [UserGuardGuard]
  },
  {
    path: 'SelectDeliveryAddress',
    component: AddressListComponent,
    canActivate: [UserGuardGuard]
  }
]

@NgModule({
  declarations: [AddressComponent, AddressListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class DeliveryModule { }
