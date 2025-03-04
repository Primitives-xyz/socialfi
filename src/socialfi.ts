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
  /** only available for x contact types */
  bio?: string;
  /** only available for x contact types */
  image?: string;
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
  totalCount: number;
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

export interface GameEndInputSchema {
  /**
   * @min 0
   * @exclusiveMin true
   */
  score: number;
  profileId: string;
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
  name: string | null;
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
  successUrl?: string;
  cancelUrl?: string;
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
}

export interface GameDetailsSchema {
  gameId: string;
  gameName: string;
  appNamespace: string;
  title: string;
  deployUrl: string;
  coverImageUrl: string | null;
}

export interface GamesAndScoresSchema {
  scores: {
    gameDetails: {
      gameId: string;
      gameName: string;
      appNamespace: string;
      title: string;
      deployUrl: string;
      coverImageUrl: string | null;
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
    coverImageUrl: string | null;
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
  /** Username for the profile */
  username: string;
  /** Optional unique identifier for the profile */
  id?: string;
  /** Optional biography or description */
  bio?: string;
  /** Optional URL to profile image */
  image?: string;
  /** Optional ID of the referring profile */
  referredById?: string;
  /** Optional phone number for contact */
  phoneNumber?: string;
  /**
   * Optional blockchain wallet address
   * @minLength 32
   */
  walletAddress?: string;
  /** Optional blockchain network identifier */
  blockchain?: 'SOLANA' | 'ETHEREUM';
  /** Optional contact information */
  contact?: {
    /** @minLength 1 */
    id: string;
    type: 'EMAIL' | 'PHONE' | 'TWITTER';
    /** only available for x contact types */
    bio?: string;
    /** only available for x contact types */
    image?: string;
  };
  /** Optional array of custom properties */
  properties?: {
    key: string;
    value: string | number | boolean;
  }[];
  /**
   * Optional execution method, defaults to FAST_UNCONFIRMED
   * @default "FAST_UNCONFIRMED"
   */
  execution?: 'FAST_UNCONFIRMED' | 'QUICK_SIGNATURE' | 'CONFIRMED_AND_PARSED';
}

export interface X {
  /** Username for the profile */
  username: string;
  /** Optional unique identifier for the profile */
  id?: string;
  /** Optional biography or description */
  bio?: string;
  /** Optional URL to profile image */
  image?: string;
  /** Optional ID of the referring profile */
  referredById?: string;
  /** Optional phone number for contact */
  phoneNumber?: string;
  /** Optional contact information */
  contact?: {
    /** @minLength 1 */
    id: string;
    type: 'EMAIL' | 'PHONE' | 'TWITTER';
    /** only available for x contact types */
    bio?: string;
    /** only available for x contact types */
    image?: string;
  };
  /** Optional array of custom properties */
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

export interface SuggestedProfilesToInvite {
  namespaces: {
    name: string | null;
    readableName: string | null;
    faviconURL: string | null;
    userProfileURL: string | null;
  }[];
  namespaceCount: number;
  profiles: {
    namespace: {
      name: string | null;
      readableName: string | null;
      faviconURL: string | null;
      userProfileURL: string | null;
    };
    profiles: {
      id: string;
      namespace: string;
      created_at: number;
      username: string;
      bio?: string | null;
      image?: string | null;
    }[];
  }[];
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

export interface IProfileWithWalletsSchema {
  id: string;
  namespace: string;
  created_at: number;
  username: string;
  bio?: string | null;
  image?: string | null;
  wallets: {
    id: string;
    created_at: number;
    blockchain: 'SOLANA' | 'ETHEREUM';
    wallet_type?: 'PHANTOM' | 'WEB3AUTH';
  }[];
}

export interface ITokenHoldersResponseSchema {
  profiles: {
    id: string;
    namespace: string;
    created_at: number;
    username: string;
    bio?: string | null;
    image?: string | null;
    wallets: {
      id: string;
      created_at: number;
      blockchain: 'SOLANA' | 'ETHEREUM';
      wallet_type?: 'PHANTOM' | 'WEB3AUTH';
    }[];
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
    /** only available for x contact types */
    bio?: string;
    /** only available for x contact types */
    image?: string;
  };
}

export interface GetProfilesItemSchema {
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
  namespace?: {
    name: string | null;
    readableName: string | null;
    faviconURL: string | null;
    userProfileURL: string | null;
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
  socialCounts: {
    followers: number;
    following: number;
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
    namespace?: {
      name: string | null;
      readableName: string | null;
      faviconURL: string | null;
      userProfileURL: string | null;
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
    socialCounts: {
      followers: number;
      following: number;
    };
  }[];
  page: number;
  pageSize: number;
  totalCount: number;
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
    /** only available for x contact types */
    bio?: string;
    /** only available for x contact types */
    image?: string;
  };
  socialCounts: {
    followers: number;
    following: number;
  };
  namespace?: {
    name: string | null;
    readableName: string | null;
    faviconURL: string | null;
    userProfileURL: string | null;
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

export interface LinkedWalletSchema {
  /** @minLength 32 */
  address: string;
  blockchain: 'SOLANA' | 'ETHEREUM';
}

export type LinkWalletsInputSchema = {
  data: {
    /** @minLength 32 */
    address: string;
    blockchain: 'SOLANA' | 'ETHEREUM';
  };
  proof: string;
}[];

export type LinkContactsInputSchema = {
  data: {
    /** @minLength 1 */
    id: string;
    type: 'EMAIL' | 'PHONE' | 'TWITTER';
    /** only available for x contact types */
    bio?: string;
    /** only available for x contact types */
    image?: string;
  };
  proof: string;
}[];

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
      name: string | null;
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
  contact?: {
    id: string;
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
      name: string | null;
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
    contact?: {
      id: string;
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
        name: string | null;
        readableName: string | null;
        faviconURL: string | null;
        userProfileURL: string | null;
      };
    }[];
  }[];
  page: number;
  pageSize: number;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>;

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>;
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = 'https://api.usetapestry.dev/api/v1';
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: 'same-origin',
    headers: {},
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === 'number' ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join('&');
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => 'undefined' !== typeof query[key]);
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key),
      )
      .join('&');
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : '';
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === 'object' || typeof input === 'string')
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== 'string' ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === 'object' && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ''}${path}${queryString ? `?${queryString}` : ''}`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
        },
        signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
        body: typeof body === 'undefined' || body === null ? null : payloadFormatter(body),
      },
    ).then(async (response) => {
      const r = response.clone() as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Tapestry API Reference
 * @version 1.0.0
 * @baseUrl https://api.usetapestry.dev/api/v1
 *
 * Documentation for all routes in the API
 */
export class SocialFi<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
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
      }),

    /**
     * No description
     *
     * @tags Profiles
     * @name ProfilesList
     * @summary Get profiles
     * @request GET:/profiles/
     */
    profilesList: (
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
      }),

    /**
     * @description Get comprehensive profile information including node details and follower/following counts
     *
     * @tags Profiles
     * @name ProfilesDetail
     * @summary Find a profile
     * @request GET:/profiles/{id}
     */
    profilesDetail: (
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
      }),

    /**
     * @description Get a list of profiles that follow a user
     *
     * @tags Profiles
     * @name FollowersDetail
     * @summary Get followers
     * @request GET:/profiles/{id}/followers
     */
    followersDetail: (
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
      }),

    /**
     * @description Get a list of profiles that a user follows
     *
     * @tags Profiles
     * @name FollowingDetail
     * @summary Get following
     * @request GET:/profiles/{id}/following
     */
    followingDetail: (
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
      }),

    /**
     * No description
     *
     * @tags Profiles
     * @name SuggestedGlobalDetail
     * @summary Get suggested profiles to invite
     * @request GET:/profiles/suggested/{identifier}/global
     */
    suggestedGlobalDetail: (
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
      }),

    /**
     * @description Retrieve all referral connections for a user profile, including both users who made referrals (upstream) and users who were referred (downstream) by this profile, with depth indicating the number of connection levels (defaults to 2, maximum 6). For example, depth=1 shows direct referrals, while depth=2 includes referrals made by those direct referrals.
     *
     * @tags Profiles
     * @name ReferralsDetail
     * @summary Retrieve referrals
     * @request GET:/profiles/{id}/referrals
     */
    referralsDetail: (
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
      }),

    /**
     * @description Verifies if exists a FOLLOW edge between the startId and endId passed as query params.
     *
     * @tags Followers
     * @name StateList
     * @summary Is following a profile.
     * @request GET:/followers/state
     */
    stateList: (
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
    contentsList: (
      query: {
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
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetContestsResponseSchema,
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
    contentsDetail: (
      id: string,
      query: {
        apiKey: string;
        requestingProfileId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        ContentDetailsSchema,
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
      id: string,
      query: {
        apiKey: string;
      },
      data: UpdateContentSchema,
      params: RequestParams = {},
    ) =>
      this.request<
        ContentSchema,
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
    contentsDelete: (
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
      query: {
        apiKey: string;
      },
      data: FindOrCreateContentSchema,
      params: RequestParams = {},
    ) =>
      this.request<
        ContentSchema,
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
    batchReadCreate: (
      query: {
        apiKey: string;
      },
      data: string[],
      params: RequestParams = {},
    ) =>
      this.request<
        GetBatchContentsResponseSchema,
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
    commentsList: (
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
      }),

    /**
     * No description
     *
     * @tags Comments
     * @name CommentsDetail
     * @summary Get comment details
     * @request GET:/comments/{id}
     */
    commentsDetail: (
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
      }),

    /**
     * No description
     *
     * @tags Comments
     * @name CommentsDelete
     * @summary Delete comment
     * @request DELETE:/comments/{id}
     */
    commentsDelete: (
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
      }),

    /**
     * No description
     *
     * @tags Comments
     * @name RepliesDetail
     * @summary Get comment replies
     * @request GET:/comments/{id}/replies
     */
    repliesDetail: (
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
      }),

    /**
     * No description
     *
     * @tags Comments
     * @name BatchReadCreate
     * @summary Get multiple comment details
     * @request POST:/comments/batch/read
     */
    batchReadCreate: (
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
      address: string,
      query: {
        apiKey: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        FollowCountsSchema,
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
    profilesList: (
      query: {
        apiKey: string;
        query: string;
        /** @default "false" */
        includeExternalProfiles?: string;
        page?: string;
        pageSize?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        SearchProfilesResponseSchema,
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
    feedList: (
      query: {
        apiKey: string;
        username: string;
        page?: string;
        pageSize?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetActivityFeedResponseSchema,
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
    swapList: (
      query: {
        apiKey: string;
        username?: string;
        page?: string;
        pageSize?: string;
        tokenAddress?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetSwapActivityResponseSchema,
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
     * @description Retrieves all connected wallets/contacts associated with a specified wallet/contact. For each wallet/contact, returns up to 5 profiles. To retrieve the complete list of profiles for a specific wallet/contact, use the /identities/{id}/profiles endpoint
     *
     * @tags Identities
     * @name IdentitiesDetail
     * @summary Finds connected wallets/contacts from an id. this id should be a wallet address or a contact id. when using a contact id, specify the contactType via query params
     * @request GET:/identities/{id}
     */
    identitiesDetail: (
      id: string,
      query: {
        apiKey: string;
        /** @default "PHONE" */
        contactType?: 'EMAIL' | 'PHONE' | 'TWITTER';
        page?: string;
        pageSize?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        ProfileIdentityResponseSchema,
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
     * @description This endpoint retrieves all profiles that were created by a specific wallet/contact.
     *
     * @tags Identities
     * @name ProfilesDetail
     * @summary Finds associated profiles across namespaces using a wallet address or a contact id. when using a contact id, specify the contactType via query params
     * @request GET:/identities/{id}/profiles
     */
    profilesDetail: (
      id: string,
      query: {
        apiKey: string;
        /** @default "PHONE" */
        contactType?: 'EMAIL' | 'PHONE' | 'TWITTER';
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
        path: `/identities/${id}/profiles`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),
  };
}
