import React from 'react';
import { Breadcrumb, Layout, Menu } from 'antd';
import CourseCard from '../CourseCard/CourseCard';

const { Header, Content, Footer } = Layout;

interface CourseType {
  courses: {
    title: string;
    description: string;
    price: string;
    duration: number;
    category: string[];
    images: string;
  }[];
}

const Home = ({ courses }: CourseType) => {
  const items = [
    { label: 'Home', key: 'item-1' }, // remember to pass the key prop
    { label: 'Dashboard', key: 'item-2' }, // which is required
    {
      label: (
        <a href='https://ant.design' target='_blank' rel='noopener noreferrer'>
          Navigation Four - Link
        </a>
      ),
      key: 'alipay',
    },
  ];

  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className='logo' />
        <Menu
          theme='dark'
          mode='horizontal'
          defaultSelectedKeys={['2']}
          items={items}
        />
      </Header>
      <Content
        className='site-layout'
        style={{ padding: '0 50px', marginTop: 64 }}
      >
        <div
          className='site-layout-background'
          style={{ padding: 24, minHeight: 380 }}
        >
          {courses.map((course, index) => (
            <CourseCard course={course} key={index} />
          ))}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default Home;
