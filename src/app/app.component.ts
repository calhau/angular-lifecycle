import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projeto-lifecycle';

  valorInicial = 25;
  deletarConteudo = false;

  mudarValorInicial(valor: number){
    this.valorInicial = valor
    this.deletarConteudo = false
  }


}
