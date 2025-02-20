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

export interface ActivityItemSchema {
  type: 'following' | 'new_content' | 'like' | 'comment' | 'new_follower';
  actor_id: string;
  actor_username: string;
  target_id?: string;
  target_username?: string;
  comment_id?: string;
  timestamp: number;
  activity: string;
}

export interface GetActivityFeedResponseSchema {
  activities: {
    type: 'following' | 'new_content' | 'like' | 'comment' | 'new_follower';
    actor_id: string;
    actor_username: string;
    target_id?: string;
    target_username?: string;
    comment_id?: string;
    timestamp: number;
    activity: string;
  }[];
  page: number;
  pageSize: number;
}

export interface SwapTransactionSchema {
  type: string;
  source: string;
  description: string;
  fee: number;
  timestamp: string;
  signature: string;
  success: boolean;
  walletAddress: string;
  username: string;
  from: {
    amount: number;
    token: string;
  };
  to: {
    amount: number;
    token: string;
  };
  profile?: {
    username: string;
    id: string;
  };
  accountsInvolved: string[];
  involvedProfiles?: {
    address: string;
    profile: {
      username: string;
      id: string;
    };
  }[];
}

export interface GetSwapActivityResponseSchema {
  transactions: {
    type: string;
    source: string;
    description: string;
    fee: number;
    timestamp: string;
    signature: string;
    success: boolean;
    walletAddress: string;
    username: string;
    from: {
      amount: number;
      token: string;
    };
    to: {
      amount: number;
      token: string;
    };
    profile?: {
      username: string;
      id: string;
    };
    accountsInvolved: string[];
    involvedProfiles?: {
      address: string;
      profile: {
        username: string;
        id: string;
      };
    }[];
  }[];
  page: number;
  pageSize: number;
}

export interface CommentSchema {
  id: string;
  created_at: number;
  text: string;
}

export interface CommentDetailsSchema {
  comment: {
    id: string;
    created_at: number;
    text: string;
  };
  contentId?: string;
  author?: {
    id: string;
    namespace: string;
    created_at: number;
    username: string;
    bio?: string | null;
    image?: string | null;
  };
  socialCounts: {
    likeCount: number;
  };
  requestingProfileSocialInfo?: {
    hasLiked: boolean;
  };
}

export interface CommentDetailsWithRepliesSchema {
  comment: {
    id: string;
    created_at: number;
    text: string;
  };
  contentId?: string;
  author?: {
    id: string;
    namespace: string;
    created_at: number;
    username: string;
    bio?: string | null;
    image?: string | null;
  };
  socialCounts: {
    likeCount: number;
  };
  requestingProfileSocialInfo?: {
    hasLiked: boolean;
  };
  recentReplies?: {
    comment: {
      id: string;
      created_at: number;
      text: string;
    };
    contentId?: string;
    author?: {
      id: string;
      namespace: string;
      created_at: number;
      username: string;
      bio?: string | null;
      image?: string | null;
    };
    socialCounts: {
      likeCount: number;
    };
    requestingProfileSocialInfo?: {
      hasLiked: boolean;
    };
  }[];
}

export interface CreateCommentSchema {
  contentId?: string;
  profileId: string;
  /** @minLength 1 */
  text: string;
  commentId?: string;
  properties?: {
    key: string;
    value: string | number | boolean;
  }[];
  targetProfileId?: string;
}

export interface UpdateCommentSchema {
  properties: {
    key: string;
    value: string | number | boolean;
  }[];
}

export interface GetCommentsResponseSchema {
  comments: {
    comment: {
      id: string;
      created_at: number;
      text: string;
    };
    contentId?: string;
    author?: {
      id: string;
      namespace: string;
      created_at: number;
      username: string;
      bio?: string | null;
      image?: string | null;
    };
    socialCounts: {
      likeCount: number;
    };
    requestingProfileSocialInfo?: {
      hasLiked: boolean;
    };
    recentReplies?: {
      comment: {
        id: string;
        created_at: number;
        text: string;
      };
      contentId?: string;
      author?: {
        id: string;
        namespace: string;
        created_at: number;
        username: string;
        bio?: string | null;
        image?: string | null;
      };
      socialCounts: {
        likeCount: number;
      };
      requestingProfileSocialInfo?: {
        hasLiked: boolean;
      };
    }[];
  }[];
  page: number;
  pageSize: number;
}

export interface GetBatchCommentsResponseSchema {
  successful: {
    comment: {
      id: string;
      created_at: number;
      text: string;
    };
    contentId?: string;
    author?: {
      id: string;
      namespace: string;
      created_at: number;
      username: string;
      bio?: string | null;
      image?: string | null;
    };
    socialCounts: {
      likeCount: number;
    };
  }[];
  failed: {
    id: string;
    error: string;
  }[];
}

export interface ContactSchema {
  /** @minLength 1 */
  id: string;
  type: 'EMAIL' | 'PHONE' | 'TWITTER';
}

export interface ContentSchema {
  id: string;
  created_at: number;
}

