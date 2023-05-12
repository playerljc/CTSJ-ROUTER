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
    path: string;
    component?: React.ReactElement | null;
    redirect?: string;
    routes?: IRouterConfig;
}
/**
 * RouteWithSubRoutesProps
 */
export interface RouteWithSubRoutesProps extends IRouteConfig {
    parentRoute?: IRouteConfig;
}
