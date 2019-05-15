import * as React from 'react';
import {Button} from 'antd';

interface CounterCheckProps {
  counter: number,
  onDecrement: (event: any) => void,
  onIncrement: (event: any) => void,
  onIncrementAsync: (event: any) => void,
  onIncrementAsyncOnce: (event: any) => void,
  onProxyWeather: (event: any) => void,
}

class Counter extends React.Component<CounterCheckProps, {}> {

  render() {
    const {
      counter,
      onIncrement,
      onDecrement,
      onIncrementAsync,
      onIncrementAsyncOnce,
      onProxyWeather,
    } = this.props;
    return (
      <div>
        <Button onClick={onIncrement}>
              Increment
        </Button>
        <Button onClick={onDecrement}>
              Decrement
        </Button>
        <Button onClick={onIncrementAsync}>
              IncrementAsync
        </Button>
        <Button onClick={onIncrementAsyncOnce}>
              IncrementAsyncOnce
        </Button>
        <Button onClick={onProxyWeather}>代理方式获取iKcamp信息</Button>
        <hr />
        <div>Clicked: <span style={{ fontSize: '20px', color: 'red' }}> {counter} </span>times</div>
      </div>
    );
  }
}

export default Counter;
