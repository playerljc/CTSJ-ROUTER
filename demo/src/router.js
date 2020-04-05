import {
  browserConfig,
  // hashConfig,
  // memoryConfig,
  // BrowserRouter,
  // HashRouter,
  // MemoryRouter,
  // Route,
  // Redirect,
  // Switch,
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
        redirect: '/user'
        // component: Not,
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
            redirect: '/user/list'
            // component: UserList,
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

// import {
//   BrowserRouter,
//   HashRouter,
//   MemoryRouter,
//   Route,
//   Redirect,
//   Switch,
// } from 'react-router-dom'

/*<BrowserRouter>
    <Switch>
      <Route
        path='/'
        render={(l) => {
          debugger
          return (
            <Index>
              <Switch>
                <Route
                  path="/user"
                  render={(l) => {
                    debugger
                    return (
                      <User>
                        <Switch>
                          <Route
                            path="/user/list"
                            component={UserList}
                          />
                          <Route
                            path="/user/add"
                            component={UserAdd}
                          />
                          <Route
                            path="/user/update"
                            component={UpdateUpdate}
                          />
                          <Route
                            path="/user/info"
                            component={UserInfo}
                          />
                          <Redirect from='/user' to="/user/list"  />
                        </Switch>
                      </User>
                    );
                  }}
                />
                <Route
                  path="/setting"
                  component={Setting}
                />
                <Redirect from='/' to="/user"  />
              </Switch>
            </Index>
          );
        }}
      />
    </Switch>
  </BrowserRouter>*/

/*
<BrowserRouter>
    <Switch>
      <Route
        path="/"
        exact
        component={Index}
      />
      <Route
        path="/setting"
        component={Setting}
      />
      <Route
        path="/login"
        component={Login}
      />
      <Route
        path="*"
        component={Not}
      />
    </Switch>
  </BrowserRouter>
*/

export default Router;
