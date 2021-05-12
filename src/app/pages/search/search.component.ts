import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { concatMap, debounceTime, distinctUntilChanged, map, pluck, switchMap } from 'rxjs/operators';
import { Response } from 'src/app/modal/response';
import { DrinkService } from 'src/app/services/drink.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, AfterViewInit {

  @ViewChild('search')search : NgForm
  constructor(private _drinkService: DrinkService) { }

  searchData;
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {

    // const formValue = this.search.valueChanges
    // formValue.pipe(
    //   // map(data => data.searchControl)
    //   pluck('searchControl'),
    //   debounceTime(500),
    //   distinctUntilChanged(),
    //   switchMap(data => this._drinkService.search(data))
    // ).subscribe((res : Response) => {
    //   console.log(res)
    //   this.searchData = res.data
    //   // if(res.length >= 3){
    //   //   console.log(res)
    //   // }
    // })
  }
  change(){
    const serachInput = this.search.value.searchControl
    if(serachInput.length >= 3){
    this._drinkService.search(serachInput).subscribe((res : Response) => {
      this.searchData = res.data
    })
  } else {
    this.searchData = []
  }
  }
}
