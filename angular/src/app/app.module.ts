import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaCotacoesComponent } from './lista-cotacoes/lista-cotacoes.component';
import { FormConvertComponent } from './form-convert/form-convert.component';
import { CotacaoService } from './cotacao.service';
import { HttpClientModule }from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListaCotacoesComponent,
    FormConvertComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CotacaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
