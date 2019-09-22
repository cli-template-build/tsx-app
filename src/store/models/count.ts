import { ModelConfig } from '@rematch/core';

interface CountState {
  count: number;
}

const defaultState: CountState = {
  count: 0,
};

const count: ModelConfig<CountState> = {
  state: defaultState,
  reducers: {
    increment(state, payload: number) {
      console.log(`<${'='.repeat(100)}>`);
      console.log(payload);
      console.log(`<${'='.repeat(100)}>`);

      return {
        ...state,
        count: state.count + payload,
      };
    },
  },
  effects: {
    async incrementAsync(payload: number, rootState: number) {
      // 模拟延时
      await new Promise(resolve => setTimeout(resolve, 1000));
      this.increment(payload);
      console.log(rootState);
    },
  },
};

export default count;
