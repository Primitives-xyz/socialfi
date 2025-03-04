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
  CommentDetailsWithRepliesSchema,
  CommentSchema,
  CreateCommentSchema,
  GetBatchCommentsResponseSchema,
  GetCommentsResponseSchema,
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
  commentsList = (
    query: {
      apiKey: string;
      contentId?: string;
      profileId?: string;
      targetProfileId?: string;
      page?: string;
      pageSize?: string;
      requestingProfileId?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      GetCommentsResponseSchema,
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
    query: {
      apiKey: string;
    },
    data: CreateCommentSchema,
    params: RequestParams = {},
  ) =>
    this.request<
      CommentSchema,
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
  commentsDetail = (
    id: string,
    query: {
      apiKey: string;
      requestingProfileId?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      CommentDetailsWithRepliesSchema,
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
    id: string,
    query: {
      apiKey: string;
    },
    data: UpdateCommentSchema,
    params: RequestParams = {},
  ) =>
    this.request<
      CommentSchema,
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
  commentsDelete = (
    id: string,
    query: {
      apiKey: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      object,
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
  repliesDetail = (
    id: string,
    query: {
      apiKey: string;
      page?: string;
      pageSize?: string;
      requestingProfileId?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      GetCommentsResponseSchema,
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
  batchReadCreate = (
    query: {
      apiKey: string;
    },
    data: string[],
    params: RequestParams = {},
  ) =>
    this.request<
      GetBatchCommentsResponseSchema,
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
