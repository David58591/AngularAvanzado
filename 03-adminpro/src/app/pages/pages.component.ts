import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  public elemTheme = document.querySelector('#theme');
  constructor(private settingsService : SettingsService) { }

  ngOnInit(): void {

    const url = localStorage.getItem('theme') || './assets/css/colors/green-dark.css';
    this.elemTheme.setAttribute('href',url);


  }

}
