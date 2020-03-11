import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: []
})
export class NietoComponent implements OnInit {

  @Input() contador: number;
  @Output() cambioContador: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  resetear(): void {
    this.contador = 0;
    this.cambioContador.emit(this.contador);
  }

}
