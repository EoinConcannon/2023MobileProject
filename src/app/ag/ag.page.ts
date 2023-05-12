import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ag',
  templateUrl: './ag.page.html',
  styleUrls: ['./ag.page.scss'],
})
export class AgPage implements OnInit {
  visits: number = 1;
  constructor(private storage: Storage, private navCtrl:NavController) { }

  //When the button is pressed
  //visits is incremented by one
  //and visits data is sent to apple page
  async visit(){
    this.visits++;
    await this.storage.create();
    await this.storage.set("apple", this.visits);
    await this.navCtrl.navigateForward('/apple');
  }

  async ionViewWillEnter(){
    await this.storage.create();
    this.visits = await this.storage.get('apple');
  }

  ngOnInit() {
  }
}
