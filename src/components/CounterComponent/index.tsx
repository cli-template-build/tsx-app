import * as React from 'react';
import { Button } from 'antd';

interface CounterCheckProps {
  counter: number;
  onDecrement: (event: any) => void;
  onIncrement: (event: any) => void;
  onIncrementAsync: (event: any) => void;
}

class CounterComponent extends React.Component<CounterCheckProps, {}> {
  render() {
    const { counter, onIncrement, onDecrement, onIncrementAsync } = this.props;
    return (
      <div>
        <Button onClick={() => onIncrement(1)}>Increment</Button>
        <Button onClick={() => onDecrement(1)}>Decrement</Button>
        <Button onClick={() => onIncrementAsync(1)}>IncrementAsync</Button>
        <hr />
        <div>
          Clicked: <span style={{ fontSize: '20px', color: 'red' }}> {counter} </span>times
        </div>
      </div>
    );
  }
}

export default CounterComponent;
