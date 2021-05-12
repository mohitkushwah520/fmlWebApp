import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from 'src/app/modal/response';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.scss']
})
export class AddressListComponent implements OnInit {

  constructor(private service : AddressService, private route : Router) { }

  addressList = []
  ngOnInit(): void {
    // this.data()
    this.service.getAddress().subscribe((res: Response) => {
      this.addressList = res.data
    })
  }

  // data(){
  //   this.addressList = JSON.parse(localStorage.getItem('addressList'))
  // }
  deliverAddress(add){
    localStorage.setItem('address',JSON.stringify(add))
    this.route.navigate(['/cart'])
    // this.addSub()
    // this.service.addAddress(add)
  }
  editAddress(add){
    console.log(add)
    // this.route.navigate(['/delivery/address'])
  }
  // addSub(){
  //   // this.service.getData().subscribe(res => {
  //   //   this.route.navigate(['/cart'])
  //   // })
  // }

}
