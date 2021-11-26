import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bienvenidos',
  templateUrl: './bienvenidos.page.html',
  styleUrls: ['./bienvenidos.page.scss'],
})
export class BienvenidosPage implements OnInit {

  constructor(public rounter:Router) { 
    setTimeout(() => {
      this.rounter.navigateByUrl('inicio');
    },3500);
  }

  ngOnInit() {
  }

}
