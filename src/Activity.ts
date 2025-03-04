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

import { GetActivityFeedResponseSchema, GetSwapActivityResponseSchema } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Activity<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Get activity feed for a user including follows, content, likes, comments and new followers
   *
   * @tags Activity
   * @name FeedList
   * @summary Get activity feed
   * @request GET:/activity/feed
   */
  feedList = (
    query: {
      apiKey: string;
      username: string;
      page?: string;
      pageSize?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      GetActivityFeedResponseSchema,
      {
        error: string;
      }
    >({
      path: `/activity/feed`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * @description Get swap transactions from wallets that the user follows or for a specific token
   *
   * @tags Activity
   * @name SwapList
   * @summary Get swap activity from followed wallets or specific token
   * @request GET:/activity/swap
   */
  swapList = (
    query: {
      apiKey: string;
      username?: string;
      page?: string;
      pageSize?: string;
      tokenAddress?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      GetSwapActivityResponseSchema,
      {
        error: string;
      }
    >({
      path: `/activity/swap`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
}
