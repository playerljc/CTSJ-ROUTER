import React from 'react';
import { IRouterConfig } from './define';
/**
 * browserConfig
 * @param config
 * @param insCallback
 * @param props
 * @return {*}
 */
export declare function browserConfig(config: IRouterConfig, insCallback: any, props: any): React.JSX.Element;
/**
 * hashConfig
 * @param config
 * @param insCallback
 * @param props
 * @return {*}
 */
export declare function hashConfig(config: IRouterConfig, insCallback: any, props: any): React.JSX.Element;
/**
 * memoryConfig
 * @param config
 * @param insCallback
 * @param props
 * @return {*}
 */
export declare function memoryConfig(config: IRouterConfig, insCallback: any, props: any): React.JSX.Element;
/**
 *
 * @param config
 * @param props
 * @param insCallback
 */
export declare function staticConfig(config: IRouterConfig, props: object | undefined, insCallback: any): React.JSX.Element;
export * from 'history';
export * from 'react-router-dom';
