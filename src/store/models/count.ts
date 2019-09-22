import { ModelConfig } from '@rematch/core';

const count: ModelConfig = {
  state: 0,
  reducers: {
    increment(state: number, payload: number) {
      return state + payload;
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
