import React, { FC, useState } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import CountTimer from '../../components/CountTimer';
import { StateModels } from '../../store/interface';
import { CountAction, CountState } from '../../store/models/count';

interface Props {
  countState: CountState;
  countAction: CountAction;
}

const Counter: FC<Props> = props => {
  const {} = props;

  const [showTimer, updateShowTimer] = useState(false);

  return (
    <div>
      <Button onClick={() => updateShowTimer(true)}>点击展示timer</Button>
      <br />
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
