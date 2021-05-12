import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  addressLis = []
  constructor(private http: HttpClient) { }
  Area = ["Kalyani Nagar", "Mundhwa", "Koregaon Park", "Boat Club Road", "Bund Garden Road", "Kharadi", "Vadgaonsheri", "Yerawada", "Viman Nagar", "Wagholi", "Magarpatta", "Amanora", "Hadapsar", "NIBM", "Wanowrie", "Fatima Nagar", "Sopan Baug", "Kondhwa", "Undri", "Hinjewadi", "Wakad", "Ravet", "Akurdi", "Pimpale Saudagar", "Pradhikaran", "Baner", "Balewadi", "Bavdhan", "Pashan", "Aundh", "University Road", "Bhosale Nagar", "SB Road", "Prabhat Road", "Shivaji Nagar", "Law College", "Karve Nagar", "Nal Stop", "Kothrud", "Paud Road"]
  user = JSON.parse(localStorage.getItem('user'))


  addAddress(data){
    return this.http.put(environment.url.baseUrl+'addaddress',data)
  }

  getAddress(){
    return this.http.get(environment.url.baseUrl+'getaddresses')
  }

  editAddress(data){
    return this.http.put(environment.url.baseUrl+'editaddress',data)
  }
}
