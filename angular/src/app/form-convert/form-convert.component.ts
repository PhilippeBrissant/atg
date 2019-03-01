import { Component, OnInit } from '@angular/core';
import { CotacaoService } from '../cotacao.service';

@Component({
  selector: 'app-form-convert',
  templateUrl: './form-convert.component.html',
  styleUrls: ['./form-convert.component.css']
})
export class FormConvertComponent implements OnInit {
  valor:string;
  de: string;
  para: string;
  
  constructor(private cotacoesService:CotacaoService) { 
    this.valor = "";
    this.de = "";
    this.para = "";
  }

  ngOnInit() {
  }

  onKeyUp(evento:KeyboardEvent){
    this.valor = (<HTMLInputElement> evento.target).value; 
  }

  onSelectDe(value){
    this.de = value;
  }

  onSelectPara(value){
    this.para = value;
  }

  converter(){    
    this.cotacoesService.converte(this.valor, this.de, this.para).subscribe(resposta => this.valor = resposta['text']);
  }
}
