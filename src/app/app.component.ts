import { Component } from '@angular/core';





interface Componente{
  icon: string;
  name: string;
  redirecTo:string;

}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {  

  constructor() {} 

  
  
  componentes : Componente[] =[
    {
       icon: 'cafe-outline',
      name: 'Desayuno',
      redirecTo: '/desayuno'
    },
    {
      icon: 'restaurant-outline',
      name: 'Almuerzo Cena',
      redirecTo: '/almuerzo-cena'
    },
    {
      icon: 'nutrition-outline',
      name: 'Snacks',
      redirecTo: '/snacks'

    },
   
    {
     
      icon: 'build-outline',
      name: 'Login',
      redirecTo: '/login'
    },
  
  ];
}
  
