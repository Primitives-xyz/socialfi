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

import { CreateLikeSchema, DeleteLikeSchema } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Likes<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Likes
   * @name LikesCreate
   * @summary Create like
   * @request POST:/likes/{nodeId}
   */
  likesCreate = (
    nodeId: string,
    query: {
      apiKey: string;
    },
    data: CreateLikeSchema,
    params: RequestParams = {},
  ) =>
    this.request<
      object,
      {
        error: string;
      }
    >({
      path: `/likes/${nodeId}`,
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
   * @tags Likes
   * @name LikesDelete
   * @summary Remove like
   * @request DELETE:/likes/{nodeId}
   */
  likesDelete = (
    nodeId: string,
    query: {
      apiKey: string;
    },
    data: DeleteLikeSchema,
    params: RequestParams = {},
  ) =>
    this.request<
      object,
      {
        error: string;
      }
    >({
      path: `/likes/${nodeId}`,
      method: 'DELETE',
      query: query,
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
