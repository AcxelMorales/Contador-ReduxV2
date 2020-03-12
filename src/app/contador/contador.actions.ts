import { createAction, props } from '@ngrx/store';

export const incrementar = createAction('[Contador Component] Incrementar');

export const decrementar = createAction('[Contador Component] Decrementar');

export const multiplicar = createAction(
  '[Contador Component] Multiplicar',
  props<{ numero: number }>()
);

export const dividir = createAction(
  '[Contador Component] Dividir',
  props<{ numero: number }>()
);

export const resetear = createAction('[Contador Component] Resetear');
