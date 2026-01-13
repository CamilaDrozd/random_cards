import { Component, OnInit } from '@angular/core';
import { LISTA_DICAS } from '../../dicas.data';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{

  dicas = LISTA_DICAS;
  dicaSorteada = this.dicas[0];

  ngOnInit(): void {
    this.randomizarDica();
  }


  randomizarDica() : void {
    const indice = Math.round(Math.random() * this.dicas.length);
    this.dicaSorteada = this.dicas[indice];
  }
}
