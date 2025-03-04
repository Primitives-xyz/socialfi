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
  FindOrCreateCreateData,
  FindOrCreateCreateParams,
  FindOrCreateProfileSchema,
  FollowersDetailData,
  FollowersDetailParams,
  FollowingDetailData,
  FollowingDetailParams,
  FollowingWhoFollowDetailData,
  FollowingWhoFollowDetailParams,
  ProfilesDetailData,
  ProfilesDetailParams,
  ProfilesListData,
  ProfilesListParams,
  ProfilesUpdateData,
  ProfilesUpdateParams,
  ReferralsDetailData,
  ReferralsDetailParams,
  SuggestedDetailData,
  SuggestedDetailParams,
  SuggestedGlobalDetailData,
  SuggestedGlobalDetailParams,
  TokenOwnersDetailData,
  TokenOwnersDetailParams,
  UpdateProfileSchema,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Profiles<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description For creating a user profile. The endpoint will first check to see if the wallet exists elsewhere on the graph. If it does, we will create a new profile that is namespaced to your app and associate with the wallet you pass in. If the wallet does not yet exist, we will create a node for the wallet, a node for the profile (namespaced to your app) and an edge indicating that the wallet you passed in is associated with the profile on your app.
   *
   * @tags Profiles
   * @name FindOrCreateCreate
   * @summary Find or create a profile
   * @request POST:/profiles/findOrCreate
   */
  findOrCreateCreate = (
    query: FindOrCreateCreateParams,
    data: FindOrCreateProfileSchema,
    params: RequestParams = {},
  ) =>
    this.request<
      FindOrCreateCreateData,
      {
        error: string;
      }
    >({
      path: `/profiles/findOrCreate`,
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
   * @tags Profiles
   * @name ProfilesList
   * @summary Get profiles
   * @request GET:/profiles/
   */
  profilesList = (query: ProfilesListParams, params: RequestParams = {}) =>
    this.request<
      ProfilesListData,
      {
        error: string;
      }
    >({
      path: `/profiles/`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * @description Get comprehensive profile information including node details and follower/following counts
   *
   * @tags Profiles
   * @name ProfilesDetail
   * @summary Find a profile
   * @request GET:/profiles/{id}
   */
  profilesDetail = ({ id, ...query }: ProfilesDetailParams, params: RequestParams = {}) =>
    this.request<
      ProfilesDetailData,
      {
        error: string;
      }
    >({
      path: `/profiles/${id}`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Profiles
   * @name ProfilesUpdate
   * @summary Update a profile
   * @request PUT:/profiles/{id}
   */
  profilesUpdate = (
    { id, ...query }: ProfilesUpdateParams,
    data: UpdateProfileSchema,
    params: RequestParams = {},
  ) =>
    this.request<
      ProfilesUpdateData,
      {
        error: string;
      }
    >({
      path: `/profiles/${id}`,
      method: 'PUT',
      query: query,
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Get a list of profiles that follow a user
   *
   * @tags Profiles
   * @name FollowersDetail
   * @summary Get followers
   * @request GET:/profiles/{id}/followers
   */
  followersDetail = ({ id, ...query }: FollowersDetailParams, params: RequestParams = {}) =>
    this.request<
      FollowersDetailData,
      {
        error: string;
      }
    >({
      path: `/profiles/${id}/followers`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * @description Get a list of profiles that a user follows
   *
   * @tags Profiles
   * @name FollowingDetail
   * @summary Get following
   * @request GET:/profiles/{id}/following
   */
  followingDetail = ({ id, ...query }: FollowingDetailParams, params: RequestParams = {}) =>
    this.request<
      FollowingDetailData,
      {
        error: string;
      }
    >({
      path: `/profiles/${id}/following`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * @description Helpful for creating UIs like "this user is followed by {number} other users you follow"
   *
   * @tags Profiles
   * @name FollowingWhoFollowDetail
   * @summary Get a list of profiles in a user's network that also follow a given profile
   * @request GET:/profiles/{id}/following-who-follow
   */
  followingWhoFollowDetail = (
    { id, ...query }: FollowingWhoFollowDetailParams,
    params: RequestParams = {},
  ) =>
    this.request<
      FollowingWhoFollowDetailData,
      {
        error: string;
      }
    >({
      path: `/profiles/${id}/following-who-follow`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * @description Helpful for populating UIs like "people you may know"
   *
   * @tags Profiles
   * @name SuggestedDetail
   * @summary Get suggested profiles to follow
   * @request GET:/profiles/suggested/{identifier}
   */
  suggestedDetail = ({ identifier, ...query }: SuggestedDetailParams, params: RequestParams = {}) =>
    this.request<
      SuggestedDetailData,
      {
        error: string;
      }
    >({
      path: `/profiles/suggested/${identifier}`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Profiles
   * @name SuggestedGlobalDetail
   * @summary Get suggested profiles to invite
   * @request GET:/profiles/suggested/{identifier}/global
   */
  suggestedGlobalDetail = (
    { identifier, ...query }: SuggestedGlobalDetailParams,
    params: RequestParams = {},
  ) =>
    this.request<
      SuggestedGlobalDetailData,
      {
        error: string;
      }
    >({
      path: `/profiles/suggested/${identifier}/global`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieve all referral connections for a user profile, including both users who made referrals (upstream) and users who were referred (downstream) by this profile, with depth indicating the number of connection levels (defaults to 2, maximum 6). For example, depth=1 shows direct referrals, while depth=2 includes referrals made by those direct referrals.
   *
   * @tags Profiles
   * @name ReferralsDetail
   * @summary Retrieve referrals
   * @request GET:/profiles/{id}/referrals
   */
  referralsDetail = ({ id, ...query }: ReferralsDetailParams, params: RequestParams = {}) =>
    this.request<
      ReferralsDetailData,
      {
        error: string;
      }
    >({
      path: `/profiles/${id}/referrals`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * @description Get a list of profiles in the namespace that own a specific token. Optionally filter to only show profiles that the requesting user follows.
   *
   * @tags Profiles
   * @name TokenOwnersDetail
   * @summary Get profiles that own a specific token
   * @request GET:/profiles/token-owners/{tokenAddress}
   */
  tokenOwnersDetail = (
    { tokenAddress, ...query }: TokenOwnersDetailParams,
    params: RequestParams = {},
  ) =>
    this.request<
      TokenOwnersDetailData,
      {
        error: string;
      }
    >({
      path: `/profiles/token-owners/${tokenAddress}`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
}
