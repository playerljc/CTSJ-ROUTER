import React from "react";
import {
  BrowserRouter,
  HashRouter,
  MemoryRouter,
  Route,
  Redirect,
  Switch,
  StaticRouter,
  // withRouter
} from "react-router-dom";

import { IRouteConfig, IRouterConfig, RouteWithSubRoutesProps } from "./define";

/**
 * sortRouters
 * @param routes
 */
function sortRouters(routes: IRouterConfig) {
  if (routes && routes.length) {
    const index = routes.findIndex(r => r.path === "/");
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
function RouteHOC({ route, ...props }: any) {
  // const Component = withRouter(route.component);
  const Component = route.component;
  return <Component {...props}>{renderSwitch(route.routes, route)}</Component>;
}

/**
 * RouteWithSubRoutes - Switch中的一个组件
 * @param route
 * @return {*}
 * @constructor
 */
function RouteWithSubRoutes(route: RouteWithSubRoutesProps) {
  const { path, redirect, parentRoute, routes = [], component } = route;

  if (redirect) {
    // 重定向
    return (
      <Redirect from={parentRoute ? parentRoute.path : "/"} to={redirect} />
    );
  } else {
    // 带有孩子的Route
    if (routes && routes.length) {
      return (
        <Route
          path={path}
          exact={!!(parentRoute && path === "/")}
          render={props => <RouteHOC {...props} route={route} />}
        />
      );
    } else if (path) {
      // 叶子节点的Route
      return <Route path={path} exact component={component as any} />;
    } else {
      // 叶子节点的Route
      return <Route component={component as any} />;
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
        <RouteWithSubRoutes key={i} {...route} parentRoute={parentRoute} />
      ))}
    </Switch>
  );
}

/**
 * browserConfig
 * @param config
 * @param insCallback
 * @return {*}
 */
export function browserConfig(config: IRouterConfig, insCallback) {
  sortRouters(config);
  return <BrowserRouter
    ref={(ins) => {
      if (insCallback) {
        insCallback(ins);
      }
    }}
  >{renderSwitch(config)}</BrowserRouter>;
}

/**
 * hashConfig
 * @param config
 * @param insCallback
 * @return {*}
 */
export function hashConfig(config: IRouterConfig, insCallback) {
  sortRouters(config);
  return <HashRouter
    ref={(ins) => {
      if (insCallback) {
        insCallback(ins);
      }
    }}
  >{renderSwitch(config)}</HashRouter>;
}

/**
 * memoryConfig
 * @param config
 * @param insCallback
 * @return {*}
 */
export function memoryConfig(config: IRouterConfig, insCallback) {
  sortRouters(config);
  return <MemoryRouter
    ref={(ins) => {
      if (insCallback) {
        insCallback(ins);
      }
    }}
  >{renderSwitch(config)}</MemoryRouter>;
}

/**
 *
 * @param config
 * @param props
 * @param insCallback
 */
export function staticConfig(config: IRouterConfig, props: object = {}, insCallback) {
  sortRouters(config);
  return <StaticRouter
      {...(props || {})}
      ref={(ins) => {
        if (insCallback) {
          insCallback(ins);
        }
      }}
  >{renderSwitch(config)}</StaticRouter>;
}

export * from "history";
export * from "react-router-dom";
