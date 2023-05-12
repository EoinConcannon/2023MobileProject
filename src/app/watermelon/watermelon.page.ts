import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FruitService } from '../Services/fruit.service';

@Component({
  selector: 'app-watermelon',
  templateUrl: './watermelon.page.html',
  styleUrls: ['./watermelon.page.scss'],
})
export class WatermelonPage implements OnInit {
  constructor(private storage: Storage, private service: FruitService, private http:HttpClient) { }

  watermelonData: any[] = [];
  visits: number = 0;

  async ionViewWillEnter(){
    await this.storage.create();
    this.visits = await this.storage.get('watermelon');
  }

  GetWatermelonData():Observable<any>{
    return this.http.get('https://www.jsonblob.com/api/1106503024087678976');
  }

  ngOnInit() {
    this.service.GetWatermelonData().subscribe(
      (data) => {
      this.watermelonData = data.Search;
  })
  }

}
