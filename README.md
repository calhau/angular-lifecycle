Estudando LifeCycle Hooks

1-ngOnChanges
2-ngOnInit
3-ngDoCheck
4-ngAfterContentInit
5-ngAfeterContentChecked
6-ngAfterViewChecked
7-ngOnDestroy

===============================================================================

ngOnChanges()

Quando um component filho, que possui uma propriedade do tipo Input(), é o pai passa esse valor, automaticamente o ngOnChanges é executado, pois ouve alteração no conteudo

No exemplo, criei 2 botoes, que ao serem clicados (click), alteram o valor da variavel valorInicial, que é passada para o componente filho(Possui a variavel valorInicial2 como Input())

===============================================================================

observar que dentro do app.component.ts

implementei:

2 variaveis
  -valorInicial
  -deletarConteudo

1 metodo
  -mudarValorInicial()

Sendo assim essas variaveis possuem um Input() no componente filho que ira receber conforme valor abaixo
```html
  <lifecycle
    [valorInicial2]="valorInicial"
    *ngIf="!deletarConteudo"
    [deletarConteudo2]="deletarConteudo"
    >
  </lifecycle>
```
Alem disso, utilizei botoes para simular os hooks

```html
  <div style="display: flex; flex-direction: row;">
    <button (click)="mudarValorInicial(12)">Mudar o valor</button>
    <button (click)="valorInicial = 33">Mudar o valor novamente</button>
    <button (click)="deletarConteudo = true">Deletar o conteudo</button>
  </div> 
```
