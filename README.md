# CTSJ-ROUTER

&ensp;&ensp;一个基于react-router的可配置路由

# 简介

&ensp;&ensp;写这个东西的目的就是想用react-router2.x方式来配置4.x和5.x的路由，本人认为2.x的配置方式更容易理解，更容易维护，所有的路由节点都在一起，反而从4.x起路由的配置分散在了不同组件的内部，本人觉得这种方式不是很好，这种方式使得路由的配置分散，不易维护。

# 安装


```js
  npm install @ctsj/router
```


# 例子
1. Router.jsx 
```js
import {
  browserConfig,
} from '@ctsj/router';

import Index from './pages/index';
import User from './pages/user';
import UserList from './pages/user/list';
import UserAdd from './pages/user/add';
import UpdateUpdate from './pages/user/update';
import UserInfo from './pages/user/info';
import Setting from './pages/setting';
import Login from './pages/login';

const config = [
  {
    path: '/',
    component: Index,
    routes: [
      {
        path: '/',
        redirect: '/user',
      },
      {
        path: '/setting',
        component: Setting,
      },
      {
        path: '/user',
        component: User,
        routes: [
          {
            path: '/',
            redirect: '/user/list',
          },
          {
            path: '/user/list',
            component: UserList,
          },
          {
            path: '/user/add',
            component: UserAdd,
          },
          {
            path: '/user/update/:id?',
            component: UpdateUpdate,
          },
          {
            path: '/user/info/:id?',
            component: UserInfo,
          },
        ]
      },
    ],
  },
  {
    path: '/login',
    component: Login,
  },
];

const Router = browserConfig(config);

export default Router;
```

2. index.jsx 

```js
import React from 'react';
import ReactDOM from 'react-dom';

import Router from './router';

ReactDOM.render(
  Router,
  document.getElementById('app'),
);

```

3. 嵌套路由(使用props.children进行路由的嵌套，和2.x写法一致)
```js
import React from 'react';

export default props => (
  <div>
    ...
    {props.children}
  <div>
);

```

# API

* browserConfig(config) - 使用BrowserRouter配置路由
* hashConfig(config) - 使用HashRouter配置路由
* memoryConfig(config) - 使用MemoryRouter配置路由

# Config

* path: string - 路径
* component: ReactElement - 组件
* redirect: string - 从定向
* routes: Array - children

# 引用react-router其他功能

本包导出了react-router-dom的全部组件


# 其他

demo目录下附带了一个demo
