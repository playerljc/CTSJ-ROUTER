import React from 'react';
import { Layout, Menu } from 'antd';

import {
  Link,
  useLocation,
} from '@ctsj/router'

import './index.less';

const { Header } = Layout;

/**
 * Index
 */
const Index = props => {
  const {children} = props;
  const {pathname} = useLocation();
  const arr = pathname.split('/');
  const key = `/${arr[1]}`;

  return (
    <Layout>
      <Header className="header">
        <Menu
          className="navigator"
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[key]}
          selectedKeys={[key]}
        >
          <Menu.Item key="/user">
            <Link to="/user">用户管理</Link>
          </Menu.Item>
          <Menu.Item key="/setting">
            <Link to="/setting">设置</Link>
          </Menu.Item>
        </Menu>
        <Link className="loginout" to="/login">注销</Link>
      </Header>
      {children}
    </Layout>
  );
};

export default Index;
