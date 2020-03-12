import { createReducer, on } from '@ngrx/store';

import * as actions from './contador.actions';

export const initialState: number = 10;

const _contadorReducer = createReducer(
  initialState,
  on(actions.incrementar, state => state + 1),
  on(actions.decrementar, state => state - 1),
  on(actions.multiplicar, (state, { numero }) => state * numero),
  on(actions.dividir, (state, { numero }) => state / numero),
  on(actions.resetear, state => state = 0)
);

export function contadorReducer(state, action) {
  return _contadorReducer(state, action);
}
