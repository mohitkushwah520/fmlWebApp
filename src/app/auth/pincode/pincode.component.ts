import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddressService } from 'src/app/services/address.service';
import { FmlService } from 'src/app/services/fml.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-pincode',
  templateUrl: './pincode.component.html',
  styleUrls: ['./pincode.component.scss']
})
export class PincodeComponent implements OnInit {

  constructor(private router: Router,private service: AddressService,private fmlService: FmlService) { }

  public loclityData: NgForm
  public locality = []
  ngOnInit(): void {
    this.locality = ['Kalyani Nagar','SB Road','Hinjewadi']
  }

  getLocality(data){
    localStorage.setItem('outlet',JSON.stringify(data.locality))
    this.router.navigate([''])
  }
}
