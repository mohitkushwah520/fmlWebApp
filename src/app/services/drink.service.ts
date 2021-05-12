import { Injectable, Renderer2 } from '@angular/core';
import { HttpClient, HttpHeaders }from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {

  constructor(private http: HttpClient) { }

  getAllCategories(){
    return this.http.get(environment.url.allCategories)
  }
  quantityFilter(data, newData){
    data.forEach(res => {
      res.selectedPrice = res.quantity[0].runningPrice
      res.selectedQunatity = res.quantity[0].quantityName
      res.cartQuantity = 0
      newData.push(res)
    })
  }
  changequantity(e,data,quantity,render){
    var btn = e.target.parentElement;
    btn.querySelectorAll('.theme-btn').forEach(e => {
      render.removeClass(e,'active')
    })
    render.addClass(e.target, 'active')
    data.selectedPrice = quantity.runningPrice
    data.selectedQunatity = quantity.quantityName
  }

  search(searchData){
    return this.http.get(`${environment.url.baseUrl}websearch?search=${searchData}`)
  }

  fmlData(){
    return this.http.get('/assets/fmldata.json')
  }

  // fmlData(){
  //   return this.http.post('https://qle1yy2ydc.execute-api.ap-southeast-1.amazonaws.com/V1/mapped_restaurant_menus',{"restID": "k13cv5ho","last_updated_on": "26-11-2020 14:14","data_type": "json"},
  //   {
  //     headers: new HttpHeaders({
  //       "app-key":"f14qd3se9a6juzbmoit85c0nrvhykgwp",
  //       "app-secret": "0ecb9930ec89b68dbc923d3ecedc43f37901cf61",
  //       "access-token" : "04fc7877ce7e5f771328b2a1434cb040ad1b2c0f"
  //     })
  //   }
  //   )
  // }
}
