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

import { CreateFollowSchema, DeleteFollowSchema, IsFollowingSchema } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Followers<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Followers
   * @name PostFollowers
   * @summary Follow a profile
   * @request POST:/followers/add
   */
  postFollowers = (
    query: {
      apiKey: string;
    },
    data: CreateFollowSchema,
    params: RequestParams = {},
  ) =>
    this.request<
      object,
      {
        error: string;
      }
    >({
      path: `/followers/add`,
      method: 'POST',
      query: query,
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Followers
   * @name RemoveCreate
   * @summary Unfollow a profile
   * @request POST:/followers/remove
   */
  removeCreate = (
    query: {
      apiKey: string;
    },
    data: DeleteFollowSchema,
    params: RequestParams = {},
  ) =>
    this.request<
      object,
      {
        error: string;
      }
    >({
      path: `/followers/remove`,
      method: 'POST',
      query: query,
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Verifies if exists a FOLLOW edge between the startId and endId passed as query params.
   *
   * @tags Followers
   * @name StateList
   * @summary Is following a profile.
   * @request GET:/followers/state
   */
  stateList = (
    query: {
      apiKey: string;
      startId: string;
      endId: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      IsFollowingSchema,
      {
        error: string;
      }
    >({
      path: `/followers/state`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
}
