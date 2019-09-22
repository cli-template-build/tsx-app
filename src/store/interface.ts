import { RematchDispatcher, RematchDispatcherAsync } from '@rematch/core';

export interface CountModels {
  increment: RematchDispatcher;
  incrementAsync: RematchDispatcherAsync;
}

export interface StateModels {
  count: number;
}
