"use client"

import React from 'react';
import { Layout, Flex } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#4096ff',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0958d9',
};

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#1677ff',
};

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff',
};



const AuthLayout = ({children }:{
    children?: React.ReactNode;
}) => (
  
    <Layout >
        <h1>Auth Header</h1>
      <Content style={contentStyle}>{children}</Content>
        <h1>Auth Footer</h1>
    </Layout>

    

);

export default AuthLayout;