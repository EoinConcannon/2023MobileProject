import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FruitService } from '../Services/fruit.service';

@Component({
  selector: 'app-raspberry',
  templateUrl: './raspberry.page.html',
  styleUrls: ['./raspberry.page.scss'],
})
export class RaspberryPage implements OnInit {

  constructor(private storage: Storage, private service: FruitService, private http:HttpClient) { }

  raspberryData: any[] = [];
  visits: number = 0;

  async ionViewWillEnter(){
    await this.storage.create();
    this.visits = await this.storage.get('raspberry');
  }

  GetRaspberryData():Observable<any>{
    return this.http.get('https://www.jsonblob.com/api/1106313105084006400');
  }

  ngOnInit() {
    this.service.GetRaspberryData().subscribe(
      (data) => {
      this.raspberryData = data.Search;
  })
  }

}
