import { Component } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';

import { incrementar, decrementar } from './contador/contador.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {

  $contador: Observable<number>;

  constructor(private store: Store<{ contador: number }>) {
    this.$contador = this.store.pipe(select('contador'));
  }

  incrementar(): void {
    this.store.dispatch(incrementar());
  }

  decrementar(): void {
    this.store.dispatch(decrementar());
  }
}
