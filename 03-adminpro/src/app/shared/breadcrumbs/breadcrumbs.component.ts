import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [],
})
export class BreadcrumbsComponent implements OnDestroy {

  public titulo : string;
  public breakcrumbsTitle : string;
  public tituloSub$ : Subscription;
  constructor(private router: Router) {
  this.getArgumentosRuta();
  }
  ngOnDestroy(): void {
    this.getArgumentosRuta().unsubscribe();
  }

  getArgumentosRuta()  {
    return this.router.events.pipe(
      filter( event => event instanceof ActivationEnd),
      filter( (event: ActivationEnd) => event.snapshot.firstChild === null ),
      map( (event: ActivationEnd) => {
       let data = event.snapshot.data;
        this.titulo = data.titulo;
        this.breakcrumbsTitle = "Admin Pro -" + data.titulo;
        return data;
      } )
    ).subscribe(event => console.log(event));
  }
}
