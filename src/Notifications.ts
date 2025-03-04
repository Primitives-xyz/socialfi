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

import { WalletNotificationSchema } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Notifications<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description only supports wallet notifications for now. recipient must be a wallet address
   *
   * @tags Notifications
   * @name NotificationsCreate
   * @summary Send a notification
   * @request POST:/notifications/
   */
  notificationsCreate = (
    query: {
      apiKey: string;
    },
    data: WalletNotificationSchema,
    params: RequestParams = {},
  ) =>
    this.request<
      object,
      {
        error: string;
      }
    >({
      path: `/notifications/`,
      method: 'POST',
      query: query,
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
