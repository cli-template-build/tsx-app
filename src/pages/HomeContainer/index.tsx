import React, { FC, useCallback, useEffect, useState } from 'react';
import { Button, Select, Input } from 'antd';
import { connect } from 'react-redux';
import { CountModels, StateModels } from '../../store/interface';

const { Option } = Select;

interface SelectItem {
  value: string;
  id: number;
}

interface Props {
  count: number;
  countDispatch: CountModels;
}

const HomeContainer: FC<Props> = props => {
  const { countDispatch, count } = props;

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
          countDispatch.increment(1);
        }}>
        同步更新
      </Button>

      <Button
        onClick={async () => {
          await countDispatch.incrementAsync(1);
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

const mapStateToProps = (state: StateModels) => ({
  count: state.count,
});

const mapDispatchToProps = (dispatch: any) => ({
  countDispatch: dispatch.count,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeContainer);
