import React, { useState } from 'react';
import { Breadcrumb, Layout, Menu } from 'antd';
import Link from 'next/link';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className='logo' />
          <Menu
            theme='dark'
            mode='inline'
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: (
                  <Link href='/add-course' rel='noopener noreferrer'>
                    Add Course
                  </Link>
                ),
              },

              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: 'nav 2',
              },
              {
                key: '3',
                icon: <UploadOutlined />,
                label: 'nav 3',
              },
            ]}
          />
        </Sider>
        <Content
          className='site-layout'
          style={{ padding: '0 0px', marginTop: 0 }}
        ></Content>
      </Layout>
    </>
  );
};

export default Dashboard;
