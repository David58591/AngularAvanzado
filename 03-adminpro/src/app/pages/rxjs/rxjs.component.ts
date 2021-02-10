import { Component, OnInit } from '@angular/core';
import { Observable,interval } from 'rxjs';
import { retry,take,map } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [],
})
export class RxjsComponent implements OnInit {
  
  constructor() {
    // this.retornaObservable()
    //   .pipe(retry(2))
    //   .subscribe(
    //     (valor) => console.log('Subs:' + valor),
    //     (err) => console.log('Error', err),
    //     () => console.info('se ha terminado')
    //   );
    this.retornaIntervalo().pipe(retry(2)).subscribe( console.log);
  }

  ngOnInit(): void {
 
  }
  retornaObservable() {
    let i = -1;
    return new Observable<number>((observer) => {
      const intervalo = setInterval(() => {
        observer.next(i);
        i++;
        if (i === 4) {
          clearInterval(intervalo);
          observer.complete();
        }
        if (i === 2) {
          console.error('i=2.... Error');
          observer.error('i llegó al valor de 2 ');
        }
      }, 1000);
    });
  }

  retornaIntervalo() {
    return interval(1000).pipe(take(4),map(valor =>{
        valor = valor +1;
      return 'hola Mundo '+ ' ' + valor;
    } ));
   
  }
}
