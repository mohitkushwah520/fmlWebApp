import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FmlService {

  outletData
  cart = new Subject()
  constructor(private http: HttpClient) { }

  // fmlData(){
  //   const date = new Date()
  //   return this.http.post(environment.fmlServerApi,{
  //     restID: `${this.getRequestData().body.restID}`,
  //     last_updated_on: `${this.gateDate()}`,
  //     data_type: 'json'
  //   },{
  //     headers: new HttpHeaders({
  //       'app-key' : `${this.getRequestData().header.app_key}`,
  //       'app-secret': `${this.getRequestData().header.app_secret}`,
  //       'access-token': `${this.getRequestData().header.access_token}`
  //     })
  //   }
  //   )
  // }

  fmlData(){
    return this.http.get('/assets/fmldata.json')
  }

  getFavourite(){
    return this.http.get(environment.url.getFavourite)
  }
  addFavourite(data){
    return this.http.put(environment.url.putFavourite,data)
  }
  removeFavourite(data){
    return this.http.put(environment.url.removeFavourite,data)
  }
  cartData(){
    return this.cart.asObservable()
  }

  getOutlet(data){
    let outlet = [
      ["Kharadi", "Kalyani Nagar", "Koregaon Park", "Mundhwa", "Boat Club Road", "Bund Garden Road", "Hadapsar", "Manjiri", "Saswad", "Viman Nagar", "Vadgaonsheri", "Yerawada", "Tingre Nagar", "Amanora", "Magarpatta", "Wagholi", "NIBM","Wanowrie","Keshav Nagar","Bibwevadi","Kondhwa","Lulla Nagar","Undri","Dhanori","Vishrantwadi"],
      ["Sinhagad Road", "Dhayari", "Senapati Bapat Road", "University Road", "FC Road", "Prabhat Road", "Shivaji Nagar", "Kothrud", "Aundh", "Nanded City", "Law College Road", "Nal Stop", "Karve Nagar", "Paud Road"],
      ["Hinjewadi", "Wakad", "Ravet", "Akurdi", "Pimpale Saudagar", "Baner", "Balewadi", "Pashan", "Bavdhan", "Pradhikaran"]
    ]
    return outlet[data]
  }
  gateDate(){
    const date = new Date();
    let dd = ["01","02","03","04","05","06","07","08","09","10","11","12"]
    let data = `${date.getDate()}-${dd[date.getMonth()]}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
    return data
  }
  getRequestData(){
    let outlet = JSON.parse(localStorage.getItem('locality'))
    const outletDetails = [
      {
        header: {
          app_key: 'f14qd3se9a6juzbmoit85c0nrvhykgwp',
          app_secret: '0ecb9930ec89b68dbc923d3ecedc43f37901cf61',
          access_token: '04fc7877ce7e5f771328b2a1434cb040ad1b2c0f'
        },
        body: {
          restID: 'k13cv5ho'
        }
      },
      {
        header: {
          app_key: 'f14qd3se9a6juzbmoit85c0nrvhykgwp',
          app_secret: '0ecb9930ec89b68dbc923d3ecedc43f37901cf61',
          access_token: '04fc7877ce7e5f771328b2a1434cb040ad1b2c0f'
        },
        body: {
          restID: 'k13cv5ho'
        }
      },
      {
        header: {
          app_key: 'f14qd3se9a6juzbmoit85c0nrvhykgwp',
          app_secret: '0ecb9930ec89b68dbc923d3ecedc43f37901cf61',
          access_token: '04fc7877ce7e5f771328b2a1434cb040ad1b2c0f'
        },
        body: {
          restID: 'k13cv5ho'
        }
      }
    ]
    return outletDetails[outlet]
  }

}
