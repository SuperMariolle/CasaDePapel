import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Resto } from '../../app/models/Resto';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  resto: Resto;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.resto = this.navParams.get('resto');
  }

  ionViewDidLoad() {
  }

}
