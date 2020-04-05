import React from 'react';
import {
  BrowserRouter,
  HashRouter,
  MemoryRouter,
  Route,
  Redirect,
  Switch,
  withRouter,
} from 'react-router-dom';

/**
 * sortRouters
 * @param routes
 */
const sortRouters = routes => {
  if (routes && routes.length) {
    const index = routes.findIndex(r => r.path === '/');
    if (index !== -1) {
      const indexConfig = routes[index];
      routes[index] = routes[routes.length - 1];
      routes[routes.length - 1] = indexConfig;
    }

    routes.forEach(route => {
      if (route.routes && route.routes.length) {
        sortRouters(route.routes);
      }
    });
  }
};

/**
 * RouteHOC - 带有孩子的Route
 * @param route
 * @param props
 * @return {*}
 * @constructor
 */
const RouteHOC = ({route, ...props}) => {
  const Component = withRouter(route.component);
  return (
    <Component {...props}>
      {renderSwitch(route.routes, route)}
    </Component>
  )

};

/**
 * RouteWithSubRoutes - Switch中的一个组件
 * @param route
 * @return {*}
 * @constructor
 */
const RouteWithSubRoutes = route => {
  const {
    path,
    redirect,
    parentRoute,
    routes = [],
    component,
  } = route;

  if (redirect) {
    // 重定向
    return (<Redirect from={parentRoute ? parentRoute.path : '/'} to={redirect}/>);
  } else {
    // 带有孩子的Route
    if (routes && routes.length) {
      return (
        <Route
          path={path}
          exact={!!(parentRoute && path === '/')}
          render={props => (
            <RouteHOC {...props} route={route}/>
          )}
        />
      );
    } else if (path) {
      // 叶子节点的Route
      return (
        <Route
          path={path}
          exact
          component={component}
        />
      );
    } else {
      // 叶子节点的Route
      return (
        <Route
          component={component}
        />
      );
    }
  }
};

/**
 * renderSwitch - 渲染Switch
 * @param routes
 * @param parentRoute
 * @return {*[]}
 */
const renderSwitch = (routes = [], parentRoute) => (
  <Switch>
    {routes.map((route, i) => (
      <RouteWithSubRoutes key={i} {...route} parentRoute={parentRoute}/>
    ))}
  </Switch>
);

/**
 * browserConfig
 * @param config
 * @return {*}
 */
export const browserConfig = config => {
  sortRouters(config);
  return (
    <BrowserRouter>
      {renderSwitch(config, null)}
    </BrowserRouter>
  );
};

/**
 * hashConfig
 * @param config
 * @return {*}
 */
export const hashConfig = config => {
  sortRouters(config);
  return (
    <HashRouter>
      {renderSwitch(config, null)}
    </HashRouter>
  );
};

/**
 * memoryConfig
 * @param config
 * @return {*}
 */
export const memoryConfig = config => {
  sortRouters(config);
  return (
    <MemoryRouter>
      {renderSwitch(config, null)}
    </MemoryRouter>
  );
};

export * from 'react-router-dom';
