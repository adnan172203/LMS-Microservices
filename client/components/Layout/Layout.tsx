import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Breadcrumb, Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;

const LayoutComponent = ({ children }: any) => {
  return (
    <Layout>
      <Navbar />
      <Content
        className='site-layout'
        style={{ padding: '0 50px', marginTop: 64 }}
      >
        <h1>{children}</h1>
      </Content>
    </Layout>
  );
};

export default LayoutComponent;
