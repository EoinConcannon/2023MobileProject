import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  visits: number = 0;

  constructor(private storage: Storage) { }

  async ionViewWillEnter(){
    await this.storage.create();
    this.visits = await this.storage.get('search');
  }

  ngOnInit() {
  }

}
