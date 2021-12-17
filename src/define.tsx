import React from 'react';

/**
 * IRouterConfig
 */
export type IRouterConfig = IRouteConfig[];

/**
 * IRouterConfig - Route的配置
 * @interface IRouteConfig
 */
export interface IRouteConfig {
  // 路径
  path: string;
  // Route的组件
  component?: React.ReactElement | null;
  // 重定向
  redirect?: string;
  // routes
  routes?: IRouterConfig;
}

/**
 * RouteWithSubRoutesProps
 */
export interface RouteWithSubRoutesProps extends IRouteConfig {
  parentRoute?: IRouteConfig;
}
