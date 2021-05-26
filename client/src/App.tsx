import { Layout } from 'antd';
import { Content, Header } from 'antd/lib/layout/layout';
import React from 'react';
import './App.scss';
import Navigation from './components/Navigation';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Layout className="flex flex-col root">
      <Header>
        <Navigation />
      </Header>
      <Layout className="flex-grow">
        <Content className="caontainer px-12 content">
          <Dashboard />
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
