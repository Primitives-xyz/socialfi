/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { ProfilesListParams2, ProfilesListResult } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Search<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Search for profiles by id or username
   *
   * @tags Search
   * @name ProfilesList
   * @summary Search profiles
   * @request GET:/search/profiles
   */
  profilesList = (query: ProfilesListParams2, params: RequestParams = {}) =>
    this.request<
      ProfilesListResult,
      {
        error: string;
      }
    >({
      path: `/search/profiles`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
}
