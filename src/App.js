// import React from 'react';
import './App.css';
import CardLayout from './layouts/CardLayout';
import Navbar from './layouts/Navbar';
import Customform from './layouts/CustomForm';
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <Navbar />
      </Header>
      <Content className="site-layout" style={{ margin: '100px 50px 50px 50px' }}>
        <CardLayout />
        <Customform />
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Created by Scoferta Dorin
      </Footer>
    </Layout>
  )
}

export default App;