export interface ContentDetailsSchema {
  content: {
    id: string;
    created_at: number;
  } | null;
  socialCounts: {
    likeCount: number;
    commentCount: number;
  };
  authorProfile: {
    id: string;
    namespace: string;
    created_at: number;
    username: string;
    bio?: string | null;
    image?: string | null;
  };
  requestingProfileSocialInfo?: {
    hasLiked?: boolean;
  };
}

export interface FindOrCreateContentSchema {
  /** @minLength 1 */
  id: string;
  profileId?: string;
  relatedContentId?: string;
  properties?: {
    key: string;
    value: string | number | boolean;
  }[];
}

export interface UpdateContentSchema {
  properties: {
    key: string;
    value: string | number | boolean;
  }[];
}

export interface GetContestsResponseSchema {
  contents: {
    content: {
      id: string;
      created_at: number;
    } | null;
    socialCounts: {
      likeCount: number;
      commentCount: number;
    };
    authorProfile: {
      id: string;
      namespace: string;
      created_at: number;
      username: string;
      bio?: string | null;
      image?: string | null;
    };
    requestingProfileSocialInfo?: {
      hasLiked?: boolean;
    };
  }[];
  page: number;
  pageSize: number;
}

export interface GetBatchContentsResponseSchema {
  successful: {
    content: {
      id: string;
      created_at: number;
    } | null;
    socialCounts: {
      likeCount: number;
      commentCount: number;
    };
    authorProfile: {
      id: string;
      namespace: string;
      created_at: number;
      username: string;
      bio?: string | null;
      image?: string | null;
    };
    requestingProfileSocialInfo?: {
      hasLiked?: boolean;
    };
  }[];
  failed: {
    id: string;
    error: string;
  }[];
}

export interface SuggestedInviteSchema {
  namespaces: {
    name: string;
    readableName: string | null;
    faviconURL: string | null;
    userProfileURL: string | null;
  }[];
  wallet?: {
    address: string;
  };
  contact?: {
    /** @minLength 1 */
    id: string;
    type: 'EMAIL' | 'PHONE' | 'TWITTER';
  };
}

export interface BeforeLLMUsageSchema {
  /** @minLength 1 */
  userId: string;
  /** @minLength 1 */
  idempotencyKey: string;
  /**
   * @min 0
   * @exclusiveMin true
   */
  promptTokens: number;
}

export interface BeforeLLMUsageResponseSchema {
  /**
   * @min 0
   * @exclusiveMin true
   */
  id: number;
}

export interface AfterLLMUsageSchema {
  /** @minLength 1 */
  userId: string;
  /**
   * @min 0
   * @exclusiveMin true
   */
  transactionId: number;
  /**
   * @min 0
   * @exclusiveMin true
   */
  completionTokens: number;
}

export interface AfterLLMUsageResponseSchema {
  /**
   * @min 0
   * @exclusiveMin true
   */
  usageId: number;
  /**
   * @min 0
   * @exclusiveMin true
   */
  transactionId: number;
  remainingBalance: string;
}

export interface CurrentBalanceResponseSchema {
  balance: string;
}

export interface BundleSchema {
  /**
   * @min 0
   * @exclusiveMin true
   */
  id: number;
  name: string;
  /**
   * @min 0
   * @exclusiveMin true
   */
  credits: number;
  price: string;
}

export interface ChestSchema {
  /**
   * @min 0
   * @exclusiveMin true
   */
  id: number;
  userId: string;
  type: string;
  /**
   * @min 0
   * @exclusiveMin true
   */
  credits: number;
}

export interface ApiChestSchema {
  /**
   * @min 0
   * @exclusiveMin true
   */
  id: number;
}

export interface GetChestsResponseSchema {
  chests: {
    /**
     * @min 0
     * @exclusiveMin true
     */
    id: number;
  }[];
  claimedAt?: string | null;
  availableAt?: string | null;
}

export interface ClaimChestResponseSchema {
  balance?: string;
  /**
   * @min 0
   * @exclusiveMin true
   */
  giftAmount?: number;
}

export interface PlayGameResponseSchema {
  userBalance?: string;
  gameCreditsFee: number;
}

export interface CustomPropertySchema {
  key: string;
  value: string | number | boolean;
}

export interface CreateFollowSchema {
  startId: string;
  endId: string;
}

export interface DeleteFollowSchema {
  startId: string;
  endId: string;
}

export interface IsFollowingSchema {
  isFollowing: boolean;
}

export interface LeaderboardEntrySchema {
  /**
   * @min 0
   * @exclusiveMin true
   */
  position: number;
  score: number;
  profile: {
    id: string;
    namespace: string;
    created_at: number;
    username: string;
    bio?: string | null;
    image?: string | null;
  };
}

export interface LeaderboardUserNearbySchema {
  username: string;
  profileId: string;
  score: number;
}

export interface LeaderboardUserSchema {
  position: number;
  score: number;
  hasPlayerAbove: boolean;
  hasPlayerBelow: boolean;
  nearby: {
    username: string;
    profileId: string;
    score: number;
  }[];
}

