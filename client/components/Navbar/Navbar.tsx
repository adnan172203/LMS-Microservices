import React from 'react';
import Link from 'next/link';
import { Breadcrumb, Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;

const Navbar = () => {
  const items = [
    // { label: 'Home', key: 'item-1' }, // remember to pass the key prop
    {
      label: (
        <Link href='/' rel='noopener noreferrer'>
          Home
        </Link>
      ),
      key: 'home',
    },
    { label: 'Dashboard', key: 'item-2' }, // which is required
    {
      label: (
        <a href='https://ant.design' target='_blank' rel='noopener noreferrer'>
          Navigation Four - Link
        </a>
      ),
      key: 'fifa',
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
