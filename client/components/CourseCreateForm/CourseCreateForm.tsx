import { Button, Form, Input, InputNumber, Upload } from 'antd';
import React from 'react';
import { PlusOutlined } from '@ant-design/icons';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const App: React.FC = () => {
  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <Form
      {...layout}
      name='nest-messages'
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Form.Item
        name={['user', 'name']}
        label='Title'
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item name={['user', 'Description']} label='Description'>
        <Input.TextArea />
      </Form.Item>

      <Form.Item name={['user', 'category']} label='Category'>
        <Input />
      </Form.Item>

      <Form.Item
        name={['user', 'price']}
        label='Price'
        rules={[{ type: 'number', min: 0, max: 99 }]}
      >
        <InputNumber />
      </Form.Item>

      <Form.Item label='Upload' valuePropName='fileList'>
        <Upload action='/upload.do' listType='picture-card'>
          <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
          </div>
        </Upload>
      </Form.Item>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default App;
