import React, { FC, useState } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import CountTimer from '../../components/CountTimer';
import { StateModels } from '../../store/interface';
import { CountAction, CountState } from '../../store/models/count';
import CounterComponent from '../../components/CounterComponent';

interface Props {
  countState: CountState;
  countAction: CountAction;
}

const Counter: FC<Props> = props => {
  const { countAction, countState } = props;

  const [showTimer, updateShowTimer] = useState(false);

  console.log(countState);

  return (
    <div>
      <Button onClick={() => updateShowTimer(true)}>点击展示timer</Button>
      <br />
      <br />
      <CounterComponent
        counter={countState.count}
        onDecrement={countAction.decrement}
        onIncrement={countAction.increment}
        onIncrementAsync={countAction.incrementAsync}
      />
      <CountTimer show={showTimer} />
    </div>
  );
};

const mapStateToProps = ({ count }: StateModels) => ({
  countState: count,
});

const mapDispatchToProps = (dispatch: any) => ({
  countAction: dispatch.count,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
