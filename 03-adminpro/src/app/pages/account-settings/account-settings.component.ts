import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent {

 changeTheme(theme: string) {
 const elemTheme =  document.querySelector('#theme');
 const url = `./assets/css/colors/${theme}.css`;
 console.log(url);
 return url;
}

}
