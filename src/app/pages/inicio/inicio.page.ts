import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

interface Componente{
  icon: string; 
  name: string; 
  redirecTo:string;
}


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})

export class InicioPage implements OnInit {

  componentes : Componente[] = [
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
      icon: 'server-outline',
      name: 'Datos',
      redirecTo: '/datos'
    },

    {
     
      icon: 'folder-open-outline',
      name: 'Resumen alimentos',
      redirecTo: '/resumen-alimentos'
    },
    {
     
      icon: 'tv-outline',
      name: 'Noticias',
      redirecTo: '/noticias'
    },
  ];
  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
    }


}