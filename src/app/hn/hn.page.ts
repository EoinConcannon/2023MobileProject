import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-hn',
  templateUrl: './hn.page.html',
  styleUrls: ['./hn.page.scss'],
})
export class HnPage implements OnInit {

  visits: number = 0;
  constructor(private storage: Storage, private navCtrl:NavController) { }

  async visit(){
    this.visits++;
    await this.storage.create();
    await this.storage.set("lemon", this.visits);
    await this.navCtrl.navigateForward('/lemon');
  }

  async ionViewWillEnter(){
    await this.storage.create();
    this.visits = await this.storage.get('lemon');
  }

  ngOnInit() {
  }

}
