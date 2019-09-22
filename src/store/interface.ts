import { RematchDispatcher, RematchDispatcherAsync } from '@rematch/core';

export interface CountAction {
  increment: RematchDispatcher;
  incrementAsync: RematchDispatcherAsync;
}

export interface CountModel {
  count: number;
}

export interface StateModels {
  count: CountModel;
}
