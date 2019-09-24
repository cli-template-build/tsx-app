import * as React from 'react';
import { Button } from 'antd';

interface CounterCheckProps {
  counter: number;
  onDecrement: (event: any) => void;
  onIncrement: (event: any) => void;
  onIncrementAsync: (event: any) => void;
}

class Counter extends React.Component<CounterCheckProps, {}> {
  render() {
    const { counter, onIncrement, onDecrement, onIncrementAsync } = this.props;
    return (
      <div>
        <Button onClick={onIncrement}>Increment</Button>
        <Button onClick={onDecrement}>Decrement</Button>
        <Button onClick={onIncrementAsync}>IncrementAsync</Button>
        <hr />
        <div>
          Clicked: <span style={{ fontSize: '20px', color: 'red' }}> {counter} </span>times
        </div>
      </div>
    );
  }
}

export default Counter;
