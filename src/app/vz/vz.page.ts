import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-vz',
  templateUrl: './vz.page.html',
  styleUrls: ['./vz.page.scss'],
})
export class VzPage implements OnInit {
  visits: number = 0;
  constructor(private storage: Storage, private navCtrl: NavController) { }

  async visit() {
    this.visits++;
    await this.storage.create();
    await this.storage.set("watermelon", this.visits);
    await this.navCtrl.navigateForward('/watermelon');
  }

  async ionViewWillEnter() {
    await this.storage.create();
    this.visits = await this.storage.get('watermelon');
  }

  ngOnInit() {
  }

}
