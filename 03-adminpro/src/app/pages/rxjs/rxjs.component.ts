import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable,interval } from 'rxjs';
import { retry,take,map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [],
})
export class RxjsComponent implements OnInit, OnDestroy{
  
  public subInterval$;
  constructor() {
    // this.retornaObservable()
    //   .pipe(retry(2))
    //   .subscribe(
    //     (valor) => console.log('Subs:' + valor),
    //     (err) => console.log('Error', err),
    //     () => console.info('se ha terminado')
    //   );
     this.subInterval$ =  this.retornaIntervalo().pipe(retry(2)).subscribe( console.log);
  }

  ngOnInit(): void {
  
  }
  ngOnDestroy() : void {
    this.subInterval$.unsubscribe();
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
    return interval(300)
    .pipe(
      map(valor =>{
        valor = valor +1;
       return valor;
    } ),
      filter(valor => (valor % 2 === 0 )? true: false )
    );
   
  }
}
