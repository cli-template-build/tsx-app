import React, { FC, useState } from 'react';
import { Button } from 'antd';
import CountTimer from '../../components/CountTimer';

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

export default Counter;
