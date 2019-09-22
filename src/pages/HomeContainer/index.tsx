import React, { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { Button, Select, Input } from 'antd';
import { RematchDispatcher, RematchDispatcherAsync } from '@rematch/core';
import { connect } from 'react-redux';
import { StateType } from '../../store';

const { Option } = Select;

interface SelectItem {
  value: string;
  id: number;
}

interface Props {
  increment: RematchDispatcher;
  incrementAsync: RematchDispatcherAsync;
  count: number;
}

const HomeContainer: FunctionComponent<Props> = props => {
  const { increment, incrementAsync, count } = props;

  const [name, updateName] = useState<string>('');

  useEffect(() => {
    console.log(name);
    return () => {
      console.log('componentWillUnmount');
    };
  }, [name]);

  const arr: SelectItem[] = [
    {
      value: 'yanle',
      id: 1,
    },
  ];

  const handleSelectChange = useCallback((value: number) => {
    updateName(value.toString());
  }, []);

  const handleInputChange = (e: any) => updateName(e.target.value);

  return (
    <div>
      <p>首页内容 ~ ^.^ ~ - {count}</p>
      <br />
      <Button
        onClick={() => {
          increment(1);
        }}>
        同步更新
      </Button>

      <Button
        onClick={async () => {
          await incrementAsync(1);
        }}>
        异步更新
      </Button>

      <br />

      <Button>你好</Button>
      <Select style={{ width: '300px' }} onChange={handleSelectChange}>
        {arr.map((item: any) => (
          <Option key={item.value} value={item.id}>
            {item.value}
          </Option>
        ))}
      </Select>

      <br />
      <Input value={name} onChange={handleInputChange} />
    </div>
  );
};

const mapStateToProps = (state: StateType) => ({
  count: state.count,
});

const mapDispatchToProps = dispatch => ({
  increment: dispatch.count.increment,
  incrementAsync: dispatch.count.incrementAsync,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeContainer);
