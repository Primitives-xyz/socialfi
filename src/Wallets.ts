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

import { SocialCountsDetailData, SocialCountsDetailParams } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Wallets<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Wallets
   * @name SocialCountsDetail
   * @summary Get socials counts for a given wallet
   * @request GET:/wallets/{address}/socialCounts
   */
  socialCountsDetail = (
    { address, ...query }: SocialCountsDetailParams,
    params: RequestParams = {},
  ) =>
    this.request<
      SocialCountsDetailData,
      {
        error: string;
      }
    >({
      path: `/wallets/${address}/socialCounts`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
}
