import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FruitService } from '../Services/fruit.service';
//two imports below not working
//import { Geolocation } from '@capacitor/geolocation';
//import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-apple',
  templateUrl: './apple.page.html',
  styleUrls: ['./apple.page.scss'],
})
export class ApplePage implements OnInit {
  constructor(private storage: Storage, private service: FruitService, private http: HttpClient) { }
  //json variable
  appleData: any[] = [];

  visits: number = 1;

  lat: number = 0;
  long: number = 0;
  time: number = 0;

  async ionViewWillEnter() {
    await this.storage.create();
    this.visits = await this.storage.get('apple');
  }

  GetAppleData(): Observable<any> {
    return this.http.get('https://www.jsonblob.com/api/1106291034119487488');
  }

  /*
  async getGPS() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.lat = coordinates.coords.latitude;
    this.long = coordinates.coords.longitude;
    this.time = coordinates.timestamp;
    console.log('Current position:', coordinates);
  }
  async openBrowser() {
    await Browser.open({ url: 'http://capacitorjs.com/' });
  };
  */

  //gets the json data
  ngOnInit() {
    this.service.GetAppleData().subscribe(
      (data) => {
        this.appleData = data.Search;
      })
  }
}
