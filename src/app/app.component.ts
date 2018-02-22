import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { DetailsPage } from '../pages/details/details';
import { RestoProvider } from '../providers/resto/resto';
import { Resto } from '../app/models/Resto';

@Component({
  templateUrl: 'app.html',
  providers: [RestoProvider]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;
  restos: Resto[];

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen, 
    public restoProvider: RestoProvider
  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    restoProvider.getRestos().subscribe(restos => {
      this.restos = restos;
    });
    this.pages = [];

    this.restos.forEach(resto => 
      this.pages.push({ title: resto.name, component: DetailsPage })
    )
    console.log(this.pages);

    /*this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage }
    ];*/

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    const resto = this.restoProvider.findRestoByName(page.title);
    this.nav.push(page.component, {resto: resto});
  }
}
