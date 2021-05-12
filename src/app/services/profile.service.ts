import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http : HttpClient) {}

  user(userNumber){
    return this.http.post(environment.url.user,userNumber).pipe(
      tap(res => {
        localStorage.setItem('user',JSON.stringify(userNumber.phoneNumber))
      })
    )
  }
  putProfile(data){
    return this.http.put(environment.url.editProfile,data)
  }
  getProfile(){
    return this.http.get(environment.url.getProfile)
  }

  IsLoggedIn(){
    const user = JSON.parse(localStorage.getItem('user'))
    return (!!user)? true: false
  }
}