export interface SuggestionUserSchema {
  profile: {
    id: string;
    namespace: string;
    created_at: number;
    username: string;
    bio?: string | null;
    image?: string | null;
  };
  score: number;
  position: number;
}

export interface LeaderboardMetricsSchema {
  contentCount: number;
}

export interface LeaderboardEntryWithMetricsSchema {
  profile: {
    id: string;
    namespace: string;
    created_at: number;
    username: string;
    bio?: string | null;
    image?: string | null;
  };
  metrics: {
    contentCount: number;
  };
}

export interface LeaderboardResponseSchema {
  entries: {
    profile: {
      id: string;
      namespace: string;
      created_at: number;
      username: string;
      bio?: string | null;
      image?: string | null;
    };
    metrics: {
      contentCount: number;
    };
  }[];
  page: number;
  pageSize: number;
}

export interface LeaderboardTimeWindowSchema {
  field: string;
  start: number;
  end?: number;
}

export interface GetLeaderboardParamsSchema {
  namespace: string;
  timeWindow?: {
    field: string;
    start: number;
    end?: number;
  };
  page?: number;
  pageSize?: number;
}

export interface CreateLikeSchema {
  startId: string;
}

export interface DeleteLikeSchema {
  startId: string;
}

export interface NamespacePropertiesSchema {
  name: string;
  readableName: string | null;
  faviconURL: string | null;
  userProfileURL: string | null;
}

export interface CreateNimbusAppSchema {
  name: string;
  userId: string;
  paid?: boolean;
}

export interface NimbusCheckoutInputSchema {
  bundleId: string;
  idempotencyKey: string;
}

export interface NimbusCheckoutResponseSchema {
  id: string;
  url: string | null;
  idempotencyKey: string;
  userId: string;
}

export interface NimbusDeployInputSchema {
  contentId: string;
  idempotencyKey: string;
  paid?: boolean;
}

export interface GameDetailsSchema {
  gameId: string;
  gameName: string;
  appNamespace: string;
  title: string;
  deployUrl: string;
}

export interface GamesAndScoresSchema {
  scores: {
    gameDetails: {
      gameId: string;
      gameName: string;
      appNamespace: string;
      title: string;
      deployUrl: string;
    };
    score: {
      /**
       * @min 0
       * @exclusiveMin true
       */
      position: number;
      score: number;
      profile: {
        id: string;
        namespace: string;
        created_at: number;
        username: string;
        bio?: string | null;
        image?: string | null;
      };
    };
  }[];
}

export interface GetGamesResponseSchema {
  games: {
    gameId: string;
    gameName: string;
    appNamespace: string;
    title: string;
    deployUrl: string;
  }[];
  page: number;
  pageSize: number;
}

export interface LinkSchema {
  label: string;
  url: string;
}

export interface BaseNotificationSchema {
  message: string;
  recipient: string;
}

export interface WalletNotificationSchema {
  message: string;
  recipient: string;
  medium: 'wallet';
  title: string;
  link?: {
    label: string;
    url: string;
  };
}

export interface PhoneNotificationSchema {
  message: string;
  recipient: string;
  medium: 'phone';
}

export interface ProfileSchema {
  id: string;
  namespace: string;
  created_at: number;
  username: string;
  bio?: string | null;
  image?: string | null;
}

export interface FindOrCreateProfileSchema {
  username: string;
  id?: string;
  bio?: string;
  image?: string;
  referredById?: string;
  phoneNumber?: string;
  /** @minLength 32 */
  walletAddress?: string;
  blockchain?: 'SOLANA' | 'ETHEREUM';
  contact?: {
    /** @minLength 1 */
    id: string;
    type: 'EMAIL' | 'PHONE' | 'TWITTER';
  };
  properties?: {
    key: string;
    value: string | number | boolean;
  }[];
  /** @default "FAST_UNCONFIRMED" */
  execution?: 'FAST_UNCONFIRMED' | 'QUICK_SIGNATURE' | 'CONFIRMED_AND_PARSED';
}

export interface X {
  username: string;
  id?: string;
  bio?: string;
  image?: string;
  referredById?: string;
  phoneNumber?: string;
  contact?: {
    /** @minLength 1 */
    id: string;
    type: 'EMAIL' | 'PHONE' | 'TWITTER';
  };
  properties?: {
    key: string;
    value: string | number | boolean;
  }[];
}

export interface UpdateProfileSchema {
  username?: string;
  bio?: string;
  image?: string;
  ownerWallet?: {
    /** @minLength 32 */
    address: string;
    blockchain: 'SOLANA' | 'ETHEREUM';
  };
  properties?: {
    key: string;
    value: string | number | boolean;
  }[];
  /** @default "FAST_UNCONFIRMED" */
  execution?: 'FAST_UNCONFIRMED' | 'QUICK_SIGNATURE' | 'CONFIRMED_AND_PARSED';
}

export interface SuggestedProfileFollowSchema {
  namespaces: {
    name: string;
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
  };
}

export interface RefferSchema {
  depth: number;
  profile: {
    id: string;
    namespace: string;
    created_at: number;
    username: string;
    bio?: string | null;
    image?: string | null;
  };
}

