import { Component } from '@angular/core';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { Keyboard } from '@ionic-native/keyboard/ngx';
// import { Keyboard } from '@ionic-native/keyboard/ngx';

/**
 * Generated class for the PortalFooterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'portal-footer',
  templateUrl: 'portal-footer.html'

})
export class PortalFooterComponent {

  curIndex = 0;
  userDetails: any = [];
  total_unread: any = [];
  public interval;

  constructor(
    public navCtrl: NavController,
    private keyboard: Keyboard
  ) {
    
  }

  onSelectPage(index) {

    
  }
}
