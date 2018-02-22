import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Resto } from '../../app/models/Resto';
import { RestoProvider } from '../../providers/resto/resto';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  restos: Resto[];

  constructor(public navCtrl: NavController, private restoProvider: RestoProvider) {
    this.restoProvider.getRestos().subscribe((restos) => {
      console.log("RESTOS: " + restos)
      this.restos = restos;
      
    });
  }

  AfterViewInit() {
    
  }

}