export interface ReferralProfilesSchema {
  upstream: {
    depth: number;
    profile: {
      id: string;
      namespace: string;
      created_at: number;
      username: string;
      bio?: string | null;
      image?: string | null;
    };
  }[];
  downstream: {
    depth: number;
    profile: {
      id: string;
      namespace: string;
      created_at: number;
      username: string;
      bio?: string | null;
      image?: string | null;
    };
  }[];
}

export interface FindOrCreateResponseSchema {
  profile: {
    id: string;
    namespace: string;
    created_at: number;
    username: string;
    bio?: string | null;
    image?: string | null;
  };
  walletAddress?: string;
  hashedPhoneNumber?: string;
  contact?: {
    /** @minLength 1 */
    id: string;
    type: 'EMAIL' | 'PHONE' | 'TWITTER';
  };
}

export interface GetProfilesResponseSchema {
  profiles: {
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
  }[];
  page: number;
  pageSize: number;
}

export interface GetProfileDetailsSchema {
  profile: {
    id: string;
    namespace: string;
    created_at: number;
    username: string;
    bio?: string | null;
    image?: string | null;
  };
  walletAddress?: string;
  hashedPhoneNumber?: string;
  contact?: {
    /** @minLength 1 */
    id: string;
    type: 'EMAIL' | 'PHONE' | 'TWITTER';
  };
  socialCounts: {
    followers: number;
    following: number;
  };
}

export interface GetProfileFollowersResponseSchema {
  profiles: {
    id: string;
    namespace: string;
    created_at: number;
    username: string;
    bio?: string | null;
    image?: string | null;
  }[];
  page: number;
  pageSize: number;
}

export interface GetProfileFollowingResponseSchema {
  profiles: {
    id: string;
    namespace: string;
    created_at: number;
    username: string;
    bio?: string | null;
    image?: string | null;
  }[];
  page: number;
  pageSize: number;
}

export interface GetProfileFollowingWhoFollowResponseSchema {
  profiles: {
    id: string;
    namespace: string;
    created_at: number;
    username: string;
    bio?: string | null;
    image?: string | null;
  }[];
  page: number;
  pageSize: number;
}

export interface LikeCommentCountsSchema {
  likeCount: number;
  commentCount: number;
}

export interface SocialInfoSchema {
  hasLiked?: boolean;
}

export interface FollowCountsSchema {
  followers: number;
  following: number;
}

export interface WalletSchema {
  id: string;
  created_at: number;
  blockchain: 'SOLANA' | 'ETHEREUM';
  wallet_type?: 'PHANTOM' | 'WEB3AUTH';
}

export interface GetPointsEarnedByPeriodSchema {
  periodType: 'MONTH' | 'YEAR';
}

export interface GetPointsEarnedByPeriodResponseSchema {
  periods: {
    totalPoints: number;
    date: string;
  }[];
}

export interface SearchProfilesResponseSchema {
  profiles: {
    profile: {
      id: string;
      namespace: string;
      created_at: number;
      username: string;
      bio?: string | null;
      image?: string | null;
    };
    socialCounts: {
      followers: number;
      following: number;
    };
    walletAddress: string | null;
    namespace: {
      name: string;
      readableName: string | null;
      faviconURL: string | null;
      userProfileURL: string | null;
    };
  }[];
  page: number;
  pageSize: number;
}

export interface ProfileIdentitySchema {
  wallet?: {
    /** @minLength 32 */
    address?: string;
  };
  profiles: {
    profile: {
      id: string;
      namespace: string;
      created_at: number;
      username: string;
      bio?: string | null;
      image?: string | null;
    };
    namespace: {
      name: string;
      readableName: string | null;
      faviconURL: string | null;
      userProfileURL: string | null;
    };
  }[];
}

export interface ProfileIdentityResponseSchema {
  identities: {
    wallet?: {
      /** @minLength 32 */
      address?: string;
    };
    profiles: {
      profile: {
        id: string;
        namespace: string;
        created_at: number;
        username: string;
        bio?: string | null;
        image?: string | null;
      };
      namespace: {
        name: string;
        readableName: string | null;
        faviconURL: string | null;
        userProfileURL: string | null;
      };
    }[];
  }[];
  page: number;
  pageSize: number;
}

export interface FindOrCreateCreateParams {
  apiKey: string;
}

export type FindOrCreateCreateData = FindOrCreateResponseSchema;

export interface ProfilesListParams {
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
}

export type ProfilesListData = GetProfilesResponseSchema;

export interface ProfilesDetailParams {
  apiKey: string;
  /** The id of the start profile. */
  id: string;
}

export type ProfilesDetailData = GetProfileDetailsSchema;

export interface ProfilesUpdateParams {
  apiKey: string;
  id: string;
}

export type ProfilesUpdateData = ProfileSchema;

export interface FollowersDetailParams {
  apiKey: string;
  page?: string;
  pageSize?: string;
  id: string;
}

export type FollowersDetailData = GetProfileFollowersResponseSchema;

