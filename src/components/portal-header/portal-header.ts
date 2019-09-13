import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

/**
 * Generated class for the PortalHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'portal-header',
  templateUrl: 'portal-header.html'
})
export class PortalHeaderComponent {

  curIndex = 0;
  userDetails: any = [];
  logged_in = true;

  constructor(public navCtrl: NavController) {
    this.userDetails = JSON.parse(localStorage.getItem("userCredentials"));
    if(this.userDetails){
      this.logged_in = false;
    }
  }

  onSelectPage(index) {

    switch (index) {
      case 0:
        this.navCtrl.push('HomePage', {}, {animate: false});
        break;
      case 1:
        //this.navCtrl.push('StrainsPage');
        break;
      case 2:
        this.navCtrl.push('StrainsPage', {}, {animate: false});
        break;
      case 3:
        this.navCtrl.push('CouponsPage', {}, {animate: false});
        break;
      case 4:
        break;
    }
  }

  login() {
    this.navCtrl.push('LoginPage', {}, {animate: false});
  }

  register() {
    this.navCtrl.push('SignupPage', {}, {animate: false});
  }
}
