import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProfileService } from './profile.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuardGuard implements CanActivate {

  constructor(private _profileService: ProfileService, private router : Router){}

  canActivate():boolean{
    if(this._profileService.IsLoggedIn()){
      return true
    } else {
      this.router.navigate(['/user'])
      return false
    }
  }
}