export interface FollowingDetailParams {
  apiKey: string;
  page?: string;
  pageSize?: string;
  id: string;
}

export type FollowingDetailData = GetProfileFollowingResponseSchema;

export interface FollowingWhoFollowDetailParams {
  apiKey: string;
  requestorId: string;
  page?: string;
  pageSize?: string;
  id: string;
}

export type FollowingWhoFollowDetailData = GetProfileFollowingWhoFollowResponseSchema;

export interface SuggestedDetailParams {
  apiKey: string;
  /** @default "PHONE" */
  contactType?: 'EMAIL' | 'PHONE' | 'TWITTER';
  /** should either be a wallet address (default) or a contact id. when using contact ids, specify the contactType via query params */
  identifier: string;
}

export type SuggestedDetailData = Record<
  string,
  {
    namespaces: {
      name: string;
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
    };
  }
>;

export interface ReferralsDetailParams {
  apiKey: string;
  /** Optional filter to specify the depth of upstream referral connections (profiles that referred this user). Defaults to 2 if no value is specified. */
  upstream?: string;
  /** Optional filter to specify the depth of downstream referral connections (profiles referred by this user). Defaults to 2 if no value is specified. */
  downstream?: string;
  id: string;
}

export type ReferralsDetailData = ReferralProfilesSchema;

export interface TokenOwnersDetailParams {
  apiKey: string;
  requestorId?: string;
  page?: string;
  pageSize?: string;
  tokenAddress: string;
}

export interface TokenOwnersDetailData {
  profiles: {
    id: string;
    created_at: number;
    namespace: string;
    username: string;
    bio?: string;
    image?: string;
    wallet?: {
      id: string;
      blockchain: string;
    };
  }[];
  page: number;
  pageSize: number;
}

export interface PostFollowersParams {
  apiKey: string;
}

export type PostFollowersData = object;

export interface RemoveCreateParams {
  apiKey: string;
}

export type RemoveCreateData = object;

export interface StateListParams {
  apiKey: string;
  startId: string;
  endId: string;
}

export type StateListData = IsFollowingSchema;

export interface ContentsListParams {
  apiKey: string;
  orderByField?: string;
  orderByDirection?: 'ASC' | 'DESC';
  requireFields?: string;
  filterField?: string;
  filterValue?: string;
  page?: string;
  pageSize?: string;
  profileId?: string;
  requestingProfileId?: string;
  namespace?: 'primitives';
}

export type ContentsListData = GetContestsResponseSchema;

export interface ContentsDetailParams {
  apiKey: string;
  requestingProfileId?: string;
  id: string;
}

export type ContentsDetailData = ContentDetailsSchema;

export interface ContentsUpdateParams {
  apiKey: string;
  id: string;
}

export type ContentsUpdateData = ContentSchema;

export interface ContentsDeleteParams {
  apiKey: string;
  id: string;
}

export type ContentsDeleteData = object;

export interface FindOrCreateCreateParams2 {
  apiKey: string;
}

export type FindOrCreateCreateResult = ContentSchema;

export interface BatchReadCreateParams {
  apiKey: string;
}

export type BatchReadCreateData = GetBatchContentsResponseSchema;

export interface CommentsListParams {
  apiKey: string;
  contentId?: string;
  profileId?: string;
  targetProfileId?: string;
  page?: string;
  pageSize?: string;
  requestingProfileId?: string;
}

export type CommentsListData = GetCommentsResponseSchema;

export interface CommentsCreateParams {
  apiKey: string;
}

export type CommentsCreateData = CommentSchema;

export interface CommentsDetailParams {
  apiKey: string;
  requestingProfileId?: string;
  id: string;
}

export type CommentsDetailData = CommentDetailsWithRepliesSchema;

export interface CommentsUpdateParams {
  apiKey: string;
  id: string;
}

export type CommentsUpdateData = CommentSchema;

export interface CommentsDeleteParams {
  apiKey: string;
  id: string;
}

export type CommentsDeleteData = object;

export interface RepliesDetailParams {
  apiKey: string;
  page?: string;
  pageSize?: string;
  requestingProfileId?: string;
  id: string;
}

export type RepliesDetailData = GetCommentsResponseSchema;

export interface BatchReadCreateParams2 {
  apiKey: string;
}

export type BatchReadCreateResult = GetBatchCommentsResponseSchema;

export interface LikesCreateParams {
  apiKey: string;
  nodeId: string;
}

export type LikesCreateData = object;

export interface LikesDeleteParams {
  apiKey: string;
  nodeId: string;
}

export type LikesDeleteData = object;

export interface InviteDetailParams {
  apiKey: string;
  /** @default "PHONE" */
  contactType?: 'EMAIL' | 'PHONE' | 'TWITTER';
  /** should either be a wallet address (default) or a contact id. when using contact ids, specify the contactType via query params */
  identifier: string;
}

export type InviteDetailData = SuggestedInviteSchema[];

export interface SocialCountsDetailParams {
  apiKey: string;
  address: string;
}

export type SocialCountsDetailData = FollowCountsSchema;

