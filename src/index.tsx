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

import {
  IRouteConfig,
  IRouterConfig,
  RouteWithSubRoutesProps,
} from './define';

/**
 * sortRouters
 * @param routes
 */
function sortRouters(routes: IRouterConfig) {
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
}

/**
 * RouteHOC - 带有孩子的Route
 * @param route
 * @param props
 * @return {*}
 * @constructor
 */
function RouteHOC({route, ...props}: any) {
  const Component = withRouter(route.component);
  return (
    <Component {...props}>
      {renderSwitch(route.routes, route)}
    </Component>
  );
}

/**
 * RouteWithSubRoutes - Switch中的一个组件
 * @param route
 * @return {*}
 * @constructor
 */
function RouteWithSubRoutes(route: RouteWithSubRoutesProps) {
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
          component={component as any}
        />
      );
    } else {
      // 叶子节点的Route
      return (
        <Route
          component={component as any}
        />
      );
    }
  }
}

/**
 * renderSwitch - 渲染Switch
 * @param routes
 * @param parentRoute
 * @return {*[]}
 */
function renderSwitch(routes: IRouterConfig = [], parentRoute?: IRouteConfig) {
  return (
    <Switch>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} parentRoute={parentRoute}/>
      ))}
    </Switch>
  );
}

/**
 * browserConfig
 * @param config
 * @return {*}
 */
export function browserConfig(config: IRouterConfig) {
  sortRouters(config);
  return (
    <BrowserRouter>
      {renderSwitch(config)}
    </BrowserRouter>
  );
}

/**
 * hashConfig
 * @param config
 * @return {*}
 */
export function hashConfig(config: IRouterConfig) {
  sortRouters(config);
  return (
    <HashRouter>
      {renderSwitch(config)}
    </HashRouter>
  );
}

/**
 * memoryConfig
 * @param config
 * @return {*}
 */
export function memoryConfig(config: IRouterConfig) {
  sortRouters(config);
  return (
    <MemoryRouter>
      {renderSwitch(config)}
    </MemoryRouter>
  );
}

export * from 'react-router-dom';
