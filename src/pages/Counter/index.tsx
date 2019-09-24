import React, { FC, useState } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import CountTimer from '../../components/CountTimer';
import { StateModels } from '../../store/interface';

const Counter: FC = () => {
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
  countModel: count,
});

const mapDispatchToProps = (dispatch: any) => ({
  countDispatch: dispatch.count,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
