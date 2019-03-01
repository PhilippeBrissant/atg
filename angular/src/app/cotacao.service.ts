import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CotacaoService {

  constructor(private http: HttpClient) { }

  buscaCotacoes(){
    let urlCotacoes = 'https://forex.1forge.com/1.0.3/quotes?pairs=USDEUR,USDGBP,USDJPY,USDCNH&api_key=3EiUpAyIBbMcwwx7PWiYjTz2RiooBJAI'
    return this.http.get<any[]>(urlCotacoes);
  }

  converte(valor: string, de:string, para:string){
    let urlconvert =  'https://forex.1forge.com/1.0.3/convert?from='+de+'&to='+para+'&quantity='+valor+'&api_key=3EiUpAyIBbMcwwx7PWiYjTz2RiooBJAI'
    return this.http.get<any[]>(urlconvert);
  }

  buscaSimbolos(){

  }
}
