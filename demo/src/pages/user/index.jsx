import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';

import {
  Link,
  useLocation,
} from '@ctsj/router'

const { Content, Sider } = Layout;

/**
 * User
 */
const User = ({children}) => {
  const {pathname} = useLocation();
  const arr = pathname.split('/');
  const key = arr[arr.length - 1];

  return (
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          selectedKeys={[key]}
          style={{ height: '100%', borderRight: 0 }}
        >
          <Menu.Item key="list">
            <Link to="/user/list">列表</Link>
          </Menu.Item>
          <Menu.Item key="add">
            <Link to="/user/add">添加</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>列表</Breadcrumb.Item>
          <Breadcrumb.Item>添加</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default User;
