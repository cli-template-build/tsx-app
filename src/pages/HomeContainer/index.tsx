import React, {FunctionComponent, useCallback, useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {Button, Select, Input} from 'antd';

const {Option} = Select;

interface SelectItem {
  value: string;
  id: number;
}

const HomeContainer: FunctionComponent = () => {
  const [name, updateName] = useState<string>('');

  useEffect(() => {
    console.log(name);
    return () => {
      console.log('componentWillUnmount');
    };
  }, [name]);

  const arr: SelectItem[] = [{
    value: 'yanle',
    id: 1,
  }];

  const handleSelectChange = useCallback((value: number) => {
    updateName(value.toString());
  }, []);

  const handleInputChange = (e: any) => updateName(e.target.value);

  return (
      <div>
        <p>首页内容 ~ ^.^ ~</p>
        <Button onClick={() => console.log('123')}>click</Button>
        <Button>你好</Button>
        <Select style={{width: '300px'}} onChange={handleSelectChange}>
          {arr.map((item: any) => (<Option key={item.value} value={item.id}>{item.value}</Option>))}
        </Select>

        <br/>
        <Input value={name} onChange={handleInputChange}/>
      </div>
  );
};

export default connect()(HomeContainer);
