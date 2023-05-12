import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ou',
  templateUrl: './ou.page.html',
  styleUrls: ['./ou.page.scss'],
})
export class OuPage implements OnInit {
  visits: number = 0;
  constructor(private storage: Storage, private navCtrl:NavController) { }

  async visit(){
    this.visits++;
    await this.storage.create();
    await this.storage.set("raspberry", this.visits);
    await this.navCtrl.navigateForward('/raspberry');
  }

  async ionViewWillEnter(){
    await this.storage.create();
    this.visits = await this.storage.get('raspberry');
  }
  
  ngOnInit() {
  }

}
