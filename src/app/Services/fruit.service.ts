import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  constructor(private http: HttpClient) { }

  GetAppleData(): Observable<any> {
    return this.http.get('https://www.jsonblob.com/api/1106291034119487488');
  }

  GetLemonData(): Observable<any> {
    return this.http.get('https://www.jsonblob.com/api/1106502788522983424');
  }

  GetRaspberryData(): Observable<any> {
    return this.http.get('https://www.jsonblob.com/api/1106313105084006400');
  }

  GetWatermelonData(): Observable<any> {
    return this.http.get('https://www.jsonblob.com/api/1106503024087678976');
  }


  //JSON/api used
  //www.fruityvice.com
}
