import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  // constructor() { }

 ngOnInit(): void {
  //   const promesa = new Promise((resolve, reject) => {
  //     if(true){
  //       resolve('Hola mundo');
  //     }else{
  //       reject('SE produjo un error')
  //     }
  //   });

  //   promesa.then((res) => console.log(res)).catch((e) => console.log(e))

  //   console.log('Fin del init');
  this.getUsuarios().then(usuarios => console.log(usuarios));
   }
  
   getUsuarios() {
     return new Promise(resolve => {
      fetch('https://reqres.in/api/users')
      .then(resp => {
      resp.json()
        .then(body => resolve(body.data)
        );
      }
      );
     })
   }
  
}
