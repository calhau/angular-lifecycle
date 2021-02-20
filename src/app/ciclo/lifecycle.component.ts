import { AfterContentChecked, AfterViewChecked, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'lifecycle',
  templateUrl: 'lifecycle.component.html'
})
export class LifeCycleComponent implements OnInit, OnChanges, DoCheck, AfterContentChecked, AfterViewChecked, OnDestroy {
  constructor() { }

  @Input() valorInicial2 = 18;

  @Input() deletarConteudo2 = false;

  ngOnInit() {
    console.log('Entrei no componente Lifecycle - ngOnInit')
  }

  ngOnChanges(){
    console.log('Entrei no componente Lifecycle - ngOnChanges')
  }

  ngDoCheck(){
    console.log('Entrei no componente Lifecycle - ngDoCheck')
  }

  ngAfterContentChecked(){
    console.log('Entrei no componente Lifecycle - ngAfterContentChecked')
  }

  ngAfterViewChecked(){
    console.log('Entrei no componente Lifecycle - ngAfterViewChecked')
  }

  ngOnDestroy(){
    console.log('**Entrei no componente Lifecycle - ngOnDestroy')
  }
}
