import React from 'react';
import Home from '../components/Home/Home';
import baseUrl from '../utils/baseUrl';
import axios from 'axios';

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

const Index = ({ courses }: CourseType) => {
  console.log('response data=========>>>>', courses);

  return (
    <>
      <Home courses={courses} />
    </>
  );
};

export async function getServerSideProps() {
  const url = `${baseUrl}/api/v1/course`;
  const response = await axios.get(url);

  return {
    props: {
      courses: response.data,
    },
  };
}

export default Index;