export interface ProfilesListParams2 {
  apiKey: string;
  query: string;
  /** @default "false" */
  includeExternalProfiles?: string;
  page?: string;
  pageSize?: string;
}

export type ProfilesListResult = SearchProfilesResponseSchema;

export interface NotificationsCreateParams {
  apiKey: string;
}

export type NotificationsCreateData = object;

export interface FeedListParams {
  apiKey: string;
  username: string;
  page?: string;
  pageSize?: string;
}

export type FeedListData = GetActivityFeedResponseSchema;

export interface SwapListParams {
  apiKey: string;
  username?: string;
  page?: string;
  pageSize?: string;
  tokenAddress?: string;
}

export type SwapListData = GetSwapActivityResponseSchema;

export interface IdentitiesDetailParams {
  apiKey: string;
  page?: string;
  pageSize?: string;
  id: string;
}

export type IdentitiesDetailData = ProfileIdentityResponseSchema;

export interface ProfilesDetailParams2 {
  apiKey: string;
  page?: string;
  pageSize?: string;
  /** @default "created_at" */
  sortBy?: string;
  /** @default "DESC" */
  sortDirection?: 'ASC' | 'DESC';
  id: string;
}

export type ProfilesDetailResult = GetProfilesResponseSchema;

import type { AxiosInstance, AxiosRequestConfig, HeadersDefaults, ResponseType } from 'axios';
import axios from 'axios';

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams
  extends Omit<AxiosRequestConfig, 'data' | 'params' | 'url' | 'responseType'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;

export interface ApiConfig<SecurityDataType = unknown>
  extends Omit<AxiosRequestConfig, 'data' | 'cancelToken'> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({
    securityWorker,
    secure,
    format,
    ...axiosConfig
  }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || 'https://api.usetapestry.dev/api/v1',
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(
    params1: AxiosRequestConfig,
    params2?: AxiosRequestConfig,
  ): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method &&
          this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) ||
          {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === 'object' && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    if (input instanceof FormData) {
      return input;
    }
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<T> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === 'object') {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== 'string') {
      body = JSON.stringify(body);
    }

    return this.instance
      .request({
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type ? { 'Content-Type': type } : {}),
        },
        params: query,
        responseType: responseFormat,
        data: body,
        url: path,
      })
      .then((response) => response.data);
  };
}

