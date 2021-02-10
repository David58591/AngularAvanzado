import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit, OnChanges {

  ngOnInit(){
    this.checkCurrentTheme();
  }

  ngOnChanges(){
    this.checkCurrentTheme();
  }

  public elemTheme =  document.querySelector('#theme');


 changeTheme(theme: string) {
 const url = `./assets/css/colors/${theme}.css`;
  this.elemTheme.setAttribute('href',url);
  localStorage.setItem('theme',url);
  this.checkCurrentTheme();
}

checkCurrentTheme(){
  const links = document.querySelectorAll('.selector');
  links.forEach(elem => {
      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;

      const currentTheme = this.elemTheme.getAttribute('href');
      if(btnThemeUrl === currentTheme){
        elem.classList.add('working');
      }
  });
}
}
