import { Injectable } from '@angular/core';
import { HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { ProfileService } from './profile.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private _profileService: ProfileService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (this._profileService.IsLoggedIn()) {
      const modifiedReq = req.clone({
        headers: new HttpHeaders({
          'phoneNumber': JSON.parse(localStorage.getItem('user'))
        })
      })
      return next.handle(modifiedReq)

    } else {
      return next.handle(req)
    }
  }

}
