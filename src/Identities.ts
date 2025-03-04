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
  IdentitiesDetailData,
  IdentitiesDetailParams,
  ProfilesDetailParams2,
  ProfilesDetailResult,
} from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Identities<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves all connected wallets/contacts associated with a specified wallet/contact. For each wallet/contact, returns up to 5 profiles. To retrieve the complete list of profiles for a specific wallet/contact, use the /identities/{id}/profiles endpoint
   *
   * @tags Identities
   * @name IdentitiesDetail
   * @summary Finds connected wallets/contacts from an id. this id should be a wallet address or a contact id. when using a contact id, specify the contactType via query params
   * @request GET:/identities/{id}
   */
  identitiesDetail = ({ id, ...query }: IdentitiesDetailParams, params: RequestParams = {}) =>
    this.request<
      IdentitiesDetailData,
      {
        error: string;
      }
    >({
      path: `/identities/${id}`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * @description This endpoint retrieves all profiles that were created by a specific wallet/contact.
   *
   * @tags Identities
   * @name ProfilesDetail
   * @summary Finds associated profiles across namespaces using a wallet address or a contact id. when using a contact id, specify the contactType via query params
   * @request GET:/identities/{id}/profiles
   */
  profilesDetail = ({ id, ...query }: ProfilesDetailParams2, params: RequestParams = {}) =>
    this.request<
      ProfilesDetailResult,
      {
        error: string;
      }
    >({
      path: `/identities/${id}/profiles`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
}
