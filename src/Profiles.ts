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
  FindOrCreateProfileSchema,
  FindOrCreateResponseSchema,
  GetProfileDetailsSchema,
  GetProfileFollowersResponseSchema,
  GetProfileFollowingResponseSchema,
  GetProfileFollowingWhoFollowResponseSchema,
  GetProfilesResponseSchema,
  ITokenHoldersResponseSchema,
  ProfileSchema,
  ReferralProfilesSchema,
  SuggestedProfilesToInvite,
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
    query: {
      apiKey: string;
    },
    data: FindOrCreateProfileSchema,
    params: RequestParams = {},
  ) =>
    this.request<
      FindOrCreateResponseSchema,
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
  profilesList = (
    query: {
      apiKey: string;
      /** @minLength 32 */
      walletAddress?: string;
      phoneNumber?: string;
      page?: string;
      pageSize?: string;
      /** @default "created_at" */
      sortBy?: string;
      /** @default "DESC" */
      sortDirection?: 'ASC' | 'DESC';
    },
    params: RequestParams = {},
  ) =>
    this.request<
      GetProfilesResponseSchema,
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
  profilesDetail = (
    id: string,
    query: {
      apiKey: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      GetProfileDetailsSchema,
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
    id: string,
    query: {
      apiKey: string;
    },
    data: UpdateProfileSchema,
    params: RequestParams = {},
  ) =>
    this.request<
      ProfileSchema,
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
  followersDetail = (
    id: string,
    query: {
      apiKey: string;
      page?: string;
      pageSize?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      GetProfileFollowersResponseSchema,
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
  followingDetail = (
    id: string,
    query: {
      apiKey: string;
      page?: string;
      pageSize?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      GetProfileFollowingResponseSchema,
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
    id: string,
    query: {
      apiKey: string;
      requestorId: string;
      page?: string;
      pageSize?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      GetProfileFollowingWhoFollowResponseSchema,
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
  suggestedDetail = (
    identifier: string,
    query: {
      apiKey: string;
      /** @default "PHONE" */
      contactType?: 'EMAIL' | 'PHONE' | 'TWITTER';
    },
    params: RequestParams = {},
  ) =>
    this.request<
      Record<
        string,
        {
          namespaces: {
            name: string | null;
            readableName: string | null;
            faviconURL: string | null;
            userProfileURL: string | null;
          }[];
          profile: {
            id: string;
            namespace: string;
            created_at: number;
            username: string;
            bio?: string | null;
            image?: string | null;
          };
          wallet?: {
            address: string;
          };
          contact?: {
            /** @minLength 1 */
            id: string;
            type: 'EMAIL' | 'PHONE' | 'TWITTER';
            /** only available for x contact types */
            bio?: string;
            /** only available for x contact types */
            image?: string;
          };
        }
      >,
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
    identifier: string,
    query: {
      apiKey: string;
      /** @default "PHONE" */
      contactType?: 'EMAIL' | 'PHONE' | 'TWITTER';
    },
    params: RequestParams = {},
  ) =>
    this.request<
      SuggestedProfilesToInvite[],
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
  referralsDetail = (
    id: string,
    query: {
      apiKey: string;
      /** Optional filter to specify the depth of upstream referral connections (profiles that referred this user). Defaults to 2 if no value is specified. */
      upstream?: string;
      /** Optional filter to specify the depth of downstream referral connections (profiles referred by this user). Defaults to 2 if no value is specified. */
      downstream?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      ReferralProfilesSchema,
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
    tokenAddress: string,
    query: {
      apiKey: string;
      requestorId?: string;
      page?: string;
      pageSize?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      ITokenHoldersResponseSchema,
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
