import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment }from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {
  user

  constructor(private http: HttpClient) { }

  getFavourite(){
    return this.http.get(environment.url.getFavourite)
  }
  addFavourite(data){
    return this.http.put(environment.url.putFavourite,data)
  }
  removeFavourite(data){
    return this.http.put(environment.url.removeFavourite,data)
  }
}
