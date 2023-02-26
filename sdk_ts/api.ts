/* tslint:disable */
/* eslint-disable */
/**
 * Simple API
 * Sample API to use swagger to generate a SDK.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: georgeo.rocco@x-team.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface HandlerJob
 */
export interface HandlerJob {
    /**
     * 
     * @type {string}
     * @memberof HandlerJob
     */
    'description'?: string;
    /**
     * 
     * @type {number}
     * @memberof HandlerJob
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof HandlerJob
     */
    'name'?: string;
}

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get all job
         * @summary Get all job
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        jobsGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/jobs`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
    return {
        /**
         * Get all job
         * @summary Get all job
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async jobsGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<HandlerJob>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.jobsGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DefaultApiFp(configuration)
    return {
        /**
         * Get all job
         * @summary Get all job
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        jobsGet(options?: any): AxiosPromise<HandlerJob> {
            return localVarFp.jobsGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * Get all job
     * @summary Get all job
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public jobsGet(options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).jobsGet(options).then((request) => request(this.axios, this.basePath));
    }
}


