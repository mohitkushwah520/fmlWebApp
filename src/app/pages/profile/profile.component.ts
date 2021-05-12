import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from '../../services/profile.service';
import { Response } from '../../modal/response';
import { User } from '../../modal/user'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private service: ProfileService,private render : Renderer2) { }

  public profile : FormGroup;
  public previousData : User;
  // public user
  ngOnInit(): void {
    // this.user = JSON.parse(localStorage.getItem('user'))
    this.profile = new FormGroup({
      'firstName' : new FormControl('',Validators.required),
      'lastName' : new FormControl(''),
      'email' : new FormControl('',[Validators.required, Validators.email])
    })
    this.patchData()
  }

  patchData(){
    this.service.getProfile().subscribe((res : Response) => {
      this.previousData = res.data
      if(this.previousData){
        this.profile.patchValue({
          firstName : this.previousData.firstName,
          lastName : this.previousData.lastName,
          email: this.previousData.email
        })
      }
    })
  }

  OnSubmit(){
    let value = this.profile.value;
    let profileDetails = {
      "profileDetails" : value
    }
    if(this.profile.valid){
      //server request start
      this.service.putProfile(profileDetails).subscribe(res => {
        console.log(res)
      })
      //server request end

      // validation style start
      var input = document.querySelectorAll('.ng-invalid.ng-untouched')
      input.forEach(e => {
        this.render.removeClass(e,'active')
      })
      // validation style end

      //form reset start
      this.profile.reset()
      //form reset end


    } else {

      // validation style start
      var input = document.querySelectorAll('.ng-invalid.ng-untouched')
      input.forEach(e => {
        this.render.addClass(e,'active')
      })
      // validation style end

    }
  }



}
