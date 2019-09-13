import { Component } from '@angular/core';

/**
 * Generated class for the AuthFabComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'auth-fab',
  templateUrl: 'auth-fab.html'
})
export class AuthFabComponent{

  text: string;

  constructor() {
    this.text = 'Hello World';
  }

}
