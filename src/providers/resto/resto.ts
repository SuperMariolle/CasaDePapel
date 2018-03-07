import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resto } from '../../app/models/Resto';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

/*
  Generated class for the RestoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestoProvider {

  private restos: Resto[];

  constructor() {
    this.restos = [{
      name:'La callipeo',
      description:'Un super restuarant genial et magniifque',
      phone:'0484848041',
      address:'Rue de la glace, 48',
      facebook_link:'http://facebook.com/LaCallieppepeo',
      mail:'lacallieeppeo@hotmail.com',
      noon_opening:'8h30 - 12h30',
      evening_opening: '17h00 - 23h45',
      image_name: 'brasserie_joia.jpg'
     },
     {
      name:'La giraffe',
      description:'Un super giraffe genial et magniifque',
      phone:'048454541',
      address:'Rue de la giraffe, 78',
      facebook_link:'http://facebook.com/LaGiraffe',
      mail:'lagiraffe@hotmail.com',
      noon_opening:'9h30 - 10h30',
      evening_opening: '17h00 - 18h45',
      image_name: 'la_pignata.jpg'
     },
     {
      name:'Le galinacé',
      description:'Un galinacé de compétition',
      phone:'048454541',
      address:'Rue de la giraffe, 78',
      facebook_link:'http://facebook.com/LaGiraffe',
      mail:'lagiraffe@hotmail.com',
      noon_opening:'9h30 - 10h30',
      evening_opening: '17h00 - 18h45',
      image_name: 'la_trattoria.jpg'
     }] ;
  }

  getRestos(): Observable<Resto[]> {
    return of(this.restos);
  }
  findRestoByName(restoName:string): Resto{
    return this.restos.find(resto => resto.name === restoName);
  }

}
