import { init } from '@rematch/core';
import * as models from './models';

export type StateType = typeof models;

const store = init({
  models,
});

export default store;
