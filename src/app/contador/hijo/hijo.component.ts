import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {

  @Input() contador: number;
  @Output() cambioContador: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  multiplicar(): void {
    this.contador *= 2;
    this.cambioContador.emit(this.contador);
  }

  dividir(): void {
    this.contador /= 2;
    this.cambioContador.emit(this.contador);
  }

  nuevoValor(evt): void {
    this.contador = evt;
    this.cambioContador.emit(this.contador);
  }

}
