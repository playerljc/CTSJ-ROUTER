import { IRouterConfig } from './define';
/**
 * browserConfig
 * @param config
 * @param insCallback
 * @param props
 * @return {*}
 */
export declare function browserConfig(config: IRouterConfig, insCallback: any, props: any): any;
/**
 * hashConfig
 * @param config
 * @param insCallback
 * @param props
 * @return {*}
 */
export declare function hashConfig(config: IRouterConfig, insCallback: any, props: any): any;
/**
 * memoryConfig
 * @param config
 * @param insCallback
 * @param props
 * @return {*}
 */
export declare function memoryConfig(config: IRouterConfig, insCallback: any, props: any): any;
/**
 *
 * @param config
 * @param props
 * @param insCallback
 */
export declare function staticConfig(config: IRouterConfig, props: object | undefined, insCallback: any): any;
export * from 'history';
export * from 'react-router-dom';
