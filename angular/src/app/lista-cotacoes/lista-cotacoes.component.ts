import { Component, OnInit } from '@angular/core';
import { CotacaoService } from '../cotacao.service';

@Component({
  selector: 'app-lista-cotacoes',
  templateUrl: './lista-cotacoes.component.html',
  styleUrls: ['./lista-cotacoes.component.css']
})
export class ListaCotacoesComponent implements OnInit {
  cotacoes : Array<any>;

  constructor(private cotacaoService : CotacaoService) { }

  ngOnInit() {
    this.listarCotacoes();
  }

  listarCotacoes(){
    this.cotacaoService.buscaCotacoes().subscribe(resposta => this.cotacoes = resposta);
  }

}
