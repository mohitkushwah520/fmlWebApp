import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from 'src/app/modal/response';
import { FmlService } from 'src/app/services/fml.service';
import { AddressService } from '../../../services/address.service'

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  public addressForm: FormGroup;
  public pincode = [];
  public addmode = false;

  // edit mode variable
  public editmode = false;
  public editData = {}
  public previousFlatNo;
  constructor(private render: Renderer2,private service: AddressService, private route: Router,private router: ActivatedRoute,private fmlService: FmlService) { }

  ngOnInit(): void {
    this.addressForm = new FormGroup({
      'firstName': new FormControl('',Validators.required),
      'lastName': new FormControl(''),
      'phoneNumber': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),
        'locality': new FormControl('',Validators.required),
        'flatNo': new FormControl('',Validators.required),
        'landmark': new FormControl('',Validators.required)
    })
    this.addAddress();
    this.fn_editMode();
    this.pincode = this.fmlService.getOutlet(+JSON.parse(localStorage.getItem('locality')))
  }
  onSubmit(){
    const data = {address: this.addressForm.value}
    console.log(this.addressForm.value)
    if(this.addressForm.valid){

      if(this.editmode){
        const editData = {address: this.addressForm.value, oldFlatNo: this.previousFlatNo}
        this.service.editAddress(editData).subscribe(res => {
          this.route.navigate(['/delivery/SelectDeliveryAddress'])
        })
      } else {
          this.service.addAddress(data).subscribe(res => {
            localStorage.setItem('address', JSON.stringify(this.addressForm.value))
            this.route.navigate(['/cart'])
          })
      }


    } else {
      let obj = this.addressForm.controls
      document.querySelectorAll('.ng-invalid').forEach(e => {
        this.render.addClass(e,'submit')
      })
    }
  }
  addAddress(){
    this.router.queryParamMap.subscribe(res => {
      this.addmode = (res.get('addAddress') === 'true')
    })
  }

  formSetValue(data){
    this.addressForm.patchValue({
      firstName: data.firstName,
      lastName: data.lastName,
      phoneNumber : data.phoneNumber,
      email: data.email,
      locality: data.locality,
      flatNo: data.flatNo,
      landmark: data.landmark
    })
  }
  fn_editMode(){
    this.router.queryParams.subscribe(res => {
      this.service.getAddress().subscribe((addList: Response) => {
        addList.data.forEach(e => {
          if(e.flatNo === res.flatNo){
            this.formSetValue(e)
            this.editmode = res.editMode
            this.previousFlatNo = res.flatNo
          }
        });
      })
    })
  }

}
