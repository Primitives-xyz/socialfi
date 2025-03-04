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
  BatchReadCreateData,
  BatchReadCreateParams,
  ContentsDeleteData,
  ContentsDeleteParams,
  ContentsDetailData,
  ContentsDetailParams,
  ContentsListData,
  ContentsListParams,
  ContentsUpdateData,
  ContentsUpdateParams,
  FindOrCreateContentSchema,
  FindOrCreateCreateParams2,
  FindOrCreateCreateResult,
  UpdateContentSchema,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Contents<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Filter and sort data using optional query parameters: 'filterField' with 'filterValue' to search by property (searches for null values if filterValue is omitted), 'requireFields' for a comma-separated list of properties that must not be null in results, and 'orderByField' with 'orderByDirection' (asc/desc) to sort the results.
   *
   * @tags Contents
   * @name ContentsList
   * @summary Get contents
   * @request GET:/contents/
   */
  contentsList = (query: ContentsListParams, params: RequestParams = {}) =>
    this.request<
      ContentsListData,
      {
        error: string;
      }
    >({
      path: `/contents/`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Contents
   * @name ContentsDetail
   * @summary Get content by id
   * @request GET:/contents/{id}
   */
  contentsDetail = ({ id, ...query }: ContentsDetailParams, params: RequestParams = {}) =>
    this.request<
      ContentsDetailData,
      {
        error: string;
      }
    >({
      path: `/contents/${id}`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Contents
   * @name ContentsUpdate
   * @summary Update content
   * @request PUT:/contents/{id}
   */
  contentsUpdate = (
    { id, ...query }: ContentsUpdateParams,
    data: UpdateContentSchema,
    params: RequestParams = {},
  ) =>
    this.request<
      ContentsUpdateData,
      {
        error: string;
      }
    >({
      path: `/contents/${id}`,
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
   * @tags Contents
   * @name ContentsDelete
   * @summary Delete content
   * @request DELETE:/contents/{id}
   */
  contentsDelete = ({ id, ...query }: ContentsDeleteParams, params: RequestParams = {}) =>
    this.request<
      ContentsDeleteData,
      {
        error: string;
      }
    >({
      path: `/contents/${id}`,
      method: 'DELETE',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Contents
   * @name FindOrCreateCreate
   * @summary Find or create content
   * @request POST:/contents/findOrCreate
   */
  findOrCreateCreate = (
    query: FindOrCreateCreateParams2,
    data: FindOrCreateContentSchema,
    params: RequestParams = {},
  ) =>
    this.request<
      FindOrCreateCreateResult,
      {
        error: string;
      }
    >({
      path: `/contents/findOrCreate`,
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
   * @tags Contents
   * @name BatchReadCreate
   * @summary Get multiple contents
   * @request POST:/contents/batch/read
   */
  batchReadCreate = (query: BatchReadCreateParams, data: string[], params: RequestParams = {}) =>
    this.request<
      BatchReadCreateData,
      {
        error: string;
      }
    >({
      path: `/contents/batch/read`,
      method: 'POST',
      query: query,
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
