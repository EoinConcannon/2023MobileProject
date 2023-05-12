import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  stories: any[] = [];
  visits: number = 0;
  constructor(private storage: Storage, private navCtrl: NavController) { }


  //when user taps search button
  async visit() {
    this.visits++;
    await this.storage.create();
    await this.storage.set("search", this.visits);
    await this.navCtrl.navigateForward('/search');
  }

  //sends change made to visits variable to visits variable in search page
  async ionViewWillEnter() {
    await this.storage.create();
    this.visits = await this.storage.get('search');
  }
}
