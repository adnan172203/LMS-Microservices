import React from 'react';

import CourseCard from '../CourseCard/CourseCard';
import { Breadcrumb, Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;
import Navbar from '../Navbar/Navbar';

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
  return (
    <>
      <div
        className='site-layout-background'
        style={{ padding: 24, minHeight: 380 }}
      >
        {courses.map((course, index) => (
          <CourseCard course={course} key={index} />
        ))}
      </div>

      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </>
  );
};

export default Home;