/**
 * @title Tapestry API Reference
 * @version 1.0.0
 * @baseUrl https://api.usetapestry.dev/api/v1
 *
 * Documentation for all routes in the API
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  profiles = {
    /**
     * @description For creating a user profile. The endpoint will first check to see if the wallet exists elsewhere on the graph. If it does, we will create a new profile that is namespaced to your app and associate with the wallet you pass in. If the wallet does not yet exist, we will create a node for the wallet, a node for the profile (namespaced to your app) and an edge indicating that the wallet you passed in is associated with the profile on your app.
     *
     * @tags Profiles
     * @name FindOrCreateCreate
     * @summary Find or create a profile
     * @request POST:/profiles/findOrCreate
     */
    findOrCreateCreate: (
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
      }),

    /**
     * No description
     *
     * @tags Profiles
     * @name ProfilesList
     * @summary Get profiles
     * @request GET:/profiles/
     */
    profilesList: (query: ProfilesListParams, params: RequestParams = {}) =>
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
      }),

    /**
     * @description Get comprehensive profile information including node details and follower/following counts
     *
     * @tags Profiles
     * @name ProfilesDetail
     * @summary Find a profile
     * @request GET:/profiles/{id}
     */
    profilesDetail: ({ id, ...query }: ProfilesDetailParams, params: RequestParams = {}) =>
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
      }),

    /**
     * No description
     *
     * @tags Profiles
     * @name ProfilesUpdate
     * @summary Update a profile
     * @request PUT:/profiles/{id}
     */
    profilesUpdate: (
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
      }),

    /**
     * @description Get a list of profiles that follow a user
     *
     * @tags Profiles
     * @name FollowersDetail
     * @summary Get followers
     * @request GET:/profiles/{id}/followers
     */
    followersDetail: ({ id, ...query }: FollowersDetailParams, params: RequestParams = {}) =>
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
      }),

    /**
     * @description Get a list of profiles that a user follows
     *
     * @tags Profiles
     * @name FollowingDetail
     * @summary Get following
     * @request GET:/profiles/{id}/following
     */
    followingDetail: ({ id, ...query }: FollowingDetailParams, params: RequestParams = {}) =>
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
      }),

    /**
     * @description Helpful for creating UIs like "this user is followed by {number} other users you follow"
     *
     * @tags Profiles
     * @name FollowingWhoFollowDetail
     * @summary Get a list of profiles in a user's network that also follow a given profile
     * @request GET:/profiles/{id}/following-who-follow
     */
    followingWhoFollowDetail: (
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
      }),

    /**
     * @description Helpful for populating UIs like "people you may know"
     *
     * @tags Profiles
     * @name SuggestedDetail
     * @summary Get suggested profiles to follow
     * @request GET:/profiles/suggested/{identifier}
     */
    suggestedDetail: (
      { identifier, ...query }: SuggestedDetailParams,
      params: RequestParams = {},
    ) =>
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
      }),

    /**
     * @description Retrieve all referral connections for a user profile, including both users who made referrals (upstream) and users who were referred (downstream) by this profile, with depth indicating the number of connection levels (defaults to 2, maximum 6). For example, depth=1 shows direct referrals, while depth=2 includes referrals made by those direct referrals.
     *
     * @tags Profiles
     * @name ReferralsDetail
     * @summary Retrieve referrals
     * @request GET:/profiles/{id}/referrals
     */
    referralsDetail: ({ id, ...query }: ReferralsDetailParams, params: RequestParams = {}) =>
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
      }),

    /**
     * @description Get a list of profiles in the namespace that own a specific token. Optionally filter to only show profiles that the requesting user follows.
     *
     * @tags Profiles
     * @name TokenOwnersDetail
     * @summary Get profiles that own a specific token
     * @request GET:/profiles/token-owners/{tokenAddress}
     */
    tokenOwnersDetail: (
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
      }),
  };
  followers = {
    /**
     * No description
     *
     * @tags Followers
     * @name PostFollowers
     * @summary Follow a profile
     * @request POST:/followers/add
     */
    postFollowers: (
      query: PostFollowersParams,
      data: CreateFollowSchema,
      params: RequestParams = {},
    ) =>
      this.request<
        PostFollowersData,
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
      }),

    /**
     * No description
     *
     * @tags Followers
     * @name RemoveCreate
     * @summary Unfollow a profile
     * @request POST:/followers/remove
     */
    removeCreate: (
      query: RemoveCreateParams,
      data: DeleteFollowSchema,
      params: RequestParams = {},
    ) =>
      this.request<
        RemoveCreateData,
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
      }),

    /**
     * @description Verifies if exists a FOLLOW edge between the startId and endId passed as query params.
     *
     * @tags Followers
     * @name StateList
     * @summary Is following a profile.
     * @request GET:/followers/state
     */
    stateList: (query: StateListParams, params: RequestParams = {}) =>
      this.request<
        StateListData,
        {
          error: string;
        }
      >({
        path: `/followers/state`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),
  };
  contents = {
    /**
     * @description Filter and sort data using optional query parameters: 'filterField' with 'filterValue' to search by property (searches for null values if filterValue is omitted), 'requireFields' for a comma-separated list of properties that must not be null in results, and 'orderByField' with 'orderByDirection' (asc/desc) to sort the results.
     *
     * @tags Contents
     * @name ContentsList
     * @summary Get contents
     * @request GET:/contents/
     */
    contentsList: (query: ContentsListParams, params: RequestParams = {}) =>
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
      }),

    /**
     * No description
     *
     * @tags Contents
     * @name ContentsDetail
     * @summary Get content by id
     * @request GET:/contents/{id}
     */
    contentsDetail: ({ id, ...query }: ContentsDetailParams, params: RequestParams = {}) =>
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
      }),

    /**
     * No description
     *
     * @tags Contents
     * @name ContentsUpdate
     * @summary Update content
     * @request PUT:/contents/{id}
     */
    contentsUpdate: (
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
      }),

    /**
     * No description
     *
     * @tags Contents
     * @name ContentsDelete
     * @summary Delete content
     * @request DELETE:/contents/{id}
     */
    contentsDelete: ({ id, ...query }: ContentsDeleteParams, params: RequestParams = {}) =>
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
      }),

    /**
     * No description
     *
     * @tags Contents
     * @name FindOrCreateCreate
     * @summary Find or create content
     * @request POST:/contents/findOrCreate
     */
    findOrCreateCreate: (
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
      }),

    /**
     * No description
     *
     * @tags Contents
     * @name BatchReadCreate
     * @summary Get multiple contents
     * @request POST:/contents/batch/read
     */
    batchReadCreate: (query: BatchReadCreateParams, data: string[], params: RequestParams = {}) =>
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
      }),
  };
  comments = {
    /**
     * @description must filter by author (profileId), content (contentId), or target profile (targetProfileId)
     *
     * @tags Comments
     * @name CommentsList
     * @summary Get comments
     * @request GET:/comments/
     */
    commentsList: (query: CommentsListParams, params: RequestParams = {}) =>
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
      }),

    /**
     * No description
     *
     * @tags Comments
     * @name CommentsCreate
     * @summary Create comment
     * @request POST:/comments/
     */
    commentsCreate: (
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
      }),

    /**
     * No description
     *
     * @tags Comments
     * @name CommentsDetail
     * @summary Get comment details
     * @request GET:/comments/{id}
     */
    commentsDetail: ({ id, ...query }: CommentsDetailParams, params: RequestParams = {}) =>
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
      }),

    /**
     * No description
     *
     * @tags Comments
     * @name CommentsUpdate
     * @summary Update comment
     * @request PUT:/comments/{id}
     */
    commentsUpdate: (
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
      }),

    /**
     * No description
     *
     * @tags Comments
     * @name CommentsDelete
     * @summary Delete comment
     * @request DELETE:/comments/{id}
     */
    commentsDelete: ({ id, ...query }: CommentsDeleteParams, params: RequestParams = {}) =>
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
      }),

    /**
     * No description
     *
     * @tags Comments
     * @name RepliesDetail
     * @summary Get comment replies
     * @request GET:/comments/{id}/replies
     */
    repliesDetail: ({ id, ...query }: RepliesDetailParams, params: RequestParams = {}) =>
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
      }),

    /**
     * No description
     *
     * @tags Comments
     * @name BatchReadCreate
     * @summary Get multiple comment details
     * @request POST:/comments/batch/read
     */
    batchReadCreate: (query: BatchReadCreateParams2, data: string[], params: RequestParams = {}) =>
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
      }),
  };
  likes = {
    /**
     * No description
     *
     * @tags Likes
     * @name LikesCreate
     * @summary Create like
     * @request POST:/likes/{nodeId}
     */
    likesCreate: (
      { nodeId, ...query }: LikesCreateParams,
      data: CreateLikeSchema,
      params: RequestParams = {},
    ) =>
      this.request<
        LikesCreateData,
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
      }),

    /**
     * No description
     *
     * @tags Likes
     * @name LikesDelete
     * @summary Remove like
     * @request DELETE:/likes/{nodeId}
     */
    likesDelete: (
      { nodeId, ...query }: LikesDeleteParams,
      data: DeleteLikeSchema,
      params: RequestParams = {},
    ) =>
      this.request<
        LikesDeleteData,
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
      }),
  };
  creators = {
    /**
     * No description
     *
     * @tags Creators
     * @name InviteDetail
     * @summary Get suggested wallets/contacts to invite
     * @request GET:/creators/invite/{identifier}
     */
    inviteDetail: ({ identifier, ...query }: InviteDetailParams, params: RequestParams = {}) =>
      this.request<
        InviteDetailData,
        {
          error: string;
        }
      >({
        path: `/creators/invite/${identifier}`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),
  };
  wallets = {
    /**
     * No description
     *
     * @tags Wallets
     * @name SocialCountsDetail
     * @summary Get socials counts for a given wallet
     * @request GET:/wallets/{address}/socialCounts
     */
    socialCountsDetail: (
      { address, ...query }: SocialCountsDetailParams,
      params: RequestParams = {},
    ) =>
      this.request<
        SocialCountsDetailData,
        {
          error: string;
        }
      >({
        path: `/wallets/${address}/socialCounts`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),
  };
  search = {
    /**
     * @description Search for profiles by id or username
     *
     * @tags Search
     * @name ProfilesList
     * @summary Search profiles
     * @request GET:/search/profiles
     */
    profilesList: (query: ProfilesListParams2, params: RequestParams = {}) =>
      this.request<
        ProfilesListResult,
        {
          error: string;
        }
      >({
        path: `/search/profiles`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),
  };
  notifications = {
    /**
     * @description only supports wallet notifications for now. recipient must be a wallet address
     *
     * @tags Notifications
     * @name NotificationsCreate
     * @summary Send a notification
     * @request POST:/notifications/
     */
    notificationsCreate: (
      query: NotificationsCreateParams,
      data: WalletNotificationSchema,
      params: RequestParams = {},
    ) =>
      this.request<
        NotificationsCreateData,
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
      }),
  };
  activity = {
    /**
     * @description Get activity feed for a user including follows, content, likes, comments and new followers
     *
     * @tags Activity
     * @name FeedList
     * @summary Get activity feed
     * @request GET:/activity/feed
     */
    feedList: (query: FeedListParams, params: RequestParams = {}) =>
      this.request<
        FeedListData,
        {
          error: string;
        }
      >({
        path: `/activity/feed`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get swap transactions from wallets that the user follows or for a specific token
     *
     * @tags Activity
     * @name SwapList
     * @summary Get swap activity from followed wallets or specific token
     * @request GET:/activity/swap
     */
    swapList: (query: SwapListParams, params: RequestParams = {}) =>
      this.request<
        SwapListData,
        {
          error: string;
        }
      >({
        path: `/activity/swap`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),
  };
  identities = {
    /**
     * @description Retrieves all connected wallets associated with a specified wallet address. For each wallet address, up to 5 linked profiles are returned. To retrieve the complete list of profiles for a specific wallet, use the /identities/{id}/profiles endpoint.
     *
     * @tags Identities
     * @name IdentitiesDetail
     * @summary Finds connected wallets using a wallet address.
     * @request GET:/identities/{id}
     */
    identitiesDetail: ({ id, ...query }: IdentitiesDetailParams, params: RequestParams = {}) =>
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
      }),

    /**
     * @description This endpoint retrieves all profiles that were created by a specific wallet address.
     *
     * @tags Identities
     * @name ProfilesDetail
     * @summary Finds associated profiles across namespaces using a wallet address.
     * @request GET:/identities/{id}/profiles
     */
    profilesDetail: ({ id, ...query }: ProfilesDetailParams2, params: RequestParams = {}) =>
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
      }),
  };
}
