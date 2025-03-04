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

import {
  BatchReadCreateParams2,
  BatchReadCreateResult,
  CommentsCreateData,
  CommentsCreateParams,
  CommentsDeleteData,
  CommentsDeleteParams,
  CommentsDetailData,
  CommentsDetailParams,
  CommentsListData,
  CommentsListParams,
  CommentsUpdateData,
  CommentsUpdateParams,
  CreateCommentSchema,
  RepliesDetailData,
  RepliesDetailParams,
  UpdateCommentSchema,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Comments<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description must filter by author (profileId), content (contentId), or target profile (targetProfileId)
   *
   * @tags Comments
   * @name CommentsList
   * @summary Get comments
   * @request GET:/comments/
   */
  commentsList = (query: CommentsListParams, params: RequestParams = {}) =>
    this.request<
      CommentsListData,
      {
        error: string;
      }
    >({
      path: `/comments/`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Comments
   * @name CommentsCreate
   * @summary Create comment
   * @request POST:/comments/
   */
  commentsCreate = (
    query: CommentsCreateParams,
    data: CreateCommentSchema,
    params: RequestParams = {},
  ) =>
    this.request<
      CommentsCreateData,
      {
        error: string;
      }
    >({
      path: `/comments/`,
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
   * @tags Comments
   * @name CommentsDetail
   * @summary Get comment details
   * @request GET:/comments/{id}
   */
  commentsDetail = ({ id, ...query }: CommentsDetailParams, params: RequestParams = {}) =>
    this.request<
      CommentsDetailData,
      {
        error: string;
      }
    >({
      path: `/comments/${id}`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Comments
   * @name CommentsUpdate
   * @summary Update comment
   * @request PUT:/comments/{id}
   */
  commentsUpdate = (
    { id, ...query }: CommentsUpdateParams,
    data: UpdateCommentSchema,
    params: RequestParams = {},
  ) =>
    this.request<
      CommentsUpdateData,
      {
        error: string;
      }
    >({
      path: `/comments/${id}`,
      method: 'PUT',
      query: query,
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Comments
   * @name CommentsDelete
   * @summary Delete comment
   * @request DELETE:/comments/{id}
   */
  commentsDelete = ({ id, ...query }: CommentsDeleteParams, params: RequestParams = {}) =>
    this.request<
      CommentsDeleteData,
      {
        error: string;
      }
    >({
      path: `/comments/${id}`,
      method: 'DELETE',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Comments
   * @name RepliesDetail
   * @summary Get comment replies
   * @request GET:/comments/{id}/replies
   */
  repliesDetail = ({ id, ...query }: RepliesDetailParams, params: RequestParams = {}) =>
    this.request<
      RepliesDetailData,
      {
        error: string;
      }
    >({
      path: `/comments/${id}/replies`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Comments
   * @name BatchReadCreate
   * @summary Get multiple comment details
   * @request POST:/comments/batch/read
   */
  batchReadCreate = (query: BatchReadCreateParams2, data: string[], params: RequestParams = {}) =>
    this.request<
      BatchReadCreateResult,
      {
        error: string;
      }
    >({
      path: `/comments/batch/read`,
      method: 'POST',
      query: query,
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
