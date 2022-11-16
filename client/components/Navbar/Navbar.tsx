import React from 'react';
import Link from 'next/link';
import { Breadcrumb, Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;

const Navbar = () => {
  const items = [
    {
      label: (
        <Link href='/' rel='noopener noreferrer'>
          Home
        </Link>
      ),
      key: 'home',
    },

    {
      label: (
        <Link href='/dashboard' rel='noopener noreferrer'>
          Dashboard D
        </Link>
      ),
      key: 'alipay',
    },
  ];
  return (
    <>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className='logo' />
        <Menu
          theme='dark'
          mode='horizontal'
          defaultSelectedKeys={['2']}
          items={items}
        />
      </Header>
    </>
  );
};

export default Navbar;
