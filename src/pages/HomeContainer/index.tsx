import React, { FC, useCallback, useEffect, useState } from 'react';
import { Button, Select, Input } from 'antd';
import { connect } from 'react-redux';
import { StateModels } from '../../store/interface';
import { CountAction, CountState } from '../../store/models/count';

const { Option } = Select;

interface SelectItem {
  value: string;
  id: number;
}

interface Props {
  countState: CountState;
  countDispatch: CountAction;
}

const HomeContainer: FC<Props> = props => {
  const { countDispatch, countState } = props;

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
      <p>首页内容 ~ ^.^ ~ - {countState.count}</p>
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

const mapStateToProps = ({ count }: StateModels) => ({
  countState: count,
});

const mapDispatchToProps = (dispatch: any) => ({
  countDispatch: dispatch.count,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeContainer);
