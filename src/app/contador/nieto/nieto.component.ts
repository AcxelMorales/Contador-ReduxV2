import { Component } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';

import { resetear } from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: []
})
export class NietoComponent {

  $contador: Observable<number>;

  constructor(private store: Store<{ contador: number }>) {
    this.$contador = this.store.pipe(select('contador'));
  }

  resetear(): void {
    this.store.dispatch(resetear());
  }

}
