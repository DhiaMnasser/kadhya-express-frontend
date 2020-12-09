import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }


  search(list: any[], critiria: string, value: any){

    let n = 0;
    for (let i in list) {
      if (list[i][critiria] === value) {
        n++;
      }
    }
    return n;
  }
}
