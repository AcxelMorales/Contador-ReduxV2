import { Component } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';

import { multiplicar, dividir } from '../contador.actions'

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent {

  private value: number = 2;
  $contador: Observable<number>;

  constructor(private store: Store<{ contador: number }>) {
    this.$contador = this.store.pipe(select('contador'));
  }

  multiplicar(): void {
    this.store.dispatch(multiplicar({ numero: this.value }));
  }

  dividir(): void {
    this.store.dispatch(dividir({ numero: this.value }));
  }

}
