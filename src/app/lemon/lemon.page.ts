import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FruitService } from '../Services/fruit.service';

@Component({
  selector: 'app-lemon',
  templateUrl: './lemon.page.html',
  styleUrls: ['./lemon.page.scss'],
})
export class LemonPage implements OnInit {

  constructor(private storage: Storage, private service: FruitService, private http:HttpClient) { }

  lemonData: any[] = [];
  visits: number = 0;

  async ionViewWillEnter(){
    await this.storage.create();
    this.visits = await this.storage.get('lemon');
  }

  GetLemonData():Observable<any>{
    return this.http.get('https://www.jsonblob.com/api/1106502788522983424');
  }

  ngOnInit() {
    this.service.GetLemonData().subscribe(
      (data) => {
      this.lemonData = data.Search;
  })
  }

}
