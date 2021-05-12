import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public phone = true;
  public phoneNumber: FormGroup;
  public regExp = '^\\d{10}$';
  constructor(
    private profileService: ProfileService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.phoneNumber = new FormGroup({
      phoneNumber : new FormControl(null,[Validators.required, Validators.pattern(this.regExp)])
    })
  }

  submit(){
    let data = this.phoneNumber.value
    if(this.phoneNumber.valid){
      this.phone = false
      this.profileService.user(data).subscribe(res => {
        // localStorage.setItem('user',JSON.stringify(data.phoneNumber))
        this.router.navigate(['/locality'])
      })
    } else {
      console.log('from else' + this.phoneNumber.value)
    }

  }

}
