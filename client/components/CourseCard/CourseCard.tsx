import React from 'react';

import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';

import { Avatar, Card } from 'antd';

const { Meta } = Card;

interface CourseType {
  course: {
    title: string;
    description: string;
    price: string;
    duration: number;
    category: string[];
    images: string;
  };
}

const CourseCard = ({ course }: CourseType) => (
  <Card
    style={{ width: 300 }}
    cover={
      <img
        alt='example'
        src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
      />
    }
    actions={[
      <SettingOutlined key='setting' />,
      <EditOutlined key='edit' />,
      <EllipsisOutlined key='ellipsis' />,
    ]}
  >
    <Meta
      avatar={<Avatar src='https://joeschmoe.io/api/v1/random' />}
      title='Card title'
      description='This is the description'
    />
  </Card>
);

export default CourseCard;
