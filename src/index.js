import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import './common/reset.less';
import routers from './routers';

import store from './store';

const render = Component =>
  ReactDOM.render(
    <AppContainer key={Math.random()}>
      <Provider store={store}>{Component}</Provider>
    </AppContainer>,
    document.getElementById('app'),
  );

render(routers);

// 热替换代码
if (module.hot) {
  module.hot.accept('./routers', () => {
    const nextRoutes = require('./routers').default;
    render(nextRoutes);
  });
}
