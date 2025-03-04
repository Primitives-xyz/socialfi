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
>;

export interface SuggestedGlobalDetailParams {
  apiKey: string;
  /** @default "PHONE" */
  contactType?: 'EMAIL' | 'PHONE' | 'TWITTER';
  /** should either be a wallet address (default) or a contact id. when using contact ids, specify the contactType via query params */
  identifier: string;
}

export type SuggestedGlobalDetailData = SuggestedProfilesToInvite[];

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

export type TokenOwnersDetailData = ITokenHoldersResponseSchema;

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
  /** @default "PHONE" */
  contactType?: 'EMAIL' | 'PHONE' | 'TWITTER';
  page?: string;
  pageSize?: string;
  id: string;
}

export type IdentitiesDetailData = ProfileIdentityResponseSchema;

export interface ProfilesDetailParams2 {
  apiKey: string;
  /** @default "PHONE" */
  contactType?: 'EMAIL' | 'PHONE' | 'TWITTER';
  page?: string;
  pageSize?: string;
  /** @default "created_at" */
  sortBy?: string;
  /** @default "DESC" */
  sortDirection?: 'ASC' | 'DESC';
  id: string;
}

export type ProfilesDetailResult = GetProfilesResponseSchema;
