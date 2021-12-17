/// <reference types="react" />
import { IRouterConfig } from "./define";
/**
 * browserConfig
 * @param config
 * @param insCallback
 * @return {*}
 */
export declare function browserConfig(config: IRouterConfig, insCallback: any): JSX.Element;
/**
 * hashConfig
 * @param config
 * @param insCallback
 * @return {*}
 */
export declare function hashConfig(config: IRouterConfig, insCallback: any): JSX.Element;
/**
 * memoryConfig
 * @param config
 * @param insCallback
 * @return {*}
 */
export declare function memoryConfig(config: IRouterConfig, insCallback: any): JSX.Element;
/**
 *
 * @param config
 * @param props
 * @param insCallback
 */
export declare function staticConfig(config: IRouterConfig, props: object | undefined, insCallback: any): JSX.Element;
export * from "history";
export * from "react-router-dom";
