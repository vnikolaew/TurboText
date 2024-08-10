/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.This scalar is serialized to a string in ISO 8601 format and parsed from a string in ISO 8601 format. */
  DateTimeISO: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: { input: any; output: any; }
};

export type Account = {
  __typename?: 'Account';
  access_token?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  expires_at?: Maybe<Scalars['Int']['output']>;
  id_token?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  provider: Scalars['String']['output'];
  providerAccountId: Scalars['String']['output'];
  refresh_token?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  session_state?: Maybe<Scalars['String']['output']>;
  token_type?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  userConfigurationId?: Maybe<Scalars['String']['output']>;
  userId: Scalars['String']['output'];
};

export type AccountAvgAggregate = {
  __typename?: 'AccountAvgAggregate';
  expires_at?: Maybe<Scalars['Float']['output']>;
};

export type AccountAvgOrderByAggregateInput = {
  expires_at?: InputMaybe<SortOrder>;
};

export type AccountCountAggregate = {
  __typename?: 'AccountCountAggregate';
  _all: Scalars['Int']['output'];
  access_token: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  expires_at: Scalars['Int']['output'];
  id_token: Scalars['Int']['output'];
  metadata: Scalars['Int']['output'];
  provider: Scalars['Int']['output'];
  providerAccountId: Scalars['Int']['output'];
  refresh_token: Scalars['Int']['output'];
  scope: Scalars['Int']['output'];
  session_state: Scalars['Int']['output'];
  token_type: Scalars['Int']['output'];
  type: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userConfigurationId: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type AccountCountOrderByAggregateInput = {
  access_token?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  expires_at?: InputMaybe<SortOrder>;
  id_token?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  refresh_token?: InputMaybe<SortOrder>;
  scope?: InputMaybe<SortOrder>;
  session_state?: InputMaybe<SortOrder>;
  token_type?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userConfigurationId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type AccountCreateInput = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  expires_at?: InputMaybe<Scalars['Int']['input']>;
  id_token?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  provider: Scalars['String']['input'];
  providerAccountId: Scalars['String']['input'];
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  session_state?: InputMaybe<Scalars['String']['input']>;
  token_type?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user: UserCreateNestedOneWithoutAccountsInput;
  userConfigurationId?: InputMaybe<Scalars['String']['input']>;
};

export type AccountCreateManyInput = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  expires_at?: InputMaybe<Scalars['Int']['input']>;
  id_token?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  provider: Scalars['String']['input'];
  providerAccountId: Scalars['String']['input'];
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  session_state?: InputMaybe<Scalars['String']['input']>;
  token_type?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userConfigurationId?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['String']['input'];
};

export type AccountCreateManyUserInput = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  expires_at?: InputMaybe<Scalars['Int']['input']>;
  id_token?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  provider: Scalars['String']['input'];
  providerAccountId: Scalars['String']['input'];
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  session_state?: InputMaybe<Scalars['String']['input']>;
  token_type?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userConfigurationId?: InputMaybe<Scalars['String']['input']>;
};

export type AccountCreateManyUserInputEnvelope = {
  data: Array<AccountCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AccountCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AccountCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<AccountCreateWithoutUserInput>>;
  createMany?: InputMaybe<AccountCreateManyUserInputEnvelope>;
};

export type AccountCreateOrConnectWithoutUserInput = {
  create: AccountCreateWithoutUserInput;
  where: AccountWhereUniqueInput;
};

export type AccountCreateWithoutUserInput = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  expires_at?: InputMaybe<Scalars['Int']['input']>;
  id_token?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  provider: Scalars['String']['input'];
  providerAccountId: Scalars['String']['input'];
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  session_state?: InputMaybe<Scalars['String']['input']>;
  token_type?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userConfigurationId?: InputMaybe<Scalars['String']['input']>;
};

export type AccountGroupBy = {
  __typename?: 'AccountGroupBy';
  _avg?: Maybe<AccountAvgAggregate>;
  _count?: Maybe<AccountCountAggregate>;
  _max?: Maybe<AccountMaxAggregate>;
  _min?: Maybe<AccountMinAggregate>;
  _sum?: Maybe<AccountSumAggregate>;
  access_token?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  expires_at?: Maybe<Scalars['Int']['output']>;
  id_token?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  provider: Scalars['String']['output'];
  providerAccountId: Scalars['String']['output'];
  refresh_token?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  session_state?: Maybe<Scalars['String']['output']>;
  token_type?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  userConfigurationId?: Maybe<Scalars['String']['output']>;
  userId: Scalars['String']['output'];
};

export type AccountListRelationFilter = {
  every?: InputMaybe<AccountWhereInput>;
  none?: InputMaybe<AccountWhereInput>;
  some?: InputMaybe<AccountWhereInput>;
};

export type AccountMaxAggregate = {
  __typename?: 'AccountMaxAggregate';
  access_token?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  expires_at?: Maybe<Scalars['Int']['output']>;
  id_token?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  providerAccountId?: Maybe<Scalars['String']['output']>;
  refresh_token?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  session_state?: Maybe<Scalars['String']['output']>;
  token_type?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userConfigurationId?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type AccountMaxOrderByAggregateInput = {
  access_token?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  expires_at?: InputMaybe<SortOrder>;
  id_token?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  refresh_token?: InputMaybe<SortOrder>;
  scope?: InputMaybe<SortOrder>;
  session_state?: InputMaybe<SortOrder>;
  token_type?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userConfigurationId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type AccountMinAggregate = {
  __typename?: 'AccountMinAggregate';
  access_token?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  expires_at?: Maybe<Scalars['Int']['output']>;
  id_token?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  providerAccountId?: Maybe<Scalars['String']['output']>;
  refresh_token?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  session_state?: Maybe<Scalars['String']['output']>;
  token_type?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userConfigurationId?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type AccountMinOrderByAggregateInput = {
  access_token?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  expires_at?: InputMaybe<SortOrder>;
  id_token?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  refresh_token?: InputMaybe<SortOrder>;
  scope?: InputMaybe<SortOrder>;
  session_state?: InputMaybe<SortOrder>;
  token_type?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userConfigurationId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type AccountOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum AccountOrderByRelevanceFieldEnum {
  AccessToken = 'access_token',
  IdToken = 'id_token',
  Provider = 'provider',
  ProviderAccountId = 'providerAccountId',
  RefreshToken = 'refresh_token',
  Scope = 'scope',
  SessionState = 'session_state',
  TokenType = 'token_type',
  Type = 'type',
  UserConfigurationId = 'userConfigurationId',
  UserId = 'userId'
}

export type AccountOrderByRelevanceInput = {
  fields: Array<AccountOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type AccountOrderByWithAggregationInput = {
  _avg?: InputMaybe<AccountAvgOrderByAggregateInput>;
  _count?: InputMaybe<AccountCountOrderByAggregateInput>;
  _max?: InputMaybe<AccountMaxOrderByAggregateInput>;
  _min?: InputMaybe<AccountMinOrderByAggregateInput>;
  _sum?: InputMaybe<AccountSumOrderByAggregateInput>;
  access_token?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  expires_at?: InputMaybe<SortOrderInput>;
  id_token?: InputMaybe<SortOrderInput>;
  metadata?: InputMaybe<SortOrderInput>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  refresh_token?: InputMaybe<SortOrderInput>;
  scope?: InputMaybe<SortOrderInput>;
  session_state?: InputMaybe<SortOrderInput>;
  token_type?: InputMaybe<SortOrderInput>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userConfigurationId?: InputMaybe<SortOrderInput>;
  userId?: InputMaybe<SortOrder>;
};

export type AccountOrderByWithRelationInput = {
  _relevance?: InputMaybe<AccountOrderByRelevanceInput>;
  access_token?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  expires_at?: InputMaybe<SortOrderInput>;
  id_token?: InputMaybe<SortOrderInput>;
  metadata?: InputMaybe<SortOrderInput>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  refresh_token?: InputMaybe<SortOrderInput>;
  scope?: InputMaybe<SortOrderInput>;
  session_state?: InputMaybe<SortOrderInput>;
  token_type?: InputMaybe<SortOrderInput>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userConfigurationId?: InputMaybe<SortOrderInput>;
  userId?: InputMaybe<SortOrder>;
};

export type AccountProviderProviderAccountIdCompoundUniqueInput = {
  provider: Scalars['String']['input'];
  providerAccountId: Scalars['String']['input'];
};

export enum AccountScalarFieldEnum {
  AccessToken = 'access_token',
  CreatedAt = 'createdAt',
  ExpiresAt = 'expires_at',
  IdToken = 'id_token',
  Metadata = 'metadata',
  Provider = 'provider',
  ProviderAccountId = 'providerAccountId',
  RefreshToken = 'refresh_token',
  Scope = 'scope',
  SessionState = 'session_state',
  TokenType = 'token_type',
  Type = 'type',
  UpdatedAt = 'updatedAt',
  UserConfigurationId = 'userConfigurationId',
  UserId = 'userId'
}

export type AccountScalarWhereInput = {
  AND?: InputMaybe<Array<AccountScalarWhereInput>>;
  NOT?: InputMaybe<Array<AccountScalarWhereInput>>;
  OR?: InputMaybe<Array<AccountScalarWhereInput>>;
  access_token?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expires_at?: InputMaybe<IntNullableFilter>;
  id_token?: InputMaybe<StringNullableFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  provider?: InputMaybe<StringFilter>;
  providerAccountId?: InputMaybe<StringFilter>;
  refresh_token?: InputMaybe<StringNullableFilter>;
  scope?: InputMaybe<StringNullableFilter>;
  session_state?: InputMaybe<StringNullableFilter>;
  token_type?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userConfigurationId?: InputMaybe<StringNullableFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type AccountScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<AccountScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<AccountScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<AccountScalarWhereWithAggregatesInput>>;
  access_token?: InputMaybe<StringNullableWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  expires_at?: InputMaybe<IntNullableWithAggregatesFilter>;
  id_token?: InputMaybe<StringNullableWithAggregatesFilter>;
  metadata?: InputMaybe<JsonNullableWithAggregatesFilter>;
  provider?: InputMaybe<StringWithAggregatesFilter>;
  providerAccountId?: InputMaybe<StringWithAggregatesFilter>;
  refresh_token?: InputMaybe<StringNullableWithAggregatesFilter>;
  scope?: InputMaybe<StringNullableWithAggregatesFilter>;
  session_state?: InputMaybe<StringNullableWithAggregatesFilter>;
  token_type?: InputMaybe<StringNullableWithAggregatesFilter>;
  type?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userConfigurationId?: InputMaybe<StringNullableWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type AccountSumAggregate = {
  __typename?: 'AccountSumAggregate';
  expires_at?: Maybe<Scalars['Int']['output']>;
};

export type AccountSumOrderByAggregateInput = {
  expires_at?: InputMaybe<SortOrder>;
};

export type AccountUpdateInput = {
  access_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expires_at?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  provider?: InputMaybe<StringFieldUpdateOperationsInput>;
  providerAccountId?: InputMaybe<StringFieldUpdateOperationsInput>;
  refresh_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scope?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  session_state?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  token_type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutAccountsNestedInput>;
  userConfigurationId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type AccountUpdateManyMutationInput = {
  access_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expires_at?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  provider?: InputMaybe<StringFieldUpdateOperationsInput>;
  providerAccountId?: InputMaybe<StringFieldUpdateOperationsInput>;
  refresh_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scope?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  session_state?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  token_type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userConfigurationId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type AccountUpdateManyWithWhereWithoutUserInput = {
  data: AccountUpdateManyMutationInput;
  where: AccountScalarWhereInput;
};

export type AccountUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AccountCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<AccountCreateWithoutUserInput>>;
  createMany?: InputMaybe<AccountCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<AccountWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AccountScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  set?: InputMaybe<Array<AccountWhereUniqueInput>>;
  update?: InputMaybe<Array<AccountUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<AccountUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<AccountUpsertWithWhereUniqueWithoutUserInput>>;
};

export type AccountUpdateWithWhereUniqueWithoutUserInput = {
  data: AccountUpdateWithoutUserInput;
  where: AccountWhereUniqueInput;
};

export type AccountUpdateWithoutUserInput = {
  access_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expires_at?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  provider?: InputMaybe<StringFieldUpdateOperationsInput>;
  providerAccountId?: InputMaybe<StringFieldUpdateOperationsInput>;
  refresh_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scope?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  session_state?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  token_type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userConfigurationId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type AccountUpsertWithWhereUniqueWithoutUserInput = {
  create: AccountCreateWithoutUserInput;
  update: AccountUpdateWithoutUserInput;
  where: AccountWhereUniqueInput;
};

export type AccountWhereInput = {
  AND?: InputMaybe<Array<AccountWhereInput>>;
  NOT?: InputMaybe<Array<AccountWhereInput>>;
  OR?: InputMaybe<Array<AccountWhereInput>>;
  access_token?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expires_at?: InputMaybe<IntNullableFilter>;
  id_token?: InputMaybe<StringNullableFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  provider?: InputMaybe<StringFilter>;
  providerAccountId?: InputMaybe<StringFilter>;
  refresh_token?: InputMaybe<StringNullableFilter>;
  scope?: InputMaybe<StringNullableFilter>;
  session_state?: InputMaybe<StringNullableFilter>;
  token_type?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userConfigurationId?: InputMaybe<StringNullableFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type AccountWhereUniqueInput = {
  AND?: InputMaybe<Array<AccountWhereInput>>;
  NOT?: InputMaybe<Array<AccountWhereInput>>;
  OR?: InputMaybe<Array<AccountWhereInput>>;
  access_token?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expires_at?: InputMaybe<IntNullableFilter>;
  id_token?: InputMaybe<StringNullableFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  provider?: InputMaybe<StringFilter>;
  providerAccountId?: InputMaybe<StringFilter>;
  provider_providerAccountId?: InputMaybe<AccountProviderProviderAccountIdCompoundUniqueInput>;
  refresh_token?: InputMaybe<StringNullableFilter>;
  scope?: InputMaybe<StringNullableFilter>;
  session_state?: InputMaybe<StringNullableFilter>;
  token_type?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userConfigurationId?: InputMaybe<StringNullableFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int']['output'];
};

export type AggregateAccount = {
  __typename?: 'AggregateAccount';
  _avg?: Maybe<AccountAvgAggregate>;
  _count?: Maybe<AccountCountAggregate>;
  _max?: Maybe<AccountMaxAggregate>;
  _min?: Maybe<AccountMinAggregate>;
  _sum?: Maybe<AccountSumAggregate>;
};

export type AggregateSession = {
  __typename?: 'AggregateSession';
  _count?: Maybe<SessionCountAggregate>;
  _max?: Maybe<SessionMaxAggregate>;
  _min?: Maybe<SessionMinAggregate>;
};

export type AggregateTag = {
  __typename?: 'AggregateTag';
  _count?: Maybe<TagCountAggregate>;
  _max?: Maybe<TagMaxAggregate>;
  _min?: Maybe<TagMinAggregate>;
};

export type AggregateTypingRun = {
  __typename?: 'AggregateTypingRun';
  _avg?: Maybe<TypingRunAvgAggregate>;
  _count?: Maybe<TypingRunCountAggregate>;
  _max?: Maybe<TypingRunMaxAggregate>;
  _min?: Maybe<TypingRunMinAggregate>;
  _sum?: Maybe<TypingRunSumAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
};

export type AggregateUserConfiguration = {
  __typename?: 'AggregateUserConfiguration';
  _avg?: Maybe<UserConfigurationAvgAggregate>;
  _count?: Maybe<UserConfigurationCountAggregate>;
  _max?: Maybe<UserConfigurationMaxAggregate>;
  _min?: Maybe<UserConfigurationMinAggregate>;
  _sum?: Maybe<UserConfigurationSumAggregate>;
};

export type AggregateUserExperience = {
  __typename?: 'AggregateUserExperience';
  _avg?: Maybe<UserExperienceAvgAggregate>;
  _count?: Maybe<UserExperienceCountAggregate>;
  _max?: Maybe<UserExperienceMaxAggregate>;
  _min?: Maybe<UserExperienceMinAggregate>;
  _sum?: Maybe<UserExperienceSumAggregate>;
};

export type AggregateUserNotification = {
  __typename?: 'AggregateUserNotification';
  _count?: Maybe<UserNotificationCountAggregate>;
  _max?: Maybe<UserNotificationMaxAggregate>;
  _min?: Maybe<UserNotificationMinAggregate>;
};

export type AggregateUsersChallenge = {
  __typename?: 'AggregateUsersChallenge';
  _count?: Maybe<UsersChallengeCountAggregate>;
  _max?: Maybe<UsersChallengeMaxAggregate>;
  _min?: Maybe<UsersChallengeMinAggregate>;
};

export type AggregateUsersChallengeMatch = {
  __typename?: 'AggregateUsersChallengeMatch';
  _count?: Maybe<UsersChallengeMatchCountAggregate>;
  _max?: Maybe<UsersChallengeMatchMaxAggregate>;
  _min?: Maybe<UsersChallengeMatchMinAggregate>;
};

export type AggregateVerificationToken = {
  __typename?: 'AggregateVerificationToken';
  _count?: Maybe<VerificationTokenCountAggregate>;
  _max?: Maybe<VerificationTokenMaxAggregate>;
  _min?: Maybe<VerificationTokenMinAggregate>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export enum CaretSmoothness {
  Fast = 'FAST',
  Medium = 'MEDIUM',
  Off = 'OFF',
  Slow = 'SLOW'
}

export enum CaretStyle {
  Block = 'BLOCK',
  BlockFilled = 'BLOCK_FILLED',
  Cursor = 'CURSOR',
  Off = 'OFF',
  Underscore = 'UNDERSCORE'
}

export enum ConfidenceMode {
  Max = 'MAX',
  Off = 'OFF',
  On = 'ON'
}

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type DateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type EnumCaretSmoothnessFieldUpdateOperationsInput = {
  set?: InputMaybe<CaretSmoothness>;
};

export type EnumCaretSmoothnessFilter = {
  equals?: InputMaybe<CaretSmoothness>;
  in?: InputMaybe<Array<CaretSmoothness>>;
  not?: InputMaybe<NestedEnumCaretSmoothnessFilter>;
  notIn?: InputMaybe<Array<CaretSmoothness>>;
};

export type EnumCaretSmoothnessWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumCaretSmoothnessFilter>;
  _min?: InputMaybe<NestedEnumCaretSmoothnessFilter>;
  equals?: InputMaybe<CaretSmoothness>;
  in?: InputMaybe<Array<CaretSmoothness>>;
  not?: InputMaybe<NestedEnumCaretSmoothnessWithAggregatesFilter>;
  notIn?: InputMaybe<Array<CaretSmoothness>>;
};

export type EnumCaretStyleFieldUpdateOperationsInput = {
  set?: InputMaybe<CaretStyle>;
};

export type EnumCaretStyleFilter = {
  equals?: InputMaybe<CaretStyle>;
  in?: InputMaybe<Array<CaretStyle>>;
  not?: InputMaybe<NestedEnumCaretStyleFilter>;
  notIn?: InputMaybe<Array<CaretStyle>>;
};

export type EnumCaretStyleWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumCaretStyleFilter>;
  _min?: InputMaybe<NestedEnumCaretStyleFilter>;
  equals?: InputMaybe<CaretStyle>;
  in?: InputMaybe<Array<CaretStyle>>;
  not?: InputMaybe<NestedEnumCaretStyleWithAggregatesFilter>;
  notIn?: InputMaybe<Array<CaretStyle>>;
};

export type EnumConfidenceModeFieldUpdateOperationsInput = {
  set?: InputMaybe<ConfidenceMode>;
};

export type EnumConfidenceModeFilter = {
  equals?: InputMaybe<ConfidenceMode>;
  in?: InputMaybe<Array<ConfidenceMode>>;
  not?: InputMaybe<NestedEnumConfidenceModeFilter>;
  notIn?: InputMaybe<Array<ConfidenceMode>>;
};

export type EnumConfidenceModeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumConfidenceModeFilter>;
  _min?: InputMaybe<NestedEnumConfidenceModeFilter>;
  equals?: InputMaybe<ConfidenceMode>;
  in?: InputMaybe<Array<ConfidenceMode>>;
  not?: InputMaybe<NestedEnumConfidenceModeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<ConfidenceMode>>;
};

export type EnumIndicateTyposFieldUpdateOperationsInput = {
  set?: InputMaybe<IndicateTypos>;
};

export type EnumIndicateTyposFilter = {
  equals?: InputMaybe<IndicateTypos>;
  in?: InputMaybe<Array<IndicateTypos>>;
  not?: InputMaybe<NestedEnumIndicateTyposFilter>;
  notIn?: InputMaybe<Array<IndicateTypos>>;
};

export type EnumIndicateTyposWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumIndicateTyposFilter>;
  _min?: InputMaybe<NestedEnumIndicateTyposFilter>;
  equals?: InputMaybe<IndicateTypos>;
  in?: InputMaybe<Array<IndicateTypos>>;
  not?: InputMaybe<NestedEnumIndicateTyposWithAggregatesFilter>;
  notIn?: InputMaybe<Array<IndicateTypos>>;
};

export type EnumPaceCaretSpeedFieldUpdateOperationsInput = {
  set?: InputMaybe<PaceCaretSpeed>;
};

export type EnumPaceCaretSpeedFilter = {
  equals?: InputMaybe<PaceCaretSpeed>;
  in?: InputMaybe<Array<PaceCaretSpeed>>;
  not?: InputMaybe<NestedEnumPaceCaretSpeedFilter>;
  notIn?: InputMaybe<Array<PaceCaretSpeed>>;
};

export type EnumPaceCaretSpeedWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumPaceCaretSpeedFilter>;
  _min?: InputMaybe<NestedEnumPaceCaretSpeedFilter>;
  equals?: InputMaybe<PaceCaretSpeed>;
  in?: InputMaybe<Array<PaceCaretSpeed>>;
  not?: InputMaybe<NestedEnumPaceCaretSpeedWithAggregatesFilter>;
  notIn?: InputMaybe<Array<PaceCaretSpeed>>;
};

export type EnumRunDifficultyFieldUpdateOperationsInput = {
  set?: InputMaybe<RunDifficulty>;
};

export type EnumRunDifficultyFilter = {
  equals?: InputMaybe<RunDifficulty>;
  in?: InputMaybe<Array<RunDifficulty>>;
  not?: InputMaybe<NestedEnumRunDifficultyFilter>;
  notIn?: InputMaybe<Array<RunDifficulty>>;
};

export type EnumRunDifficultyWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumRunDifficultyFilter>;
  _min?: InputMaybe<NestedEnumRunDifficultyFilter>;
  equals?: InputMaybe<RunDifficulty>;
  in?: InputMaybe<Array<RunDifficulty>>;
  not?: InputMaybe<NestedEnumRunDifficultyWithAggregatesFilter>;
  notIn?: InputMaybe<Array<RunDifficulty>>;
};

export type EnumShowAverageFieldUpdateOperationsInput = {
  set?: InputMaybe<ShowAverage>;
};

export type EnumShowAverageFilter = {
  equals?: InputMaybe<ShowAverage>;
  in?: InputMaybe<Array<ShowAverage>>;
  not?: InputMaybe<NestedEnumShowAverageFilter>;
  notIn?: InputMaybe<Array<ShowAverage>>;
};

export type EnumShowAverageWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumShowAverageFilter>;
  _min?: InputMaybe<NestedEnumShowAverageFilter>;
  equals?: InputMaybe<ShowAverage>;
  in?: InputMaybe<Array<ShowAverage>>;
  not?: InputMaybe<NestedEnumShowAverageWithAggregatesFilter>;
  notIn?: InputMaybe<Array<ShowAverage>>;
};

export type EnumTypingRunModeFieldUpdateOperationsInput = {
  set?: InputMaybe<TypingRunMode>;
};

export type EnumTypingRunModeFilter = {
  equals?: InputMaybe<TypingRunMode>;
  in?: InputMaybe<Array<TypingRunMode>>;
  not?: InputMaybe<NestedEnumTypingRunModeFilter>;
  notIn?: InputMaybe<Array<TypingRunMode>>;
};

export type EnumTypingRunModeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumTypingRunModeFilter>;
  _min?: InputMaybe<NestedEnumTypingRunModeFilter>;
  equals?: InputMaybe<TypingRunMode>;
  in?: InputMaybe<Array<TypingRunMode>>;
  not?: InputMaybe<NestedEnumTypingRunModeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<TypingRunMode>>;
};

export type EnumUsersChallengeMatchStateFieldUpdateOperationsInput = {
  set?: InputMaybe<UsersChallengeMatchState>;
};

export type EnumUsersChallengeMatchStateFilter = {
  equals?: InputMaybe<UsersChallengeMatchState>;
  in?: InputMaybe<Array<UsersChallengeMatchState>>;
  not?: InputMaybe<NestedEnumUsersChallengeMatchStateFilter>;
  notIn?: InputMaybe<Array<UsersChallengeMatchState>>;
};

export type EnumUsersChallengeMatchStateWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumUsersChallengeMatchStateFilter>;
  _min?: InputMaybe<NestedEnumUsersChallengeMatchStateFilter>;
  equals?: InputMaybe<UsersChallengeMatchState>;
  in?: InputMaybe<Array<UsersChallengeMatchState>>;
  not?: InputMaybe<NestedEnumUsersChallengeMatchStateWithAggregatesFilter>;
  notIn?: InputMaybe<Array<UsersChallengeMatchState>>;
};

export type EnumUsersChallengeStateFieldUpdateOperationsInput = {
  set?: InputMaybe<UsersChallengeState>;
};

export type EnumUsersChallengeStateFilter = {
  equals?: InputMaybe<UsersChallengeState>;
  in?: InputMaybe<Array<UsersChallengeState>>;
  not?: InputMaybe<NestedEnumUsersChallengeStateFilter>;
  notIn?: InputMaybe<Array<UsersChallengeState>>;
};

export type EnumUsersChallengeStateWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumUsersChallengeStateFilter>;
  _min?: InputMaybe<NestedEnumUsersChallengeStateFilter>;
  equals?: InputMaybe<UsersChallengeState>;
  in?: InputMaybe<Array<UsersChallengeState>>;
  not?: InputMaybe<NestedEnumUsersChallengeStateWithAggregatesFilter>;
  notIn?: InputMaybe<Array<UsersChallengeState>>;
};

export type GetLeaderboardInput = {
  daily?: Scalars['Boolean']['input'];
  language?: Scalars['String']['input'];
};

export enum IndicateTypos {
  Below = 'BELOW',
  Off = 'OFF',
  Replace = 'REPLACE'
}

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>;
  divide?: InputMaybe<Scalars['Int']['input']>;
  increment?: InputMaybe<Scalars['Int']['input']>;
  multiply?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type JsonFilter = {
  array_contains?: InputMaybe<Scalars['JSON']['input']>;
  array_ends_with?: InputMaybe<Scalars['JSON']['input']>;
  array_starts_with?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<Scalars['JSON']['input']>;
  path?: InputMaybe<Array<Scalars['String']['input']>>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type JsonNullableFilter = {
  array_contains?: InputMaybe<Scalars['JSON']['input']>;
  array_ends_with?: InputMaybe<Scalars['JSON']['input']>;
  array_starts_with?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<Scalars['JSON']['input']>;
  path?: InputMaybe<Array<Scalars['String']['input']>>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type JsonNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedJsonNullableFilter>;
  _min?: InputMaybe<NestedJsonNullableFilter>;
  array_contains?: InputMaybe<Scalars['JSON']['input']>;
  array_ends_with?: InputMaybe<Scalars['JSON']['input']>;
  array_starts_with?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<Scalars['JSON']['input']>;
  path?: InputMaybe<Array<Scalars['String']['input']>>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type JsonWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedJsonFilter>;
  _min?: InputMaybe<NestedJsonFilter>;
  array_contains?: InputMaybe<Scalars['JSON']['input']>;
  array_ends_with?: InputMaybe<Scalars['JSON']['input']>;
  array_starts_with?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<Scalars['JSON']['input']>;
  path?: InputMaybe<Array<Scalars['String']['input']>>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type LeaderboardResponse = {
  __typename?: 'LeaderboardResponse';
  qualifiedUserIds: Array<Scalars['String']['output']>;
  time15runs: Array<LeaderboardRow>;
  time60runs: Array<LeaderboardRow>;
};

export type LeaderboardRow = {
  __typename?: 'LeaderboardRow';
  accuracy: Scalars['Float']['output'];
  consistency: Scalars['Float']['output'];
  date: Scalars['DateTimeISO']['output'];
  metadata: Scalars['JSONObject']['output'];
  position: Scalars['Int']['output'];
  raw: Scalars['Float']['output'];
  user: LeaderboardUserRow;
  wpm: Scalars['Float']['output'];
};

export type LeaderboardUserRow = {
  __typename?: 'LeaderboardUserRow';
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  level: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  og: Scalars['Boolean']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyAccount: AffectedRowsOutput;
  createManySession: AffectedRowsOutput;
  createManyTag: AffectedRowsOutput;
  createManyTypingRun: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createManyUserConfiguration: AffectedRowsOutput;
  createManyUserExperience: AffectedRowsOutput;
  createManyUserNotification: AffectedRowsOutput;
  createManyUsersChallenge: AffectedRowsOutput;
  createManyUsersChallengeMatch: AffectedRowsOutput;
  createManyVerificationToken: AffectedRowsOutput;
  createOneAccount: Account;
  createOneSession: Session;
  createOneTag: Tag;
  createOneTypingRun: TypingRun;
  createOneUser: User;
  createOneUserConfiguration: UserConfiguration;
  createOneUserExperience: UserExperience;
  createOneUserNotification: UserNotification;
  createOneUsersChallenge: UsersChallenge;
  createOneUsersChallengeMatch: UsersChallengeMatch;
  createOneVerificationToken: VerificationToken;
  deleteManyAccount: AffectedRowsOutput;
  deleteManySession: AffectedRowsOutput;
  deleteManyTag: AffectedRowsOutput;
  deleteManyTypingRun: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteManyUserConfiguration: AffectedRowsOutput;
  deleteManyUserExperience: AffectedRowsOutput;
  deleteManyUserNotification: AffectedRowsOutput;
  deleteManyUsersChallenge: AffectedRowsOutput;
  deleteManyUsersChallengeMatch: AffectedRowsOutput;
  deleteManyVerificationToken: AffectedRowsOutput;
  deleteOneAccount?: Maybe<Account>;
  deleteOneSession?: Maybe<Session>;
  deleteOneTag?: Maybe<Tag>;
  deleteOneTypingRun?: Maybe<TypingRun>;
  deleteOneUser?: Maybe<User>;
  deleteOneUserConfiguration?: Maybe<UserConfiguration>;
  deleteOneUserExperience?: Maybe<UserExperience>;
  deleteOneUserNotification?: Maybe<UserNotification>;
  deleteOneUsersChallenge?: Maybe<UsersChallenge>;
  deleteOneUsersChallengeMatch?: Maybe<UsersChallengeMatch>;
  deleteOneVerificationToken?: Maybe<VerificationToken>;
  signIn?: Maybe<User>;
  signOut: Scalars['Boolean']['output'];
  signUp: User;
  updateManyAccount: AffectedRowsOutput;
  updateManySession: AffectedRowsOutput;
  updateManyTag: AffectedRowsOutput;
  updateManyTypingRun: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateManyUserConfiguration: AffectedRowsOutput;
  updateManyUserExperience: AffectedRowsOutput;
  updateManyUserNotification: AffectedRowsOutput;
  updateManyUsersChallenge: AffectedRowsOutput;
  updateManyUsersChallengeMatch: AffectedRowsOutput;
  updateManyVerificationToken: AffectedRowsOutput;
  updateOneAccount?: Maybe<Account>;
  updateOneSession?: Maybe<Session>;
  updateOneTag?: Maybe<Tag>;
  updateOneTypingRun?: Maybe<TypingRun>;
  updateOneUser?: Maybe<User>;
  updateOneUserConfiguration?: Maybe<UserConfiguration>;
  updateOneUserExperience?: Maybe<UserExperience>;
  updateOneUserNotification?: Maybe<UserNotification>;
  updateOneUsersChallenge?: Maybe<UsersChallenge>;
  updateOneUsersChallengeMatch?: Maybe<UsersChallengeMatch>;
  updateOneVerificationToken?: Maybe<VerificationToken>;
  upsertOneAccount: Account;
  upsertOneSession: Session;
  upsertOneTag: Tag;
  upsertOneTypingRun: TypingRun;
  upsertOneUser: User;
  upsertOneUserConfiguration: UserConfiguration;
  upsertOneUserExperience: UserExperience;
  upsertOneUserNotification: UserNotification;
  upsertOneUsersChallenge: UsersChallenge;
  upsertOneUsersChallengeMatch: UsersChallengeMatch;
  upsertOneVerificationToken: VerificationToken;
};


export type MutationCreateManyAccountArgs = {
  data: Array<AccountCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManySessionArgs = {
  data: Array<SessionCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyTagArgs = {
  data: Array<TagCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyTypingRunArgs = {
  data: Array<TypingRunCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyUserConfigurationArgs = {
  data: Array<UserConfigurationCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyUserExperienceArgs = {
  data: Array<UserExperienceCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyUserNotificationArgs = {
  data: Array<UserNotificationCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyUsersChallengeArgs = {
  data: Array<UsersChallengeCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyUsersChallengeMatchArgs = {
  data: Array<UsersChallengeMatchCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyVerificationTokenArgs = {
  data: Array<VerificationTokenCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateOneAccountArgs = {
  data: AccountCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};


export type MutationCreateOneSessionArgs = {
  data: SessionCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};


export type MutationCreateOneTagArgs = {
  data: TagCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};


export type MutationCreateOneTypingRunArgs = {
  data: TypingRunCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};


export type MutationCreateOneUserConfigurationArgs = {
  data: UserConfigurationCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};


export type MutationCreateOneUserExperienceArgs = {
  data: UserExperienceCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};


export type MutationCreateOneUserNotificationArgs = {
  data: UserNotificationCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};


export type MutationCreateOneUsersChallengeArgs = {
  data: UsersChallengeCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};


export type MutationCreateOneUsersChallengeMatchArgs = {
  data: UsersChallengeMatchCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};


export type MutationCreateOneVerificationTokenArgs = {
  data: VerificationTokenCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};


export type MutationDeleteManyAccountArgs = {
  where?: InputMaybe<AccountWhereInput>;
};


export type MutationDeleteManySessionArgs = {
  where?: InputMaybe<SessionWhereInput>;
};


export type MutationDeleteManyTagArgs = {
  where?: InputMaybe<TagWhereInput>;
};


export type MutationDeleteManyTypingRunArgs = {
  where?: InputMaybe<TypingRunWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationDeleteManyUserConfigurationArgs = {
  where?: InputMaybe<UserConfigurationWhereInput>;
};


export type MutationDeleteManyUserExperienceArgs = {
  where?: InputMaybe<UserExperienceWhereInput>;
};


export type MutationDeleteManyUserNotificationArgs = {
  where?: InputMaybe<UserNotificationWhereInput>;
};


export type MutationDeleteManyUsersChallengeArgs = {
  where?: InputMaybe<UsersChallengeWhereInput>;
};


export type MutationDeleteManyUsersChallengeMatchArgs = {
  where?: InputMaybe<UsersChallengeMatchWhereInput>;
};


export type MutationDeleteManyVerificationTokenArgs = {
  where?: InputMaybe<VerificationTokenWhereInput>;
};


export type MutationDeleteOneAccountArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: AccountWhereUniqueInput;
};


export type MutationDeleteOneSessionArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: SessionWhereUniqueInput;
};


export type MutationDeleteOneTagArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: TagWhereUniqueInput;
};


export type MutationDeleteOneTypingRunArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: TypingRunWhereUniqueInput;
};


export type MutationDeleteOneUserArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserWhereUniqueInput;
};


export type MutationDeleteOneUserConfigurationArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserConfigurationWhereUniqueInput;
};


export type MutationDeleteOneUserExperienceArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserExperienceWhereUniqueInput;
};


export type MutationDeleteOneUserNotificationArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserNotificationWhereUniqueInput;
};


export type MutationDeleteOneUsersChallengeArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UsersChallengeWhereUniqueInput;
};


export type MutationDeleteOneUsersChallengeMatchArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UsersChallengeMatchWhereUniqueInput;
};


export type MutationDeleteOneVerificationTokenArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: VerificationTokenWhereUniqueInput;
};


export type MutationSignInArgs = {
  signInModel: UserSignInInput;
};


export type MutationSignUpArgs = {
  signUpModel: UserSignUpInput;
};


export type MutationUpdateManyAccountArgs = {
  data: AccountUpdateManyMutationInput;
  where?: InputMaybe<AccountWhereInput>;
};


export type MutationUpdateManySessionArgs = {
  data: SessionUpdateManyMutationInput;
  where?: InputMaybe<SessionWhereInput>;
};


export type MutationUpdateManyTagArgs = {
  data: TagUpdateManyMutationInput;
  where?: InputMaybe<TagWhereInput>;
};


export type MutationUpdateManyTypingRunArgs = {
  data: TypingRunUpdateManyMutationInput;
  where?: InputMaybe<TypingRunWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationUpdateManyUserConfigurationArgs = {
  data: UserConfigurationUpdateManyMutationInput;
  where?: InputMaybe<UserConfigurationWhereInput>;
};


export type MutationUpdateManyUserExperienceArgs = {
  data: UserExperienceUpdateManyMutationInput;
  where?: InputMaybe<UserExperienceWhereInput>;
};


export type MutationUpdateManyUserNotificationArgs = {
  data: UserNotificationUpdateManyMutationInput;
  where?: InputMaybe<UserNotificationWhereInput>;
};


export type MutationUpdateManyUsersChallengeArgs = {
  data: UsersChallengeUpdateManyMutationInput;
  where?: InputMaybe<UsersChallengeWhereInput>;
};


export type MutationUpdateManyUsersChallengeMatchArgs = {
  data: UsersChallengeMatchUpdateManyMutationInput;
  where?: InputMaybe<UsersChallengeMatchWhereInput>;
};


export type MutationUpdateManyVerificationTokenArgs = {
  data: VerificationTokenUpdateManyMutationInput;
  where?: InputMaybe<VerificationTokenWhereInput>;
};


export type MutationUpdateOneAccountArgs = {
  data: AccountUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: AccountWhereUniqueInput;
};


export type MutationUpdateOneSessionArgs = {
  data: SessionUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: SessionWhereUniqueInput;
};


export type MutationUpdateOneTagArgs = {
  data: TagUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: TagWhereUniqueInput;
};


export type MutationUpdateOneTypingRunArgs = {
  data: TypingRunUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: TypingRunWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserWhereUniqueInput;
};


export type MutationUpdateOneUserConfigurationArgs = {
  data: UserConfigurationUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserConfigurationWhereUniqueInput;
};


export type MutationUpdateOneUserExperienceArgs = {
  data: UserExperienceUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserExperienceWhereUniqueInput;
};


export type MutationUpdateOneUserNotificationArgs = {
  data: UserNotificationUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserNotificationWhereUniqueInput;
};


export type MutationUpdateOneUsersChallengeArgs = {
  data: UsersChallengeUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UsersChallengeWhereUniqueInput;
};


export type MutationUpdateOneUsersChallengeMatchArgs = {
  data: UsersChallengeMatchUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UsersChallengeMatchWhereUniqueInput;
};


export type MutationUpdateOneVerificationTokenArgs = {
  data: VerificationTokenUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: VerificationTokenWhereUniqueInput;
};


export type MutationUpsertOneAccountArgs = {
  create: AccountCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  update: AccountUpdateInput;
  where: AccountWhereUniqueInput;
};


export type MutationUpsertOneSessionArgs = {
  create: SessionCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  update: SessionUpdateInput;
  where: SessionWhereUniqueInput;
};


export type MutationUpsertOneTagArgs = {
  create: TagCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  update: TagUpdateInput;
  where: TagWhereUniqueInput;
};


export type MutationUpsertOneTypingRunArgs = {
  create: TypingRunCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  update: TypingRunUpdateInput;
  where: TypingRunWhereUniqueInput;
};


export type MutationUpsertOneUserArgs = {
  create: UserCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertOneUserConfigurationArgs = {
  create: UserConfigurationCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  update: UserConfigurationUpdateInput;
  where: UserConfigurationWhereUniqueInput;
};


export type MutationUpsertOneUserExperienceArgs = {
  create: UserExperienceCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  update: UserExperienceUpdateInput;
  where: UserExperienceWhereUniqueInput;
};


export type MutationUpsertOneUserNotificationArgs = {
  create: UserNotificationCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  update: UserNotificationUpdateInput;
  where: UserNotificationWhereUniqueInput;
};


export type MutationUpsertOneUsersChallengeArgs = {
  create: UsersChallengeCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  update: UsersChallengeUpdateInput;
  where: UsersChallengeWhereUniqueInput;
};


export type MutationUpsertOneUsersChallengeMatchArgs = {
  create: UsersChallengeMatchCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  update: UsersChallengeMatchUpdateInput;
  where: UsersChallengeMatchWhereUniqueInput;
};


export type MutationUpsertOneVerificationTokenArgs = {
  create: VerificationTokenCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  update: VerificationTokenUpdateInput;
  where: VerificationTokenWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type NestedDateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type NestedEnumCaretSmoothnessFilter = {
  equals?: InputMaybe<CaretSmoothness>;
  in?: InputMaybe<Array<CaretSmoothness>>;
  not?: InputMaybe<NestedEnumCaretSmoothnessFilter>;
  notIn?: InputMaybe<Array<CaretSmoothness>>;
};

export type NestedEnumCaretSmoothnessWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumCaretSmoothnessFilter>;
  _min?: InputMaybe<NestedEnumCaretSmoothnessFilter>;
  equals?: InputMaybe<CaretSmoothness>;
  in?: InputMaybe<Array<CaretSmoothness>>;
  not?: InputMaybe<NestedEnumCaretSmoothnessWithAggregatesFilter>;
  notIn?: InputMaybe<Array<CaretSmoothness>>;
};

export type NestedEnumCaretStyleFilter = {
  equals?: InputMaybe<CaretStyle>;
  in?: InputMaybe<Array<CaretStyle>>;
  not?: InputMaybe<NestedEnumCaretStyleFilter>;
  notIn?: InputMaybe<Array<CaretStyle>>;
};

export type NestedEnumCaretStyleWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumCaretStyleFilter>;
  _min?: InputMaybe<NestedEnumCaretStyleFilter>;
  equals?: InputMaybe<CaretStyle>;
  in?: InputMaybe<Array<CaretStyle>>;
  not?: InputMaybe<NestedEnumCaretStyleWithAggregatesFilter>;
  notIn?: InputMaybe<Array<CaretStyle>>;
};

export type NestedEnumConfidenceModeFilter = {
  equals?: InputMaybe<ConfidenceMode>;
  in?: InputMaybe<Array<ConfidenceMode>>;
  not?: InputMaybe<NestedEnumConfidenceModeFilter>;
  notIn?: InputMaybe<Array<ConfidenceMode>>;
};

export type NestedEnumConfidenceModeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumConfidenceModeFilter>;
  _min?: InputMaybe<NestedEnumConfidenceModeFilter>;
  equals?: InputMaybe<ConfidenceMode>;
  in?: InputMaybe<Array<ConfidenceMode>>;
  not?: InputMaybe<NestedEnumConfidenceModeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<ConfidenceMode>>;
};

export type NestedEnumIndicateTyposFilter = {
  equals?: InputMaybe<IndicateTypos>;
  in?: InputMaybe<Array<IndicateTypos>>;
  not?: InputMaybe<NestedEnumIndicateTyposFilter>;
  notIn?: InputMaybe<Array<IndicateTypos>>;
};

export type NestedEnumIndicateTyposWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumIndicateTyposFilter>;
  _min?: InputMaybe<NestedEnumIndicateTyposFilter>;
  equals?: InputMaybe<IndicateTypos>;
  in?: InputMaybe<Array<IndicateTypos>>;
  not?: InputMaybe<NestedEnumIndicateTyposWithAggregatesFilter>;
  notIn?: InputMaybe<Array<IndicateTypos>>;
};

export type NestedEnumPaceCaretSpeedFilter = {
  equals?: InputMaybe<PaceCaretSpeed>;
  in?: InputMaybe<Array<PaceCaretSpeed>>;
  not?: InputMaybe<NestedEnumPaceCaretSpeedFilter>;
  notIn?: InputMaybe<Array<PaceCaretSpeed>>;
};

export type NestedEnumPaceCaretSpeedWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumPaceCaretSpeedFilter>;
  _min?: InputMaybe<NestedEnumPaceCaretSpeedFilter>;
  equals?: InputMaybe<PaceCaretSpeed>;
  in?: InputMaybe<Array<PaceCaretSpeed>>;
  not?: InputMaybe<NestedEnumPaceCaretSpeedWithAggregatesFilter>;
  notIn?: InputMaybe<Array<PaceCaretSpeed>>;
};

export type NestedEnumRunDifficultyFilter = {
  equals?: InputMaybe<RunDifficulty>;
  in?: InputMaybe<Array<RunDifficulty>>;
  not?: InputMaybe<NestedEnumRunDifficultyFilter>;
  notIn?: InputMaybe<Array<RunDifficulty>>;
};

export type NestedEnumRunDifficultyWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumRunDifficultyFilter>;
  _min?: InputMaybe<NestedEnumRunDifficultyFilter>;
  equals?: InputMaybe<RunDifficulty>;
  in?: InputMaybe<Array<RunDifficulty>>;
  not?: InputMaybe<NestedEnumRunDifficultyWithAggregatesFilter>;
  notIn?: InputMaybe<Array<RunDifficulty>>;
};

export type NestedEnumShowAverageFilter = {
  equals?: InputMaybe<ShowAverage>;
  in?: InputMaybe<Array<ShowAverage>>;
  not?: InputMaybe<NestedEnumShowAverageFilter>;
  notIn?: InputMaybe<Array<ShowAverage>>;
};

export type NestedEnumShowAverageWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumShowAverageFilter>;
  _min?: InputMaybe<NestedEnumShowAverageFilter>;
  equals?: InputMaybe<ShowAverage>;
  in?: InputMaybe<Array<ShowAverage>>;
  not?: InputMaybe<NestedEnumShowAverageWithAggregatesFilter>;
  notIn?: InputMaybe<Array<ShowAverage>>;
};

export type NestedEnumTypingRunModeFilter = {
  equals?: InputMaybe<TypingRunMode>;
  in?: InputMaybe<Array<TypingRunMode>>;
  not?: InputMaybe<NestedEnumTypingRunModeFilter>;
  notIn?: InputMaybe<Array<TypingRunMode>>;
};

export type NestedEnumTypingRunModeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumTypingRunModeFilter>;
  _min?: InputMaybe<NestedEnumTypingRunModeFilter>;
  equals?: InputMaybe<TypingRunMode>;
  in?: InputMaybe<Array<TypingRunMode>>;
  not?: InputMaybe<NestedEnumTypingRunModeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<TypingRunMode>>;
};

export type NestedEnumUsersChallengeMatchStateFilter = {
  equals?: InputMaybe<UsersChallengeMatchState>;
  in?: InputMaybe<Array<UsersChallengeMatchState>>;
  not?: InputMaybe<NestedEnumUsersChallengeMatchStateFilter>;
  notIn?: InputMaybe<Array<UsersChallengeMatchState>>;
};

export type NestedEnumUsersChallengeMatchStateWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumUsersChallengeMatchStateFilter>;
  _min?: InputMaybe<NestedEnumUsersChallengeMatchStateFilter>;
  equals?: InputMaybe<UsersChallengeMatchState>;
  in?: InputMaybe<Array<UsersChallengeMatchState>>;
  not?: InputMaybe<NestedEnumUsersChallengeMatchStateWithAggregatesFilter>;
  notIn?: InputMaybe<Array<UsersChallengeMatchState>>;
};

export type NestedEnumUsersChallengeStateFilter = {
  equals?: InputMaybe<UsersChallengeState>;
  in?: InputMaybe<Array<UsersChallengeState>>;
  not?: InputMaybe<NestedEnumUsersChallengeStateFilter>;
  notIn?: InputMaybe<Array<UsersChallengeState>>;
};

export type NestedEnumUsersChallengeStateWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumUsersChallengeStateFilter>;
  _min?: InputMaybe<NestedEnumUsersChallengeStateFilter>;
  equals?: InputMaybe<UsersChallengeState>;
  in?: InputMaybe<Array<UsersChallengeState>>;
  not?: InputMaybe<NestedEnumUsersChallengeStateWithAggregatesFilter>;
  notIn?: InputMaybe<Array<UsersChallengeState>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedJsonFilter = {
  array_contains?: InputMaybe<Scalars['JSON']['input']>;
  array_ends_with?: InputMaybe<Scalars['JSON']['input']>;
  array_starts_with?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<Scalars['JSON']['input']>;
  path?: InputMaybe<Array<Scalars['String']['input']>>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type NestedJsonNullableFilter = {
  array_contains?: InputMaybe<Scalars['JSON']['input']>;
  array_ends_with?: InputMaybe<Scalars['JSON']['input']>;
  array_starts_with?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<Scalars['JSON']['input']>;
  path?: InputMaybe<Array<Scalars['String']['input']>>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedUuidFilter = {
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedUuidFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type NestedUuidNullableFilter = {
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedUuidNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type NestedUuidNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedUuidNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type NestedUuidWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedUuidWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>;
  divide?: InputMaybe<Scalars['Int']['input']>;
  increment?: InputMaybe<Scalars['Int']['input']>;
  multiply?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export enum NullsOrder {
  First = 'first',
  Last = 'last'
}

export enum PaceCaretSpeed {
  Avg = 'AVG',
  Custom = 'CUSTOM',
  Daily = 'DAILY',
  Last = 'LAST',
  Off = 'OFF',
  Pb = 'PB'
}

export type Query = {
  __typename?: 'Query';
  account?: Maybe<Account>;
  accounts: Array<Account>;
  aggregateAccount: AggregateAccount;
  aggregateSession: AggregateSession;
  aggregateTag: AggregateTag;
  aggregateTypingRun: AggregateTypingRun;
  aggregateUser: AggregateUser;
  aggregateUserConfiguration: AggregateUserConfiguration;
  aggregateUserExperience: AggregateUserExperience;
  aggregateUserNotification: AggregateUserNotification;
  aggregateUsersChallenge: AggregateUsersChallenge;
  aggregateUsersChallengeMatch: AggregateUsersChallengeMatch;
  aggregateVerificationToken: AggregateVerificationToken;
  findById: User;
  findFirstAccount?: Maybe<Account>;
  findFirstAccountOrThrow?: Maybe<Account>;
  findFirstSession?: Maybe<Session>;
  findFirstSessionOrThrow?: Maybe<Session>;
  findFirstTag?: Maybe<Tag>;
  findFirstTagOrThrow?: Maybe<Tag>;
  findFirstTypingRun?: Maybe<TypingRun>;
  findFirstTypingRunOrThrow?: Maybe<TypingRun>;
  findFirstUser?: Maybe<User>;
  findFirstUserConfiguration?: Maybe<UserConfiguration>;
  findFirstUserConfigurationOrThrow?: Maybe<UserConfiguration>;
  findFirstUserExperience?: Maybe<UserExperience>;
  findFirstUserExperienceOrThrow?: Maybe<UserExperience>;
  findFirstUserNotification?: Maybe<UserNotification>;
  findFirstUserNotificationOrThrow?: Maybe<UserNotification>;
  findFirstUserOrThrow?: Maybe<User>;
  findFirstUsersChallenge?: Maybe<UsersChallenge>;
  findFirstUsersChallengeMatch?: Maybe<UsersChallengeMatch>;
  findFirstUsersChallengeMatchOrThrow?: Maybe<UsersChallengeMatch>;
  findFirstUsersChallengeOrThrow?: Maybe<UsersChallenge>;
  findFirstVerificationToken?: Maybe<VerificationToken>;
  findFirstVerificationTokenOrThrow?: Maybe<VerificationToken>;
  getAccount?: Maybe<Account>;
  getLeaderboard: LeaderboardResponse;
  getSession?: Maybe<Session>;
  getTag?: Maybe<Tag>;
  getTypingRun?: Maybe<TypingRun>;
  getUser?: Maybe<User>;
  getUserConfiguration?: Maybe<UserConfiguration>;
  getUserExperience?: Maybe<UserExperience>;
  getUserNotification?: Maybe<UserNotification>;
  getUsersChallenge?: Maybe<UsersChallenge>;
  getUsersChallengeMatch?: Maybe<UsersChallengeMatch>;
  getVerificationToken?: Maybe<VerificationToken>;
  groupByAccount: Array<AccountGroupBy>;
  groupBySession: Array<SessionGroupBy>;
  groupByTag: Array<TagGroupBy>;
  groupByTypingRun: Array<TypingRunGroupBy>;
  groupByUser: Array<UserGroupBy>;
  groupByUserConfiguration: Array<UserConfigurationGroupBy>;
  groupByUserExperience: Array<UserExperienceGroupBy>;
  groupByUserNotification: Array<UserNotificationGroupBy>;
  groupByUsersChallenge: Array<UsersChallengeGroupBy>;
  groupByUsersChallengeMatch: Array<UsersChallengeMatchGroupBy>;
  groupByVerificationToken: Array<VerificationTokenGroupBy>;
  me?: Maybe<User>;
  search: Array<UserSearchResponse>;
  session?: Maybe<Session>;
  sessions: Array<Session>;
  tag?: Maybe<Tag>;
  tags: Array<Tag>;
  typingRun?: Maybe<TypingRun>;
  typingRuns: Array<TypingRun>;
  user?: Maybe<User>;
  userConfiguration?: Maybe<UserConfiguration>;
  userConfigurations: Array<UserConfiguration>;
  userExperience?: Maybe<UserExperience>;
  userExperiences: Array<UserExperience>;
  userNotification?: Maybe<UserNotification>;
  userNotifications: Array<UserNotification>;
  users: Array<User>;
  usersChallenge?: Maybe<UsersChallenge>;
  usersChallengeMatch?: Maybe<UsersChallengeMatch>;
  usersChallengeMatches: Array<UsersChallengeMatch>;
  usersChallenges: Array<UsersChallenge>;
  verificationToken?: Maybe<VerificationToken>;
  verificationTokens: Array<VerificationToken>;
};


export type QueryAccountArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: AccountWhereUniqueInput;
};


export type QueryAccountsArgs = {
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  distinct?: InputMaybe<Array<AccountScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AccountOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccountWhereInput>;
};


export type QueryAggregateAccountArgs = {
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  orderBy?: InputMaybe<Array<AccountOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccountWhereInput>;
};


export type QueryAggregateSessionArgs = {
  cursor?: InputMaybe<SessionWhereUniqueInput>;
  orderBy?: InputMaybe<Array<SessionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SessionWhereInput>;
};


export type QueryAggregateTagArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: InputMaybe<Array<TagOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TagWhereInput>;
};


export type QueryAggregateTypingRunArgs = {
  cursor?: InputMaybe<TypingRunWhereUniqueInput>;
  orderBy?: InputMaybe<Array<TypingRunOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TypingRunWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryAggregateUserConfigurationArgs = {
  cursor?: InputMaybe<UserConfigurationWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserConfigurationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserConfigurationWhereInput>;
};


export type QueryAggregateUserExperienceArgs = {
  cursor?: InputMaybe<UserExperienceWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserExperienceOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserExperienceWhereInput>;
};


export type QueryAggregateUserNotificationArgs = {
  cursor?: InputMaybe<UserNotificationWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserNotificationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserNotificationWhereInput>;
};


export type QueryAggregateUsersChallengeArgs = {
  cursor?: InputMaybe<UsersChallengeWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UsersChallengeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UsersChallengeWhereInput>;
};


export type QueryAggregateUsersChallengeMatchArgs = {
  cursor?: InputMaybe<UsersChallengeMatchWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UsersChallengeMatchOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UsersChallengeMatchWhereInput>;
};


export type QueryAggregateVerificationTokenArgs = {
  cursor?: InputMaybe<VerificationTokenWhereUniqueInput>;
  orderBy?: InputMaybe<Array<VerificationTokenOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VerificationTokenWhereInput>;
};


export type QueryFindByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindFirstAccountArgs = {
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  distinct?: InputMaybe<Array<AccountScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AccountOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccountWhereInput>;
};


export type QueryFindFirstAccountOrThrowArgs = {
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  distinct?: InputMaybe<Array<AccountScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AccountOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccountWhereInput>;
};


export type QueryFindFirstSessionArgs = {
  cursor?: InputMaybe<SessionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SessionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SessionOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SessionWhereInput>;
};


export type QueryFindFirstSessionOrThrowArgs = {
  cursor?: InputMaybe<SessionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SessionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SessionOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SessionWhereInput>;
};


export type QueryFindFirstTagArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  distinct?: InputMaybe<Array<TagScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TagOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TagWhereInput>;
};


export type QueryFindFirstTagOrThrowArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  distinct?: InputMaybe<Array<TagScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TagOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TagWhereInput>;
};


export type QueryFindFirstTypingRunArgs = {
  cursor?: InputMaybe<TypingRunWhereUniqueInput>;
  distinct?: InputMaybe<Array<TypingRunScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TypingRunOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TypingRunWhereInput>;
};


export type QueryFindFirstTypingRunOrThrowArgs = {
  cursor?: InputMaybe<TypingRunWhereUniqueInput>;
  distinct?: InputMaybe<Array<TypingRunScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TypingRunOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TypingRunWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstUserConfigurationArgs = {
  cursor?: InputMaybe<UserConfigurationWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserConfigurationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserConfigurationOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserConfigurationWhereInput>;
};


export type QueryFindFirstUserConfigurationOrThrowArgs = {
  cursor?: InputMaybe<UserConfigurationWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserConfigurationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserConfigurationOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserConfigurationWhereInput>;
};


export type QueryFindFirstUserExperienceArgs = {
  cursor?: InputMaybe<UserExperienceWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserExperienceScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserExperienceOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserExperienceWhereInput>;
};


export type QueryFindFirstUserExperienceOrThrowArgs = {
  cursor?: InputMaybe<UserExperienceWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserExperienceScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserExperienceOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserExperienceWhereInput>;
};


export type QueryFindFirstUserNotificationArgs = {
  cursor?: InputMaybe<UserNotificationWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserNotificationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserNotificationOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserNotificationWhereInput>;
};


export type QueryFindFirstUserNotificationOrThrowArgs = {
  cursor?: InputMaybe<UserNotificationWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserNotificationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserNotificationOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserNotificationWhereInput>;
};


export type QueryFindFirstUserOrThrowArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstUsersChallengeArgs = {
  cursor?: InputMaybe<UsersChallengeWhereUniqueInput>;
  distinct?: InputMaybe<Array<UsersChallengeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UsersChallengeOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UsersChallengeWhereInput>;
};


export type QueryFindFirstUsersChallengeMatchArgs = {
  cursor?: InputMaybe<UsersChallengeMatchWhereUniqueInput>;
  distinct?: InputMaybe<Array<UsersChallengeMatchScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UsersChallengeMatchOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UsersChallengeMatchWhereInput>;
};


export type QueryFindFirstUsersChallengeMatchOrThrowArgs = {
  cursor?: InputMaybe<UsersChallengeMatchWhereUniqueInput>;
  distinct?: InputMaybe<Array<UsersChallengeMatchScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UsersChallengeMatchOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UsersChallengeMatchWhereInput>;
};


export type QueryFindFirstUsersChallengeOrThrowArgs = {
  cursor?: InputMaybe<UsersChallengeWhereUniqueInput>;
  distinct?: InputMaybe<Array<UsersChallengeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UsersChallengeOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UsersChallengeWhereInput>;
};


export type QueryFindFirstVerificationTokenArgs = {
  cursor?: InputMaybe<VerificationTokenWhereUniqueInput>;
  distinct?: InputMaybe<Array<VerificationTokenScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<VerificationTokenOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VerificationTokenWhereInput>;
};


export type QueryFindFirstVerificationTokenOrThrowArgs = {
  cursor?: InputMaybe<VerificationTokenWhereUniqueInput>;
  distinct?: InputMaybe<Array<VerificationTokenScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<VerificationTokenOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VerificationTokenWhereInput>;
};


export type QueryGetAccountArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: AccountWhereUniqueInput;
};


export type QueryGetLeaderboardArgs = {
  input: GetLeaderboardInput;
};


export type QueryGetSessionArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: SessionWhereUniqueInput;
};


export type QueryGetTagArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: TagWhereUniqueInput;
};


export type QueryGetTypingRunArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: TypingRunWhereUniqueInput;
};


export type QueryGetUserArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserWhereUniqueInput;
};


export type QueryGetUserConfigurationArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserConfigurationWhereUniqueInput;
};


export type QueryGetUserExperienceArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserExperienceWhereUniqueInput;
};


export type QueryGetUserNotificationArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserNotificationWhereUniqueInput;
};


export type QueryGetUsersChallengeArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UsersChallengeWhereUniqueInput;
};


export type QueryGetUsersChallengeMatchArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UsersChallengeMatchWhereUniqueInput;
};


export type QueryGetVerificationTokenArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: VerificationTokenWhereUniqueInput;
};


export type QueryGroupByAccountArgs = {
  by: Array<AccountScalarFieldEnum>;
  having?: InputMaybe<AccountScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<AccountOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccountWhereInput>;
};


export type QueryGroupBySessionArgs = {
  by: Array<SessionScalarFieldEnum>;
  having?: InputMaybe<SessionScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<SessionOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SessionWhereInput>;
};


export type QueryGroupByTagArgs = {
  by: Array<TagScalarFieldEnum>;
  having?: InputMaybe<TagScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<TagOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TagWhereInput>;
};


export type QueryGroupByTypingRunArgs = {
  by: Array<TypingRunScalarFieldEnum>;
  having?: InputMaybe<TypingRunScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<TypingRunOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TypingRunWhereInput>;
};


export type QueryGroupByUserArgs = {
  by: Array<UserScalarFieldEnum>;
  having?: InputMaybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryGroupByUserConfigurationArgs = {
  by: Array<UserConfigurationScalarFieldEnum>;
  having?: InputMaybe<UserConfigurationScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserConfigurationOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserConfigurationWhereInput>;
};


export type QueryGroupByUserExperienceArgs = {
  by: Array<UserExperienceScalarFieldEnum>;
  having?: InputMaybe<UserExperienceScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserExperienceOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserExperienceWhereInput>;
};


export type QueryGroupByUserNotificationArgs = {
  by: Array<UserNotificationScalarFieldEnum>;
  having?: InputMaybe<UserNotificationScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserNotificationOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserNotificationWhereInput>;
};


export type QueryGroupByUsersChallengeArgs = {
  by: Array<UsersChallengeScalarFieldEnum>;
  having?: InputMaybe<UsersChallengeScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UsersChallengeOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UsersChallengeWhereInput>;
};


export type QueryGroupByUsersChallengeMatchArgs = {
  by: Array<UsersChallengeMatchScalarFieldEnum>;
  having?: InputMaybe<UsersChallengeMatchScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UsersChallengeMatchOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UsersChallengeMatchWhereInput>;
};


export type QueryGroupByVerificationTokenArgs = {
  by: Array<VerificationTokenScalarFieldEnum>;
  having?: InputMaybe<VerificationTokenScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<VerificationTokenOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VerificationTokenWhereInput>;
};


export type QuerySearchArgs = {
  search?: UsersSearchInput;
};


export type QuerySessionArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: SessionWhereUniqueInput;
};


export type QuerySessionsArgs = {
  cursor?: InputMaybe<SessionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SessionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SessionOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SessionWhereInput>;
};


export type QueryTagArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: TagWhereUniqueInput;
};


export type QueryTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  distinct?: InputMaybe<Array<TagScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TagOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TagWhereInput>;
};


export type QueryTypingRunArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: TypingRunWhereUniqueInput;
};


export type QueryTypingRunsArgs = {
  cursor?: InputMaybe<TypingRunWhereUniqueInput>;
  distinct?: InputMaybe<Array<TypingRunScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TypingRunOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TypingRunWhereInput>;
};


export type QueryUserArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserWhereUniqueInput;
};


export type QueryUserConfigurationArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserConfigurationWhereUniqueInput;
};


export type QueryUserConfigurationsArgs = {
  cursor?: InputMaybe<UserConfigurationWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserConfigurationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserConfigurationOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserConfigurationWhereInput>;
};


export type QueryUserExperienceArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserExperienceWhereUniqueInput;
};


export type QueryUserExperiencesArgs = {
  cursor?: InputMaybe<UserExperienceWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserExperienceScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserExperienceOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserExperienceWhereInput>;
};


export type QueryUserNotificationArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserNotificationWhereUniqueInput;
};


export type QueryUserNotificationsArgs = {
  cursor?: InputMaybe<UserNotificationWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserNotificationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserNotificationOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserNotificationWhereInput>;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryUsersChallengeArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UsersChallengeWhereUniqueInput;
};


export type QueryUsersChallengeMatchArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UsersChallengeMatchWhereUniqueInput;
};


export type QueryUsersChallengeMatchesArgs = {
  cursor?: InputMaybe<UsersChallengeMatchWhereUniqueInput>;
  distinct?: InputMaybe<Array<UsersChallengeMatchScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UsersChallengeMatchOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UsersChallengeMatchWhereInput>;
};


export type QueryUsersChallengesArgs = {
  cursor?: InputMaybe<UsersChallengeWhereUniqueInput>;
  distinct?: InputMaybe<Array<UsersChallengeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UsersChallengeOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UsersChallengeWhereInput>;
};


export type QueryVerificationTokenArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: VerificationTokenWhereUniqueInput;
};


export type QueryVerificationTokensArgs = {
  cursor?: InputMaybe<VerificationTokenWhereUniqueInput>;
  distinct?: InputMaybe<Array<VerificationTokenScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<VerificationTokenOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VerificationTokenWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum RelationLoadStrategy {
  Join = 'join',
  Query = 'query'
}

export enum RunDifficulty {
  Expert = 'EXPERT',
  Master = 'MASTER',
  Normal = 'NORMAL'
}

export type Session = {
  __typename?: 'Session';
  createdAt: Scalars['DateTimeISO']['output'];
  expires: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  sessionToken: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  userConfigurationId?: Maybe<Scalars['String']['output']>;
  userId: Scalars['String']['output'];
};

export type SessionCountAggregate = {
  __typename?: 'SessionCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  expires: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  sessionToken: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userConfigurationId: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type SessionCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  expires?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userConfigurationId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SessionCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  expires: Scalars['DateTimeISO']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  sessionToken: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user: UserCreateNestedOneWithoutSessionsInput;
  userConfigurationId?: InputMaybe<Scalars['String']['input']>;
};

export type SessionCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  expires: Scalars['DateTimeISO']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  sessionToken: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userConfigurationId?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['String']['input'];
};

export type SessionCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  expires: Scalars['DateTimeISO']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  sessionToken: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userConfigurationId?: InputMaybe<Scalars['String']['input']>;
};

export type SessionCreateManyUserInputEnvelope = {
  data: Array<SessionCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SessionCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SessionCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<SessionCreateWithoutUserInput>>;
  createMany?: InputMaybe<SessionCreateManyUserInputEnvelope>;
};

export type SessionCreateOrConnectWithoutUserInput = {
  create: SessionCreateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  expires: Scalars['DateTimeISO']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  sessionToken: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userConfigurationId?: InputMaybe<Scalars['String']['input']>;
};

export type SessionGroupBy = {
  __typename?: 'SessionGroupBy';
  _count?: Maybe<SessionCountAggregate>;
  _max?: Maybe<SessionMaxAggregate>;
  _min?: Maybe<SessionMinAggregate>;
  createdAt: Scalars['DateTimeISO']['output'];
  expires: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  sessionToken: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  userConfigurationId?: Maybe<Scalars['String']['output']>;
  userId: Scalars['String']['output'];
};

export type SessionListRelationFilter = {
  every?: InputMaybe<SessionWhereInput>;
  none?: InputMaybe<SessionWhereInput>;
  some?: InputMaybe<SessionWhereInput>;
};

export type SessionMaxAggregate = {
  __typename?: 'SessionMaxAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  expires?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  sessionToken?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userConfigurationId?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type SessionMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  expires?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userConfigurationId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SessionMinAggregate = {
  __typename?: 'SessionMinAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  expires?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  sessionToken?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userConfigurationId?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type SessionMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  expires?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userConfigurationId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SessionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum SessionOrderByRelevanceFieldEnum {
  Id = 'id',
  SessionToken = 'sessionToken',
  UserConfigurationId = 'userConfigurationId',
  UserId = 'userId'
}

export type SessionOrderByRelevanceInput = {
  fields: Array<SessionOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type SessionOrderByWithAggregationInput = {
  _count?: InputMaybe<SessionCountOrderByAggregateInput>;
  _max?: InputMaybe<SessionMaxOrderByAggregateInput>;
  _min?: InputMaybe<SessionMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  expires?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userConfigurationId?: InputMaybe<SortOrderInput>;
  userId?: InputMaybe<SortOrder>;
};

export type SessionOrderByWithRelationInput = {
  _relevance?: InputMaybe<SessionOrderByRelevanceInput>;
  createdAt?: InputMaybe<SortOrder>;
  expires?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userConfigurationId?: InputMaybe<SortOrderInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum SessionScalarFieldEnum {
  CreatedAt = 'createdAt',
  Expires = 'expires',
  Id = 'id',
  SessionToken = 'sessionToken',
  UpdatedAt = 'updatedAt',
  UserConfigurationId = 'userConfigurationId',
  UserId = 'userId'
}

export type SessionScalarWhereInput = {
  AND?: InputMaybe<Array<SessionScalarWhereInput>>;
  NOT?: InputMaybe<Array<SessionScalarWhereInput>>;
  OR?: InputMaybe<Array<SessionScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expires?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  sessionToken?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userConfigurationId?: InputMaybe<StringNullableFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type SessionScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<SessionScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<SessionScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<SessionScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  expires?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  sessionToken?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userConfigurationId?: InputMaybe<StringNullableWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type SessionUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  sessionToken?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutSessionsNestedInput>;
  userConfigurationId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type SessionUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  sessionToken?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userConfigurationId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type SessionUpdateManyWithWhereWithoutUserInput = {
  data: SessionUpdateManyMutationInput;
  where: SessionScalarWhereInput;
};

export type SessionUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SessionCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<SessionCreateWithoutUserInput>>;
  createMany?: InputMaybe<SessionCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<SessionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SessionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  set?: InputMaybe<Array<SessionWhereUniqueInput>>;
  update?: InputMaybe<Array<SessionUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<SessionUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<SessionUpsertWithWhereUniqueWithoutUserInput>>;
};

export type SessionUpdateWithWhereUniqueWithoutUserInput = {
  data: SessionUpdateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  sessionToken?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userConfigurationId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type SessionUpsertWithWhereUniqueWithoutUserInput = {
  create: SessionCreateWithoutUserInput;
  update: SessionUpdateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionWhereInput = {
  AND?: InputMaybe<Array<SessionWhereInput>>;
  NOT?: InputMaybe<Array<SessionWhereInput>>;
  OR?: InputMaybe<Array<SessionWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expires?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  sessionToken?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userConfigurationId?: InputMaybe<StringNullableFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type SessionWhereUniqueInput = {
  AND?: InputMaybe<Array<SessionWhereInput>>;
  NOT?: InputMaybe<Array<SessionWhereInput>>;
  OR?: InputMaybe<Array<SessionWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expires?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  sessionToken?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userConfigurationId?: InputMaybe<StringNullableFilter>;
  userId?: InputMaybe<StringFilter>;
};

export enum ShowAverage {
  Acc = 'ACC',
  Both = 'BOTH',
  Off = 'OFF',
  Speed = 'SPEED'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type SortOrderInput = {
  nulls?: InputMaybe<NullsOrder>;
  sort: SortOrder;
};

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Tag = {
  __typename?: 'Tag';
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  /** [TagMetadata] */
  metadata?: Maybe<Scalars['JSON']['output']>;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  userConfigurationId?: Maybe<Scalars['String']['output']>;
  userId: Scalars['String']['output'];
};

export type TagCountAggregate = {
  __typename?: 'TagCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  metadata: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userConfigurationId: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type TagCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userConfigurationId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type TagCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user: UserCreateNestedOneWithoutTagsInput;
  userConfigurationId?: InputMaybe<Scalars['String']['input']>;
};

export type TagCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userConfigurationId?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['String']['input'];
};

export type TagCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userConfigurationId?: InputMaybe<Scalars['String']['input']>;
};

export type TagCreateManyUserInputEnvelope = {
  data: Array<TagCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TagCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TagCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<TagCreateWithoutUserInput>>;
  createMany?: InputMaybe<TagCreateManyUserInputEnvelope>;
};

export type TagCreateOrConnectWithoutUserInput = {
  create: TagCreateWithoutUserInput;
  where: TagWhereUniqueInput;
};

export type TagCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userConfigurationId?: InputMaybe<Scalars['String']['input']>;
};

export type TagGroupBy = {
  __typename?: 'TagGroupBy';
  _count?: Maybe<TagCountAggregate>;
  _max?: Maybe<TagMaxAggregate>;
  _min?: Maybe<TagMinAggregate>;
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  userConfigurationId?: Maybe<Scalars['String']['output']>;
  userId: Scalars['String']['output'];
};

export type TagListRelationFilter = {
  every?: InputMaybe<TagWhereInput>;
  none?: InputMaybe<TagWhereInput>;
  some?: InputMaybe<TagWhereInput>;
};

export type TagMaxAggregate = {
  __typename?: 'TagMaxAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userConfigurationId?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type TagMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userConfigurationId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type TagMinAggregate = {
  __typename?: 'TagMinAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userConfigurationId?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type TagMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userConfigurationId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type TagOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum TagOrderByRelevanceFieldEnum {
  Id = 'id',
  Name = 'name',
  UserConfigurationId = 'userConfigurationId',
  UserId = 'userId'
}

export type TagOrderByRelevanceInput = {
  fields: Array<TagOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type TagOrderByWithAggregationInput = {
  _count?: InputMaybe<TagCountOrderByAggregateInput>;
  _max?: InputMaybe<TagMaxOrderByAggregateInput>;
  _min?: InputMaybe<TagMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrderInput>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userConfigurationId?: InputMaybe<SortOrderInput>;
  userId?: InputMaybe<SortOrder>;
};

export type TagOrderByWithRelationInput = {
  _relevance?: InputMaybe<TagOrderByRelevanceInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrderInput>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userConfigurationId?: InputMaybe<SortOrderInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum TagScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Metadata = 'metadata',
  Name = 'name',
  UpdatedAt = 'updatedAt',
  UserConfigurationId = 'userConfigurationId',
  UserId = 'userId'
}

export type TagScalarWhereInput = {
  AND?: InputMaybe<Array<TagScalarWhereInput>>;
  NOT?: InputMaybe<Array<TagScalarWhereInput>>;
  OR?: InputMaybe<Array<TagScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<UuidFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userConfigurationId?: InputMaybe<StringNullableFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type TagScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<TagScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<TagScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<TagScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<UuidWithAggregatesFilter>;
  metadata?: InputMaybe<JsonNullableWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userConfigurationId?: InputMaybe<StringNullableWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type TagUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutTagsNestedInput>;
  userConfigurationId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type TagUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userConfigurationId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type TagUpdateManyWithWhereWithoutUserInput = {
  data: TagUpdateManyMutationInput;
  where: TagScalarWhereInput;
};

export type TagUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TagCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<TagCreateWithoutUserInput>>;
  createMany?: InputMaybe<TagCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<TagWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TagScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TagWhereUniqueInput>>;
  set?: InputMaybe<Array<TagWhereUniqueInput>>;
  update?: InputMaybe<Array<TagUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<TagUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<TagUpsertWithWhereUniqueWithoutUserInput>>;
};

export type TagUpdateWithWhereUniqueWithoutUserInput = {
  data: TagUpdateWithoutUserInput;
  where: TagWhereUniqueInput;
};

export type TagUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userConfigurationId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type TagUpsertWithWhereUniqueWithoutUserInput = {
  create: TagCreateWithoutUserInput;
  update: TagUpdateWithoutUserInput;
  where: TagWhereUniqueInput;
};

export type TagWhereInput = {
  AND?: InputMaybe<Array<TagWhereInput>>;
  NOT?: InputMaybe<Array<TagWhereInput>>;
  OR?: InputMaybe<Array<TagWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<UuidFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userConfigurationId?: InputMaybe<StringNullableFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type TagWhereUniqueInput = {
  AND?: InputMaybe<Array<TagWhereInput>>;
  NOT?: InputMaybe<Array<TagWhereInput>>;
  OR?: InputMaybe<Array<TagWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<JsonNullableFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userConfigurationId?: InputMaybe<StringNullableFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type TypingRun = {
  __typename?: 'TypingRun';
  _count?: Maybe<TypingRunCount>;
  createdAt: Scalars['DateTimeISO']['output'];
  flags: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  /** [TypingRunMetadata] */
  metadata?: Maybe<Scalars['JSON']['output']>;
  mode: TypingRunMode;
  time?: Maybe<Scalars['Int']['output']>;
  totalTimeMilliseconds: Scalars['Int']['output'];
  /** [TypedLetters] */
  typedLetters: Scalars['JSON']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  userId: Scalars['String']['output'];
  wordCount?: Maybe<Scalars['Int']['output']>;
};

export type TypingRunAvgAggregate = {
  __typename?: 'TypingRunAvgAggregate';
  flags?: Maybe<Scalars['Float']['output']>;
  time?: Maybe<Scalars['Float']['output']>;
  totalTimeMilliseconds?: Maybe<Scalars['Float']['output']>;
  wordCount?: Maybe<Scalars['Float']['output']>;
};

export type TypingRunAvgOrderByAggregateInput = {
  flags?: InputMaybe<SortOrder>;
  time?: InputMaybe<SortOrder>;
  totalTimeMilliseconds?: InputMaybe<SortOrder>;
  wordCount?: InputMaybe<SortOrder>;
};

export type TypingRunCount = {
  __typename?: 'TypingRunCount';
  challanges_one: Scalars['Int']['output'];
  challenges_two: Scalars['Int']['output'];
};


export type TypingRunCountChallanges_OneArgs = {
  where?: InputMaybe<UsersChallengeWhereInput>;
};


export type TypingRunCountChallenges_TwoArgs = {
  where?: InputMaybe<UsersChallengeWhereInput>;
};

export type TypingRunCountAggregate = {
  __typename?: 'TypingRunCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  flags: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  metadata: Scalars['Int']['output'];
  mode: Scalars['Int']['output'];
  time: Scalars['Int']['output'];
  totalTimeMilliseconds: Scalars['Int']['output'];
  typedLetters: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
  wordCount: Scalars['Int']['output'];
};

export type TypingRunCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  flags?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrder>;
  mode?: InputMaybe<SortOrder>;
  time?: InputMaybe<SortOrder>;
  totalTimeMilliseconds?: InputMaybe<SortOrder>;
  typedLetters?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  wordCount?: InputMaybe<SortOrder>;
};

export type TypingRunCreateInput = {
  challanges_one?: InputMaybe<UsersChallengeCreateNestedManyWithoutUserOneRunInput>;
  challenges_two?: InputMaybe<UsersChallengeCreateNestedManyWithoutUserTwoRunInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  flags: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  mode: TypingRunMode;
  time?: InputMaybe<Scalars['Int']['input']>;
  totalTimeMilliseconds: Scalars['Int']['input'];
  typedLetters: Scalars['JSON']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user: UserCreateNestedOneWithoutTypingRunsInput;
  wordCount?: InputMaybe<Scalars['Int']['input']>;
};

export type TypingRunCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  flags: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  mode: TypingRunMode;
  time?: InputMaybe<Scalars['Int']['input']>;
  totalTimeMilliseconds: Scalars['Int']['input'];
  typedLetters: Scalars['JSON']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userId: Scalars['String']['input'];
  wordCount?: InputMaybe<Scalars['Int']['input']>;
};

export type TypingRunCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  flags: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  mode: TypingRunMode;
  time?: InputMaybe<Scalars['Int']['input']>;
  totalTimeMilliseconds: Scalars['Int']['input'];
  typedLetters: Scalars['JSON']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  wordCount?: InputMaybe<Scalars['Int']['input']>;
};

export type TypingRunCreateManyUserInputEnvelope = {
  data: Array<TypingRunCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TypingRunCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<TypingRunWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TypingRunCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<TypingRunCreateWithoutUserInput>>;
  createMany?: InputMaybe<TypingRunCreateManyUserInputEnvelope>;
};

export type TypingRunCreateNestedOneWithoutChallanges_OneInput = {
  connect?: InputMaybe<TypingRunWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TypingRunCreateOrConnectWithoutChallanges_OneInput>;
  create?: InputMaybe<TypingRunCreateWithoutChallanges_OneInput>;
};

export type TypingRunCreateNestedOneWithoutChallenges_TwoInput = {
  connect?: InputMaybe<TypingRunWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TypingRunCreateOrConnectWithoutChallenges_TwoInput>;
  create?: InputMaybe<TypingRunCreateWithoutChallenges_TwoInput>;
};

export type TypingRunCreateOrConnectWithoutChallanges_OneInput = {
  create: TypingRunCreateWithoutChallanges_OneInput;
  where: TypingRunWhereUniqueInput;
};

export type TypingRunCreateOrConnectWithoutChallenges_TwoInput = {
  create: TypingRunCreateWithoutChallenges_TwoInput;
  where: TypingRunWhereUniqueInput;
};

export type TypingRunCreateOrConnectWithoutUserInput = {
  create: TypingRunCreateWithoutUserInput;
  where: TypingRunWhereUniqueInput;
};

export type TypingRunCreateWithoutChallanges_OneInput = {
  challenges_two?: InputMaybe<UsersChallengeCreateNestedManyWithoutUserTwoRunInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  flags: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  mode: TypingRunMode;
  time?: InputMaybe<Scalars['Int']['input']>;
  totalTimeMilliseconds: Scalars['Int']['input'];
  typedLetters: Scalars['JSON']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user: UserCreateNestedOneWithoutTypingRunsInput;
  wordCount?: InputMaybe<Scalars['Int']['input']>;
};

export type TypingRunCreateWithoutChallenges_TwoInput = {
  challanges_one?: InputMaybe<UsersChallengeCreateNestedManyWithoutUserOneRunInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  flags: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  mode: TypingRunMode;
  time?: InputMaybe<Scalars['Int']['input']>;
  totalTimeMilliseconds: Scalars['Int']['input'];
  typedLetters: Scalars['JSON']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user: UserCreateNestedOneWithoutTypingRunsInput;
  wordCount?: InputMaybe<Scalars['Int']['input']>;
};

export type TypingRunCreateWithoutUserInput = {
  challanges_one?: InputMaybe<UsersChallengeCreateNestedManyWithoutUserOneRunInput>;
  challenges_two?: InputMaybe<UsersChallengeCreateNestedManyWithoutUserTwoRunInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  flags: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  mode: TypingRunMode;
  time?: InputMaybe<Scalars['Int']['input']>;
  totalTimeMilliseconds: Scalars['Int']['input'];
  typedLetters: Scalars['JSON']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  wordCount?: InputMaybe<Scalars['Int']['input']>;
};

export type TypingRunGroupBy = {
  __typename?: 'TypingRunGroupBy';
  _avg?: Maybe<TypingRunAvgAggregate>;
  _count?: Maybe<TypingRunCountAggregate>;
  _max?: Maybe<TypingRunMaxAggregate>;
  _min?: Maybe<TypingRunMinAggregate>;
  _sum?: Maybe<TypingRunSumAggregate>;
  createdAt: Scalars['DateTimeISO']['output'];
  flags: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  mode: TypingRunMode;
  time?: Maybe<Scalars['Int']['output']>;
  totalTimeMilliseconds: Scalars['Int']['output'];
  typedLetters: Scalars['JSON']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  userId: Scalars['String']['output'];
  wordCount?: Maybe<Scalars['Int']['output']>;
};

export type TypingRunListRelationFilter = {
  every?: InputMaybe<TypingRunWhereInput>;
  none?: InputMaybe<TypingRunWhereInput>;
  some?: InputMaybe<TypingRunWhereInput>;
};

export type TypingRunMaxAggregate = {
  __typename?: 'TypingRunMaxAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  flags?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  mode?: Maybe<TypingRunMode>;
  time?: Maybe<Scalars['Int']['output']>;
  totalTimeMilliseconds?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
  wordCount?: Maybe<Scalars['Int']['output']>;
};

export type TypingRunMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  flags?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  mode?: InputMaybe<SortOrder>;
  time?: InputMaybe<SortOrder>;
  totalTimeMilliseconds?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  wordCount?: InputMaybe<SortOrder>;
};

export type TypingRunMinAggregate = {
  __typename?: 'TypingRunMinAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  flags?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  mode?: Maybe<TypingRunMode>;
  time?: Maybe<Scalars['Int']['output']>;
  totalTimeMilliseconds?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
  wordCount?: Maybe<Scalars['Int']['output']>;
};

export type TypingRunMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  flags?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  mode?: InputMaybe<SortOrder>;
  time?: InputMaybe<SortOrder>;
  totalTimeMilliseconds?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  wordCount?: InputMaybe<SortOrder>;
};

export enum TypingRunMode {
  Time = 'TIME',
  Words = 'WORDS'
}

export type TypingRunNullableRelationFilter = {
  is?: InputMaybe<TypingRunWhereInput>;
  isNot?: InputMaybe<TypingRunWhereInput>;
};

export type TypingRunOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum TypingRunOrderByRelevanceFieldEnum {
  Id = 'id',
  UserId = 'userId'
}

export type TypingRunOrderByRelevanceInput = {
  fields: Array<TypingRunOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type TypingRunOrderByWithAggregationInput = {
  _avg?: InputMaybe<TypingRunAvgOrderByAggregateInput>;
  _count?: InputMaybe<TypingRunCountOrderByAggregateInput>;
  _max?: InputMaybe<TypingRunMaxOrderByAggregateInput>;
  _min?: InputMaybe<TypingRunMinOrderByAggregateInput>;
  _sum?: InputMaybe<TypingRunSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  flags?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrderInput>;
  mode?: InputMaybe<SortOrder>;
  time?: InputMaybe<SortOrderInput>;
  totalTimeMilliseconds?: InputMaybe<SortOrder>;
  typedLetters?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  wordCount?: InputMaybe<SortOrderInput>;
};

export type TypingRunOrderByWithRelationInput = {
  _relevance?: InputMaybe<TypingRunOrderByRelevanceInput>;
  challanges_one?: InputMaybe<UsersChallengeOrderByRelationAggregateInput>;
  challenges_two?: InputMaybe<UsersChallengeOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  flags?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrderInput>;
  mode?: InputMaybe<SortOrder>;
  time?: InputMaybe<SortOrderInput>;
  totalTimeMilliseconds?: InputMaybe<SortOrder>;
  typedLetters?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
  wordCount?: InputMaybe<SortOrderInput>;
};

export enum TypingRunScalarFieldEnum {
  CreatedAt = 'createdAt',
  Flags = 'flags',
  Id = 'id',
  Metadata = 'metadata',
  Mode = 'mode',
  Time = 'time',
  TotalTimeMilliseconds = 'totalTimeMilliseconds',
  TypedLetters = 'typedLetters',
  UpdatedAt = 'updatedAt',
  UserId = 'userId',
  WordCount = 'wordCount'
}

export type TypingRunScalarWhereInput = {
  AND?: InputMaybe<Array<TypingRunScalarWhereInput>>;
  NOT?: InputMaybe<Array<TypingRunScalarWhereInput>>;
  OR?: InputMaybe<Array<TypingRunScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  flags?: InputMaybe<IntFilter>;
  id?: InputMaybe<UuidFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  mode?: InputMaybe<EnumTypingRunModeFilter>;
  time?: InputMaybe<IntNullableFilter>;
  totalTimeMilliseconds?: InputMaybe<IntFilter>;
  typedLetters?: InputMaybe<JsonFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
  wordCount?: InputMaybe<IntNullableFilter>;
};

export type TypingRunScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<TypingRunScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<TypingRunScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<TypingRunScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  flags?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<UuidWithAggregatesFilter>;
  metadata?: InputMaybe<JsonNullableWithAggregatesFilter>;
  mode?: InputMaybe<EnumTypingRunModeWithAggregatesFilter>;
  time?: InputMaybe<IntNullableWithAggregatesFilter>;
  totalTimeMilliseconds?: InputMaybe<IntWithAggregatesFilter>;
  typedLetters?: InputMaybe<JsonWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
  wordCount?: InputMaybe<IntNullableWithAggregatesFilter>;
};

export type TypingRunSumAggregate = {
  __typename?: 'TypingRunSumAggregate';
  flags?: Maybe<Scalars['Int']['output']>;
  time?: Maybe<Scalars['Int']['output']>;
  totalTimeMilliseconds?: Maybe<Scalars['Int']['output']>;
  wordCount?: Maybe<Scalars['Int']['output']>;
};

export type TypingRunSumOrderByAggregateInput = {
  flags?: InputMaybe<SortOrder>;
  time?: InputMaybe<SortOrder>;
  totalTimeMilliseconds?: InputMaybe<SortOrder>;
  wordCount?: InputMaybe<SortOrder>;
};

export type TypingRunUpdateInput = {
  challanges_one?: InputMaybe<UsersChallengeUpdateManyWithoutUserOneRunNestedInput>;
  challenges_two?: InputMaybe<UsersChallengeUpdateManyWithoutUserTwoRunNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  flags?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  mode?: InputMaybe<EnumTypingRunModeFieldUpdateOperationsInput>;
  time?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  totalTimeMilliseconds?: InputMaybe<IntFieldUpdateOperationsInput>;
  typedLetters?: InputMaybe<Scalars['JSON']['input']>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutTypingRunsNestedInput>;
  wordCount?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type TypingRunUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  flags?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  mode?: InputMaybe<EnumTypingRunModeFieldUpdateOperationsInput>;
  time?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  totalTimeMilliseconds?: InputMaybe<IntFieldUpdateOperationsInput>;
  typedLetters?: InputMaybe<Scalars['JSON']['input']>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  wordCount?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type TypingRunUpdateManyWithWhereWithoutUserInput = {
  data: TypingRunUpdateManyMutationInput;
  where: TypingRunScalarWhereInput;
};

export type TypingRunUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<TypingRunWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TypingRunCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<TypingRunCreateWithoutUserInput>>;
  createMany?: InputMaybe<TypingRunCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<TypingRunWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TypingRunScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TypingRunWhereUniqueInput>>;
  set?: InputMaybe<Array<TypingRunWhereUniqueInput>>;
  update?: InputMaybe<Array<TypingRunUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<TypingRunUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<TypingRunUpsertWithWhereUniqueWithoutUserInput>>;
};

export type TypingRunUpdateOneWithoutChallanges_OneNestedInput = {
  connect?: InputMaybe<TypingRunWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TypingRunCreateOrConnectWithoutChallanges_OneInput>;
  create?: InputMaybe<TypingRunCreateWithoutChallanges_OneInput>;
  delete?: InputMaybe<TypingRunWhereInput>;
  disconnect?: InputMaybe<TypingRunWhereInput>;
  update?: InputMaybe<TypingRunUpdateToOneWithWhereWithoutChallanges_OneInput>;
  upsert?: InputMaybe<TypingRunUpsertWithoutChallanges_OneInput>;
};

export type TypingRunUpdateOneWithoutChallenges_TwoNestedInput = {
  connect?: InputMaybe<TypingRunWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TypingRunCreateOrConnectWithoutChallenges_TwoInput>;
  create?: InputMaybe<TypingRunCreateWithoutChallenges_TwoInput>;
  delete?: InputMaybe<TypingRunWhereInput>;
  disconnect?: InputMaybe<TypingRunWhereInput>;
  update?: InputMaybe<TypingRunUpdateToOneWithWhereWithoutChallenges_TwoInput>;
  upsert?: InputMaybe<TypingRunUpsertWithoutChallenges_TwoInput>;
};

export type TypingRunUpdateToOneWithWhereWithoutChallanges_OneInput = {
  data: TypingRunUpdateWithoutChallanges_OneInput;
  where?: InputMaybe<TypingRunWhereInput>;
};

export type TypingRunUpdateToOneWithWhereWithoutChallenges_TwoInput = {
  data: TypingRunUpdateWithoutChallenges_TwoInput;
  where?: InputMaybe<TypingRunWhereInput>;
};

export type TypingRunUpdateWithWhereUniqueWithoutUserInput = {
  data: TypingRunUpdateWithoutUserInput;
  where: TypingRunWhereUniqueInput;
};

export type TypingRunUpdateWithoutChallanges_OneInput = {
  challenges_two?: InputMaybe<UsersChallengeUpdateManyWithoutUserTwoRunNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  flags?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  mode?: InputMaybe<EnumTypingRunModeFieldUpdateOperationsInput>;
  time?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  totalTimeMilliseconds?: InputMaybe<IntFieldUpdateOperationsInput>;
  typedLetters?: InputMaybe<Scalars['JSON']['input']>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutTypingRunsNestedInput>;
  wordCount?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type TypingRunUpdateWithoutChallenges_TwoInput = {
  challanges_one?: InputMaybe<UsersChallengeUpdateManyWithoutUserOneRunNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  flags?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  mode?: InputMaybe<EnumTypingRunModeFieldUpdateOperationsInput>;
  time?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  totalTimeMilliseconds?: InputMaybe<IntFieldUpdateOperationsInput>;
  typedLetters?: InputMaybe<Scalars['JSON']['input']>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutTypingRunsNestedInput>;
  wordCount?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type TypingRunUpdateWithoutUserInput = {
  challanges_one?: InputMaybe<UsersChallengeUpdateManyWithoutUserOneRunNestedInput>;
  challenges_two?: InputMaybe<UsersChallengeUpdateManyWithoutUserTwoRunNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  flags?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  mode?: InputMaybe<EnumTypingRunModeFieldUpdateOperationsInput>;
  time?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  totalTimeMilliseconds?: InputMaybe<IntFieldUpdateOperationsInput>;
  typedLetters?: InputMaybe<Scalars['JSON']['input']>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  wordCount?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type TypingRunUpsertWithWhereUniqueWithoutUserInput = {
  create: TypingRunCreateWithoutUserInput;
  update: TypingRunUpdateWithoutUserInput;
  where: TypingRunWhereUniqueInput;
};

export type TypingRunUpsertWithoutChallanges_OneInput = {
  create: TypingRunCreateWithoutChallanges_OneInput;
  update: TypingRunUpdateWithoutChallanges_OneInput;
  where?: InputMaybe<TypingRunWhereInput>;
};

export type TypingRunUpsertWithoutChallenges_TwoInput = {
  create: TypingRunCreateWithoutChallenges_TwoInput;
  update: TypingRunUpdateWithoutChallenges_TwoInput;
  where?: InputMaybe<TypingRunWhereInput>;
};

export type TypingRunWhereInput = {
  AND?: InputMaybe<Array<TypingRunWhereInput>>;
  NOT?: InputMaybe<Array<TypingRunWhereInput>>;
  OR?: InputMaybe<Array<TypingRunWhereInput>>;
  challanges_one?: InputMaybe<UsersChallengeListRelationFilter>;
  challenges_two?: InputMaybe<UsersChallengeListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  flags?: InputMaybe<IntFilter>;
  id?: InputMaybe<UuidFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  mode?: InputMaybe<EnumTypingRunModeFilter>;
  time?: InputMaybe<IntNullableFilter>;
  totalTimeMilliseconds?: InputMaybe<IntFilter>;
  typedLetters?: InputMaybe<JsonFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
  wordCount?: InputMaybe<IntNullableFilter>;
};

export type TypingRunWhereUniqueInput = {
  AND?: InputMaybe<Array<TypingRunWhereInput>>;
  NOT?: InputMaybe<Array<TypingRunWhereInput>>;
  OR?: InputMaybe<Array<TypingRunWhereInput>>;
  challanges_one?: InputMaybe<UsersChallengeListRelationFilter>;
  challenges_two?: InputMaybe<UsersChallengeListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  flags?: InputMaybe<IntFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<JsonNullableFilter>;
  mode?: InputMaybe<EnumTypingRunModeFilter>;
  time?: InputMaybe<IntNullableFilter>;
  totalTimeMilliseconds?: InputMaybe<IntFilter>;
  typedLetters?: InputMaybe<JsonFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
  wordCount?: InputMaybe<IntNullableFilter>;
};

/** Always after the prisma-client-js generator */
export type User = {
  __typename?: 'User';
  _count?: Maybe<UserCount>;
  accounts: Array<Account>;
  challenge_matches_one: Array<UsersChallengeMatch>;
  challenge_matches_two: Array<UsersChallengeMatch>;
  challenges_one: Array<UsersChallenge>;
  challenges_two: Array<UsersChallenge>;
  configuration?: Maybe<UserConfiguration>;
  createdAt: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  emailVerified?: Maybe<Scalars['DateTimeISO']['output']>;
  experience?: Maybe<UserExperience>;
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  /** [UserMetadata] */
  metadata?: Maybe<Scalars['JSON']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  notifications: Array<UserNotification>;
  password?: Maybe<Scalars['String']['output']>;
  sessions: Array<Session>;
  tags: Array<Tag>;
  typingRuns: Array<TypingRun>;
  updatedAt: Scalars['DateTimeISO']['output'];
};


/** Always after the prisma-client-js generator */
export type UserAccountsArgs = {
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  distinct?: InputMaybe<Array<AccountScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AccountOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccountWhereInput>;
};


/** Always after the prisma-client-js generator */
export type UserChallenge_Matches_OneArgs = {
  cursor?: InputMaybe<UsersChallengeMatchWhereUniqueInput>;
  distinct?: InputMaybe<Array<UsersChallengeMatchScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UsersChallengeMatchOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UsersChallengeMatchWhereInput>;
};


/** Always after the prisma-client-js generator */
export type UserChallenge_Matches_TwoArgs = {
  cursor?: InputMaybe<UsersChallengeMatchWhereUniqueInput>;
  distinct?: InputMaybe<Array<UsersChallengeMatchScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UsersChallengeMatchOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UsersChallengeMatchWhereInput>;
};


/** Always after the prisma-client-js generator */
export type UserChallenges_OneArgs = {
  cursor?: InputMaybe<UsersChallengeWhereUniqueInput>;
  distinct?: InputMaybe<Array<UsersChallengeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UsersChallengeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UsersChallengeWhereInput>;
};


/** Always after the prisma-client-js generator */
export type UserChallenges_TwoArgs = {
  cursor?: InputMaybe<UsersChallengeWhereUniqueInput>;
  distinct?: InputMaybe<Array<UsersChallengeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UsersChallengeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UsersChallengeWhereInput>;
};


/** Always after the prisma-client-js generator */
export type UserConfigurationArgs = {
  where?: InputMaybe<UserConfigurationWhereInput>;
};


/** Always after the prisma-client-js generator */
export type UserExperienceArgs = {
  where?: InputMaybe<UserExperienceWhereInput>;
};


/** Always after the prisma-client-js generator */
export type UserNotificationsArgs = {
  cursor?: InputMaybe<UserNotificationWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserNotificationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserNotificationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserNotificationWhereInput>;
};


/** Always after the prisma-client-js generator */
export type UserSessionsArgs = {
  cursor?: InputMaybe<SessionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SessionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SessionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SessionWhereInput>;
};


/** Always after the prisma-client-js generator */
export type UserTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  distinct?: InputMaybe<Array<TagScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TagOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TagWhereInput>;
};


/** Always after the prisma-client-js generator */
export type UserTypingRunsArgs = {
  cursor?: InputMaybe<TypingRunWhereUniqueInput>;
  distinct?: InputMaybe<Array<TypingRunScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TypingRunOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TypingRunWhereInput>;
};

export type UserConfiguration = {
  __typename?: 'UserConfiguration';
  auto_save_mode: Scalars['Boolean']['output'];
  blind_mode: Scalars['Boolean']['output'];
  caret_smoothness: CaretSmoothness;
  caret_style: CaretStyle;
  createdAt: Scalars['DateTimeISO']['output'];
  elements_show_average: ShowAverage;
  elements_show_caps_lock_warning: Scalars['Boolean']['output'];
  elements_show_key_tips: Scalars['Boolean']['output'];
  elements_show_oof_warning: Scalars['Boolean']['output'];
  font_family: Scalars['String']['output'];
  font_size: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  input_confidence_mode: ConfidenceMode;
  input_freedom_mode: Scalars['Boolean']['output'];
  input_indicate_typos: IndicateTypos;
  language: Scalars['String']['output'];
  /** [UserConfigurationMetadata] */
  metadata?: Maybe<Scalars['JSON']['output']>;
  pace_caret_speed: PaceCaretSpeed;
  pace_caret_style: CaretStyle;
  sound_click_sound?: Maybe<Scalars['String']['output']>;
  sound_error_sound?: Maybe<Scalars['String']['output']>;
  test_difficulty: RunDifficulty;
  theme: Scalars['String']['output'];
  theme_colorful_mode: Scalars['Boolean']['output'];
  theme_flip_colors: Scalars['Boolean']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  userId: Scalars['String']['output'];
};

export type UserConfigurationAvgAggregate = {
  __typename?: 'UserConfigurationAvgAggregate';
  font_size?: Maybe<Scalars['Float']['output']>;
};

export type UserConfigurationAvgOrderByAggregateInput = {
  font_size?: InputMaybe<SortOrder>;
};

export type UserConfigurationCountAggregate = {
  __typename?: 'UserConfigurationCountAggregate';
  _all: Scalars['Int']['output'];
  auto_save_mode: Scalars['Int']['output'];
  blind_mode: Scalars['Int']['output'];
  caret_smoothness: Scalars['Int']['output'];
  caret_style: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  elements_show_average: Scalars['Int']['output'];
  elements_show_caps_lock_warning: Scalars['Int']['output'];
  elements_show_key_tips: Scalars['Int']['output'];
  elements_show_oof_warning: Scalars['Int']['output'];
  font_family: Scalars['Int']['output'];
  font_size: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  input_confidence_mode: Scalars['Int']['output'];
  input_freedom_mode: Scalars['Int']['output'];
  input_indicate_typos: Scalars['Int']['output'];
  language: Scalars['Int']['output'];
  metadata: Scalars['Int']['output'];
  pace_caret_speed: Scalars['Int']['output'];
  pace_caret_style: Scalars['Int']['output'];
  sound_click_sound: Scalars['Int']['output'];
  sound_error_sound: Scalars['Int']['output'];
  test_difficulty: Scalars['Int']['output'];
  theme: Scalars['Int']['output'];
  theme_colorful_mode: Scalars['Int']['output'];
  theme_flip_colors: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type UserConfigurationCountOrderByAggregateInput = {
  auto_save_mode?: InputMaybe<SortOrder>;
  blind_mode?: InputMaybe<SortOrder>;
  caret_smoothness?: InputMaybe<SortOrder>;
  caret_style?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  elements_show_average?: InputMaybe<SortOrder>;
  elements_show_caps_lock_warning?: InputMaybe<SortOrder>;
  elements_show_key_tips?: InputMaybe<SortOrder>;
  elements_show_oof_warning?: InputMaybe<SortOrder>;
  font_family?: InputMaybe<SortOrder>;
  font_size?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  input_confidence_mode?: InputMaybe<SortOrder>;
  input_freedom_mode?: InputMaybe<SortOrder>;
  input_indicate_typos?: InputMaybe<SortOrder>;
  language?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrder>;
  pace_caret_speed?: InputMaybe<SortOrder>;
  pace_caret_style?: InputMaybe<SortOrder>;
  sound_click_sound?: InputMaybe<SortOrder>;
  sound_error_sound?: InputMaybe<SortOrder>;
  test_difficulty?: InputMaybe<SortOrder>;
  theme?: InputMaybe<SortOrder>;
  theme_colorful_mode?: InputMaybe<SortOrder>;
  theme_flip_colors?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserConfigurationCreateInput = {
  auto_save_mode?: InputMaybe<Scalars['Boolean']['input']>;
  blind_mode?: InputMaybe<Scalars['Boolean']['input']>;
  caret_smoothness?: InputMaybe<CaretSmoothness>;
  caret_style?: InputMaybe<CaretStyle>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  elements_show_average?: InputMaybe<ShowAverage>;
  elements_show_caps_lock_warning?: InputMaybe<Scalars['Boolean']['input']>;
  elements_show_key_tips?: InputMaybe<Scalars['Boolean']['input']>;
  elements_show_oof_warning?: InputMaybe<Scalars['Boolean']['input']>;
  font_family?: InputMaybe<Scalars['String']['input']>;
  font_size?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  input_confidence_mode?: InputMaybe<ConfidenceMode>;
  input_freedom_mode?: InputMaybe<Scalars['Boolean']['input']>;
  input_indicate_typos?: InputMaybe<IndicateTypos>;
  language?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  pace_caret_speed?: InputMaybe<PaceCaretSpeed>;
  pace_caret_style?: InputMaybe<CaretStyle>;
  sound_click_sound?: InputMaybe<Scalars['String']['input']>;
  sound_error_sound?: InputMaybe<Scalars['String']['input']>;
  test_difficulty?: InputMaybe<RunDifficulty>;
  theme?: InputMaybe<Scalars['String']['input']>;
  theme_colorful_mode?: InputMaybe<Scalars['Boolean']['input']>;
  theme_flip_colors?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user: UserCreateNestedOneWithoutConfigurationInput;
};

export type UserConfigurationCreateManyInput = {
  auto_save_mode?: InputMaybe<Scalars['Boolean']['input']>;
  blind_mode?: InputMaybe<Scalars['Boolean']['input']>;
  caret_smoothness?: InputMaybe<CaretSmoothness>;
  caret_style?: InputMaybe<CaretStyle>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  elements_show_average?: InputMaybe<ShowAverage>;
  elements_show_caps_lock_warning?: InputMaybe<Scalars['Boolean']['input']>;
  elements_show_key_tips?: InputMaybe<Scalars['Boolean']['input']>;
  elements_show_oof_warning?: InputMaybe<Scalars['Boolean']['input']>;
  font_family?: InputMaybe<Scalars['String']['input']>;
  font_size?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  input_confidence_mode?: InputMaybe<ConfidenceMode>;
  input_freedom_mode?: InputMaybe<Scalars['Boolean']['input']>;
  input_indicate_typos?: InputMaybe<IndicateTypos>;
  language?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  pace_caret_speed?: InputMaybe<PaceCaretSpeed>;
  pace_caret_style?: InputMaybe<CaretStyle>;
  sound_click_sound?: InputMaybe<Scalars['String']['input']>;
  sound_error_sound?: InputMaybe<Scalars['String']['input']>;
  test_difficulty?: InputMaybe<RunDifficulty>;
  theme?: InputMaybe<Scalars['String']['input']>;
  theme_colorful_mode?: InputMaybe<Scalars['Boolean']['input']>;
  theme_flip_colors?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userId: Scalars['String']['input'];
};

export type UserConfigurationCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<UserConfigurationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserConfigurationCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<UserConfigurationCreateWithoutUserInput>;
};

export type UserConfigurationCreateOrConnectWithoutUserInput = {
  create: UserConfigurationCreateWithoutUserInput;
  where: UserConfigurationWhereUniqueInput;
};

export type UserConfigurationCreateWithoutUserInput = {
  auto_save_mode?: InputMaybe<Scalars['Boolean']['input']>;
  blind_mode?: InputMaybe<Scalars['Boolean']['input']>;
  caret_smoothness?: InputMaybe<CaretSmoothness>;
  caret_style?: InputMaybe<CaretStyle>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  elements_show_average?: InputMaybe<ShowAverage>;
  elements_show_caps_lock_warning?: InputMaybe<Scalars['Boolean']['input']>;
  elements_show_key_tips?: InputMaybe<Scalars['Boolean']['input']>;
  elements_show_oof_warning?: InputMaybe<Scalars['Boolean']['input']>;
  font_family?: InputMaybe<Scalars['String']['input']>;
  font_size?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  input_confidence_mode?: InputMaybe<ConfidenceMode>;
  input_freedom_mode?: InputMaybe<Scalars['Boolean']['input']>;
  input_indicate_typos?: InputMaybe<IndicateTypos>;
  language?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  pace_caret_speed?: InputMaybe<PaceCaretSpeed>;
  pace_caret_style?: InputMaybe<CaretStyle>;
  sound_click_sound?: InputMaybe<Scalars['String']['input']>;
  sound_error_sound?: InputMaybe<Scalars['String']['input']>;
  test_difficulty?: InputMaybe<RunDifficulty>;
  theme?: InputMaybe<Scalars['String']['input']>;
  theme_colorful_mode?: InputMaybe<Scalars['Boolean']['input']>;
  theme_flip_colors?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type UserConfigurationGroupBy = {
  __typename?: 'UserConfigurationGroupBy';
  _avg?: Maybe<UserConfigurationAvgAggregate>;
  _count?: Maybe<UserConfigurationCountAggregate>;
  _max?: Maybe<UserConfigurationMaxAggregate>;
  _min?: Maybe<UserConfigurationMinAggregate>;
  _sum?: Maybe<UserConfigurationSumAggregate>;
  auto_save_mode: Scalars['Boolean']['output'];
  blind_mode: Scalars['Boolean']['output'];
  caret_smoothness: CaretSmoothness;
  caret_style: CaretStyle;
  createdAt: Scalars['DateTimeISO']['output'];
  elements_show_average: ShowAverage;
  elements_show_caps_lock_warning: Scalars['Boolean']['output'];
  elements_show_key_tips: Scalars['Boolean']['output'];
  elements_show_oof_warning: Scalars['Boolean']['output'];
  font_family: Scalars['String']['output'];
  font_size: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  input_confidence_mode: ConfidenceMode;
  input_freedom_mode: Scalars['Boolean']['output'];
  input_indicate_typos: IndicateTypos;
  language: Scalars['String']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  pace_caret_speed: PaceCaretSpeed;
  pace_caret_style: CaretStyle;
  sound_click_sound?: Maybe<Scalars['String']['output']>;
  sound_error_sound?: Maybe<Scalars['String']['output']>;
  test_difficulty: RunDifficulty;
  theme: Scalars['String']['output'];
  theme_colorful_mode: Scalars['Boolean']['output'];
  theme_flip_colors: Scalars['Boolean']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  userId: Scalars['String']['output'];
};

export type UserConfigurationMaxAggregate = {
  __typename?: 'UserConfigurationMaxAggregate';
  auto_save_mode?: Maybe<Scalars['Boolean']['output']>;
  blind_mode?: Maybe<Scalars['Boolean']['output']>;
  caret_smoothness?: Maybe<CaretSmoothness>;
  caret_style?: Maybe<CaretStyle>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  elements_show_average?: Maybe<ShowAverage>;
  elements_show_caps_lock_warning?: Maybe<Scalars['Boolean']['output']>;
  elements_show_key_tips?: Maybe<Scalars['Boolean']['output']>;
  elements_show_oof_warning?: Maybe<Scalars['Boolean']['output']>;
  font_family?: Maybe<Scalars['String']['output']>;
  font_size?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  input_confidence_mode?: Maybe<ConfidenceMode>;
  input_freedom_mode?: Maybe<Scalars['Boolean']['output']>;
  input_indicate_typos?: Maybe<IndicateTypos>;
  language?: Maybe<Scalars['String']['output']>;
  pace_caret_speed?: Maybe<PaceCaretSpeed>;
  pace_caret_style?: Maybe<CaretStyle>;
  sound_click_sound?: Maybe<Scalars['String']['output']>;
  sound_error_sound?: Maybe<Scalars['String']['output']>;
  test_difficulty?: Maybe<RunDifficulty>;
  theme?: Maybe<Scalars['String']['output']>;
  theme_colorful_mode?: Maybe<Scalars['Boolean']['output']>;
  theme_flip_colors?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type UserConfigurationMaxOrderByAggregateInput = {
  auto_save_mode?: InputMaybe<SortOrder>;
  blind_mode?: InputMaybe<SortOrder>;
  caret_smoothness?: InputMaybe<SortOrder>;
  caret_style?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  elements_show_average?: InputMaybe<SortOrder>;
  elements_show_caps_lock_warning?: InputMaybe<SortOrder>;
  elements_show_key_tips?: InputMaybe<SortOrder>;
  elements_show_oof_warning?: InputMaybe<SortOrder>;
  font_family?: InputMaybe<SortOrder>;
  font_size?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  input_confidence_mode?: InputMaybe<SortOrder>;
  input_freedom_mode?: InputMaybe<SortOrder>;
  input_indicate_typos?: InputMaybe<SortOrder>;
  language?: InputMaybe<SortOrder>;
  pace_caret_speed?: InputMaybe<SortOrder>;
  pace_caret_style?: InputMaybe<SortOrder>;
  sound_click_sound?: InputMaybe<SortOrder>;
  sound_error_sound?: InputMaybe<SortOrder>;
  test_difficulty?: InputMaybe<SortOrder>;
  theme?: InputMaybe<SortOrder>;
  theme_colorful_mode?: InputMaybe<SortOrder>;
  theme_flip_colors?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserConfigurationMinAggregate = {
  __typename?: 'UserConfigurationMinAggregate';
  auto_save_mode?: Maybe<Scalars['Boolean']['output']>;
  blind_mode?: Maybe<Scalars['Boolean']['output']>;
  caret_smoothness?: Maybe<CaretSmoothness>;
  caret_style?: Maybe<CaretStyle>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  elements_show_average?: Maybe<ShowAverage>;
  elements_show_caps_lock_warning?: Maybe<Scalars['Boolean']['output']>;
  elements_show_key_tips?: Maybe<Scalars['Boolean']['output']>;
  elements_show_oof_warning?: Maybe<Scalars['Boolean']['output']>;
  font_family?: Maybe<Scalars['String']['output']>;
  font_size?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  input_confidence_mode?: Maybe<ConfidenceMode>;
  input_freedom_mode?: Maybe<Scalars['Boolean']['output']>;
  input_indicate_typos?: Maybe<IndicateTypos>;
  language?: Maybe<Scalars['String']['output']>;
  pace_caret_speed?: Maybe<PaceCaretSpeed>;
  pace_caret_style?: Maybe<CaretStyle>;
  sound_click_sound?: Maybe<Scalars['String']['output']>;
  sound_error_sound?: Maybe<Scalars['String']['output']>;
  test_difficulty?: Maybe<RunDifficulty>;
  theme?: Maybe<Scalars['String']['output']>;
  theme_colorful_mode?: Maybe<Scalars['Boolean']['output']>;
  theme_flip_colors?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type UserConfigurationMinOrderByAggregateInput = {
  auto_save_mode?: InputMaybe<SortOrder>;
  blind_mode?: InputMaybe<SortOrder>;
  caret_smoothness?: InputMaybe<SortOrder>;
  caret_style?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  elements_show_average?: InputMaybe<SortOrder>;
  elements_show_caps_lock_warning?: InputMaybe<SortOrder>;
  elements_show_key_tips?: InputMaybe<SortOrder>;
  elements_show_oof_warning?: InputMaybe<SortOrder>;
  font_family?: InputMaybe<SortOrder>;
  font_size?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  input_confidence_mode?: InputMaybe<SortOrder>;
  input_freedom_mode?: InputMaybe<SortOrder>;
  input_indicate_typos?: InputMaybe<SortOrder>;
  language?: InputMaybe<SortOrder>;
  pace_caret_speed?: InputMaybe<SortOrder>;
  pace_caret_style?: InputMaybe<SortOrder>;
  sound_click_sound?: InputMaybe<SortOrder>;
  sound_error_sound?: InputMaybe<SortOrder>;
  test_difficulty?: InputMaybe<SortOrder>;
  theme?: InputMaybe<SortOrder>;
  theme_colorful_mode?: InputMaybe<SortOrder>;
  theme_flip_colors?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserConfigurationNullableRelationFilter = {
  is?: InputMaybe<UserConfigurationWhereInput>;
  isNot?: InputMaybe<UserConfigurationWhereInput>;
};

export enum UserConfigurationOrderByRelevanceFieldEnum {
  FontFamily = 'font_family',
  Id = 'id',
  Language = 'language',
  SoundClickSound = 'sound_click_sound',
  SoundErrorSound = 'sound_error_sound',
  Theme = 'theme',
  UserId = 'userId'
}

export type UserConfigurationOrderByRelevanceInput = {
  fields: Array<UserConfigurationOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type UserConfigurationOrderByWithAggregationInput = {
  _avg?: InputMaybe<UserConfigurationAvgOrderByAggregateInput>;
  _count?: InputMaybe<UserConfigurationCountOrderByAggregateInput>;
  _max?: InputMaybe<UserConfigurationMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserConfigurationMinOrderByAggregateInput>;
  _sum?: InputMaybe<UserConfigurationSumOrderByAggregateInput>;
  auto_save_mode?: InputMaybe<SortOrder>;
  blind_mode?: InputMaybe<SortOrder>;
  caret_smoothness?: InputMaybe<SortOrder>;
  caret_style?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  elements_show_average?: InputMaybe<SortOrder>;
  elements_show_caps_lock_warning?: InputMaybe<SortOrder>;
  elements_show_key_tips?: InputMaybe<SortOrder>;
  elements_show_oof_warning?: InputMaybe<SortOrder>;
  font_family?: InputMaybe<SortOrder>;
  font_size?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  input_confidence_mode?: InputMaybe<SortOrder>;
  input_freedom_mode?: InputMaybe<SortOrder>;
  input_indicate_typos?: InputMaybe<SortOrder>;
  language?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrderInput>;
  pace_caret_speed?: InputMaybe<SortOrder>;
  pace_caret_style?: InputMaybe<SortOrder>;
  sound_click_sound?: InputMaybe<SortOrderInput>;
  sound_error_sound?: InputMaybe<SortOrderInput>;
  test_difficulty?: InputMaybe<SortOrder>;
  theme?: InputMaybe<SortOrder>;
  theme_colorful_mode?: InputMaybe<SortOrder>;
  theme_flip_colors?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserConfigurationOrderByWithRelationInput = {
  _relevance?: InputMaybe<UserConfigurationOrderByRelevanceInput>;
  auto_save_mode?: InputMaybe<SortOrder>;
  blind_mode?: InputMaybe<SortOrder>;
  caret_smoothness?: InputMaybe<SortOrder>;
  caret_style?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  elements_show_average?: InputMaybe<SortOrder>;
  elements_show_caps_lock_warning?: InputMaybe<SortOrder>;
  elements_show_key_tips?: InputMaybe<SortOrder>;
  elements_show_oof_warning?: InputMaybe<SortOrder>;
  font_family?: InputMaybe<SortOrder>;
  font_size?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  input_confidence_mode?: InputMaybe<SortOrder>;
  input_freedom_mode?: InputMaybe<SortOrder>;
  input_indicate_typos?: InputMaybe<SortOrder>;
  language?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrderInput>;
  pace_caret_speed?: InputMaybe<SortOrder>;
  pace_caret_style?: InputMaybe<SortOrder>;
  sound_click_sound?: InputMaybe<SortOrderInput>;
  sound_error_sound?: InputMaybe<SortOrderInput>;
  test_difficulty?: InputMaybe<SortOrder>;
  theme?: InputMaybe<SortOrder>;
  theme_colorful_mode?: InputMaybe<SortOrder>;
  theme_flip_colors?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum UserConfigurationScalarFieldEnum {
  AutoSaveMode = 'auto_save_mode',
  BlindMode = 'blind_mode',
  CaretSmoothness = 'caret_smoothness',
  CaretStyle = 'caret_style',
  CreatedAt = 'createdAt',
  ElementsShowAverage = 'elements_show_average',
  ElementsShowCapsLockWarning = 'elements_show_caps_lock_warning',
  ElementsShowKeyTips = 'elements_show_key_tips',
  ElementsShowOofWarning = 'elements_show_oof_warning',
  FontFamily = 'font_family',
  FontSize = 'font_size',
  Id = 'id',
  InputConfidenceMode = 'input_confidence_mode',
  InputFreedomMode = 'input_freedom_mode',
  InputIndicateTypos = 'input_indicate_typos',
  Language = 'language',
  Metadata = 'metadata',
  PaceCaretSpeed = 'pace_caret_speed',
  PaceCaretStyle = 'pace_caret_style',
  SoundClickSound = 'sound_click_sound',
  SoundErrorSound = 'sound_error_sound',
  TestDifficulty = 'test_difficulty',
  Theme = 'theme',
  ThemeColorfulMode = 'theme_colorful_mode',
  ThemeFlipColors = 'theme_flip_colors',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type UserConfigurationScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserConfigurationScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserConfigurationScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserConfigurationScalarWhereWithAggregatesInput>>;
  auto_save_mode?: InputMaybe<BoolWithAggregatesFilter>;
  blind_mode?: InputMaybe<BoolWithAggregatesFilter>;
  caret_smoothness?: InputMaybe<EnumCaretSmoothnessWithAggregatesFilter>;
  caret_style?: InputMaybe<EnumCaretStyleWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  elements_show_average?: InputMaybe<EnumShowAverageWithAggregatesFilter>;
  elements_show_caps_lock_warning?: InputMaybe<BoolWithAggregatesFilter>;
  elements_show_key_tips?: InputMaybe<BoolWithAggregatesFilter>;
  elements_show_oof_warning?: InputMaybe<BoolWithAggregatesFilter>;
  font_family?: InputMaybe<StringWithAggregatesFilter>;
  font_size?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  input_confidence_mode?: InputMaybe<EnumConfidenceModeWithAggregatesFilter>;
  input_freedom_mode?: InputMaybe<BoolWithAggregatesFilter>;
  input_indicate_typos?: InputMaybe<EnumIndicateTyposWithAggregatesFilter>;
  language?: InputMaybe<StringWithAggregatesFilter>;
  metadata?: InputMaybe<JsonNullableWithAggregatesFilter>;
  pace_caret_speed?: InputMaybe<EnumPaceCaretSpeedWithAggregatesFilter>;
  pace_caret_style?: InputMaybe<EnumCaretStyleWithAggregatesFilter>;
  sound_click_sound?: InputMaybe<StringNullableWithAggregatesFilter>;
  sound_error_sound?: InputMaybe<StringNullableWithAggregatesFilter>;
  test_difficulty?: InputMaybe<EnumRunDifficultyWithAggregatesFilter>;
  theme?: InputMaybe<StringWithAggregatesFilter>;
  theme_colorful_mode?: InputMaybe<BoolWithAggregatesFilter>;
  theme_flip_colors?: InputMaybe<BoolWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type UserConfigurationSumAggregate = {
  __typename?: 'UserConfigurationSumAggregate';
  font_size?: Maybe<Scalars['Int']['output']>;
};

export type UserConfigurationSumOrderByAggregateInput = {
  font_size?: InputMaybe<SortOrder>;
};

export type UserConfigurationUpdateInput = {
  auto_save_mode?: InputMaybe<BoolFieldUpdateOperationsInput>;
  blind_mode?: InputMaybe<BoolFieldUpdateOperationsInput>;
  caret_smoothness?: InputMaybe<EnumCaretSmoothnessFieldUpdateOperationsInput>;
  caret_style?: InputMaybe<EnumCaretStyleFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  elements_show_average?: InputMaybe<EnumShowAverageFieldUpdateOperationsInput>;
  elements_show_caps_lock_warning?: InputMaybe<BoolFieldUpdateOperationsInput>;
  elements_show_key_tips?: InputMaybe<BoolFieldUpdateOperationsInput>;
  elements_show_oof_warning?: InputMaybe<BoolFieldUpdateOperationsInput>;
  font_family?: InputMaybe<StringFieldUpdateOperationsInput>;
  font_size?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  input_confidence_mode?: InputMaybe<EnumConfidenceModeFieldUpdateOperationsInput>;
  input_freedom_mode?: InputMaybe<BoolFieldUpdateOperationsInput>;
  input_indicate_typos?: InputMaybe<EnumIndicateTyposFieldUpdateOperationsInput>;
  language?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  pace_caret_speed?: InputMaybe<EnumPaceCaretSpeedFieldUpdateOperationsInput>;
  pace_caret_style?: InputMaybe<EnumCaretStyleFieldUpdateOperationsInput>;
  sound_click_sound?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sound_error_sound?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  test_difficulty?: InputMaybe<EnumRunDifficultyFieldUpdateOperationsInput>;
  theme?: InputMaybe<StringFieldUpdateOperationsInput>;
  theme_colorful_mode?: InputMaybe<BoolFieldUpdateOperationsInput>;
  theme_flip_colors?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutConfigurationNestedInput>;
};

export type UserConfigurationUpdateManyMutationInput = {
  auto_save_mode?: InputMaybe<BoolFieldUpdateOperationsInput>;
  blind_mode?: InputMaybe<BoolFieldUpdateOperationsInput>;
  caret_smoothness?: InputMaybe<EnumCaretSmoothnessFieldUpdateOperationsInput>;
  caret_style?: InputMaybe<EnumCaretStyleFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  elements_show_average?: InputMaybe<EnumShowAverageFieldUpdateOperationsInput>;
  elements_show_caps_lock_warning?: InputMaybe<BoolFieldUpdateOperationsInput>;
  elements_show_key_tips?: InputMaybe<BoolFieldUpdateOperationsInput>;
  elements_show_oof_warning?: InputMaybe<BoolFieldUpdateOperationsInput>;
  font_family?: InputMaybe<StringFieldUpdateOperationsInput>;
  font_size?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  input_confidence_mode?: InputMaybe<EnumConfidenceModeFieldUpdateOperationsInput>;
  input_freedom_mode?: InputMaybe<BoolFieldUpdateOperationsInput>;
  input_indicate_typos?: InputMaybe<EnumIndicateTyposFieldUpdateOperationsInput>;
  language?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  pace_caret_speed?: InputMaybe<EnumPaceCaretSpeedFieldUpdateOperationsInput>;
  pace_caret_style?: InputMaybe<EnumCaretStyleFieldUpdateOperationsInput>;
  sound_click_sound?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sound_error_sound?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  test_difficulty?: InputMaybe<EnumRunDifficultyFieldUpdateOperationsInput>;
  theme?: InputMaybe<StringFieldUpdateOperationsInput>;
  theme_colorful_mode?: InputMaybe<BoolFieldUpdateOperationsInput>;
  theme_flip_colors?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserConfigurationUpdateOneWithoutUserNestedInput = {
  connect?: InputMaybe<UserConfigurationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserConfigurationCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<UserConfigurationCreateWithoutUserInput>;
  delete?: InputMaybe<UserConfigurationWhereInput>;
  disconnect?: InputMaybe<UserConfigurationWhereInput>;
  update?: InputMaybe<UserConfigurationUpdateToOneWithWhereWithoutUserInput>;
  upsert?: InputMaybe<UserConfigurationUpsertWithoutUserInput>;
};

export type UserConfigurationUpdateToOneWithWhereWithoutUserInput = {
  data: UserConfigurationUpdateWithoutUserInput;
  where?: InputMaybe<UserConfigurationWhereInput>;
};

export type UserConfigurationUpdateWithoutUserInput = {
  auto_save_mode?: InputMaybe<BoolFieldUpdateOperationsInput>;
  blind_mode?: InputMaybe<BoolFieldUpdateOperationsInput>;
  caret_smoothness?: InputMaybe<EnumCaretSmoothnessFieldUpdateOperationsInput>;
  caret_style?: InputMaybe<EnumCaretStyleFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  elements_show_average?: InputMaybe<EnumShowAverageFieldUpdateOperationsInput>;
  elements_show_caps_lock_warning?: InputMaybe<BoolFieldUpdateOperationsInput>;
  elements_show_key_tips?: InputMaybe<BoolFieldUpdateOperationsInput>;
  elements_show_oof_warning?: InputMaybe<BoolFieldUpdateOperationsInput>;
  font_family?: InputMaybe<StringFieldUpdateOperationsInput>;
  font_size?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  input_confidence_mode?: InputMaybe<EnumConfidenceModeFieldUpdateOperationsInput>;
  input_freedom_mode?: InputMaybe<BoolFieldUpdateOperationsInput>;
  input_indicate_typos?: InputMaybe<EnumIndicateTyposFieldUpdateOperationsInput>;
  language?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  pace_caret_speed?: InputMaybe<EnumPaceCaretSpeedFieldUpdateOperationsInput>;
  pace_caret_style?: InputMaybe<EnumCaretStyleFieldUpdateOperationsInput>;
  sound_click_sound?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sound_error_sound?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  test_difficulty?: InputMaybe<EnumRunDifficultyFieldUpdateOperationsInput>;
  theme?: InputMaybe<StringFieldUpdateOperationsInput>;
  theme_colorful_mode?: InputMaybe<BoolFieldUpdateOperationsInput>;
  theme_flip_colors?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserConfigurationUpsertWithoutUserInput = {
  create: UserConfigurationCreateWithoutUserInput;
  update: UserConfigurationUpdateWithoutUserInput;
  where?: InputMaybe<UserConfigurationWhereInput>;
};

export type UserConfigurationWhereInput = {
  AND?: InputMaybe<Array<UserConfigurationWhereInput>>;
  NOT?: InputMaybe<Array<UserConfigurationWhereInput>>;
  OR?: InputMaybe<Array<UserConfigurationWhereInput>>;
  auto_save_mode?: InputMaybe<BoolFilter>;
  blind_mode?: InputMaybe<BoolFilter>;
  caret_smoothness?: InputMaybe<EnumCaretSmoothnessFilter>;
  caret_style?: InputMaybe<EnumCaretStyleFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  elements_show_average?: InputMaybe<EnumShowAverageFilter>;
  elements_show_caps_lock_warning?: InputMaybe<BoolFilter>;
  elements_show_key_tips?: InputMaybe<BoolFilter>;
  elements_show_oof_warning?: InputMaybe<BoolFilter>;
  font_family?: InputMaybe<StringFilter>;
  font_size?: InputMaybe<IntFilter>;
  id?: InputMaybe<StringFilter>;
  input_confidence_mode?: InputMaybe<EnumConfidenceModeFilter>;
  input_freedom_mode?: InputMaybe<BoolFilter>;
  input_indicate_typos?: InputMaybe<EnumIndicateTyposFilter>;
  language?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  pace_caret_speed?: InputMaybe<EnumPaceCaretSpeedFilter>;
  pace_caret_style?: InputMaybe<EnumCaretStyleFilter>;
  sound_click_sound?: InputMaybe<StringNullableFilter>;
  sound_error_sound?: InputMaybe<StringNullableFilter>;
  test_difficulty?: InputMaybe<EnumRunDifficultyFilter>;
  theme?: InputMaybe<StringFilter>;
  theme_colorful_mode?: InputMaybe<BoolFilter>;
  theme_flip_colors?: InputMaybe<BoolFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type UserConfigurationWhereUniqueInput = {
  AND?: InputMaybe<Array<UserConfigurationWhereInput>>;
  NOT?: InputMaybe<Array<UserConfigurationWhereInput>>;
  OR?: InputMaybe<Array<UserConfigurationWhereInput>>;
  auto_save_mode?: InputMaybe<BoolFilter>;
  blind_mode?: InputMaybe<BoolFilter>;
  caret_smoothness?: InputMaybe<EnumCaretSmoothnessFilter>;
  caret_style?: InputMaybe<EnumCaretStyleFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  elements_show_average?: InputMaybe<EnumShowAverageFilter>;
  elements_show_caps_lock_warning?: InputMaybe<BoolFilter>;
  elements_show_key_tips?: InputMaybe<BoolFilter>;
  elements_show_oof_warning?: InputMaybe<BoolFilter>;
  font_family?: InputMaybe<StringFilter>;
  font_size?: InputMaybe<IntFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  input_confidence_mode?: InputMaybe<EnumConfidenceModeFilter>;
  input_freedom_mode?: InputMaybe<BoolFilter>;
  input_indicate_typos?: InputMaybe<EnumIndicateTyposFilter>;
  language?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  pace_caret_speed?: InputMaybe<EnumPaceCaretSpeedFilter>;
  pace_caret_style?: InputMaybe<EnumCaretStyleFilter>;
  sound_click_sound?: InputMaybe<StringNullableFilter>;
  sound_error_sound?: InputMaybe<StringNullableFilter>;
  test_difficulty?: InputMaybe<EnumRunDifficultyFilter>;
  theme?: InputMaybe<StringFilter>;
  theme_colorful_mode?: InputMaybe<BoolFilter>;
  theme_flip_colors?: InputMaybe<BoolFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type UserCount = {
  __typename?: 'UserCount';
  accounts: Scalars['Int']['output'];
  challenge_matches_one: Scalars['Int']['output'];
  challenge_matches_two: Scalars['Int']['output'];
  challenges_one: Scalars['Int']['output'];
  challenges_two: Scalars['Int']['output'];
  notifications: Scalars['Int']['output'];
  sessions: Scalars['Int']['output'];
  tags: Scalars['Int']['output'];
  typingRuns: Scalars['Int']['output'];
};


export type UserCountAccountsArgs = {
  where?: InputMaybe<AccountWhereInput>;
};


export type UserCountChallenge_Matches_OneArgs = {
  where?: InputMaybe<UsersChallengeMatchWhereInput>;
};


export type UserCountChallenge_Matches_TwoArgs = {
  where?: InputMaybe<UsersChallengeMatchWhereInput>;
};


export type UserCountChallenges_OneArgs = {
  where?: InputMaybe<UsersChallengeWhereInput>;
};


export type UserCountChallenges_TwoArgs = {
  where?: InputMaybe<UsersChallengeWhereInput>;
};


export type UserCountNotificationsArgs = {
  where?: InputMaybe<UserNotificationWhereInput>;
};


export type UserCountSessionsArgs = {
  where?: InputMaybe<SessionWhereInput>;
};


export type UserCountTagsArgs = {
  where?: InputMaybe<TagWhereInput>;
};


export type UserCountTypingRunsArgs = {
  where?: InputMaybe<TypingRunWhereInput>;
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  emailVerified: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  image: Scalars['Int']['output'];
  metadata: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  password: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type UserCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  challenge_matches_one?: InputMaybe<UsersChallengeMatchCreateNestedManyWithoutUserOneInput>;
  challenge_matches_two?: InputMaybe<UsersChallengeMatchCreateNestedManyWithoutUserTwoInput>;
  challenges_one?: InputMaybe<UsersChallengeCreateNestedManyWithoutUserOneInput>;
  challenges_two?: InputMaybe<UsersChallengeCreateNestedManyWithoutUserTwoInput>;
  configuration?: InputMaybe<UserConfigurationCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  experience?: InputMaybe<UserExperienceCreateNestedOneWithoutUserInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  notifications?: InputMaybe<UserNotificationCreateNestedManyWithoutUserInput>;
  password?: InputMaybe<Scalars['String']['input']>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  tags?: InputMaybe<TagCreateNestedManyWithoutUserInput>;
  typingRuns?: InputMaybe<TypingRunCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type UserCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type UserCreateNestedOneWithoutAccountsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAccountsInput>;
  create?: InputMaybe<UserCreateWithoutAccountsInput>;
};

export type UserCreateNestedOneWithoutChallenge_Matches_OneInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutChallenge_Matches_OneInput>;
  create?: InputMaybe<UserCreateWithoutChallenge_Matches_OneInput>;
};

export type UserCreateNestedOneWithoutChallenge_Matches_TwoInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutChallenge_Matches_TwoInput>;
  create?: InputMaybe<UserCreateWithoutChallenge_Matches_TwoInput>;
};

export type UserCreateNestedOneWithoutChallenges_OneInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutChallenges_OneInput>;
  create?: InputMaybe<UserCreateWithoutChallenges_OneInput>;
};

export type UserCreateNestedOneWithoutChallenges_TwoInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutChallenges_TwoInput>;
  create?: InputMaybe<UserCreateWithoutChallenges_TwoInput>;
};

export type UserCreateNestedOneWithoutConfigurationInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutConfigurationInput>;
  create?: InputMaybe<UserCreateWithoutConfigurationInput>;
};

export type UserCreateNestedOneWithoutExperienceInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutExperienceInput>;
  create?: InputMaybe<UserCreateWithoutExperienceInput>;
};

export type UserCreateNestedOneWithoutNotificationsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutNotificationsInput>;
  create?: InputMaybe<UserCreateWithoutNotificationsInput>;
};

export type UserCreateNestedOneWithoutSessionsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSessionsInput>;
  create?: InputMaybe<UserCreateWithoutSessionsInput>;
};

export type UserCreateNestedOneWithoutTagsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutTagsInput>;
  create?: InputMaybe<UserCreateWithoutTagsInput>;
};

export type UserCreateNestedOneWithoutTypingRunsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutTypingRunsInput>;
  create?: InputMaybe<UserCreateWithoutTypingRunsInput>;
};

export type UserCreateOrConnectWithoutAccountsInput = {
  create: UserCreateWithoutAccountsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutChallenge_Matches_OneInput = {
  create: UserCreateWithoutChallenge_Matches_OneInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutChallenge_Matches_TwoInput = {
  create: UserCreateWithoutChallenge_Matches_TwoInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutChallenges_OneInput = {
  create: UserCreateWithoutChallenges_OneInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutChallenges_TwoInput = {
  create: UserCreateWithoutChallenges_TwoInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutConfigurationInput = {
  create: UserCreateWithoutConfigurationInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutExperienceInput = {
  create: UserCreateWithoutExperienceInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutNotificationsInput = {
  create: UserCreateWithoutNotificationsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutSessionsInput = {
  create: UserCreateWithoutSessionsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutTagsInput = {
  create: UserCreateWithoutTagsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutTypingRunsInput = {
  create: UserCreateWithoutTypingRunsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutAccountsInput = {
  challenge_matches_one?: InputMaybe<UsersChallengeMatchCreateNestedManyWithoutUserOneInput>;
  challenge_matches_two?: InputMaybe<UsersChallengeMatchCreateNestedManyWithoutUserTwoInput>;
  challenges_one?: InputMaybe<UsersChallengeCreateNestedManyWithoutUserOneInput>;
  challenges_two?: InputMaybe<UsersChallengeCreateNestedManyWithoutUserTwoInput>;
  configuration?: InputMaybe<UserConfigurationCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  experience?: InputMaybe<UserExperienceCreateNestedOneWithoutUserInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  notifications?: InputMaybe<UserNotificationCreateNestedManyWithoutUserInput>;
  password?: InputMaybe<Scalars['String']['input']>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  tags?: InputMaybe<TagCreateNestedManyWithoutUserInput>;
  typingRuns?: InputMaybe<TypingRunCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type UserCreateWithoutChallenge_Matches_OneInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  challenge_matches_two?: InputMaybe<UsersChallengeMatchCreateNestedManyWithoutUserTwoInput>;
  challenges_one?: InputMaybe<UsersChallengeCreateNestedManyWithoutUserOneInput>;
  challenges_two?: InputMaybe<UsersChallengeCreateNestedManyWithoutUserTwoInput>;
  configuration?: InputMaybe<UserConfigurationCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  experience?: InputMaybe<UserExperienceCreateNestedOneWithoutUserInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  notifications?: InputMaybe<UserNotificationCreateNestedManyWithoutUserInput>;
  password?: InputMaybe<Scalars['String']['input']>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  tags?: InputMaybe<TagCreateNestedManyWithoutUserInput>;
  typingRuns?: InputMaybe<TypingRunCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type UserCreateWithoutChallenge_Matches_TwoInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  challenge_matches_one?: InputMaybe<UsersChallengeMatchCreateNestedManyWithoutUserOneInput>;
  challenges_one?: InputMaybe<UsersChallengeCreateNestedManyWithoutUserOneInput>;
  challenges_two?: InputMaybe<UsersChallengeCreateNestedManyWithoutUserTwoInput>;
  configuration?: InputMaybe<UserConfigurationCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  experience?: InputMaybe<UserExperienceCreateNestedOneWithoutUserInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  notifications?: InputMaybe<UserNotificationCreateNestedManyWithoutUserInput>;
  password?: InputMaybe<Scalars['String']['input']>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  tags?: InputMaybe<TagCreateNestedManyWithoutUserInput>;
  typingRuns?: InputMaybe<TypingRunCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type UserCreateWithoutChallenges_OneInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  challenge_matches_one?: InputMaybe<UsersChallengeMatchCreateNestedManyWithoutUserOneInput>;
  challenge_matches_two?: InputMaybe<UsersChallengeMatchCreateNestedManyWithoutUserTwoInput>;
  challenges_two?: InputMaybe<UsersChallengeCreateNestedManyWithoutUserTwoInput>;
  configuration?: InputMaybe<UserConfigurationCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  experience?: InputMaybe<UserExperienceCreateNestedOneWithoutUserInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  notifications?: InputMaybe<UserNotificationCreateNestedManyWithoutUserInput>;
  password?: InputMaybe<Scalars['String']['input']>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  tags?: InputMaybe<TagCreateNestedManyWithoutUserInput>;
  typingRuns?: InputMaybe<TypingRunCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type UserCreateWithoutChallenges_TwoInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  challenge_matches_one?: InputMaybe<UsersChallengeMatchCreateNestedManyWithoutUserOneInput>;
  challenge_matches_two?: InputMaybe<UsersChallengeMatchCreateNestedManyWithoutUserTwoInput>;
  challenges_one?: InputMaybe<UsersChallengeCreateNestedManyWithoutUserOneInput>;
  configuration?: InputMaybe<UserConfigurationCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  experience?: InputMaybe<UserExperienceCreateNestedOneWithoutUserInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  notifications?: InputMaybe<UserNotificationCreateNestedManyWithoutUserInput>;
  password?: InputMaybe<Scalars['String']['input']>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  tags?: InputMaybe<TagCreateNestedManyWithoutUserInput>;
  typingRuns?: InputMaybe<TypingRunCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type UserCreateWithoutConfigurationInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  challenge_matches_one?: InputMaybe<UsersChallengeMatchCreateNestedManyWithoutUserOneInput>;
  challenge_matches_two?: InputMaybe<UsersChallengeMatchCreateNestedManyWithoutUserTwoInput>;
  challenges_one?: InputMaybe<UsersChallengeCreateNestedManyWithoutUserOneInput>;
  challenges_two?: InputMaybe<UsersChallengeCreateNestedManyWithoutUserTwoInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  experience?: InputMaybe<UserExperienceCreateNestedOneWithoutUserInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  notifications?: InputMaybe<UserNotificationCreateNestedManyWithoutUserInput>;
  password?: InputMaybe<Scalars['String']['input']>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  tags?: InputMaybe<TagCreateNestedManyWithoutUserInput>;
  typingRuns?: InputMaybe<TypingRunCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type UserCreateWithoutExperienceInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  challenge_matches_one?: InputMaybe<UsersChallengeMatchCreateNestedManyWithoutUserOneInput>;
  challenge_matches_two?: InputMaybe<UsersChallengeMatchCreateNestedManyWithoutUserTwoInput>;
  challenges_one?: InputMaybe<UsersChallengeCreateNestedManyWithoutUserOneInput>;
  challenges_two?: InputMaybe<UsersChallengeCreateNestedManyWithoutUserTwoInput>;
  configuration?: InputMaybe<UserConfigurationCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  notifications?: InputMaybe<UserNotificationCreateNestedManyWithoutUserInput>;
  password?: InputMaybe<Scalars['String']['input']>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  tags?: InputMaybe<TagCreateNestedManyWithoutUserInput>;
  typingRuns?: InputMaybe<TypingRunCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type UserCreateWithoutNotificationsInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  challenge_matches_one?: InputMaybe<UsersChallengeMatchCreateNestedManyWithoutUserOneInput>;
  challenge_matches_two?: InputMaybe<UsersChallengeMatchCreateNestedManyWithoutUserTwoInput>;
  challenges_one?: InputMaybe<UsersChallengeCreateNestedManyWithoutUserOneInput>;
  challenges_two?: InputMaybe<UsersChallengeCreateNestedManyWithoutUserTwoInput>;
  configuration?: InputMaybe<UserConfigurationCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  experience?: InputMaybe<UserExperienceCreateNestedOneWithoutUserInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  tags?: InputMaybe<TagCreateNestedManyWithoutUserInput>;
  typingRuns?: InputMaybe<TypingRunCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type UserCreateWithoutSessionsInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  challenge_matches_one?: InputMaybe<UsersChallengeMatchCreateNestedManyWithoutUserOneInput>;
  challenge_matches_two?: InputMaybe<UsersChallengeMatchCreateNestedManyWithoutUserTwoInput>;
  challenges_one?: InputMaybe<UsersChallengeCreateNestedManyWithoutUserOneInput>;
  challenges_two?: InputMaybe<UsersChallengeCreateNestedManyWithoutUserTwoInput>;
  configuration?: InputMaybe<UserConfigurationCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  experience?: InputMaybe<UserExperienceCreateNestedOneWithoutUserInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  notifications?: InputMaybe<UserNotificationCreateNestedManyWithoutUserInput>;
  password?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<TagCreateNestedManyWithoutUserInput>;
  typingRuns?: InputMaybe<TypingRunCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type UserCreateWithoutTagsInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  challenge_matches_one?: InputMaybe<UsersChallengeMatchCreateNestedManyWithoutUserOneInput>;
  challenge_matches_two?: InputMaybe<UsersChallengeMatchCreateNestedManyWithoutUserTwoInput>;
  challenges_one?: InputMaybe<UsersChallengeCreateNestedManyWithoutUserOneInput>;
  challenges_two?: InputMaybe<UsersChallengeCreateNestedManyWithoutUserTwoInput>;
  configuration?: InputMaybe<UserConfigurationCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  experience?: InputMaybe<UserExperienceCreateNestedOneWithoutUserInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  notifications?: InputMaybe<UserNotificationCreateNestedManyWithoutUserInput>;
  password?: InputMaybe<Scalars['String']['input']>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  typingRuns?: InputMaybe<TypingRunCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type UserCreateWithoutTypingRunsInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  challenge_matches_one?: InputMaybe<UsersChallengeMatchCreateNestedManyWithoutUserOneInput>;
  challenge_matches_two?: InputMaybe<UsersChallengeMatchCreateNestedManyWithoutUserTwoInput>;
  challenges_one?: InputMaybe<UsersChallengeCreateNestedManyWithoutUserOneInput>;
  challenges_two?: InputMaybe<UsersChallengeCreateNestedManyWithoutUserTwoInput>;
  configuration?: InputMaybe<UserConfigurationCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  experience?: InputMaybe<UserExperienceCreateNestedOneWithoutUserInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  notifications?: InputMaybe<UserNotificationCreateNestedManyWithoutUserInput>;
  password?: InputMaybe<Scalars['String']['input']>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  tags?: InputMaybe<TagCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type UserExperience = {
  __typename?: 'UserExperience';
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  level: Scalars['Int']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  points: Scalars['Int']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  userId: Scalars['String']['output'];
};

export type UserExperienceAvgAggregate = {
  __typename?: 'UserExperienceAvgAggregate';
  level?: Maybe<Scalars['Float']['output']>;
  points?: Maybe<Scalars['Float']['output']>;
};

export type UserExperienceAvgOrderByAggregateInput = {
  level?: InputMaybe<SortOrder>;
  points?: InputMaybe<SortOrder>;
};

export type UserExperienceCountAggregate = {
  __typename?: 'UserExperienceCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  level: Scalars['Int']['output'];
  metadata: Scalars['Int']['output'];
  points: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type UserExperienceCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  level?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrder>;
  points?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserExperienceCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  points?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user: UserCreateNestedOneWithoutExperienceInput;
};

export type UserExperienceCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  points?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userId: Scalars['String']['input'];
};

export type UserExperienceCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<UserExperienceWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserExperienceCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<UserExperienceCreateWithoutUserInput>;
};

export type UserExperienceCreateOrConnectWithoutUserInput = {
  create: UserExperienceCreateWithoutUserInput;
  where: UserExperienceWhereUniqueInput;
};

export type UserExperienceCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  points?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type UserExperienceGroupBy = {
  __typename?: 'UserExperienceGroupBy';
  _avg?: Maybe<UserExperienceAvgAggregate>;
  _count?: Maybe<UserExperienceCountAggregate>;
  _max?: Maybe<UserExperienceMaxAggregate>;
  _min?: Maybe<UserExperienceMinAggregate>;
  _sum?: Maybe<UserExperienceSumAggregate>;
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  level: Scalars['Int']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  points: Scalars['Int']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  userId: Scalars['String']['output'];
};

export type UserExperienceMaxAggregate = {
  __typename?: 'UserExperienceMaxAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  level?: Maybe<Scalars['Int']['output']>;
  points?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type UserExperienceMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  level?: InputMaybe<SortOrder>;
  points?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserExperienceMinAggregate = {
  __typename?: 'UserExperienceMinAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  level?: Maybe<Scalars['Int']['output']>;
  points?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type UserExperienceMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  level?: InputMaybe<SortOrder>;
  points?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserExperienceNullableRelationFilter = {
  is?: InputMaybe<UserExperienceWhereInput>;
  isNot?: InputMaybe<UserExperienceWhereInput>;
};

export enum UserExperienceOrderByRelevanceFieldEnum {
  Id = 'id',
  UserId = 'userId'
}

export type UserExperienceOrderByRelevanceInput = {
  fields: Array<UserExperienceOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type UserExperienceOrderByWithAggregationInput = {
  _avg?: InputMaybe<UserExperienceAvgOrderByAggregateInput>;
  _count?: InputMaybe<UserExperienceCountOrderByAggregateInput>;
  _max?: InputMaybe<UserExperienceMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserExperienceMinOrderByAggregateInput>;
  _sum?: InputMaybe<UserExperienceSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  level?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrderInput>;
  points?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserExperienceOrderByWithRelationInput = {
  _relevance?: InputMaybe<UserExperienceOrderByRelevanceInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  level?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrderInput>;
  points?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum UserExperienceScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Level = 'level',
  Metadata = 'metadata',
  Points = 'points',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type UserExperienceScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserExperienceScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserExperienceScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserExperienceScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  level?: InputMaybe<IntWithAggregatesFilter>;
  metadata?: InputMaybe<JsonNullableWithAggregatesFilter>;
  points?: InputMaybe<IntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type UserExperienceSumAggregate = {
  __typename?: 'UserExperienceSumAggregate';
  level?: Maybe<Scalars['Int']['output']>;
  points?: Maybe<Scalars['Int']['output']>;
};

export type UserExperienceSumOrderByAggregateInput = {
  level?: InputMaybe<SortOrder>;
  points?: InputMaybe<SortOrder>;
};

export type UserExperienceUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  level?: InputMaybe<IntFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  points?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutExperienceNestedInput>;
};

export type UserExperienceUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  level?: InputMaybe<IntFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  points?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserExperienceUpdateOneWithoutUserNestedInput = {
  connect?: InputMaybe<UserExperienceWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserExperienceCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<UserExperienceCreateWithoutUserInput>;
  delete?: InputMaybe<UserExperienceWhereInput>;
  disconnect?: InputMaybe<UserExperienceWhereInput>;
  update?: InputMaybe<UserExperienceUpdateToOneWithWhereWithoutUserInput>;
  upsert?: InputMaybe<UserExperienceUpsertWithoutUserInput>;
};

export type UserExperienceUpdateToOneWithWhereWithoutUserInput = {
  data: UserExperienceUpdateWithoutUserInput;
  where?: InputMaybe<UserExperienceWhereInput>;
};

export type UserExperienceUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  level?: InputMaybe<IntFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  points?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserExperienceUpsertWithoutUserInput = {
  create: UserExperienceCreateWithoutUserInput;
  update: UserExperienceUpdateWithoutUserInput;
  where?: InputMaybe<UserExperienceWhereInput>;
};

export type UserExperienceWhereInput = {
  AND?: InputMaybe<Array<UserExperienceWhereInput>>;
  NOT?: InputMaybe<Array<UserExperienceWhereInput>>;
  OR?: InputMaybe<Array<UserExperienceWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  level?: InputMaybe<IntFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  points?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type UserExperienceWhereUniqueInput = {
  AND?: InputMaybe<Array<UserExperienceWhereInput>>;
  NOT?: InputMaybe<Array<UserExperienceWhereInput>>;
  OR?: InputMaybe<Array<UserExperienceWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  level?: InputMaybe<IntFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  points?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  createdAt: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  emailVerified?: Maybe<Scalars['DateTimeISO']['output']>;
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailVerified?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type UserMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailVerified?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type UserMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserNotification = {
  __typename?: 'UserNotification';
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  /** [UserNotificationPayload] */
  payload?: Maybe<Scalars['JSON']['output']>;
  read: Scalars['Boolean']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  userId: Scalars['String']['output'];
};

export type UserNotificationCountAggregate = {
  __typename?: 'UserNotificationCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  metadata: Scalars['Int']['output'];
  payload: Scalars['Int']['output'];
  read: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type UserNotificationCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrder>;
  payload?: InputMaybe<SortOrder>;
  read?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserNotificationCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  payload?: InputMaybe<Scalars['JSON']['input']>;
  read?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user: UserCreateNestedOneWithoutNotificationsInput;
};

export type UserNotificationCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  payload?: InputMaybe<Scalars['JSON']['input']>;
  read?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userId: Scalars['String']['input'];
};

export type UserNotificationCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  payload?: InputMaybe<Scalars['JSON']['input']>;
  read?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type UserNotificationCreateManyUserInputEnvelope = {
  data: Array<UserNotificationCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserNotificationCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<UserNotificationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserNotificationCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserNotificationCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserNotificationCreateManyUserInputEnvelope>;
};

export type UserNotificationCreateOrConnectWithoutUserInput = {
  create: UserNotificationCreateWithoutUserInput;
  where: UserNotificationWhereUniqueInput;
};

export type UserNotificationCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  payload?: InputMaybe<Scalars['JSON']['input']>;
  read?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type UserNotificationGroupBy = {
  __typename?: 'UserNotificationGroupBy';
  _count?: Maybe<UserNotificationCountAggregate>;
  _max?: Maybe<UserNotificationMaxAggregate>;
  _min?: Maybe<UserNotificationMinAggregate>;
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  payload?: Maybe<Scalars['JSON']['output']>;
  read: Scalars['Boolean']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  userId: Scalars['String']['output'];
};

export type UserNotificationListRelationFilter = {
  every?: InputMaybe<UserNotificationWhereInput>;
  none?: InputMaybe<UserNotificationWhereInput>;
  some?: InputMaybe<UserNotificationWhereInput>;
};

export type UserNotificationMaxAggregate = {
  __typename?: 'UserNotificationMaxAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  read?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type UserNotificationMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  read?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserNotificationMinAggregate = {
  __typename?: 'UserNotificationMinAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  read?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type UserNotificationMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  read?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserNotificationOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum UserNotificationOrderByRelevanceFieldEnum {
  Id = 'id',
  UserId = 'userId'
}

export type UserNotificationOrderByRelevanceInput = {
  fields: Array<UserNotificationOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type UserNotificationOrderByWithAggregationInput = {
  _count?: InputMaybe<UserNotificationCountOrderByAggregateInput>;
  _max?: InputMaybe<UserNotificationMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserNotificationMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrderInput>;
  payload?: InputMaybe<SortOrderInput>;
  read?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserNotificationOrderByWithRelationInput = {
  _relevance?: InputMaybe<UserNotificationOrderByRelevanceInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrderInput>;
  payload?: InputMaybe<SortOrderInput>;
  read?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum UserNotificationScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Metadata = 'metadata',
  Payload = 'payload',
  Read = 'read',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type UserNotificationScalarWhereInput = {
  AND?: InputMaybe<Array<UserNotificationScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserNotificationScalarWhereInput>>;
  OR?: InputMaybe<Array<UserNotificationScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  payload?: InputMaybe<JsonNullableFilter>;
  read?: InputMaybe<BoolFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type UserNotificationScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserNotificationScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserNotificationScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserNotificationScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  metadata?: InputMaybe<JsonNullableWithAggregatesFilter>;
  payload?: InputMaybe<JsonNullableWithAggregatesFilter>;
  read?: InputMaybe<BoolWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type UserNotificationUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  payload?: InputMaybe<Scalars['JSON']['input']>;
  read?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutNotificationsNestedInput>;
};

export type UserNotificationUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  payload?: InputMaybe<Scalars['JSON']['input']>;
  read?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserNotificationUpdateManyWithWhereWithoutUserInput = {
  data: UserNotificationUpdateManyMutationInput;
  where: UserNotificationScalarWhereInput;
};

export type UserNotificationUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<UserNotificationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserNotificationCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserNotificationCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserNotificationCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<UserNotificationWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserNotificationScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserNotificationWhereUniqueInput>>;
  set?: InputMaybe<Array<UserNotificationWhereUniqueInput>>;
  update?: InputMaybe<Array<UserNotificationUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<UserNotificationUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<UserNotificationUpsertWithWhereUniqueWithoutUserInput>>;
};

export type UserNotificationUpdateWithWhereUniqueWithoutUserInput = {
  data: UserNotificationUpdateWithoutUserInput;
  where: UserNotificationWhereUniqueInput;
};

export type UserNotificationUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  payload?: InputMaybe<Scalars['JSON']['input']>;
  read?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserNotificationUpsertWithWhereUniqueWithoutUserInput = {
  create: UserNotificationCreateWithoutUserInput;
  update: UserNotificationUpdateWithoutUserInput;
  where: UserNotificationWhereUniqueInput;
};

export type UserNotificationWhereInput = {
  AND?: InputMaybe<Array<UserNotificationWhereInput>>;
  NOT?: InputMaybe<Array<UserNotificationWhereInput>>;
  OR?: InputMaybe<Array<UserNotificationWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  payload?: InputMaybe<JsonNullableFilter>;
  read?: InputMaybe<BoolFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type UserNotificationWhereUniqueInput = {
  AND?: InputMaybe<Array<UserNotificationWhereInput>>;
  NOT?: InputMaybe<Array<UserNotificationWhereInput>>;
  OR?: InputMaybe<Array<UserNotificationWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<JsonNullableFilter>;
  payload?: InputMaybe<JsonNullableFilter>;
  read?: InputMaybe<BoolFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export enum UserOrderByRelevanceFieldEnum {
  Email = 'email',
  Id = 'id',
  Image = 'image',
  Name = 'name',
  Password = 'password'
}

export type UserOrderByRelevanceInput = {
  fields: Array<UserOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type UserOrderByWithAggregationInput = {
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrderInput>;
  metadata?: InputMaybe<SortOrderInput>;
  name?: InputMaybe<SortOrderInput>;
  password?: InputMaybe<SortOrderInput>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  _relevance?: InputMaybe<UserOrderByRelevanceInput>;
  accounts?: InputMaybe<AccountOrderByRelationAggregateInput>;
  challenge_matches_one?: InputMaybe<UsersChallengeMatchOrderByRelationAggregateInput>;
  challenge_matches_two?: InputMaybe<UsersChallengeMatchOrderByRelationAggregateInput>;
  challenges_one?: InputMaybe<UsersChallengeOrderByRelationAggregateInput>;
  challenges_two?: InputMaybe<UsersChallengeOrderByRelationAggregateInput>;
  configuration?: InputMaybe<UserConfigurationOrderByWithRelationInput>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrderInput>;
  experience?: InputMaybe<UserExperienceOrderByWithRelationInput>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrderInput>;
  metadata?: InputMaybe<SortOrderInput>;
  name?: InputMaybe<SortOrderInput>;
  notifications?: InputMaybe<UserNotificationOrderByRelationAggregateInput>;
  password?: InputMaybe<SortOrderInput>;
  sessions?: InputMaybe<SessionOrderByRelationAggregateInput>;
  tags?: InputMaybe<TagOrderByRelationAggregateInput>;
  typingRuns?: InputMaybe<TypingRunOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Email = 'email',
  EmailVerified = 'emailVerified',
  Id = 'id',
  Image = 'image',
  Metadata = 'metadata',
  Name = 'name',
  Password = 'password',
  UpdatedAt = 'updatedAt'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  emailVerified?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  image?: InputMaybe<StringNullableWithAggregatesFilter>;
  metadata?: InputMaybe<JsonNullableWithAggregatesFilter>;
  name?: InputMaybe<StringNullableWithAggregatesFilter>;
  password?: InputMaybe<StringNullableWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type UserSearchResponse = {
  __typename?: 'UserSearchResponse';
  _count?: Maybe<UserCount>;
  accounts: Array<Account>;
  challenge_matches_one: Array<UsersChallengeMatch>;
  challenge_matches_two: Array<UsersChallengeMatch>;
  challenges_one: Array<UsersChallenge>;
  challenges_two: Array<UsersChallenge>;
  configuration?: Maybe<UserConfiguration>;
  createdAt: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  emailVerified?: Maybe<Scalars['DateTimeISO']['output']>;
  experience?: Maybe<UserExperience>;
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  /** [UserMetadata] */
  metadata?: Maybe<Scalars['JSON']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  notifications: Array<UserNotification>;
  password?: Maybe<Scalars['String']['output']>;
  sessions: Array<Session>;
  tags: Array<Tag>;
  typingRuns: Array<TypingRun>;
  updatedAt: Scalars['DateTimeISO']['output'];
};


export type UserSearchResponseAccountsArgs = {
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  distinct?: InputMaybe<Array<AccountScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AccountOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccountWhereInput>;
};


export type UserSearchResponseChallenge_Matches_OneArgs = {
  cursor?: InputMaybe<UsersChallengeMatchWhereUniqueInput>;
  distinct?: InputMaybe<Array<UsersChallengeMatchScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UsersChallengeMatchOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UsersChallengeMatchWhereInput>;
};


export type UserSearchResponseChallenge_Matches_TwoArgs = {
  cursor?: InputMaybe<UsersChallengeMatchWhereUniqueInput>;
  distinct?: InputMaybe<Array<UsersChallengeMatchScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UsersChallengeMatchOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UsersChallengeMatchWhereInput>;
};


export type UserSearchResponseChallenges_OneArgs = {
  cursor?: InputMaybe<UsersChallengeWhereUniqueInput>;
  distinct?: InputMaybe<Array<UsersChallengeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UsersChallengeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UsersChallengeWhereInput>;
};


export type UserSearchResponseChallenges_TwoArgs = {
  cursor?: InputMaybe<UsersChallengeWhereUniqueInput>;
  distinct?: InputMaybe<Array<UsersChallengeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UsersChallengeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UsersChallengeWhereInput>;
};


export type UserSearchResponseConfigurationArgs = {
  where?: InputMaybe<UserConfigurationWhereInput>;
};


export type UserSearchResponseExperienceArgs = {
  where?: InputMaybe<UserExperienceWhereInput>;
};


export type UserSearchResponseNotificationsArgs = {
  cursor?: InputMaybe<UserNotificationWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserNotificationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserNotificationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserNotificationWhereInput>;
};


export type UserSearchResponseSessionsArgs = {
  cursor?: InputMaybe<SessionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SessionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SessionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SessionWhereInput>;
};


export type UserSearchResponseTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  distinct?: InputMaybe<Array<TagScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TagOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TagWhereInput>;
};


export type UserSearchResponseTypingRunsArgs = {
  cursor?: InputMaybe<TypingRunWhereUniqueInput>;
  distinct?: InputMaybe<Array<TypingRunScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TypingRunOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TypingRunWhereInput>;
};

export type UserSignInInput = {
  email?: Scalars['String']['input'];
  password?: Scalars['String']['input'];
  username?: Scalars['String']['input'];
};

export type UserSignUpInput = {
  email?: Scalars['String']['input'];
  password?: Scalars['String']['input'];
  username?: Scalars['String']['input'];
};

export type UserUpdateInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  challenge_matches_one?: InputMaybe<UsersChallengeMatchUpdateManyWithoutUserOneNestedInput>;
  challenge_matches_two?: InputMaybe<UsersChallengeMatchUpdateManyWithoutUserTwoNestedInput>;
  challenges_one?: InputMaybe<UsersChallengeUpdateManyWithoutUserOneNestedInput>;
  challenges_two?: InputMaybe<UsersChallengeUpdateManyWithoutUserTwoNestedInput>;
  configuration?: InputMaybe<UserConfigurationUpdateOneWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  experience?: InputMaybe<UserExperienceUpdateOneWithoutUserNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<UserNotificationUpdateManyWithoutUserNestedInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserNestedInput>;
  tags?: InputMaybe<TagUpdateManyWithoutUserNestedInput>;
  typingRuns?: InputMaybe<TypingRunUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAccountsInput>;
  create?: InputMaybe<UserCreateWithoutAccountsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutAccountsInput>;
  upsert?: InputMaybe<UserUpsertWithoutAccountsInput>;
};

export type UserUpdateOneRequiredWithoutChallenge_Matches_OneNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutChallenge_Matches_OneInput>;
  create?: InputMaybe<UserCreateWithoutChallenge_Matches_OneInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutChallenge_Matches_OneInput>;
  upsert?: InputMaybe<UserUpsertWithoutChallenge_Matches_OneInput>;
};

export type UserUpdateOneRequiredWithoutChallenge_Matches_TwoNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutChallenge_Matches_TwoInput>;
  create?: InputMaybe<UserCreateWithoutChallenge_Matches_TwoInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutChallenge_Matches_TwoInput>;
  upsert?: InputMaybe<UserUpsertWithoutChallenge_Matches_TwoInput>;
};

export type UserUpdateOneRequiredWithoutChallenges_OneNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutChallenges_OneInput>;
  create?: InputMaybe<UserCreateWithoutChallenges_OneInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutChallenges_OneInput>;
  upsert?: InputMaybe<UserUpsertWithoutChallenges_OneInput>;
};

export type UserUpdateOneRequiredWithoutChallenges_TwoNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutChallenges_TwoInput>;
  create?: InputMaybe<UserCreateWithoutChallenges_TwoInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutChallenges_TwoInput>;
  upsert?: InputMaybe<UserUpsertWithoutChallenges_TwoInput>;
};

export type UserUpdateOneRequiredWithoutConfigurationNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutConfigurationInput>;
  create?: InputMaybe<UserCreateWithoutConfigurationInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutConfigurationInput>;
  upsert?: InputMaybe<UserUpsertWithoutConfigurationInput>;
};

export type UserUpdateOneRequiredWithoutExperienceNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutExperienceInput>;
  create?: InputMaybe<UserCreateWithoutExperienceInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutExperienceInput>;
  upsert?: InputMaybe<UserUpsertWithoutExperienceInput>;
};

export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutNotificationsInput>;
  create?: InputMaybe<UserCreateWithoutNotificationsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutNotificationsInput>;
  upsert?: InputMaybe<UserUpsertWithoutNotificationsInput>;
};

export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSessionsInput>;
  create?: InputMaybe<UserCreateWithoutSessionsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutSessionsInput>;
  upsert?: InputMaybe<UserUpsertWithoutSessionsInput>;
};

export type UserUpdateOneRequiredWithoutTagsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutTagsInput>;
  create?: InputMaybe<UserCreateWithoutTagsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutTagsInput>;
  upsert?: InputMaybe<UserUpsertWithoutTagsInput>;
};

export type UserUpdateOneRequiredWithoutTypingRunsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutTypingRunsInput>;
  create?: InputMaybe<UserCreateWithoutTypingRunsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutTypingRunsInput>;
  upsert?: InputMaybe<UserUpsertWithoutTypingRunsInput>;
};

export type UserUpdateToOneWithWhereWithoutAccountsInput = {
  data: UserUpdateWithoutAccountsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutChallenge_Matches_OneInput = {
  data: UserUpdateWithoutChallenge_Matches_OneInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutChallenge_Matches_TwoInput = {
  data: UserUpdateWithoutChallenge_Matches_TwoInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutChallenges_OneInput = {
  data: UserUpdateWithoutChallenges_OneInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutChallenges_TwoInput = {
  data: UserUpdateWithoutChallenges_TwoInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutConfigurationInput = {
  data: UserUpdateWithoutConfigurationInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutExperienceInput = {
  data: UserUpdateWithoutExperienceInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
  data: UserUpdateWithoutNotificationsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutSessionsInput = {
  data: UserUpdateWithoutSessionsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutTagsInput = {
  data: UserUpdateWithoutTagsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutTypingRunsInput = {
  data: UserUpdateWithoutTypingRunsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateWithoutAccountsInput = {
  challenge_matches_one?: InputMaybe<UsersChallengeMatchUpdateManyWithoutUserOneNestedInput>;
  challenge_matches_two?: InputMaybe<UsersChallengeMatchUpdateManyWithoutUserTwoNestedInput>;
  challenges_one?: InputMaybe<UsersChallengeUpdateManyWithoutUserOneNestedInput>;
  challenges_two?: InputMaybe<UsersChallengeUpdateManyWithoutUserTwoNestedInput>;
  configuration?: InputMaybe<UserConfigurationUpdateOneWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  experience?: InputMaybe<UserExperienceUpdateOneWithoutUserNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<UserNotificationUpdateManyWithoutUserNestedInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserNestedInput>;
  tags?: InputMaybe<TagUpdateManyWithoutUserNestedInput>;
  typingRuns?: InputMaybe<TypingRunUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutChallenge_Matches_OneInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  challenge_matches_two?: InputMaybe<UsersChallengeMatchUpdateManyWithoutUserTwoNestedInput>;
  challenges_one?: InputMaybe<UsersChallengeUpdateManyWithoutUserOneNestedInput>;
  challenges_two?: InputMaybe<UsersChallengeUpdateManyWithoutUserTwoNestedInput>;
  configuration?: InputMaybe<UserConfigurationUpdateOneWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  experience?: InputMaybe<UserExperienceUpdateOneWithoutUserNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<UserNotificationUpdateManyWithoutUserNestedInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserNestedInput>;
  tags?: InputMaybe<TagUpdateManyWithoutUserNestedInput>;
  typingRuns?: InputMaybe<TypingRunUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutChallenge_Matches_TwoInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  challenge_matches_one?: InputMaybe<UsersChallengeMatchUpdateManyWithoutUserOneNestedInput>;
  challenges_one?: InputMaybe<UsersChallengeUpdateManyWithoutUserOneNestedInput>;
  challenges_two?: InputMaybe<UsersChallengeUpdateManyWithoutUserTwoNestedInput>;
  configuration?: InputMaybe<UserConfigurationUpdateOneWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  experience?: InputMaybe<UserExperienceUpdateOneWithoutUserNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<UserNotificationUpdateManyWithoutUserNestedInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserNestedInput>;
  tags?: InputMaybe<TagUpdateManyWithoutUserNestedInput>;
  typingRuns?: InputMaybe<TypingRunUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutChallenges_OneInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  challenge_matches_one?: InputMaybe<UsersChallengeMatchUpdateManyWithoutUserOneNestedInput>;
  challenge_matches_two?: InputMaybe<UsersChallengeMatchUpdateManyWithoutUserTwoNestedInput>;
  challenges_two?: InputMaybe<UsersChallengeUpdateManyWithoutUserTwoNestedInput>;
  configuration?: InputMaybe<UserConfigurationUpdateOneWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  experience?: InputMaybe<UserExperienceUpdateOneWithoutUserNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<UserNotificationUpdateManyWithoutUserNestedInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserNestedInput>;
  tags?: InputMaybe<TagUpdateManyWithoutUserNestedInput>;
  typingRuns?: InputMaybe<TypingRunUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutChallenges_TwoInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  challenge_matches_one?: InputMaybe<UsersChallengeMatchUpdateManyWithoutUserOneNestedInput>;
  challenge_matches_two?: InputMaybe<UsersChallengeMatchUpdateManyWithoutUserTwoNestedInput>;
  challenges_one?: InputMaybe<UsersChallengeUpdateManyWithoutUserOneNestedInput>;
  configuration?: InputMaybe<UserConfigurationUpdateOneWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  experience?: InputMaybe<UserExperienceUpdateOneWithoutUserNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<UserNotificationUpdateManyWithoutUserNestedInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserNestedInput>;
  tags?: InputMaybe<TagUpdateManyWithoutUserNestedInput>;
  typingRuns?: InputMaybe<TypingRunUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutConfigurationInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  challenge_matches_one?: InputMaybe<UsersChallengeMatchUpdateManyWithoutUserOneNestedInput>;
  challenge_matches_two?: InputMaybe<UsersChallengeMatchUpdateManyWithoutUserTwoNestedInput>;
  challenges_one?: InputMaybe<UsersChallengeUpdateManyWithoutUserOneNestedInput>;
  challenges_two?: InputMaybe<UsersChallengeUpdateManyWithoutUserTwoNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  experience?: InputMaybe<UserExperienceUpdateOneWithoutUserNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<UserNotificationUpdateManyWithoutUserNestedInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserNestedInput>;
  tags?: InputMaybe<TagUpdateManyWithoutUserNestedInput>;
  typingRuns?: InputMaybe<TypingRunUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutExperienceInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  challenge_matches_one?: InputMaybe<UsersChallengeMatchUpdateManyWithoutUserOneNestedInput>;
  challenge_matches_two?: InputMaybe<UsersChallengeMatchUpdateManyWithoutUserTwoNestedInput>;
  challenges_one?: InputMaybe<UsersChallengeUpdateManyWithoutUserOneNestedInput>;
  challenges_two?: InputMaybe<UsersChallengeUpdateManyWithoutUserTwoNestedInput>;
  configuration?: InputMaybe<UserConfigurationUpdateOneWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<UserNotificationUpdateManyWithoutUserNestedInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserNestedInput>;
  tags?: InputMaybe<TagUpdateManyWithoutUserNestedInput>;
  typingRuns?: InputMaybe<TypingRunUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutNotificationsInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  challenge_matches_one?: InputMaybe<UsersChallengeMatchUpdateManyWithoutUserOneNestedInput>;
  challenge_matches_two?: InputMaybe<UsersChallengeMatchUpdateManyWithoutUserTwoNestedInput>;
  challenges_one?: InputMaybe<UsersChallengeUpdateManyWithoutUserOneNestedInput>;
  challenges_two?: InputMaybe<UsersChallengeUpdateManyWithoutUserTwoNestedInput>;
  configuration?: InputMaybe<UserConfigurationUpdateOneWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  experience?: InputMaybe<UserExperienceUpdateOneWithoutUserNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserNestedInput>;
  tags?: InputMaybe<TagUpdateManyWithoutUserNestedInput>;
  typingRuns?: InputMaybe<TypingRunUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutSessionsInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  challenge_matches_one?: InputMaybe<UsersChallengeMatchUpdateManyWithoutUserOneNestedInput>;
  challenge_matches_two?: InputMaybe<UsersChallengeMatchUpdateManyWithoutUserTwoNestedInput>;
  challenges_one?: InputMaybe<UsersChallengeUpdateManyWithoutUserOneNestedInput>;
  challenges_two?: InputMaybe<UsersChallengeUpdateManyWithoutUserTwoNestedInput>;
  configuration?: InputMaybe<UserConfigurationUpdateOneWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  experience?: InputMaybe<UserExperienceUpdateOneWithoutUserNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<UserNotificationUpdateManyWithoutUserNestedInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  tags?: InputMaybe<TagUpdateManyWithoutUserNestedInput>;
  typingRuns?: InputMaybe<TypingRunUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutTagsInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  challenge_matches_one?: InputMaybe<UsersChallengeMatchUpdateManyWithoutUserOneNestedInput>;
  challenge_matches_two?: InputMaybe<UsersChallengeMatchUpdateManyWithoutUserTwoNestedInput>;
  challenges_one?: InputMaybe<UsersChallengeUpdateManyWithoutUserOneNestedInput>;
  challenges_two?: InputMaybe<UsersChallengeUpdateManyWithoutUserTwoNestedInput>;
  configuration?: InputMaybe<UserConfigurationUpdateOneWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  experience?: InputMaybe<UserExperienceUpdateOneWithoutUserNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<UserNotificationUpdateManyWithoutUserNestedInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserNestedInput>;
  typingRuns?: InputMaybe<TypingRunUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutTypingRunsInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  challenge_matches_one?: InputMaybe<UsersChallengeMatchUpdateManyWithoutUserOneNestedInput>;
  challenge_matches_two?: InputMaybe<UsersChallengeMatchUpdateManyWithoutUserTwoNestedInput>;
  challenges_one?: InputMaybe<UsersChallengeUpdateManyWithoutUserOneNestedInput>;
  challenges_two?: InputMaybe<UsersChallengeUpdateManyWithoutUserTwoNestedInput>;
  configuration?: InputMaybe<UserConfigurationUpdateOneWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  experience?: InputMaybe<UserExperienceUpdateOneWithoutUserNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<UserNotificationUpdateManyWithoutUserNestedInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserNestedInput>;
  tags?: InputMaybe<TagUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutAccountsInput = {
  create: UserCreateWithoutAccountsInput;
  update: UserUpdateWithoutAccountsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutChallenge_Matches_OneInput = {
  create: UserCreateWithoutChallenge_Matches_OneInput;
  update: UserUpdateWithoutChallenge_Matches_OneInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutChallenge_Matches_TwoInput = {
  create: UserCreateWithoutChallenge_Matches_TwoInput;
  update: UserUpdateWithoutChallenge_Matches_TwoInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutChallenges_OneInput = {
  create: UserCreateWithoutChallenges_OneInput;
  update: UserUpdateWithoutChallenges_OneInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutChallenges_TwoInput = {
  create: UserCreateWithoutChallenges_TwoInput;
  update: UserUpdateWithoutChallenges_TwoInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutConfigurationInput = {
  create: UserCreateWithoutConfigurationInput;
  update: UserUpdateWithoutConfigurationInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutExperienceInput = {
  create: UserCreateWithoutExperienceInput;
  update: UserUpdateWithoutExperienceInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutNotificationsInput = {
  create: UserCreateWithoutNotificationsInput;
  update: UserUpdateWithoutNotificationsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutSessionsInput = {
  create: UserCreateWithoutSessionsInput;
  update: UserUpdateWithoutSessionsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutTagsInput = {
  create: UserCreateWithoutTagsInput;
  update: UserUpdateWithoutTagsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutTypingRunsInput = {
  create: UserCreateWithoutTypingRunsInput;
  update: UserUpdateWithoutTypingRunsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  accounts?: InputMaybe<AccountListRelationFilter>;
  challenge_matches_one?: InputMaybe<UsersChallengeMatchListRelationFilter>;
  challenge_matches_two?: InputMaybe<UsersChallengeMatchListRelationFilter>;
  challenges_one?: InputMaybe<UsersChallengeListRelationFilter>;
  challenges_two?: InputMaybe<UsersChallengeListRelationFilter>;
  configuration?: InputMaybe<UserConfigurationNullableRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  emailVerified?: InputMaybe<DateTimeNullableFilter>;
  experience?: InputMaybe<UserExperienceNullableRelationFilter>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringNullableFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  name?: InputMaybe<StringNullableFilter>;
  notifications?: InputMaybe<UserNotificationListRelationFilter>;
  password?: InputMaybe<StringNullableFilter>;
  sessions?: InputMaybe<SessionListRelationFilter>;
  tags?: InputMaybe<TagListRelationFilter>;
  typingRuns?: InputMaybe<TypingRunListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  accounts?: InputMaybe<AccountListRelationFilter>;
  challenge_matches_one?: InputMaybe<UsersChallengeMatchListRelationFilter>;
  challenge_matches_two?: InputMaybe<UsersChallengeMatchListRelationFilter>;
  challenges_one?: InputMaybe<UsersChallengeListRelationFilter>;
  challenges_two?: InputMaybe<UsersChallengeListRelationFilter>;
  configuration?: InputMaybe<UserConfigurationNullableRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<DateTimeNullableFilter>;
  experience?: InputMaybe<UserExperienceNullableRelationFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<StringNullableFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  name?: InputMaybe<StringNullableFilter>;
  notifications?: InputMaybe<UserNotificationListRelationFilter>;
  password?: InputMaybe<StringNullableFilter>;
  sessions?: InputMaybe<SessionListRelationFilter>;
  tags?: InputMaybe<TagListRelationFilter>;
  typingRuns?: InputMaybe<TypingRunListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type UsersChallenge = {
  __typename?: 'UsersChallenge';
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  matchId: Scalars['String']['output'];
  /** [UsersChallengeMetadata] */
  metadata?: Maybe<Scalars['JSON']['output']>;
  state: UsersChallengeState;
  updatedAt: Scalars['DateTimeISO']['output'];
  userOneId: Scalars['String']['output'];
  userOneRunId?: Maybe<Scalars['String']['output']>;
  userTwoId: Scalars['String']['output'];
  userTwoRunId?: Maybe<Scalars['String']['output']>;
};

export type UsersChallengeCountAggregate = {
  __typename?: 'UsersChallengeCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  matchId: Scalars['Int']['output'];
  metadata: Scalars['Int']['output'];
  state: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userOneId: Scalars['Int']['output'];
  userOneRunId: Scalars['Int']['output'];
  userTwoId: Scalars['Int']['output'];
  userTwoRunId: Scalars['Int']['output'];
};

export type UsersChallengeCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  matchId?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userOneId?: InputMaybe<SortOrder>;
  userOneRunId?: InputMaybe<SortOrder>;
  userTwoId?: InputMaybe<SortOrder>;
  userTwoRunId?: InputMaybe<SortOrder>;
};

export type UsersChallengeCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  match: UsersChallengeMatchCreateNestedOneWithoutChallengesInput;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<UsersChallengeState>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userOne: UserCreateNestedOneWithoutChallenges_OneInput;
  userOneRun?: InputMaybe<TypingRunCreateNestedOneWithoutChallanges_OneInput>;
  userTwo: UserCreateNestedOneWithoutChallenges_TwoInput;
  userTwoRun?: InputMaybe<TypingRunCreateNestedOneWithoutChallenges_TwoInput>;
};

export type UsersChallengeCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  matchId: Scalars['String']['input'];
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<UsersChallengeState>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userOneId: Scalars['String']['input'];
  userOneRunId?: InputMaybe<Scalars['String']['input']>;
  userTwoId: Scalars['String']['input'];
  userTwoRunId?: InputMaybe<Scalars['String']['input']>;
};

export type UsersChallengeCreateManyMatchInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<UsersChallengeState>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userOneId: Scalars['String']['input'];
  userOneRunId?: InputMaybe<Scalars['String']['input']>;
  userTwoId: Scalars['String']['input'];
  userTwoRunId?: InputMaybe<Scalars['String']['input']>;
};

export type UsersChallengeCreateManyMatchInputEnvelope = {
  data: Array<UsersChallengeCreateManyMatchInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UsersChallengeCreateManyUserOneInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  matchId: Scalars['String']['input'];
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<UsersChallengeState>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userOneRunId?: InputMaybe<Scalars['String']['input']>;
  userTwoId: Scalars['String']['input'];
  userTwoRunId?: InputMaybe<Scalars['String']['input']>;
};

export type UsersChallengeCreateManyUserOneInputEnvelope = {
  data: Array<UsersChallengeCreateManyUserOneInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UsersChallengeCreateManyUserOneRunInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  matchId: Scalars['String']['input'];
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<UsersChallengeState>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userOneId: Scalars['String']['input'];
  userTwoId: Scalars['String']['input'];
  userTwoRunId?: InputMaybe<Scalars['String']['input']>;
};

export type UsersChallengeCreateManyUserOneRunInputEnvelope = {
  data: Array<UsersChallengeCreateManyUserOneRunInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UsersChallengeCreateManyUserTwoInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  matchId: Scalars['String']['input'];
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<UsersChallengeState>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userOneId: Scalars['String']['input'];
  userOneRunId?: InputMaybe<Scalars['String']['input']>;
  userTwoRunId?: InputMaybe<Scalars['String']['input']>;
};

export type UsersChallengeCreateManyUserTwoInputEnvelope = {
  data: Array<UsersChallengeCreateManyUserTwoInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UsersChallengeCreateManyUserTwoRunInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  matchId: Scalars['String']['input'];
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<UsersChallengeState>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userOneId: Scalars['String']['input'];
  userOneRunId?: InputMaybe<Scalars['String']['input']>;
  userTwoId: Scalars['String']['input'];
};

export type UsersChallengeCreateManyUserTwoRunInputEnvelope = {
  data: Array<UsersChallengeCreateManyUserTwoRunInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UsersChallengeCreateNestedManyWithoutMatchInput = {
  connect?: InputMaybe<Array<UsersChallengeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UsersChallengeCreateOrConnectWithoutMatchInput>>;
  create?: InputMaybe<Array<UsersChallengeCreateWithoutMatchInput>>;
  createMany?: InputMaybe<UsersChallengeCreateManyMatchInputEnvelope>;
};

export type UsersChallengeCreateNestedManyWithoutUserOneInput = {
  connect?: InputMaybe<Array<UsersChallengeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UsersChallengeCreateOrConnectWithoutUserOneInput>>;
  create?: InputMaybe<Array<UsersChallengeCreateWithoutUserOneInput>>;
  createMany?: InputMaybe<UsersChallengeCreateManyUserOneInputEnvelope>;
};

export type UsersChallengeCreateNestedManyWithoutUserOneRunInput = {
  connect?: InputMaybe<Array<UsersChallengeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UsersChallengeCreateOrConnectWithoutUserOneRunInput>>;
  create?: InputMaybe<Array<UsersChallengeCreateWithoutUserOneRunInput>>;
  createMany?: InputMaybe<UsersChallengeCreateManyUserOneRunInputEnvelope>;
};

export type UsersChallengeCreateNestedManyWithoutUserTwoInput = {
  connect?: InputMaybe<Array<UsersChallengeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UsersChallengeCreateOrConnectWithoutUserTwoInput>>;
  create?: InputMaybe<Array<UsersChallengeCreateWithoutUserTwoInput>>;
  createMany?: InputMaybe<UsersChallengeCreateManyUserTwoInputEnvelope>;
};

export type UsersChallengeCreateNestedManyWithoutUserTwoRunInput = {
  connect?: InputMaybe<Array<UsersChallengeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UsersChallengeCreateOrConnectWithoutUserTwoRunInput>>;
  create?: InputMaybe<Array<UsersChallengeCreateWithoutUserTwoRunInput>>;
  createMany?: InputMaybe<UsersChallengeCreateManyUserTwoRunInputEnvelope>;
};

export type UsersChallengeCreateOrConnectWithoutMatchInput = {
  create: UsersChallengeCreateWithoutMatchInput;
  where: UsersChallengeWhereUniqueInput;
};

export type UsersChallengeCreateOrConnectWithoutUserOneInput = {
  create: UsersChallengeCreateWithoutUserOneInput;
  where: UsersChallengeWhereUniqueInput;
};

export type UsersChallengeCreateOrConnectWithoutUserOneRunInput = {
  create: UsersChallengeCreateWithoutUserOneRunInput;
  where: UsersChallengeWhereUniqueInput;
};

export type UsersChallengeCreateOrConnectWithoutUserTwoInput = {
  create: UsersChallengeCreateWithoutUserTwoInput;
  where: UsersChallengeWhereUniqueInput;
};

export type UsersChallengeCreateOrConnectWithoutUserTwoRunInput = {
  create: UsersChallengeCreateWithoutUserTwoRunInput;
  where: UsersChallengeWhereUniqueInput;
};

export type UsersChallengeCreateWithoutMatchInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<UsersChallengeState>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userOne: UserCreateNestedOneWithoutChallenges_OneInput;
  userOneRun?: InputMaybe<TypingRunCreateNestedOneWithoutChallanges_OneInput>;
  userTwo: UserCreateNestedOneWithoutChallenges_TwoInput;
  userTwoRun?: InputMaybe<TypingRunCreateNestedOneWithoutChallenges_TwoInput>;
};

export type UsersChallengeCreateWithoutUserOneInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  match: UsersChallengeMatchCreateNestedOneWithoutChallengesInput;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<UsersChallengeState>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userOneRun?: InputMaybe<TypingRunCreateNestedOneWithoutChallanges_OneInput>;
  userTwo: UserCreateNestedOneWithoutChallenges_TwoInput;
  userTwoRun?: InputMaybe<TypingRunCreateNestedOneWithoutChallenges_TwoInput>;
};

export type UsersChallengeCreateWithoutUserOneRunInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  match: UsersChallengeMatchCreateNestedOneWithoutChallengesInput;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<UsersChallengeState>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userOne: UserCreateNestedOneWithoutChallenges_OneInput;
  userTwo: UserCreateNestedOneWithoutChallenges_TwoInput;
  userTwoRun?: InputMaybe<TypingRunCreateNestedOneWithoutChallenges_TwoInput>;
};

export type UsersChallengeCreateWithoutUserTwoInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  match: UsersChallengeMatchCreateNestedOneWithoutChallengesInput;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<UsersChallengeState>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userOne: UserCreateNestedOneWithoutChallenges_OneInput;
  userOneRun?: InputMaybe<TypingRunCreateNestedOneWithoutChallanges_OneInput>;
  userTwoRun?: InputMaybe<TypingRunCreateNestedOneWithoutChallenges_TwoInput>;
};

export type UsersChallengeCreateWithoutUserTwoRunInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  match: UsersChallengeMatchCreateNestedOneWithoutChallengesInput;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<UsersChallengeState>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userOne: UserCreateNestedOneWithoutChallenges_OneInput;
  userOneRun?: InputMaybe<TypingRunCreateNestedOneWithoutChallanges_OneInput>;
  userTwo: UserCreateNestedOneWithoutChallenges_TwoInput;
};

export type UsersChallengeGroupBy = {
  __typename?: 'UsersChallengeGroupBy';
  _count?: Maybe<UsersChallengeCountAggregate>;
  _max?: Maybe<UsersChallengeMaxAggregate>;
  _min?: Maybe<UsersChallengeMinAggregate>;
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  matchId: Scalars['String']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  state: UsersChallengeState;
  updatedAt: Scalars['DateTimeISO']['output'];
  userOneId: Scalars['String']['output'];
  userOneRunId?: Maybe<Scalars['String']['output']>;
  userTwoId: Scalars['String']['output'];
  userTwoRunId?: Maybe<Scalars['String']['output']>;
};

export type UsersChallengeListRelationFilter = {
  every?: InputMaybe<UsersChallengeWhereInput>;
  none?: InputMaybe<UsersChallengeWhereInput>;
  some?: InputMaybe<UsersChallengeWhereInput>;
};

export type UsersChallengeMatch = {
  __typename?: 'UsersChallengeMatch';
  _count?: Maybe<UsersChallengeMatchCount>;
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  /** [UsersChallengeMatchMetadata] */
  metadata?: Maybe<Scalars['JSON']['output']>;
  state: UsersChallengeMatchState;
  updatedAt: Scalars['DateTimeISO']['output'];
  userOneId: Scalars['String']['output'];
  userTwoId: Scalars['String']['output'];
};

export type UsersChallengeMatchCount = {
  __typename?: 'UsersChallengeMatchCount';
  challenges: Scalars['Int']['output'];
};


export type UsersChallengeMatchCountChallengesArgs = {
  where?: InputMaybe<UsersChallengeWhereInput>;
};

export type UsersChallengeMatchCountAggregate = {
  __typename?: 'UsersChallengeMatchCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  metadata: Scalars['Int']['output'];
  state: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userOneId: Scalars['Int']['output'];
  userTwoId: Scalars['Int']['output'];
};

export type UsersChallengeMatchCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userOneId?: InputMaybe<SortOrder>;
  userTwoId?: InputMaybe<SortOrder>;
};

export type UsersChallengeMatchCreateInput = {
  challenges?: InputMaybe<UsersChallengeCreateNestedManyWithoutMatchInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<UsersChallengeMatchState>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userOne: UserCreateNestedOneWithoutChallenge_Matches_OneInput;
  userTwo: UserCreateNestedOneWithoutChallenge_Matches_TwoInput;
};

export type UsersChallengeMatchCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<UsersChallengeMatchState>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userOneId: Scalars['String']['input'];
  userTwoId: Scalars['String']['input'];
};

export type UsersChallengeMatchCreateManyUserOneInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<UsersChallengeMatchState>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userTwoId: Scalars['String']['input'];
};

export type UsersChallengeMatchCreateManyUserOneInputEnvelope = {
  data: Array<UsersChallengeMatchCreateManyUserOneInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UsersChallengeMatchCreateManyUserTwoInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<UsersChallengeMatchState>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userOneId: Scalars['String']['input'];
};

export type UsersChallengeMatchCreateManyUserTwoInputEnvelope = {
  data: Array<UsersChallengeMatchCreateManyUserTwoInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UsersChallengeMatchCreateNestedManyWithoutUserOneInput = {
  connect?: InputMaybe<Array<UsersChallengeMatchWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UsersChallengeMatchCreateOrConnectWithoutUserOneInput>>;
  create?: InputMaybe<Array<UsersChallengeMatchCreateWithoutUserOneInput>>;
  createMany?: InputMaybe<UsersChallengeMatchCreateManyUserOneInputEnvelope>;
};

export type UsersChallengeMatchCreateNestedManyWithoutUserTwoInput = {
  connect?: InputMaybe<Array<UsersChallengeMatchWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UsersChallengeMatchCreateOrConnectWithoutUserTwoInput>>;
  create?: InputMaybe<Array<UsersChallengeMatchCreateWithoutUserTwoInput>>;
  createMany?: InputMaybe<UsersChallengeMatchCreateManyUserTwoInputEnvelope>;
};

export type UsersChallengeMatchCreateNestedOneWithoutChallengesInput = {
  connect?: InputMaybe<UsersChallengeMatchWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UsersChallengeMatchCreateOrConnectWithoutChallengesInput>;
  create?: InputMaybe<UsersChallengeMatchCreateWithoutChallengesInput>;
};

export type UsersChallengeMatchCreateOrConnectWithoutChallengesInput = {
  create: UsersChallengeMatchCreateWithoutChallengesInput;
  where: UsersChallengeMatchWhereUniqueInput;
};

export type UsersChallengeMatchCreateOrConnectWithoutUserOneInput = {
  create: UsersChallengeMatchCreateWithoutUserOneInput;
  where: UsersChallengeMatchWhereUniqueInput;
};

export type UsersChallengeMatchCreateOrConnectWithoutUserTwoInput = {
  create: UsersChallengeMatchCreateWithoutUserTwoInput;
  where: UsersChallengeMatchWhereUniqueInput;
};

export type UsersChallengeMatchCreateWithoutChallengesInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<UsersChallengeMatchState>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userOne: UserCreateNestedOneWithoutChallenge_Matches_OneInput;
  userTwo: UserCreateNestedOneWithoutChallenge_Matches_TwoInput;
};

export type UsersChallengeMatchCreateWithoutUserOneInput = {
  challenges?: InputMaybe<UsersChallengeCreateNestedManyWithoutMatchInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<UsersChallengeMatchState>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userTwo: UserCreateNestedOneWithoutChallenge_Matches_TwoInput;
};

export type UsersChallengeMatchCreateWithoutUserTwoInput = {
  challenges?: InputMaybe<UsersChallengeCreateNestedManyWithoutMatchInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<UsersChallengeMatchState>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userOne: UserCreateNestedOneWithoutChallenge_Matches_OneInput;
};

export type UsersChallengeMatchGroupBy = {
  __typename?: 'UsersChallengeMatchGroupBy';
  _count?: Maybe<UsersChallengeMatchCountAggregate>;
  _max?: Maybe<UsersChallengeMatchMaxAggregate>;
  _min?: Maybe<UsersChallengeMatchMinAggregate>;
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  state: UsersChallengeMatchState;
  updatedAt: Scalars['DateTimeISO']['output'];
  userOneId: Scalars['String']['output'];
  userTwoId: Scalars['String']['output'];
};

export type UsersChallengeMatchListRelationFilter = {
  every?: InputMaybe<UsersChallengeMatchWhereInput>;
  none?: InputMaybe<UsersChallengeMatchWhereInput>;
  some?: InputMaybe<UsersChallengeMatchWhereInput>;
};

export type UsersChallengeMatchMaxAggregate = {
  __typename?: 'UsersChallengeMatchMaxAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  state?: Maybe<UsersChallengeMatchState>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userOneId?: Maybe<Scalars['String']['output']>;
  userTwoId?: Maybe<Scalars['String']['output']>;
};

export type UsersChallengeMatchMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userOneId?: InputMaybe<SortOrder>;
  userTwoId?: InputMaybe<SortOrder>;
};

export type UsersChallengeMatchMinAggregate = {
  __typename?: 'UsersChallengeMatchMinAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  state?: Maybe<UsersChallengeMatchState>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userOneId?: Maybe<Scalars['String']['output']>;
  userTwoId?: Maybe<Scalars['String']['output']>;
};

export type UsersChallengeMatchMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userOneId?: InputMaybe<SortOrder>;
  userTwoId?: InputMaybe<SortOrder>;
};

export type UsersChallengeMatchOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum UsersChallengeMatchOrderByRelevanceFieldEnum {
  Id = 'id',
  UserOneId = 'userOneId',
  UserTwoId = 'userTwoId'
}

export type UsersChallengeMatchOrderByRelevanceInput = {
  fields: Array<UsersChallengeMatchOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type UsersChallengeMatchOrderByWithAggregationInput = {
  _count?: InputMaybe<UsersChallengeMatchCountOrderByAggregateInput>;
  _max?: InputMaybe<UsersChallengeMatchMaxOrderByAggregateInput>;
  _min?: InputMaybe<UsersChallengeMatchMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrderInput>;
  state?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userOneId?: InputMaybe<SortOrder>;
  userTwoId?: InputMaybe<SortOrder>;
};

export type UsersChallengeMatchOrderByWithRelationInput = {
  _relevance?: InputMaybe<UsersChallengeMatchOrderByRelevanceInput>;
  challenges?: InputMaybe<UsersChallengeOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrderInput>;
  state?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userOne?: InputMaybe<UserOrderByWithRelationInput>;
  userOneId?: InputMaybe<SortOrder>;
  userTwo?: InputMaybe<UserOrderByWithRelationInput>;
  userTwoId?: InputMaybe<SortOrder>;
};

export type UsersChallengeMatchRelationFilter = {
  is?: InputMaybe<UsersChallengeMatchWhereInput>;
  isNot?: InputMaybe<UsersChallengeMatchWhereInput>;
};

export enum UsersChallengeMatchScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Metadata = 'metadata',
  State = 'state',
  UpdatedAt = 'updatedAt',
  UserOneId = 'userOneId',
  UserTwoId = 'userTwoId'
}

export type UsersChallengeMatchScalarWhereInput = {
  AND?: InputMaybe<Array<UsersChallengeMatchScalarWhereInput>>;
  NOT?: InputMaybe<Array<UsersChallengeMatchScalarWhereInput>>;
  OR?: InputMaybe<Array<UsersChallengeMatchScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<UuidFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  state?: InputMaybe<EnumUsersChallengeMatchStateFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userOneId?: InputMaybe<StringFilter>;
  userTwoId?: InputMaybe<StringFilter>;
};

export type UsersChallengeMatchScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UsersChallengeMatchScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UsersChallengeMatchScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UsersChallengeMatchScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<UuidWithAggregatesFilter>;
  metadata?: InputMaybe<JsonNullableWithAggregatesFilter>;
  state?: InputMaybe<EnumUsersChallengeMatchStateWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userOneId?: InputMaybe<StringWithAggregatesFilter>;
  userTwoId?: InputMaybe<StringWithAggregatesFilter>;
};

export enum UsersChallengeMatchState {
  Accepted = 'Accepted',
  HalfAccepted = 'HalfAccepted',
  Pending = 'Pending',
  Rejected = 'Rejected',
  Started = 'Started'
}

export type UsersChallengeMatchUpdateInput = {
  challenges?: InputMaybe<UsersChallengeUpdateManyWithoutMatchNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<EnumUsersChallengeMatchStateFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userOne?: InputMaybe<UserUpdateOneRequiredWithoutChallenge_Matches_OneNestedInput>;
  userTwo?: InputMaybe<UserUpdateOneRequiredWithoutChallenge_Matches_TwoNestedInput>;
};

export type UsersChallengeMatchUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<EnumUsersChallengeMatchStateFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UsersChallengeMatchUpdateManyWithWhereWithoutUserOneInput = {
  data: UsersChallengeMatchUpdateManyMutationInput;
  where: UsersChallengeMatchScalarWhereInput;
};

export type UsersChallengeMatchUpdateManyWithWhereWithoutUserTwoInput = {
  data: UsersChallengeMatchUpdateManyMutationInput;
  where: UsersChallengeMatchScalarWhereInput;
};

export type UsersChallengeMatchUpdateManyWithoutUserOneNestedInput = {
  connect?: InputMaybe<Array<UsersChallengeMatchWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UsersChallengeMatchCreateOrConnectWithoutUserOneInput>>;
  create?: InputMaybe<Array<UsersChallengeMatchCreateWithoutUserOneInput>>;
  createMany?: InputMaybe<UsersChallengeMatchCreateManyUserOneInputEnvelope>;
  delete?: InputMaybe<Array<UsersChallengeMatchWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UsersChallengeMatchScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UsersChallengeMatchWhereUniqueInput>>;
  set?: InputMaybe<Array<UsersChallengeMatchWhereUniqueInput>>;
  update?: InputMaybe<Array<UsersChallengeMatchUpdateWithWhereUniqueWithoutUserOneInput>>;
  updateMany?: InputMaybe<Array<UsersChallengeMatchUpdateManyWithWhereWithoutUserOneInput>>;
  upsert?: InputMaybe<Array<UsersChallengeMatchUpsertWithWhereUniqueWithoutUserOneInput>>;
};

export type UsersChallengeMatchUpdateManyWithoutUserTwoNestedInput = {
  connect?: InputMaybe<Array<UsersChallengeMatchWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UsersChallengeMatchCreateOrConnectWithoutUserTwoInput>>;
  create?: InputMaybe<Array<UsersChallengeMatchCreateWithoutUserTwoInput>>;
  createMany?: InputMaybe<UsersChallengeMatchCreateManyUserTwoInputEnvelope>;
  delete?: InputMaybe<Array<UsersChallengeMatchWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UsersChallengeMatchScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UsersChallengeMatchWhereUniqueInput>>;
  set?: InputMaybe<Array<UsersChallengeMatchWhereUniqueInput>>;
  update?: InputMaybe<Array<UsersChallengeMatchUpdateWithWhereUniqueWithoutUserTwoInput>>;
  updateMany?: InputMaybe<Array<UsersChallengeMatchUpdateManyWithWhereWithoutUserTwoInput>>;
  upsert?: InputMaybe<Array<UsersChallengeMatchUpsertWithWhereUniqueWithoutUserTwoInput>>;
};

export type UsersChallengeMatchUpdateOneRequiredWithoutChallengesNestedInput = {
  connect?: InputMaybe<UsersChallengeMatchWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UsersChallengeMatchCreateOrConnectWithoutChallengesInput>;
  create?: InputMaybe<UsersChallengeMatchCreateWithoutChallengesInput>;
  update?: InputMaybe<UsersChallengeMatchUpdateToOneWithWhereWithoutChallengesInput>;
  upsert?: InputMaybe<UsersChallengeMatchUpsertWithoutChallengesInput>;
};

export type UsersChallengeMatchUpdateToOneWithWhereWithoutChallengesInput = {
  data: UsersChallengeMatchUpdateWithoutChallengesInput;
  where?: InputMaybe<UsersChallengeMatchWhereInput>;
};

export type UsersChallengeMatchUpdateWithWhereUniqueWithoutUserOneInput = {
  data: UsersChallengeMatchUpdateWithoutUserOneInput;
  where: UsersChallengeMatchWhereUniqueInput;
};

export type UsersChallengeMatchUpdateWithWhereUniqueWithoutUserTwoInput = {
  data: UsersChallengeMatchUpdateWithoutUserTwoInput;
  where: UsersChallengeMatchWhereUniqueInput;
};

export type UsersChallengeMatchUpdateWithoutChallengesInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<EnumUsersChallengeMatchStateFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userOne?: InputMaybe<UserUpdateOneRequiredWithoutChallenge_Matches_OneNestedInput>;
  userTwo?: InputMaybe<UserUpdateOneRequiredWithoutChallenge_Matches_TwoNestedInput>;
};

export type UsersChallengeMatchUpdateWithoutUserOneInput = {
  challenges?: InputMaybe<UsersChallengeUpdateManyWithoutMatchNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<EnumUsersChallengeMatchStateFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userTwo?: InputMaybe<UserUpdateOneRequiredWithoutChallenge_Matches_TwoNestedInput>;
};

export type UsersChallengeMatchUpdateWithoutUserTwoInput = {
  challenges?: InputMaybe<UsersChallengeUpdateManyWithoutMatchNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<EnumUsersChallengeMatchStateFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userOne?: InputMaybe<UserUpdateOneRequiredWithoutChallenge_Matches_OneNestedInput>;
};

export type UsersChallengeMatchUpsertWithWhereUniqueWithoutUserOneInput = {
  create: UsersChallengeMatchCreateWithoutUserOneInput;
  update: UsersChallengeMatchUpdateWithoutUserOneInput;
  where: UsersChallengeMatchWhereUniqueInput;
};

export type UsersChallengeMatchUpsertWithWhereUniqueWithoutUserTwoInput = {
  create: UsersChallengeMatchCreateWithoutUserTwoInput;
  update: UsersChallengeMatchUpdateWithoutUserTwoInput;
  where: UsersChallengeMatchWhereUniqueInput;
};

export type UsersChallengeMatchUpsertWithoutChallengesInput = {
  create: UsersChallengeMatchCreateWithoutChallengesInput;
  update: UsersChallengeMatchUpdateWithoutChallengesInput;
  where?: InputMaybe<UsersChallengeMatchWhereInput>;
};

export type UsersChallengeMatchWhereInput = {
  AND?: InputMaybe<Array<UsersChallengeMatchWhereInput>>;
  NOT?: InputMaybe<Array<UsersChallengeMatchWhereInput>>;
  OR?: InputMaybe<Array<UsersChallengeMatchWhereInput>>;
  challenges?: InputMaybe<UsersChallengeListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<UuidFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  state?: InputMaybe<EnumUsersChallengeMatchStateFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userOne?: InputMaybe<UserRelationFilter>;
  userOneId?: InputMaybe<StringFilter>;
  userTwo?: InputMaybe<UserRelationFilter>;
  userTwoId?: InputMaybe<StringFilter>;
};

export type UsersChallengeMatchWhereUniqueInput = {
  AND?: InputMaybe<Array<UsersChallengeMatchWhereInput>>;
  NOT?: InputMaybe<Array<UsersChallengeMatchWhereInput>>;
  OR?: InputMaybe<Array<UsersChallengeMatchWhereInput>>;
  challenges?: InputMaybe<UsersChallengeListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<JsonNullableFilter>;
  state?: InputMaybe<EnumUsersChallengeMatchStateFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userOne?: InputMaybe<UserRelationFilter>;
  userOneId?: InputMaybe<StringFilter>;
  userTwo?: InputMaybe<UserRelationFilter>;
  userTwoId?: InputMaybe<StringFilter>;
};

export type UsersChallengeMaxAggregate = {
  __typename?: 'UsersChallengeMaxAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  matchId?: Maybe<Scalars['String']['output']>;
  state?: Maybe<UsersChallengeState>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userOneId?: Maybe<Scalars['String']['output']>;
  userOneRunId?: Maybe<Scalars['String']['output']>;
  userTwoId?: Maybe<Scalars['String']['output']>;
  userTwoRunId?: Maybe<Scalars['String']['output']>;
};

export type UsersChallengeMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  matchId?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userOneId?: InputMaybe<SortOrder>;
  userOneRunId?: InputMaybe<SortOrder>;
  userTwoId?: InputMaybe<SortOrder>;
  userTwoRunId?: InputMaybe<SortOrder>;
};

export type UsersChallengeMinAggregate = {
  __typename?: 'UsersChallengeMinAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  matchId?: Maybe<Scalars['String']['output']>;
  state?: Maybe<UsersChallengeState>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userOneId?: Maybe<Scalars['String']['output']>;
  userOneRunId?: Maybe<Scalars['String']['output']>;
  userTwoId?: Maybe<Scalars['String']['output']>;
  userTwoRunId?: Maybe<Scalars['String']['output']>;
};

export type UsersChallengeMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  matchId?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userOneId?: InputMaybe<SortOrder>;
  userOneRunId?: InputMaybe<SortOrder>;
  userTwoId?: InputMaybe<SortOrder>;
  userTwoRunId?: InputMaybe<SortOrder>;
};

export type UsersChallengeOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum UsersChallengeOrderByRelevanceFieldEnum {
  Id = 'id',
  MatchId = 'matchId',
  UserOneId = 'userOneId',
  UserOneRunId = 'userOneRunId',
  UserTwoId = 'userTwoId',
  UserTwoRunId = 'userTwoRunId'
}

export type UsersChallengeOrderByRelevanceInput = {
  fields: Array<UsersChallengeOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type UsersChallengeOrderByWithAggregationInput = {
  _count?: InputMaybe<UsersChallengeCountOrderByAggregateInput>;
  _max?: InputMaybe<UsersChallengeMaxOrderByAggregateInput>;
  _min?: InputMaybe<UsersChallengeMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  matchId?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrderInput>;
  state?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userOneId?: InputMaybe<SortOrder>;
  userOneRunId?: InputMaybe<SortOrderInput>;
  userTwoId?: InputMaybe<SortOrder>;
  userTwoRunId?: InputMaybe<SortOrderInput>;
};

export type UsersChallengeOrderByWithRelationInput = {
  _relevance?: InputMaybe<UsersChallengeOrderByRelevanceInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  match?: InputMaybe<UsersChallengeMatchOrderByWithRelationInput>;
  matchId?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrderInput>;
  state?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userOne?: InputMaybe<UserOrderByWithRelationInput>;
  userOneId?: InputMaybe<SortOrder>;
  userOneRun?: InputMaybe<TypingRunOrderByWithRelationInput>;
  userOneRunId?: InputMaybe<SortOrderInput>;
  userTwo?: InputMaybe<UserOrderByWithRelationInput>;
  userTwoId?: InputMaybe<SortOrder>;
  userTwoRun?: InputMaybe<TypingRunOrderByWithRelationInput>;
  userTwoRunId?: InputMaybe<SortOrderInput>;
};

export enum UsersChallengeScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  MatchId = 'matchId',
  Metadata = 'metadata',
  State = 'state',
  UpdatedAt = 'updatedAt',
  UserOneId = 'userOneId',
  UserOneRunId = 'userOneRunId',
  UserTwoId = 'userTwoId',
  UserTwoRunId = 'userTwoRunId'
}

export type UsersChallengeScalarWhereInput = {
  AND?: InputMaybe<Array<UsersChallengeScalarWhereInput>>;
  NOT?: InputMaybe<Array<UsersChallengeScalarWhereInput>>;
  OR?: InputMaybe<Array<UsersChallengeScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<UuidFilter>;
  matchId?: InputMaybe<UuidFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  state?: InputMaybe<EnumUsersChallengeStateFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userOneId?: InputMaybe<StringFilter>;
  userOneRunId?: InputMaybe<UuidNullableFilter>;
  userTwoId?: InputMaybe<StringFilter>;
  userTwoRunId?: InputMaybe<UuidNullableFilter>;
};

export type UsersChallengeScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UsersChallengeScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UsersChallengeScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UsersChallengeScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<UuidWithAggregatesFilter>;
  matchId?: InputMaybe<UuidWithAggregatesFilter>;
  metadata?: InputMaybe<JsonNullableWithAggregatesFilter>;
  state?: InputMaybe<EnumUsersChallengeStateWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userOneId?: InputMaybe<StringWithAggregatesFilter>;
  userOneRunId?: InputMaybe<UuidNullableWithAggregatesFilter>;
  userTwoId?: InputMaybe<StringWithAggregatesFilter>;
  userTwoRunId?: InputMaybe<UuidNullableWithAggregatesFilter>;
};

export enum UsersChallengeState {
  Finished = 'Finished',
  Pending = 'Pending',
  Playing = 'Playing',
  Stopped = 'Stopped'
}

export type UsersChallengeUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  match?: InputMaybe<UsersChallengeMatchUpdateOneRequiredWithoutChallengesNestedInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<EnumUsersChallengeStateFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userOne?: InputMaybe<UserUpdateOneRequiredWithoutChallenges_OneNestedInput>;
  userOneRun?: InputMaybe<TypingRunUpdateOneWithoutChallanges_OneNestedInput>;
  userTwo?: InputMaybe<UserUpdateOneRequiredWithoutChallenges_TwoNestedInput>;
  userTwoRun?: InputMaybe<TypingRunUpdateOneWithoutChallenges_TwoNestedInput>;
};

export type UsersChallengeUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<EnumUsersChallengeStateFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UsersChallengeUpdateManyWithWhereWithoutMatchInput = {
  data: UsersChallengeUpdateManyMutationInput;
  where: UsersChallengeScalarWhereInput;
};

export type UsersChallengeUpdateManyWithWhereWithoutUserOneInput = {
  data: UsersChallengeUpdateManyMutationInput;
  where: UsersChallengeScalarWhereInput;
};

export type UsersChallengeUpdateManyWithWhereWithoutUserOneRunInput = {
  data: UsersChallengeUpdateManyMutationInput;
  where: UsersChallengeScalarWhereInput;
};

export type UsersChallengeUpdateManyWithWhereWithoutUserTwoInput = {
  data: UsersChallengeUpdateManyMutationInput;
  where: UsersChallengeScalarWhereInput;
};

export type UsersChallengeUpdateManyWithWhereWithoutUserTwoRunInput = {
  data: UsersChallengeUpdateManyMutationInput;
  where: UsersChallengeScalarWhereInput;
};

export type UsersChallengeUpdateManyWithoutMatchNestedInput = {
  connect?: InputMaybe<Array<UsersChallengeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UsersChallengeCreateOrConnectWithoutMatchInput>>;
  create?: InputMaybe<Array<UsersChallengeCreateWithoutMatchInput>>;
  createMany?: InputMaybe<UsersChallengeCreateManyMatchInputEnvelope>;
  delete?: InputMaybe<Array<UsersChallengeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UsersChallengeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UsersChallengeWhereUniqueInput>>;
  set?: InputMaybe<Array<UsersChallengeWhereUniqueInput>>;
  update?: InputMaybe<Array<UsersChallengeUpdateWithWhereUniqueWithoutMatchInput>>;
  updateMany?: InputMaybe<Array<UsersChallengeUpdateManyWithWhereWithoutMatchInput>>;
  upsert?: InputMaybe<Array<UsersChallengeUpsertWithWhereUniqueWithoutMatchInput>>;
};

export type UsersChallengeUpdateManyWithoutUserOneNestedInput = {
  connect?: InputMaybe<Array<UsersChallengeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UsersChallengeCreateOrConnectWithoutUserOneInput>>;
  create?: InputMaybe<Array<UsersChallengeCreateWithoutUserOneInput>>;
  createMany?: InputMaybe<UsersChallengeCreateManyUserOneInputEnvelope>;
  delete?: InputMaybe<Array<UsersChallengeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UsersChallengeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UsersChallengeWhereUniqueInput>>;
  set?: InputMaybe<Array<UsersChallengeWhereUniqueInput>>;
  update?: InputMaybe<Array<UsersChallengeUpdateWithWhereUniqueWithoutUserOneInput>>;
  updateMany?: InputMaybe<Array<UsersChallengeUpdateManyWithWhereWithoutUserOneInput>>;
  upsert?: InputMaybe<Array<UsersChallengeUpsertWithWhereUniqueWithoutUserOneInput>>;
};

export type UsersChallengeUpdateManyWithoutUserOneRunNestedInput = {
  connect?: InputMaybe<Array<UsersChallengeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UsersChallengeCreateOrConnectWithoutUserOneRunInput>>;
  create?: InputMaybe<Array<UsersChallengeCreateWithoutUserOneRunInput>>;
  createMany?: InputMaybe<UsersChallengeCreateManyUserOneRunInputEnvelope>;
  delete?: InputMaybe<Array<UsersChallengeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UsersChallengeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UsersChallengeWhereUniqueInput>>;
  set?: InputMaybe<Array<UsersChallengeWhereUniqueInput>>;
  update?: InputMaybe<Array<UsersChallengeUpdateWithWhereUniqueWithoutUserOneRunInput>>;
  updateMany?: InputMaybe<Array<UsersChallengeUpdateManyWithWhereWithoutUserOneRunInput>>;
  upsert?: InputMaybe<Array<UsersChallengeUpsertWithWhereUniqueWithoutUserOneRunInput>>;
};

export type UsersChallengeUpdateManyWithoutUserTwoNestedInput = {
  connect?: InputMaybe<Array<UsersChallengeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UsersChallengeCreateOrConnectWithoutUserTwoInput>>;
  create?: InputMaybe<Array<UsersChallengeCreateWithoutUserTwoInput>>;
  createMany?: InputMaybe<UsersChallengeCreateManyUserTwoInputEnvelope>;
  delete?: InputMaybe<Array<UsersChallengeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UsersChallengeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UsersChallengeWhereUniqueInput>>;
  set?: InputMaybe<Array<UsersChallengeWhereUniqueInput>>;
  update?: InputMaybe<Array<UsersChallengeUpdateWithWhereUniqueWithoutUserTwoInput>>;
  updateMany?: InputMaybe<Array<UsersChallengeUpdateManyWithWhereWithoutUserTwoInput>>;
  upsert?: InputMaybe<Array<UsersChallengeUpsertWithWhereUniqueWithoutUserTwoInput>>;
};

export type UsersChallengeUpdateManyWithoutUserTwoRunNestedInput = {
  connect?: InputMaybe<Array<UsersChallengeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UsersChallengeCreateOrConnectWithoutUserTwoRunInput>>;
  create?: InputMaybe<Array<UsersChallengeCreateWithoutUserTwoRunInput>>;
  createMany?: InputMaybe<UsersChallengeCreateManyUserTwoRunInputEnvelope>;
  delete?: InputMaybe<Array<UsersChallengeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UsersChallengeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UsersChallengeWhereUniqueInput>>;
  set?: InputMaybe<Array<UsersChallengeWhereUniqueInput>>;
  update?: InputMaybe<Array<UsersChallengeUpdateWithWhereUniqueWithoutUserTwoRunInput>>;
  updateMany?: InputMaybe<Array<UsersChallengeUpdateManyWithWhereWithoutUserTwoRunInput>>;
  upsert?: InputMaybe<Array<UsersChallengeUpsertWithWhereUniqueWithoutUserTwoRunInput>>;
};

export type UsersChallengeUpdateWithWhereUniqueWithoutMatchInput = {
  data: UsersChallengeUpdateWithoutMatchInput;
  where: UsersChallengeWhereUniqueInput;
};

export type UsersChallengeUpdateWithWhereUniqueWithoutUserOneInput = {
  data: UsersChallengeUpdateWithoutUserOneInput;
  where: UsersChallengeWhereUniqueInput;
};

export type UsersChallengeUpdateWithWhereUniqueWithoutUserOneRunInput = {
  data: UsersChallengeUpdateWithoutUserOneRunInput;
  where: UsersChallengeWhereUniqueInput;
};

export type UsersChallengeUpdateWithWhereUniqueWithoutUserTwoInput = {
  data: UsersChallengeUpdateWithoutUserTwoInput;
  where: UsersChallengeWhereUniqueInput;
};

export type UsersChallengeUpdateWithWhereUniqueWithoutUserTwoRunInput = {
  data: UsersChallengeUpdateWithoutUserTwoRunInput;
  where: UsersChallengeWhereUniqueInput;
};

export type UsersChallengeUpdateWithoutMatchInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<EnumUsersChallengeStateFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userOne?: InputMaybe<UserUpdateOneRequiredWithoutChallenges_OneNestedInput>;
  userOneRun?: InputMaybe<TypingRunUpdateOneWithoutChallanges_OneNestedInput>;
  userTwo?: InputMaybe<UserUpdateOneRequiredWithoutChallenges_TwoNestedInput>;
  userTwoRun?: InputMaybe<TypingRunUpdateOneWithoutChallenges_TwoNestedInput>;
};

export type UsersChallengeUpdateWithoutUserOneInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  match?: InputMaybe<UsersChallengeMatchUpdateOneRequiredWithoutChallengesNestedInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<EnumUsersChallengeStateFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userOneRun?: InputMaybe<TypingRunUpdateOneWithoutChallanges_OneNestedInput>;
  userTwo?: InputMaybe<UserUpdateOneRequiredWithoutChallenges_TwoNestedInput>;
  userTwoRun?: InputMaybe<TypingRunUpdateOneWithoutChallenges_TwoNestedInput>;
};

export type UsersChallengeUpdateWithoutUserOneRunInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  match?: InputMaybe<UsersChallengeMatchUpdateOneRequiredWithoutChallengesNestedInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<EnumUsersChallengeStateFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userOne?: InputMaybe<UserUpdateOneRequiredWithoutChallenges_OneNestedInput>;
  userTwo?: InputMaybe<UserUpdateOneRequiredWithoutChallenges_TwoNestedInput>;
  userTwoRun?: InputMaybe<TypingRunUpdateOneWithoutChallenges_TwoNestedInput>;
};

export type UsersChallengeUpdateWithoutUserTwoInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  match?: InputMaybe<UsersChallengeMatchUpdateOneRequiredWithoutChallengesNestedInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<EnumUsersChallengeStateFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userOne?: InputMaybe<UserUpdateOneRequiredWithoutChallenges_OneNestedInput>;
  userOneRun?: InputMaybe<TypingRunUpdateOneWithoutChallanges_OneNestedInput>;
  userTwoRun?: InputMaybe<TypingRunUpdateOneWithoutChallenges_TwoNestedInput>;
};

export type UsersChallengeUpdateWithoutUserTwoRunInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  match?: InputMaybe<UsersChallengeMatchUpdateOneRequiredWithoutChallengesNestedInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<EnumUsersChallengeStateFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userOne?: InputMaybe<UserUpdateOneRequiredWithoutChallenges_OneNestedInput>;
  userOneRun?: InputMaybe<TypingRunUpdateOneWithoutChallanges_OneNestedInput>;
  userTwo?: InputMaybe<UserUpdateOneRequiredWithoutChallenges_TwoNestedInput>;
};

export type UsersChallengeUpsertWithWhereUniqueWithoutMatchInput = {
  create: UsersChallengeCreateWithoutMatchInput;
  update: UsersChallengeUpdateWithoutMatchInput;
  where: UsersChallengeWhereUniqueInput;
};

export type UsersChallengeUpsertWithWhereUniqueWithoutUserOneInput = {
  create: UsersChallengeCreateWithoutUserOneInput;
  update: UsersChallengeUpdateWithoutUserOneInput;
  where: UsersChallengeWhereUniqueInput;
};

export type UsersChallengeUpsertWithWhereUniqueWithoutUserOneRunInput = {
  create: UsersChallengeCreateWithoutUserOneRunInput;
  update: UsersChallengeUpdateWithoutUserOneRunInput;
  where: UsersChallengeWhereUniqueInput;
};

export type UsersChallengeUpsertWithWhereUniqueWithoutUserTwoInput = {
  create: UsersChallengeCreateWithoutUserTwoInput;
  update: UsersChallengeUpdateWithoutUserTwoInput;
  where: UsersChallengeWhereUniqueInput;
};

export type UsersChallengeUpsertWithWhereUniqueWithoutUserTwoRunInput = {
  create: UsersChallengeCreateWithoutUserTwoRunInput;
  update: UsersChallengeUpdateWithoutUserTwoRunInput;
  where: UsersChallengeWhereUniqueInput;
};

export type UsersChallengeWhereInput = {
  AND?: InputMaybe<Array<UsersChallengeWhereInput>>;
  NOT?: InputMaybe<Array<UsersChallengeWhereInput>>;
  OR?: InputMaybe<Array<UsersChallengeWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<UuidFilter>;
  match?: InputMaybe<UsersChallengeMatchRelationFilter>;
  matchId?: InputMaybe<UuidFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  state?: InputMaybe<EnumUsersChallengeStateFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userOne?: InputMaybe<UserRelationFilter>;
  userOneId?: InputMaybe<StringFilter>;
  userOneRun?: InputMaybe<TypingRunNullableRelationFilter>;
  userOneRunId?: InputMaybe<UuidNullableFilter>;
  userTwo?: InputMaybe<UserRelationFilter>;
  userTwoId?: InputMaybe<StringFilter>;
  userTwoRun?: InputMaybe<TypingRunNullableRelationFilter>;
  userTwoRunId?: InputMaybe<UuidNullableFilter>;
};

export type UsersChallengeWhereUniqueInput = {
  AND?: InputMaybe<Array<UsersChallengeWhereInput>>;
  NOT?: InputMaybe<Array<UsersChallengeWhereInput>>;
  OR?: InputMaybe<Array<UsersChallengeWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  match?: InputMaybe<UsersChallengeMatchRelationFilter>;
  matchId?: InputMaybe<UuidFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  state?: InputMaybe<EnumUsersChallengeStateFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userOne?: InputMaybe<UserRelationFilter>;
  userOneId?: InputMaybe<StringFilter>;
  userOneRun?: InputMaybe<TypingRunNullableRelationFilter>;
  userOneRunId?: InputMaybe<UuidNullableFilter>;
  userTwo?: InputMaybe<UserRelationFilter>;
  userTwoId?: InputMaybe<StringFilter>;
  userTwoRun?: InputMaybe<TypingRunNullableRelationFilter>;
  userTwoRunId?: InputMaybe<UuidNullableFilter>;
};

export type UsersSearchInput = {
  limit?: Scalars['Int']['input'];
  search?: Scalars['String']['input'];
};

export type UuidFilter = {
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedUuidFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type UuidNullableFilter = {
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedUuidNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type UuidNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedUuidNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type UuidWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedUuidWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type VerificationToken = {
  __typename?: 'VerificationToken';
  expires: Scalars['DateTimeISO']['output'];
  identifier: Scalars['String']['output'];
  token: Scalars['String']['output'];
};

export type VerificationTokenCountAggregate = {
  __typename?: 'VerificationTokenCountAggregate';
  _all: Scalars['Int']['output'];
  expires: Scalars['Int']['output'];
  identifier: Scalars['Int']['output'];
  token: Scalars['Int']['output'];
};

export type VerificationTokenCountOrderByAggregateInput = {
  expires?: InputMaybe<SortOrder>;
  identifier?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export type VerificationTokenCreateInput = {
  expires: Scalars['DateTimeISO']['input'];
  identifier: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type VerificationTokenCreateManyInput = {
  expires: Scalars['DateTimeISO']['input'];
  identifier: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type VerificationTokenGroupBy = {
  __typename?: 'VerificationTokenGroupBy';
  _count?: Maybe<VerificationTokenCountAggregate>;
  _max?: Maybe<VerificationTokenMaxAggregate>;
  _min?: Maybe<VerificationTokenMinAggregate>;
  expires: Scalars['DateTimeISO']['output'];
  identifier: Scalars['String']['output'];
  token: Scalars['String']['output'];
};

export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
  identifier: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type VerificationTokenMaxAggregate = {
  __typename?: 'VerificationTokenMaxAggregate';
  expires?: Maybe<Scalars['DateTimeISO']['output']>;
  identifier?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

export type VerificationTokenMaxOrderByAggregateInput = {
  expires?: InputMaybe<SortOrder>;
  identifier?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export type VerificationTokenMinAggregate = {
  __typename?: 'VerificationTokenMinAggregate';
  expires?: Maybe<Scalars['DateTimeISO']['output']>;
  identifier?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

export type VerificationTokenMinOrderByAggregateInput = {
  expires?: InputMaybe<SortOrder>;
  identifier?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export enum VerificationTokenOrderByRelevanceFieldEnum {
  Identifier = 'identifier',
  Token = 'token'
}

export type VerificationTokenOrderByRelevanceInput = {
  fields: Array<VerificationTokenOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type VerificationTokenOrderByWithAggregationInput = {
  _count?: InputMaybe<VerificationTokenCountOrderByAggregateInput>;
  _max?: InputMaybe<VerificationTokenMaxOrderByAggregateInput>;
  _min?: InputMaybe<VerificationTokenMinOrderByAggregateInput>;
  expires?: InputMaybe<SortOrder>;
  identifier?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export type VerificationTokenOrderByWithRelationInput = {
  _relevance?: InputMaybe<VerificationTokenOrderByRelevanceInput>;
  expires?: InputMaybe<SortOrder>;
  identifier?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export enum VerificationTokenScalarFieldEnum {
  Expires = 'expires',
  Identifier = 'identifier',
  Token = 'token'
}

export type VerificationTokenScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<VerificationTokenScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<VerificationTokenScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<VerificationTokenScalarWhereWithAggregatesInput>>;
  expires?: InputMaybe<DateTimeWithAggregatesFilter>;
  identifier?: InputMaybe<StringWithAggregatesFilter>;
  token?: InputMaybe<StringWithAggregatesFilter>;
};

export type VerificationTokenUpdateInput = {
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  identifier?: InputMaybe<StringFieldUpdateOperationsInput>;
  token?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type VerificationTokenUpdateManyMutationInput = {
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  identifier?: InputMaybe<StringFieldUpdateOperationsInput>;
  token?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type VerificationTokenWhereInput = {
  AND?: InputMaybe<Array<VerificationTokenWhereInput>>;
  NOT?: InputMaybe<Array<VerificationTokenWhereInput>>;
  OR?: InputMaybe<Array<VerificationTokenWhereInput>>;
  expires?: InputMaybe<DateTimeFilter>;
  identifier?: InputMaybe<StringFilter>;
  token?: InputMaybe<StringFilter>;
};

export type VerificationTokenWhereUniqueInput = {
  AND?: InputMaybe<Array<VerificationTokenWhereInput>>;
  NOT?: InputMaybe<Array<VerificationTokenWhereInput>>;
  OR?: InputMaybe<Array<VerificationTokenWhereInput>>;
  expires?: InputMaybe<DateTimeFilter>;
  identifier?: InputMaybe<StringFilter>;
  identifier_token?: InputMaybe<VerificationTokenIdentifierTokenCompoundUniqueInput>;
  token?: InputMaybe<StringFilter>;
};

export type SignInMutationVariables = Exact<{
  signInModel: UserSignInInput;
}>;


export type SignInMutation = { __typename?: 'Mutation', signIn?: { __typename?: 'User', id: string, image?: string | null, metadata?: any | null, name?: string | null } | null };

export type UserQueryQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type UserQueryQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, email: string, image?: string | null, name?: string | null, metadata?: any | null } | null };

export type SignUpMutationVariables = Exact<{
  signUpModel: UserSignUpInput;
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUp: { __typename?: 'User', id: string, image?: string | null, metadata?: any | null, name?: string | null } };

export type UserFragmentFragment = { __typename?: 'User', id: string, image?: string | null, metadata?: any | null, name?: string | null, emailVerified?: any | null, email: string, tags: Array<{ __typename?: 'Tag', id: string, metadata?: any | null, name: string, createdAt: any }>, typingRuns: Array<{ __typename?: 'TypingRun', flags: number, createdAt: any, id: string, metadata?: any | null, mode: TypingRunMode, time?: number | null, typedLetters: any }>, experience?: { __typename?: 'UserExperience', points: number, metadata?: any | null, level: number, id: string } | null } & { ' $fragmentName'?: 'UserFragmentFragment' };

export type UserQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type UserQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, image?: string | null, metadata?: any | null, name?: string | null, emailVerified?: any | null, email: string, tags: Array<{ __typename?: 'Tag', id: string, metadata?: any | null, name: string, createdAt: any }>, typingRuns: Array<{ __typename?: 'TypingRun', flags: number, createdAt: any, id: string, metadata?: any | null, mode: TypingRunMode, time?: number | null, typedLetters: any }>, experience?: { __typename?: 'UserExperience', points: number, metadata?: any | null, level: number, id: string } | null } | null };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, image?: string | null, metadata?: any | null, name?: string | null, emailVerified?: any | null, email: string, tags: Array<{ __typename?: 'Tag', id: string, metadata?: any | null, name: string, createdAt: any }>, typingRuns: Array<{ __typename?: 'TypingRun', flags: number, createdAt: any, id: string, metadata?: any | null, mode: TypingRunMode, time?: number | null, typedLetters: any }>, experience?: { __typename?: 'UserExperience', points: number, metadata?: any | null, level: number, id: string } | null }> };

export type SignOutMutationVariables = Exact<{ [key: string]: never; }>;


export type SignOutMutation = { __typename?: 'Mutation', signOut: boolean };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, image?: string | null, metadata?: any | null, name?: string | null, emailVerified?: any | null, email: string, tags: Array<{ __typename?: 'Tag', id: string, metadata?: any | null, name: string, createdAt: any }>, typingRuns: Array<{ __typename?: 'TypingRun', flags: number, createdAt: any, id: string, metadata?: any | null, mode: TypingRunMode, time?: number | null, typedLetters: any }>, experience?: { __typename?: 'UserExperience', points: number, metadata?: any | null, level: number, id: string } | null } | null };

export const UserFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"typingRuns"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"flags"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"mode"}},{"kind":"Field","name":{"kind":"Name","value":"time"}},{"kind":"Field","name":{"kind":"Name","value":"typedLetters"}}]}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"experience"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"points"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UserFragmentFragment, unknown>;
export const SignInDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignIn"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"signInModel"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserSignInInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signIn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"signInModel"},"value":{"kind":"Variable","name":{"kind":"Name","value":"signInModel"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<SignInMutation, SignInMutationVariables>;
export const UserQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}}]}}]}}]} as unknown as DocumentNode<UserQueryQuery, UserQueryQueryVariables>;
export const SignUpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignUp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"signUpModel"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserSignUpInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signUp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"signUpModel"},"value":{"kind":"Variable","name":{"kind":"Name","value":"signUpModel"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<SignUpMutation, SignUpMutationVariables>;
export const UserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"User"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"typingRuns"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"flags"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"mode"}},{"kind":"Field","name":{"kind":"Name","value":"time"}},{"kind":"Field","name":{"kind":"Name","value":"typedLetters"}}]}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"experience"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"points"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<UserQuery, UserQueryVariables>;
export const UsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"typingRuns"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"flags"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"mode"}},{"kind":"Field","name":{"kind":"Name","value":"time"}},{"kind":"Field","name":{"kind":"Name","value":"typedLetters"}}]}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"experience"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"points"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<UsersQuery, UsersQueryVariables>;
export const SignOutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignOut"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signOut"}}]}}]} as unknown as DocumentNode<SignOutMutation, SignOutMutationVariables>;
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"typingRuns"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"flags"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"mode"}},{"kind":"Field","name":{"kind":"Name","value":"time"}},{"kind":"Field","name":{"kind":"Name","value":"typedLetters"}}]}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"experience"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"points"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.This scalar is serialized to a string in ISO 8601 format and parsed from a string in ISO 8601 format. */
  DateTimeISO: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: { input: any; output: any; }
};

export type Account = {
  __typename?: 'Account';
  access_token?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  expires_at?: Maybe<Scalars['Int']['output']>;
  id_token?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  provider: Scalars['String']['output'];
  providerAccountId: Scalars['String']['output'];
  refresh_token?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  session_state?: Maybe<Scalars['String']['output']>;
  token_type?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  userConfigurationId?: Maybe<Scalars['String']['output']>;
  userId: Scalars['String']['output'];
};

export type AccountAvgAggregate = {
  __typename?: 'AccountAvgAggregate';
  expires_at?: Maybe<Scalars['Float']['output']>;
};

export type AccountAvgOrderByAggregateInput = {
  expires_at?: InputMaybe<SortOrder>;
};

export type AccountCountAggregate = {
  __typename?: 'AccountCountAggregate';
  _all: Scalars['Int']['output'];
  access_token: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  expires_at: Scalars['Int']['output'];
  id_token: Scalars['Int']['output'];
  metadata: Scalars['Int']['output'];
  provider: Scalars['Int']['output'];
  providerAccountId: Scalars['Int']['output'];
  refresh_token: Scalars['Int']['output'];
  scope: Scalars['Int']['output'];
  session_state: Scalars['Int']['output'];
  token_type: Scalars['Int']['output'];
  type: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userConfigurationId: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type AccountCountOrderByAggregateInput = {
  access_token?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  expires_at?: InputMaybe<SortOrder>;
  id_token?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  refresh_token?: InputMaybe<SortOrder>;
  scope?: InputMaybe<SortOrder>;
  session_state?: InputMaybe<SortOrder>;
  token_type?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userConfigurationId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type AccountCreateInput = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  expires_at?: InputMaybe<Scalars['Int']['input']>;
  id_token?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  provider: Scalars['String']['input'];
  providerAccountId: Scalars['String']['input'];
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  session_state?: InputMaybe<Scalars['String']['input']>;
  token_type?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user: UserCreateNestedOneWithoutAccountsInput;
  userConfigurationId?: InputMaybe<Scalars['String']['input']>;
};

export type AccountCreateManyInput = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  expires_at?: InputMaybe<Scalars['Int']['input']>;
  id_token?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  provider: Scalars['String']['input'];
  providerAccountId: Scalars['String']['input'];
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  session_state?: InputMaybe<Scalars['String']['input']>;
  token_type?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userConfigurationId?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['String']['input'];
};

export type AccountCreateManyUserInput = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  expires_at?: InputMaybe<Scalars['Int']['input']>;
  id_token?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  provider: Scalars['String']['input'];
  providerAccountId: Scalars['String']['input'];
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  session_state?: InputMaybe<Scalars['String']['input']>;
  token_type?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userConfigurationId?: InputMaybe<Scalars['String']['input']>;
};

export type AccountCreateManyUserInputEnvelope = {
  data: Array<AccountCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AccountCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AccountCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<AccountCreateWithoutUserInput>>;
  createMany?: InputMaybe<AccountCreateManyUserInputEnvelope>;
};

export type AccountCreateOrConnectWithoutUserInput = {
  create: AccountCreateWithoutUserInput;
  where: AccountWhereUniqueInput;
};

export type AccountCreateWithoutUserInput = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  expires_at?: InputMaybe<Scalars['Int']['input']>;
  id_token?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  provider: Scalars['String']['input'];
  providerAccountId: Scalars['String']['input'];
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  session_state?: InputMaybe<Scalars['String']['input']>;
  token_type?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userConfigurationId?: InputMaybe<Scalars['String']['input']>;
};

export type AccountGroupBy = {
  __typename?: 'AccountGroupBy';
  _avg?: Maybe<AccountAvgAggregate>;
  _count?: Maybe<AccountCountAggregate>;
  _max?: Maybe<AccountMaxAggregate>;
  _min?: Maybe<AccountMinAggregate>;
  _sum?: Maybe<AccountSumAggregate>;
  access_token?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  expires_at?: Maybe<Scalars['Int']['output']>;
  id_token?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  provider: Scalars['String']['output'];
  providerAccountId: Scalars['String']['output'];
  refresh_token?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  session_state?: Maybe<Scalars['String']['output']>;
  token_type?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  userConfigurationId?: Maybe<Scalars['String']['output']>;
  userId: Scalars['String']['output'];
};

export type AccountListRelationFilter = {
  every?: InputMaybe<AccountWhereInput>;
  none?: InputMaybe<AccountWhereInput>;
  some?: InputMaybe<AccountWhereInput>;
};

export type AccountMaxAggregate = {
  __typename?: 'AccountMaxAggregate';
  access_token?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  expires_at?: Maybe<Scalars['Int']['output']>;
  id_token?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  providerAccountId?: Maybe<Scalars['String']['output']>;
  refresh_token?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  session_state?: Maybe<Scalars['String']['output']>;
  token_type?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userConfigurationId?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type AccountMaxOrderByAggregateInput = {
  access_token?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  expires_at?: InputMaybe<SortOrder>;
  id_token?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  refresh_token?: InputMaybe<SortOrder>;
  scope?: InputMaybe<SortOrder>;
  session_state?: InputMaybe<SortOrder>;
  token_type?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userConfigurationId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type AccountMinAggregate = {
  __typename?: 'AccountMinAggregate';
  access_token?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  expires_at?: Maybe<Scalars['Int']['output']>;
  id_token?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  providerAccountId?: Maybe<Scalars['String']['output']>;
  refresh_token?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  session_state?: Maybe<Scalars['String']['output']>;
  token_type?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userConfigurationId?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type AccountMinOrderByAggregateInput = {
  access_token?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  expires_at?: InputMaybe<SortOrder>;
  id_token?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  refresh_token?: InputMaybe<SortOrder>;
  scope?: InputMaybe<SortOrder>;
  session_state?: InputMaybe<SortOrder>;
  token_type?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userConfigurationId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type AccountOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum AccountOrderByRelevanceFieldEnum {
  AccessToken = 'access_token',
  IdToken = 'id_token',
  Provider = 'provider',
  ProviderAccountId = 'providerAccountId',
  RefreshToken = 'refresh_token',
  Scope = 'scope',
  SessionState = 'session_state',
  TokenType = 'token_type',
  Type = 'type',
  UserConfigurationId = 'userConfigurationId',
  UserId = 'userId'
}

export type AccountOrderByRelevanceInput = {
  fields: Array<AccountOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type AccountOrderByWithAggregationInput = {
  _avg?: InputMaybe<AccountAvgOrderByAggregateInput>;
  _count?: InputMaybe<AccountCountOrderByAggregateInput>;
  _max?: InputMaybe<AccountMaxOrderByAggregateInput>;
  _min?: InputMaybe<AccountMinOrderByAggregateInput>;
  _sum?: InputMaybe<AccountSumOrderByAggregateInput>;
  access_token?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  expires_at?: InputMaybe<SortOrderInput>;
  id_token?: InputMaybe<SortOrderInput>;
  metadata?: InputMaybe<SortOrderInput>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  refresh_token?: InputMaybe<SortOrderInput>;
  scope?: InputMaybe<SortOrderInput>;
  session_state?: InputMaybe<SortOrderInput>;
  token_type?: InputMaybe<SortOrderInput>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userConfigurationId?: InputMaybe<SortOrderInput>;
  userId?: InputMaybe<SortOrder>;
};

export type AccountOrderByWithRelationInput = {
  _relevance?: InputMaybe<AccountOrderByRelevanceInput>;
  access_token?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  expires_at?: InputMaybe<SortOrderInput>;
  id_token?: InputMaybe<SortOrderInput>;
  metadata?: InputMaybe<SortOrderInput>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  refresh_token?: InputMaybe<SortOrderInput>;
  scope?: InputMaybe<SortOrderInput>;
  session_state?: InputMaybe<SortOrderInput>;
  token_type?: InputMaybe<SortOrderInput>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userConfigurationId?: InputMaybe<SortOrderInput>;
  userId?: InputMaybe<SortOrder>;
};

export type AccountProviderProviderAccountIdCompoundUniqueInput = {
  provider: Scalars['String']['input'];
  providerAccountId: Scalars['String']['input'];
};

export enum AccountScalarFieldEnum {
  AccessToken = 'access_token',
  CreatedAt = 'createdAt',
  ExpiresAt = 'expires_at',
  IdToken = 'id_token',
  Metadata = 'metadata',
  Provider = 'provider',
  ProviderAccountId = 'providerAccountId',
  RefreshToken = 'refresh_token',
  Scope = 'scope',
  SessionState = 'session_state',
  TokenType = 'token_type',
  Type = 'type',
  UpdatedAt = 'updatedAt',
  UserConfigurationId = 'userConfigurationId',
  UserId = 'userId'
}

export type AccountScalarWhereInput = {
  AND?: InputMaybe<Array<AccountScalarWhereInput>>;
  NOT?: InputMaybe<Array<AccountScalarWhereInput>>;
  OR?: InputMaybe<Array<AccountScalarWhereInput>>;
  access_token?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expires_at?: InputMaybe<IntNullableFilter>;
  id_token?: InputMaybe<StringNullableFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  provider?: InputMaybe<StringFilter>;
  providerAccountId?: InputMaybe<StringFilter>;
  refresh_token?: InputMaybe<StringNullableFilter>;
  scope?: InputMaybe<StringNullableFilter>;
  session_state?: InputMaybe<StringNullableFilter>;
  token_type?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userConfigurationId?: InputMaybe<StringNullableFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type AccountScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<AccountScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<AccountScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<AccountScalarWhereWithAggregatesInput>>;
  access_token?: InputMaybe<StringNullableWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  expires_at?: InputMaybe<IntNullableWithAggregatesFilter>;
  id_token?: InputMaybe<StringNullableWithAggregatesFilter>;
  metadata?: InputMaybe<JsonNullableWithAggregatesFilter>;
  provider?: InputMaybe<StringWithAggregatesFilter>;
  providerAccountId?: InputMaybe<StringWithAggregatesFilter>;
  refresh_token?: InputMaybe<StringNullableWithAggregatesFilter>;
  scope?: InputMaybe<StringNullableWithAggregatesFilter>;
  session_state?: InputMaybe<StringNullableWithAggregatesFilter>;
  token_type?: InputMaybe<StringNullableWithAggregatesFilter>;
  type?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userConfigurationId?: InputMaybe<StringNullableWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type AccountSumAggregate = {
  __typename?: 'AccountSumAggregate';
  expires_at?: Maybe<Scalars['Int']['output']>;
};

export type AccountSumOrderByAggregateInput = {
  expires_at?: InputMaybe<SortOrder>;
};

export type AccountUpdateInput = {
  access_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expires_at?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  provider?: InputMaybe<StringFieldUpdateOperationsInput>;
  providerAccountId?: InputMaybe<StringFieldUpdateOperationsInput>;
  refresh_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scope?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  session_state?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  token_type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutAccountsNestedInput>;
  userConfigurationId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type AccountUpdateManyMutationInput = {
  access_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expires_at?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  provider?: InputMaybe<StringFieldUpdateOperationsInput>;
  providerAccountId?: InputMaybe<StringFieldUpdateOperationsInput>;
  refresh_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scope?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  session_state?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  token_type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userConfigurationId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type AccountUpdateManyWithWhereWithoutUserInput = {
  data: AccountUpdateManyMutationInput;
  where: AccountScalarWhereInput;
};

export type AccountUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AccountCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<AccountCreateWithoutUserInput>>;
  createMany?: InputMaybe<AccountCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<AccountWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AccountScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  set?: InputMaybe<Array<AccountWhereUniqueInput>>;
  update?: InputMaybe<Array<AccountUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<AccountUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<AccountUpsertWithWhereUniqueWithoutUserInput>>;
};

export type AccountUpdateWithWhereUniqueWithoutUserInput = {
  data: AccountUpdateWithoutUserInput;
  where: AccountWhereUniqueInput;
};

export type AccountUpdateWithoutUserInput = {
  access_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expires_at?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  provider?: InputMaybe<StringFieldUpdateOperationsInput>;
  providerAccountId?: InputMaybe<StringFieldUpdateOperationsInput>;
  refresh_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scope?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  session_state?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  token_type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userConfigurationId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type AccountUpsertWithWhereUniqueWithoutUserInput = {
  create: AccountCreateWithoutUserInput;
  update: AccountUpdateWithoutUserInput;
  where: AccountWhereUniqueInput;
};

export type AccountWhereInput = {
  AND?: InputMaybe<Array<AccountWhereInput>>;
  NOT?: InputMaybe<Array<AccountWhereInput>>;
  OR?: InputMaybe<Array<AccountWhereInput>>;
  access_token?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expires_at?: InputMaybe<IntNullableFilter>;
  id_token?: InputMaybe<StringNullableFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  provider?: InputMaybe<StringFilter>;
  providerAccountId?: InputMaybe<StringFilter>;
  refresh_token?: InputMaybe<StringNullableFilter>;
  scope?: InputMaybe<StringNullableFilter>;
  session_state?: InputMaybe<StringNullableFilter>;
  token_type?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userConfigurationId?: InputMaybe<StringNullableFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type AccountWhereUniqueInput = {
  AND?: InputMaybe<Array<AccountWhereInput>>;
  NOT?: InputMaybe<Array<AccountWhereInput>>;
  OR?: InputMaybe<Array<AccountWhereInput>>;
  access_token?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expires_at?: InputMaybe<IntNullableFilter>;
  id_token?: InputMaybe<StringNullableFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  provider?: InputMaybe<StringFilter>;
  providerAccountId?: InputMaybe<StringFilter>;
  provider_providerAccountId?: InputMaybe<AccountProviderProviderAccountIdCompoundUniqueInput>;
  refresh_token?: InputMaybe<StringNullableFilter>;
  scope?: InputMaybe<StringNullableFilter>;
  session_state?: InputMaybe<StringNullableFilter>;
  token_type?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userConfigurationId?: InputMaybe<StringNullableFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int']['output'];
};

export type AggregateAccount = {
  __typename?: 'AggregateAccount';
  _avg?: Maybe<AccountAvgAggregate>;
  _count?: Maybe<AccountCountAggregate>;
  _max?: Maybe<AccountMaxAggregate>;
  _min?: Maybe<AccountMinAggregate>;
  _sum?: Maybe<AccountSumAggregate>;
};

export type AggregateSession = {
  __typename?: 'AggregateSession';
  _count?: Maybe<SessionCountAggregate>;
  _max?: Maybe<SessionMaxAggregate>;
  _min?: Maybe<SessionMinAggregate>;
};

export type AggregateTag = {
  __typename?: 'AggregateTag';
  _count?: Maybe<TagCountAggregate>;
  _max?: Maybe<TagMaxAggregate>;
  _min?: Maybe<TagMinAggregate>;
};

export type AggregateTypingRun = {
  __typename?: 'AggregateTypingRun';
  _avg?: Maybe<TypingRunAvgAggregate>;
  _count?: Maybe<TypingRunCountAggregate>;
  _max?: Maybe<TypingRunMaxAggregate>;
  _min?: Maybe<TypingRunMinAggregate>;
  _sum?: Maybe<TypingRunSumAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
};

export type AggregateUserConfiguration = {
  __typename?: 'AggregateUserConfiguration';
  _avg?: Maybe<UserConfigurationAvgAggregate>;
  _count?: Maybe<UserConfigurationCountAggregate>;
  _max?: Maybe<UserConfigurationMaxAggregate>;
  _min?: Maybe<UserConfigurationMinAggregate>;
  _sum?: Maybe<UserConfigurationSumAggregate>;
};

export type AggregateUserExperience = {
  __typename?: 'AggregateUserExperience';
  _avg?: Maybe<UserExperienceAvgAggregate>;
  _count?: Maybe<UserExperienceCountAggregate>;
  _max?: Maybe<UserExperienceMaxAggregate>;
  _min?: Maybe<UserExperienceMinAggregate>;
  _sum?: Maybe<UserExperienceSumAggregate>;
};

export type AggregateUserNotification = {
  __typename?: 'AggregateUserNotification';
  _count?: Maybe<UserNotificationCountAggregate>;
  _max?: Maybe<UserNotificationMaxAggregate>;
  _min?: Maybe<UserNotificationMinAggregate>;
};

export type AggregateUsersChallenge = {
  __typename?: 'AggregateUsersChallenge';
  _count?: Maybe<UsersChallengeCountAggregate>;
  _max?: Maybe<UsersChallengeMaxAggregate>;
  _min?: Maybe<UsersChallengeMinAggregate>;
};

export type AggregateUsersChallengeMatch = {
  __typename?: 'AggregateUsersChallengeMatch';
  _count?: Maybe<UsersChallengeMatchCountAggregate>;
  _max?: Maybe<UsersChallengeMatchMaxAggregate>;
  _min?: Maybe<UsersChallengeMatchMinAggregate>;
};

export type AggregateVerificationToken = {
  __typename?: 'AggregateVerificationToken';
  _count?: Maybe<VerificationTokenCountAggregate>;
  _max?: Maybe<VerificationTokenMaxAggregate>;
  _min?: Maybe<VerificationTokenMinAggregate>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export enum CaretSmoothness {
  Fast = 'FAST',
  Medium = 'MEDIUM',
  Off = 'OFF',
  Slow = 'SLOW'
}

export enum CaretStyle {
  Block = 'BLOCK',
  BlockFilled = 'BLOCK_FILLED',
  Cursor = 'CURSOR',
  Off = 'OFF',
  Underscore = 'UNDERSCORE'
}

export enum ConfidenceMode {
  Max = 'MAX',
  Off = 'OFF',
  On = 'ON'
}

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type DateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type EnumCaretSmoothnessFieldUpdateOperationsInput = {
  set?: InputMaybe<CaretSmoothness>;
};

export type EnumCaretSmoothnessFilter = {
  equals?: InputMaybe<CaretSmoothness>;
  in?: InputMaybe<Array<CaretSmoothness>>;
  not?: InputMaybe<NestedEnumCaretSmoothnessFilter>;
  notIn?: InputMaybe<Array<CaretSmoothness>>;
};

export type EnumCaretSmoothnessWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumCaretSmoothnessFilter>;
  _min?: InputMaybe<NestedEnumCaretSmoothnessFilter>;
  equals?: InputMaybe<CaretSmoothness>;
  in?: InputMaybe<Array<CaretSmoothness>>;
  not?: InputMaybe<NestedEnumCaretSmoothnessWithAggregatesFilter>;
  notIn?: InputMaybe<Array<CaretSmoothness>>;
};

export type EnumCaretStyleFieldUpdateOperationsInput = {
  set?: InputMaybe<CaretStyle>;
};

export type EnumCaretStyleFilter = {
  equals?: InputMaybe<CaretStyle>;
  in?: InputMaybe<Array<CaretStyle>>;
  not?: InputMaybe<NestedEnumCaretStyleFilter>;
  notIn?: InputMaybe<Array<CaretStyle>>;
};

export type EnumCaretStyleWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumCaretStyleFilter>;
  _min?: InputMaybe<NestedEnumCaretStyleFilter>;
  equals?: InputMaybe<CaretStyle>;
  in?: InputMaybe<Array<CaretStyle>>;
  not?: InputMaybe<NestedEnumCaretStyleWithAggregatesFilter>;
  notIn?: InputMaybe<Array<CaretStyle>>;
};

export type EnumConfidenceModeFieldUpdateOperationsInput = {
  set?: InputMaybe<ConfidenceMode>;
};

export type EnumConfidenceModeFilter = {
  equals?: InputMaybe<ConfidenceMode>;
  in?: InputMaybe<Array<ConfidenceMode>>;
  not?: InputMaybe<NestedEnumConfidenceModeFilter>;
  notIn?: InputMaybe<Array<ConfidenceMode>>;
};

export type EnumConfidenceModeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumConfidenceModeFilter>;
  _min?: InputMaybe<NestedEnumConfidenceModeFilter>;
  equals?: InputMaybe<ConfidenceMode>;
  in?: InputMaybe<Array<ConfidenceMode>>;
  not?: InputMaybe<NestedEnumConfidenceModeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<ConfidenceMode>>;
};

export type EnumIndicateTyposFieldUpdateOperationsInput = {
  set?: InputMaybe<IndicateTypos>;
};

export type EnumIndicateTyposFilter = {
  equals?: InputMaybe<IndicateTypos>;
  in?: InputMaybe<Array<IndicateTypos>>;
  not?: InputMaybe<NestedEnumIndicateTyposFilter>;
  notIn?: InputMaybe<Array<IndicateTypos>>;
};

export type EnumIndicateTyposWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumIndicateTyposFilter>;
  _min?: InputMaybe<NestedEnumIndicateTyposFilter>;
  equals?: InputMaybe<IndicateTypos>;
  in?: InputMaybe<Array<IndicateTypos>>;
  not?: InputMaybe<NestedEnumIndicateTyposWithAggregatesFilter>;
  notIn?: InputMaybe<Array<IndicateTypos>>;
};

export type EnumPaceCaretSpeedFieldUpdateOperationsInput = {
  set?: InputMaybe<PaceCaretSpeed>;
};

export type EnumPaceCaretSpeedFilter = {
  equals?: InputMaybe<PaceCaretSpeed>;
  in?: InputMaybe<Array<PaceCaretSpeed>>;
  not?: InputMaybe<NestedEnumPaceCaretSpeedFilter>;
  notIn?: InputMaybe<Array<PaceCaretSpeed>>;
};

export type EnumPaceCaretSpeedWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumPaceCaretSpeedFilter>;
  _min?: InputMaybe<NestedEnumPaceCaretSpeedFilter>;
  equals?: InputMaybe<PaceCaretSpeed>;
  in?: InputMaybe<Array<PaceCaretSpeed>>;
  not?: InputMaybe<NestedEnumPaceCaretSpeedWithAggregatesFilter>;
  notIn?: InputMaybe<Array<PaceCaretSpeed>>;
};

export type EnumRunDifficultyFieldUpdateOperationsInput = {
  set?: InputMaybe<RunDifficulty>;
};

export type EnumRunDifficultyFilter = {
  equals?: InputMaybe<RunDifficulty>;
  in?: InputMaybe<Array<RunDifficulty>>;
  not?: InputMaybe<NestedEnumRunDifficultyFilter>;
  notIn?: InputMaybe<Array<RunDifficulty>>;
};

export type EnumRunDifficultyWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumRunDifficultyFilter>;
  _min?: InputMaybe<NestedEnumRunDifficultyFilter>;
  equals?: InputMaybe<RunDifficulty>;
  in?: InputMaybe<Array<RunDifficulty>>;
  not?: InputMaybe<NestedEnumRunDifficultyWithAggregatesFilter>;
  notIn?: InputMaybe<Array<RunDifficulty>>;
};

export type EnumShowAverageFieldUpdateOperationsInput = {
  set?: InputMaybe<ShowAverage>;
};

export type EnumShowAverageFilter = {
  equals?: InputMaybe<ShowAverage>;
  in?: InputMaybe<Array<ShowAverage>>;
  not?: InputMaybe<NestedEnumShowAverageFilter>;
  notIn?: InputMaybe<Array<ShowAverage>>;
};

export type EnumShowAverageWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumShowAverageFilter>;
  _min?: InputMaybe<NestedEnumShowAverageFilter>;
  equals?: InputMaybe<ShowAverage>;
  in?: InputMaybe<Array<ShowAverage>>;
  not?: InputMaybe<NestedEnumShowAverageWithAggregatesFilter>;
  notIn?: InputMaybe<Array<ShowAverage>>;
};

export type EnumTypingRunModeFieldUpdateOperationsInput = {
  set?: InputMaybe<TypingRunMode>;
};

export type EnumTypingRunModeFilter = {
  equals?: InputMaybe<TypingRunMode>;
  in?: InputMaybe<Array<TypingRunMode>>;
  not?: InputMaybe<NestedEnumTypingRunModeFilter>;
  notIn?: InputMaybe<Array<TypingRunMode>>;
};

export type EnumTypingRunModeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumTypingRunModeFilter>;
  _min?: InputMaybe<NestedEnumTypingRunModeFilter>;
  equals?: InputMaybe<TypingRunMode>;
  in?: InputMaybe<Array<TypingRunMode>>;
  not?: InputMaybe<NestedEnumTypingRunModeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<TypingRunMode>>;
};

export type EnumUsersChallengeMatchStateFieldUpdateOperationsInput = {
  set?: InputMaybe<UsersChallengeMatchState>;
};

export type EnumUsersChallengeMatchStateFilter = {
  equals?: InputMaybe<UsersChallengeMatchState>;
  in?: InputMaybe<Array<UsersChallengeMatchState>>;
  not?: InputMaybe<NestedEnumUsersChallengeMatchStateFilter>;
  notIn?: InputMaybe<Array<UsersChallengeMatchState>>;
};

export type EnumUsersChallengeMatchStateWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumUsersChallengeMatchStateFilter>;
  _min?: InputMaybe<NestedEnumUsersChallengeMatchStateFilter>;
  equals?: InputMaybe<UsersChallengeMatchState>;
  in?: InputMaybe<Array<UsersChallengeMatchState>>;
  not?: InputMaybe<NestedEnumUsersChallengeMatchStateWithAggregatesFilter>;
  notIn?: InputMaybe<Array<UsersChallengeMatchState>>;
};

export type EnumUsersChallengeStateFieldUpdateOperationsInput = {
  set?: InputMaybe<UsersChallengeState>;
};

export type EnumUsersChallengeStateFilter = {
  equals?: InputMaybe<UsersChallengeState>;
  in?: InputMaybe<Array<UsersChallengeState>>;
  not?: InputMaybe<NestedEnumUsersChallengeStateFilter>;
  notIn?: InputMaybe<Array<UsersChallengeState>>;
};

export type EnumUsersChallengeStateWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumUsersChallengeStateFilter>;
  _min?: InputMaybe<NestedEnumUsersChallengeStateFilter>;
  equals?: InputMaybe<UsersChallengeState>;
  in?: InputMaybe<Array<UsersChallengeState>>;
  not?: InputMaybe<NestedEnumUsersChallengeStateWithAggregatesFilter>;
  notIn?: InputMaybe<Array<UsersChallengeState>>;
};

export type GetLeaderboardInput = {
  daily?: Scalars['Boolean']['input'];
  language?: Scalars['String']['input'];
};

export enum IndicateTypos {
  Below = 'BELOW',
  Off = 'OFF',
  Replace = 'REPLACE'
}

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>;
  divide?: InputMaybe<Scalars['Int']['input']>;
  increment?: InputMaybe<Scalars['Int']['input']>;
  multiply?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type JsonFilter = {
  array_contains?: InputMaybe<Scalars['JSON']['input']>;
  array_ends_with?: InputMaybe<Scalars['JSON']['input']>;
  array_starts_with?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<Scalars['JSON']['input']>;
  path?: InputMaybe<Array<Scalars['String']['input']>>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type JsonNullableFilter = {
  array_contains?: InputMaybe<Scalars['JSON']['input']>;
  array_ends_with?: InputMaybe<Scalars['JSON']['input']>;
  array_starts_with?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<Scalars['JSON']['input']>;
  path?: InputMaybe<Array<Scalars['String']['input']>>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type JsonNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedJsonNullableFilter>;
  _min?: InputMaybe<NestedJsonNullableFilter>;
  array_contains?: InputMaybe<Scalars['JSON']['input']>;
  array_ends_with?: InputMaybe<Scalars['JSON']['input']>;
  array_starts_with?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<Scalars['JSON']['input']>;
  path?: InputMaybe<Array<Scalars['String']['input']>>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type JsonWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedJsonFilter>;
  _min?: InputMaybe<NestedJsonFilter>;
  array_contains?: InputMaybe<Scalars['JSON']['input']>;
  array_ends_with?: InputMaybe<Scalars['JSON']['input']>;
  array_starts_with?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<Scalars['JSON']['input']>;
  path?: InputMaybe<Array<Scalars['String']['input']>>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type LeaderboardResponse = {
  __typename?: 'LeaderboardResponse';
  qualifiedUserIds: Array<Scalars['String']['output']>;
  time15runs: Array<LeaderboardRow>;
  time60runs: Array<LeaderboardRow>;
};

export type LeaderboardRow = {
  __typename?: 'LeaderboardRow';
  accuracy: Scalars['Float']['output'];
  consistency: Scalars['Float']['output'];
  date: Scalars['DateTimeISO']['output'];
  metadata: Scalars['JSONObject']['output'];
  position: Scalars['Int']['output'];
  raw: Scalars['Float']['output'];
  user: LeaderboardUserRow;
  wpm: Scalars['Float']['output'];
};

export type LeaderboardUserRow = {
  __typename?: 'LeaderboardUserRow';
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  level: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  og: Scalars['Boolean']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyAccount: AffectedRowsOutput;
  createManySession: AffectedRowsOutput;
  createManyTag: AffectedRowsOutput;
  createManyTypingRun: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createManyUserConfiguration: AffectedRowsOutput;
  createManyUserExperience: AffectedRowsOutput;
  createManyUserNotification: AffectedRowsOutput;
  createManyUsersChallenge: AffectedRowsOutput;
  createManyUsersChallengeMatch: AffectedRowsOutput;
  createManyVerificationToken: AffectedRowsOutput;
  createOneAccount: Account;
  createOneSession: Session;
  createOneTag: Tag;
  createOneTypingRun: TypingRun;
  createOneUser: User;
  createOneUserConfiguration: UserConfiguration;
  createOneUserExperience: UserExperience;
  createOneUserNotification: UserNotification;
  createOneUsersChallenge: UsersChallenge;
  createOneUsersChallengeMatch: UsersChallengeMatch;
  createOneVerificationToken: VerificationToken;
  deleteManyAccount: AffectedRowsOutput;
  deleteManySession: AffectedRowsOutput;
  deleteManyTag: AffectedRowsOutput;
  deleteManyTypingRun: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteManyUserConfiguration: AffectedRowsOutput;
  deleteManyUserExperience: AffectedRowsOutput;
  deleteManyUserNotification: AffectedRowsOutput;
  deleteManyUsersChallenge: AffectedRowsOutput;
  deleteManyUsersChallengeMatch: AffectedRowsOutput;
  deleteManyVerificationToken: AffectedRowsOutput;
  deleteOneAccount?: Maybe<Account>;
  deleteOneSession?: Maybe<Session>;
  deleteOneTag?: Maybe<Tag>;
  deleteOneTypingRun?: Maybe<TypingRun>;
  deleteOneUser?: Maybe<User>;
  deleteOneUserConfiguration?: Maybe<UserConfiguration>;
  deleteOneUserExperience?: Maybe<UserExperience>;
  deleteOneUserNotification?: Maybe<UserNotification>;
  deleteOneUsersChallenge?: Maybe<UsersChallenge>;
  deleteOneUsersChallengeMatch?: Maybe<UsersChallengeMatch>;
  deleteOneVerificationToken?: Maybe<VerificationToken>;
  signIn?: Maybe<User>;
  signOut: Scalars['Boolean']['output'];
  signUp: User;
  updateManyAccount: AffectedRowsOutput;
  updateManySession: AffectedRowsOutput;
  updateManyTag: AffectedRowsOutput;
  updateManyTypingRun: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateManyUserConfiguration: AffectedRowsOutput;
  updateManyUserExperience: AffectedRowsOutput;
  updateManyUserNotification: AffectedRowsOutput;
  updateManyUsersChallenge: AffectedRowsOutput;
  updateManyUsersChallengeMatch: AffectedRowsOutput;
  updateManyVerificationToken: AffectedRowsOutput;
  updateOneAccount?: Maybe<Account>;
  updateOneSession?: Maybe<Session>;
  updateOneTag?: Maybe<Tag>;
  updateOneTypingRun?: Maybe<TypingRun>;
  updateOneUser?: Maybe<User>;
  updateOneUserConfiguration?: Maybe<UserConfiguration>;
  updateOneUserExperience?: Maybe<UserExperience>;
  updateOneUserNotification?: Maybe<UserNotification>;
  updateOneUsersChallenge?: Maybe<UsersChallenge>;
  updateOneUsersChallengeMatch?: Maybe<UsersChallengeMatch>;
  updateOneVerificationToken?: Maybe<VerificationToken>;
  upsertOneAccount: Account;
  upsertOneSession: Session;
  upsertOneTag: Tag;
  upsertOneTypingRun: TypingRun;
  upsertOneUser: User;
  upsertOneUserConfiguration: UserConfiguration;
  upsertOneUserExperience: UserExperience;
  upsertOneUserNotification: UserNotification;
  upsertOneUsersChallenge: UsersChallenge;
  upsertOneUsersChallengeMatch: UsersChallengeMatch;
  upsertOneVerificationToken: VerificationToken;
};


export type MutationCreateManyAccountArgs = {
  data: Array<AccountCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManySessionArgs = {
  data: Array<SessionCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyTagArgs = {
  data: Array<TagCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyTypingRunArgs = {
  data: Array<TypingRunCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyUserConfigurationArgs = {
  data: Array<UserConfigurationCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyUserExperienceArgs = {
  data: Array<UserExperienceCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyUserNotificationArgs = {
  data: Array<UserNotificationCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyUsersChallengeArgs = {
  data: Array<UsersChallengeCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyUsersChallengeMatchArgs = {
  data: Array<UsersChallengeMatchCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyVerificationTokenArgs = {
  data: Array<VerificationTokenCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateOneAccountArgs = {
  data: AccountCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};


export type MutationCreateOneSessionArgs = {
  data: SessionCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};


export type MutationCreateOneTagArgs = {
  data: TagCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};


export type MutationCreateOneTypingRunArgs = {
  data: TypingRunCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};


export type MutationCreateOneUserConfigurationArgs = {
  data: UserConfigurationCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};


export type MutationCreateOneUserExperienceArgs = {
  data: UserExperienceCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};


export type MutationCreateOneUserNotificationArgs = {
  data: UserNotificationCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};


export type MutationCreateOneUsersChallengeArgs = {
  data: UsersChallengeCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};


export type MutationCreateOneUsersChallengeMatchArgs = {
  data: UsersChallengeMatchCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};


export type MutationCreateOneVerificationTokenArgs = {
  data: VerificationTokenCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};


export type MutationDeleteManyAccountArgs = {
  where?: InputMaybe<AccountWhereInput>;
};


export type MutationDeleteManySessionArgs = {
  where?: InputMaybe<SessionWhereInput>;
};


export type MutationDeleteManyTagArgs = {
  where?: InputMaybe<TagWhereInput>;
};


export type MutationDeleteManyTypingRunArgs = {
  where?: InputMaybe<TypingRunWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationDeleteManyUserConfigurationArgs = {
  where?: InputMaybe<UserConfigurationWhereInput>;
};


export type MutationDeleteManyUserExperienceArgs = {
  where?: InputMaybe<UserExperienceWhereInput>;
};


export type MutationDeleteManyUserNotificationArgs = {
  where?: InputMaybe<UserNotificationWhereInput>;
};


export type MutationDeleteManyUsersChallengeArgs = {
  where?: InputMaybe<UsersChallengeWhereInput>;
};


export type MutationDeleteManyUsersChallengeMatchArgs = {
  where?: InputMaybe<UsersChallengeMatchWhereInput>;
};


export type MutationDeleteManyVerificationTokenArgs = {
  where?: InputMaybe<VerificationTokenWhereInput>;
};


export type MutationDeleteOneAccountArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: AccountWhereUniqueInput;
};


export type MutationDeleteOneSessionArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: SessionWhereUniqueInput;
};


export type MutationDeleteOneTagArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: TagWhereUniqueInput;
};


export type MutationDeleteOneTypingRunArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: TypingRunWhereUniqueInput;
};


export type MutationDeleteOneUserArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserWhereUniqueInput;
};


export type MutationDeleteOneUserConfigurationArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserConfigurationWhereUniqueInput;
};


export type MutationDeleteOneUserExperienceArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserExperienceWhereUniqueInput;
};


export type MutationDeleteOneUserNotificationArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserNotificationWhereUniqueInput;
};


export type MutationDeleteOneUsersChallengeArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UsersChallengeWhereUniqueInput;
};


export type MutationDeleteOneUsersChallengeMatchArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UsersChallengeMatchWhereUniqueInput;
};


export type MutationDeleteOneVerificationTokenArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: VerificationTokenWhereUniqueInput;
};


export type MutationSignInArgs = {
  signInModel: UserSignInInput;
};


export type MutationSignUpArgs = {
  signUpModel: UserSignUpInput;
};


export type MutationUpdateManyAccountArgs = {
  data: AccountUpdateManyMutationInput;
  where?: InputMaybe<AccountWhereInput>;
};


export type MutationUpdateManySessionArgs = {
  data: SessionUpdateManyMutationInput;
  where?: InputMaybe<SessionWhereInput>;
};


export type MutationUpdateManyTagArgs = {
  data: TagUpdateManyMutationInput;
  where?: InputMaybe<TagWhereInput>;
};


export type MutationUpdateManyTypingRunArgs = {
  data: TypingRunUpdateManyMutationInput;
  where?: InputMaybe<TypingRunWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationUpdateManyUserConfigurationArgs = {
  data: UserConfigurationUpdateManyMutationInput;
  where?: InputMaybe<UserConfigurationWhereInput>;
};


export type MutationUpdateManyUserExperienceArgs = {
  data: UserExperienceUpdateManyMutationInput;
  where?: InputMaybe<UserExperienceWhereInput>;
};


export type MutationUpdateManyUserNotificationArgs = {
  data: UserNotificationUpdateManyMutationInput;
  where?: InputMaybe<UserNotificationWhereInput>;
};


export type MutationUpdateManyUsersChallengeArgs = {
  data: UsersChallengeUpdateManyMutationInput;
  where?: InputMaybe<UsersChallengeWhereInput>;
};


export type MutationUpdateManyUsersChallengeMatchArgs = {
  data: UsersChallengeMatchUpdateManyMutationInput;
  where?: InputMaybe<UsersChallengeMatchWhereInput>;
};


export type MutationUpdateManyVerificationTokenArgs = {
  data: VerificationTokenUpdateManyMutationInput;
  where?: InputMaybe<VerificationTokenWhereInput>;
};


export type MutationUpdateOneAccountArgs = {
  data: AccountUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: AccountWhereUniqueInput;
};


export type MutationUpdateOneSessionArgs = {
  data: SessionUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: SessionWhereUniqueInput;
};


export type MutationUpdateOneTagArgs = {
  data: TagUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: TagWhereUniqueInput;
};


export type MutationUpdateOneTypingRunArgs = {
  data: TypingRunUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: TypingRunWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserWhereUniqueInput;
};


export type MutationUpdateOneUserConfigurationArgs = {
  data: UserConfigurationUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserConfigurationWhereUniqueInput;
};


export type MutationUpdateOneUserExperienceArgs = {
  data: UserExperienceUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserExperienceWhereUniqueInput;
};


export type MutationUpdateOneUserNotificationArgs = {
  data: UserNotificationUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserNotificationWhereUniqueInput;
};


export type MutationUpdateOneUsersChallengeArgs = {
  data: UsersChallengeUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UsersChallengeWhereUniqueInput;
};


export type MutationUpdateOneUsersChallengeMatchArgs = {
  data: UsersChallengeMatchUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UsersChallengeMatchWhereUniqueInput;
};


export type MutationUpdateOneVerificationTokenArgs = {
  data: VerificationTokenUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: VerificationTokenWhereUniqueInput;
};


export type MutationUpsertOneAccountArgs = {
  create: AccountCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  update: AccountUpdateInput;
  where: AccountWhereUniqueInput;
};


export type MutationUpsertOneSessionArgs = {
  create: SessionCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  update: SessionUpdateInput;
  where: SessionWhereUniqueInput;
};


export type MutationUpsertOneTagArgs = {
  create: TagCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  update: TagUpdateInput;
  where: TagWhereUniqueInput;
};


export type MutationUpsertOneTypingRunArgs = {
  create: TypingRunCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  update: TypingRunUpdateInput;
  where: TypingRunWhereUniqueInput;
};


export type MutationUpsertOneUserArgs = {
  create: UserCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertOneUserConfigurationArgs = {
  create: UserConfigurationCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  update: UserConfigurationUpdateInput;
  where: UserConfigurationWhereUniqueInput;
};


export type MutationUpsertOneUserExperienceArgs = {
  create: UserExperienceCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  update: UserExperienceUpdateInput;
  where: UserExperienceWhereUniqueInput;
};


export type MutationUpsertOneUserNotificationArgs = {
  create: UserNotificationCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  update: UserNotificationUpdateInput;
  where: UserNotificationWhereUniqueInput;
};


export type MutationUpsertOneUsersChallengeArgs = {
  create: UsersChallengeCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  update: UsersChallengeUpdateInput;
  where: UsersChallengeWhereUniqueInput;
};


export type MutationUpsertOneUsersChallengeMatchArgs = {
  create: UsersChallengeMatchCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  update: UsersChallengeMatchUpdateInput;
  where: UsersChallengeMatchWhereUniqueInput;
};


export type MutationUpsertOneVerificationTokenArgs = {
  create: VerificationTokenCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  update: VerificationTokenUpdateInput;
  where: VerificationTokenWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type NestedDateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type NestedEnumCaretSmoothnessFilter = {
  equals?: InputMaybe<CaretSmoothness>;
  in?: InputMaybe<Array<CaretSmoothness>>;
  not?: InputMaybe<NestedEnumCaretSmoothnessFilter>;
  notIn?: InputMaybe<Array<CaretSmoothness>>;
};

export type NestedEnumCaretSmoothnessWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumCaretSmoothnessFilter>;
  _min?: InputMaybe<NestedEnumCaretSmoothnessFilter>;
  equals?: InputMaybe<CaretSmoothness>;
  in?: InputMaybe<Array<CaretSmoothness>>;
  not?: InputMaybe<NestedEnumCaretSmoothnessWithAggregatesFilter>;
  notIn?: InputMaybe<Array<CaretSmoothness>>;
};

export type NestedEnumCaretStyleFilter = {
  equals?: InputMaybe<CaretStyle>;
  in?: InputMaybe<Array<CaretStyle>>;
  not?: InputMaybe<NestedEnumCaretStyleFilter>;
  notIn?: InputMaybe<Array<CaretStyle>>;
};

export type NestedEnumCaretStyleWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumCaretStyleFilter>;
  _min?: InputMaybe<NestedEnumCaretStyleFilter>;
  equals?: InputMaybe<CaretStyle>;
  in?: InputMaybe<Array<CaretStyle>>;
  not?: InputMaybe<NestedEnumCaretStyleWithAggregatesFilter>;
  notIn?: InputMaybe<Array<CaretStyle>>;
};

export type NestedEnumConfidenceModeFilter = {
  equals?: InputMaybe<ConfidenceMode>;
  in?: InputMaybe<Array<ConfidenceMode>>;
  not?: InputMaybe<NestedEnumConfidenceModeFilter>;
  notIn?: InputMaybe<Array<ConfidenceMode>>;
};

export type NestedEnumConfidenceModeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumConfidenceModeFilter>;
  _min?: InputMaybe<NestedEnumConfidenceModeFilter>;
  equals?: InputMaybe<ConfidenceMode>;
  in?: InputMaybe<Array<ConfidenceMode>>;
  not?: InputMaybe<NestedEnumConfidenceModeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<ConfidenceMode>>;
};

export type NestedEnumIndicateTyposFilter = {
  equals?: InputMaybe<IndicateTypos>;
  in?: InputMaybe<Array<IndicateTypos>>;
  not?: InputMaybe<NestedEnumIndicateTyposFilter>;
  notIn?: InputMaybe<Array<IndicateTypos>>;
};

export type NestedEnumIndicateTyposWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumIndicateTyposFilter>;
  _min?: InputMaybe<NestedEnumIndicateTyposFilter>;
  equals?: InputMaybe<IndicateTypos>;
  in?: InputMaybe<Array<IndicateTypos>>;
  not?: InputMaybe<NestedEnumIndicateTyposWithAggregatesFilter>;
  notIn?: InputMaybe<Array<IndicateTypos>>;
};

export type NestedEnumPaceCaretSpeedFilter = {
  equals?: InputMaybe<PaceCaretSpeed>;
  in?: InputMaybe<Array<PaceCaretSpeed>>;
  not?: InputMaybe<NestedEnumPaceCaretSpeedFilter>;
  notIn?: InputMaybe<Array<PaceCaretSpeed>>;
};

export type NestedEnumPaceCaretSpeedWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumPaceCaretSpeedFilter>;
  _min?: InputMaybe<NestedEnumPaceCaretSpeedFilter>;
  equals?: InputMaybe<PaceCaretSpeed>;
  in?: InputMaybe<Array<PaceCaretSpeed>>;
  not?: InputMaybe<NestedEnumPaceCaretSpeedWithAggregatesFilter>;
  notIn?: InputMaybe<Array<PaceCaretSpeed>>;
};

export type NestedEnumRunDifficultyFilter = {
  equals?: InputMaybe<RunDifficulty>;
  in?: InputMaybe<Array<RunDifficulty>>;
  not?: InputMaybe<NestedEnumRunDifficultyFilter>;
  notIn?: InputMaybe<Array<RunDifficulty>>;
};

export type NestedEnumRunDifficultyWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumRunDifficultyFilter>;
  _min?: InputMaybe<NestedEnumRunDifficultyFilter>;
  equals?: InputMaybe<RunDifficulty>;
  in?: InputMaybe<Array<RunDifficulty>>;
  not?: InputMaybe<NestedEnumRunDifficultyWithAggregatesFilter>;
  notIn?: InputMaybe<Array<RunDifficulty>>;
};

export type NestedEnumShowAverageFilter = {
  equals?: InputMaybe<ShowAverage>;
  in?: InputMaybe<Array<ShowAverage>>;
  not?: InputMaybe<NestedEnumShowAverageFilter>;
  notIn?: InputMaybe<Array<ShowAverage>>;
};

export type NestedEnumShowAverageWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumShowAverageFilter>;
  _min?: InputMaybe<NestedEnumShowAverageFilter>;
  equals?: InputMaybe<ShowAverage>;
  in?: InputMaybe<Array<ShowAverage>>;
  not?: InputMaybe<NestedEnumShowAverageWithAggregatesFilter>;
  notIn?: InputMaybe<Array<ShowAverage>>;
};

export type NestedEnumTypingRunModeFilter = {
  equals?: InputMaybe<TypingRunMode>;
  in?: InputMaybe<Array<TypingRunMode>>;
  not?: InputMaybe<NestedEnumTypingRunModeFilter>;
  notIn?: InputMaybe<Array<TypingRunMode>>;
};

export type NestedEnumTypingRunModeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumTypingRunModeFilter>;
  _min?: InputMaybe<NestedEnumTypingRunModeFilter>;
  equals?: InputMaybe<TypingRunMode>;
  in?: InputMaybe<Array<TypingRunMode>>;
  not?: InputMaybe<NestedEnumTypingRunModeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<TypingRunMode>>;
};

export type NestedEnumUsersChallengeMatchStateFilter = {
  equals?: InputMaybe<UsersChallengeMatchState>;
  in?: InputMaybe<Array<UsersChallengeMatchState>>;
  not?: InputMaybe<NestedEnumUsersChallengeMatchStateFilter>;
  notIn?: InputMaybe<Array<UsersChallengeMatchState>>;
};

export type NestedEnumUsersChallengeMatchStateWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumUsersChallengeMatchStateFilter>;
  _min?: InputMaybe<NestedEnumUsersChallengeMatchStateFilter>;
  equals?: InputMaybe<UsersChallengeMatchState>;
  in?: InputMaybe<Array<UsersChallengeMatchState>>;
  not?: InputMaybe<NestedEnumUsersChallengeMatchStateWithAggregatesFilter>;
  notIn?: InputMaybe<Array<UsersChallengeMatchState>>;
};

export type NestedEnumUsersChallengeStateFilter = {
  equals?: InputMaybe<UsersChallengeState>;
  in?: InputMaybe<Array<UsersChallengeState>>;
  not?: InputMaybe<NestedEnumUsersChallengeStateFilter>;
  notIn?: InputMaybe<Array<UsersChallengeState>>;
};

export type NestedEnumUsersChallengeStateWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumUsersChallengeStateFilter>;
  _min?: InputMaybe<NestedEnumUsersChallengeStateFilter>;
  equals?: InputMaybe<UsersChallengeState>;
  in?: InputMaybe<Array<UsersChallengeState>>;
  not?: InputMaybe<NestedEnumUsersChallengeStateWithAggregatesFilter>;
  notIn?: InputMaybe<Array<UsersChallengeState>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedJsonFilter = {
  array_contains?: InputMaybe<Scalars['JSON']['input']>;
  array_ends_with?: InputMaybe<Scalars['JSON']['input']>;
  array_starts_with?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<Scalars['JSON']['input']>;
  path?: InputMaybe<Array<Scalars['String']['input']>>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type NestedJsonNullableFilter = {
  array_contains?: InputMaybe<Scalars['JSON']['input']>;
  array_ends_with?: InputMaybe<Scalars['JSON']['input']>;
  array_starts_with?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<Scalars['JSON']['input']>;
  path?: InputMaybe<Array<Scalars['String']['input']>>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedUuidFilter = {
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedUuidFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type NestedUuidNullableFilter = {
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedUuidNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type NestedUuidNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedUuidNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type NestedUuidWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedUuidWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>;
  divide?: InputMaybe<Scalars['Int']['input']>;
  increment?: InputMaybe<Scalars['Int']['input']>;
  multiply?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export enum NullsOrder {
  First = 'first',
  Last = 'last'
}

export enum PaceCaretSpeed {
  Avg = 'AVG',
  Custom = 'CUSTOM',
  Daily = 'DAILY',
  Last = 'LAST',
  Off = 'OFF',
  Pb = 'PB'
}

export type Query = {
  __typename?: 'Query';
  account?: Maybe<Account>;
  accounts: Array<Account>;
  aggregateAccount: AggregateAccount;
  aggregateSession: AggregateSession;
  aggregateTag: AggregateTag;
  aggregateTypingRun: AggregateTypingRun;
  aggregateUser: AggregateUser;
  aggregateUserConfiguration: AggregateUserConfiguration;
  aggregateUserExperience: AggregateUserExperience;
  aggregateUserNotification: AggregateUserNotification;
  aggregateUsersChallenge: AggregateUsersChallenge;
  aggregateUsersChallengeMatch: AggregateUsersChallengeMatch;
  aggregateVerificationToken: AggregateVerificationToken;
  findById: User;
  findFirstAccount?: Maybe<Account>;
  findFirstAccountOrThrow?: Maybe<Account>;
  findFirstSession?: Maybe<Session>;
  findFirstSessionOrThrow?: Maybe<Session>;
  findFirstTag?: Maybe<Tag>;
  findFirstTagOrThrow?: Maybe<Tag>;
  findFirstTypingRun?: Maybe<TypingRun>;
  findFirstTypingRunOrThrow?: Maybe<TypingRun>;
  findFirstUser?: Maybe<User>;
  findFirstUserConfiguration?: Maybe<UserConfiguration>;
  findFirstUserConfigurationOrThrow?: Maybe<UserConfiguration>;
  findFirstUserExperience?: Maybe<UserExperience>;
  findFirstUserExperienceOrThrow?: Maybe<UserExperience>;
  findFirstUserNotification?: Maybe<UserNotification>;
  findFirstUserNotificationOrThrow?: Maybe<UserNotification>;
  findFirstUserOrThrow?: Maybe<User>;
  findFirstUsersChallenge?: Maybe<UsersChallenge>;
  findFirstUsersChallengeMatch?: Maybe<UsersChallengeMatch>;
  findFirstUsersChallengeMatchOrThrow?: Maybe<UsersChallengeMatch>;
  findFirstUsersChallengeOrThrow?: Maybe<UsersChallenge>;
  findFirstVerificationToken?: Maybe<VerificationToken>;
  findFirstVerificationTokenOrThrow?: Maybe<VerificationToken>;
  getAccount?: Maybe<Account>;
  getLeaderboard: LeaderboardResponse;
  getSession?: Maybe<Session>;
  getTag?: Maybe<Tag>;
  getTypingRun?: Maybe<TypingRun>;
  getUser?: Maybe<User>;
  getUserConfiguration?: Maybe<UserConfiguration>;
  getUserExperience?: Maybe<UserExperience>;
  getUserNotification?: Maybe<UserNotification>;
  getUsersChallenge?: Maybe<UsersChallenge>;
  getUsersChallengeMatch?: Maybe<UsersChallengeMatch>;
  getVerificationToken?: Maybe<VerificationToken>;
  groupByAccount: Array<AccountGroupBy>;
  groupBySession: Array<SessionGroupBy>;
  groupByTag: Array<TagGroupBy>;
  groupByTypingRun: Array<TypingRunGroupBy>;
  groupByUser: Array<UserGroupBy>;
  groupByUserConfiguration: Array<UserConfigurationGroupBy>;
  groupByUserExperience: Array<UserExperienceGroupBy>;
  groupByUserNotification: Array<UserNotificationGroupBy>;
  groupByUsersChallenge: Array<UsersChallengeGroupBy>;
  groupByUsersChallengeMatch: Array<UsersChallengeMatchGroupBy>;
  groupByVerificationToken: Array<VerificationTokenGroupBy>;
  me?: Maybe<User>;
  search: Array<UserSearchResponse>;
  session?: Maybe<Session>;
  sessions: Array<Session>;
  tag?: Maybe<Tag>;
  tags: Array<Tag>;
  typingRun?: Maybe<TypingRun>;
  typingRuns: Array<TypingRun>;
  user?: Maybe<User>;
  userConfiguration?: Maybe<UserConfiguration>;
  userConfigurations: Array<UserConfiguration>;
  userExperience?: Maybe<UserExperience>;
  userExperiences: Array<UserExperience>;
  userNotification?: Maybe<UserNotification>;
  userNotifications: Array<UserNotification>;
  users: Array<User>;
  usersChallenge?: Maybe<UsersChallenge>;
  usersChallengeMatch?: Maybe<UsersChallengeMatch>;
  usersChallengeMatches: Array<UsersChallengeMatch>;
  usersChallenges: Array<UsersChallenge>;
  verificationToken?: Maybe<VerificationToken>;
  verificationTokens: Array<VerificationToken>;
};


export type QueryAccountArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: AccountWhereUniqueInput;
};


export type QueryAccountsArgs = {
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  distinct?: InputMaybe<Array<AccountScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AccountOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccountWhereInput>;
};


export type QueryAggregateAccountArgs = {
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  orderBy?: InputMaybe<Array<AccountOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccountWhereInput>;
};


export type QueryAggregateSessionArgs = {
  cursor?: InputMaybe<SessionWhereUniqueInput>;
  orderBy?: InputMaybe<Array<SessionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SessionWhereInput>;
};


export type QueryAggregateTagArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: InputMaybe<Array<TagOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TagWhereInput>;
};


export type QueryAggregateTypingRunArgs = {
  cursor?: InputMaybe<TypingRunWhereUniqueInput>;
  orderBy?: InputMaybe<Array<TypingRunOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TypingRunWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryAggregateUserConfigurationArgs = {
  cursor?: InputMaybe<UserConfigurationWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserConfigurationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserConfigurationWhereInput>;
};


export type QueryAggregateUserExperienceArgs = {
  cursor?: InputMaybe<UserExperienceWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserExperienceOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserExperienceWhereInput>;
};


export type QueryAggregateUserNotificationArgs = {
  cursor?: InputMaybe<UserNotificationWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserNotificationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserNotificationWhereInput>;
};


export type QueryAggregateUsersChallengeArgs = {
  cursor?: InputMaybe<UsersChallengeWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UsersChallengeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UsersChallengeWhereInput>;
};


export type QueryAggregateUsersChallengeMatchArgs = {
  cursor?: InputMaybe<UsersChallengeMatchWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UsersChallengeMatchOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UsersChallengeMatchWhereInput>;
};


export type QueryAggregateVerificationTokenArgs = {
  cursor?: InputMaybe<VerificationTokenWhereUniqueInput>;
  orderBy?: InputMaybe<Array<VerificationTokenOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VerificationTokenWhereInput>;
};


export type QueryFindByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindFirstAccountArgs = {
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  distinct?: InputMaybe<Array<AccountScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AccountOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccountWhereInput>;
};


export type QueryFindFirstAccountOrThrowArgs = {
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  distinct?: InputMaybe<Array<AccountScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AccountOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccountWhereInput>;
};


export type QueryFindFirstSessionArgs = {
  cursor?: InputMaybe<SessionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SessionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SessionOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SessionWhereInput>;
};


export type QueryFindFirstSessionOrThrowArgs = {
  cursor?: InputMaybe<SessionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SessionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SessionOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SessionWhereInput>;
};


export type QueryFindFirstTagArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  distinct?: InputMaybe<Array<TagScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TagOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TagWhereInput>;
};


export type QueryFindFirstTagOrThrowArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  distinct?: InputMaybe<Array<TagScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TagOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TagWhereInput>;
};


export type QueryFindFirstTypingRunArgs = {
  cursor?: InputMaybe<TypingRunWhereUniqueInput>;
  distinct?: InputMaybe<Array<TypingRunScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TypingRunOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TypingRunWhereInput>;
};


export type QueryFindFirstTypingRunOrThrowArgs = {
  cursor?: InputMaybe<TypingRunWhereUniqueInput>;
  distinct?: InputMaybe<Array<TypingRunScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TypingRunOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TypingRunWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstUserConfigurationArgs = {
  cursor?: InputMaybe<UserConfigurationWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserConfigurationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserConfigurationOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserConfigurationWhereInput>;
};


export type QueryFindFirstUserConfigurationOrThrowArgs = {
  cursor?: InputMaybe<UserConfigurationWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserConfigurationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserConfigurationOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserConfigurationWhereInput>;
};


export type QueryFindFirstUserExperienceArgs = {
  cursor?: InputMaybe<UserExperienceWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserExperienceScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserExperienceOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserExperienceWhereInput>;
};


export type QueryFindFirstUserExperienceOrThrowArgs = {
  cursor?: InputMaybe<UserExperienceWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserExperienceScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserExperienceOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserExperienceWhereInput>;
};


export type QueryFindFirstUserNotificationArgs = {
  cursor?: InputMaybe<UserNotificationWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserNotificationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserNotificationOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserNotificationWhereInput>;
};


export type QueryFindFirstUserNotificationOrThrowArgs = {
  cursor?: InputMaybe<UserNotificationWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserNotificationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserNotificationOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserNotificationWhereInput>;
};


export type QueryFindFirstUserOrThrowArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstUsersChallengeArgs = {
  cursor?: InputMaybe<UsersChallengeWhereUniqueInput>;
  distinct?: InputMaybe<Array<UsersChallengeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UsersChallengeOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UsersChallengeWhereInput>;
};


export type QueryFindFirstUsersChallengeMatchArgs = {
  cursor?: InputMaybe<UsersChallengeMatchWhereUniqueInput>;
  distinct?: InputMaybe<Array<UsersChallengeMatchScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UsersChallengeMatchOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UsersChallengeMatchWhereInput>;
};


export type QueryFindFirstUsersChallengeMatchOrThrowArgs = {
  cursor?: InputMaybe<UsersChallengeMatchWhereUniqueInput>;
  distinct?: InputMaybe<Array<UsersChallengeMatchScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UsersChallengeMatchOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UsersChallengeMatchWhereInput>;
};


export type QueryFindFirstUsersChallengeOrThrowArgs = {
  cursor?: InputMaybe<UsersChallengeWhereUniqueInput>;
  distinct?: InputMaybe<Array<UsersChallengeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UsersChallengeOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UsersChallengeWhereInput>;
};


export type QueryFindFirstVerificationTokenArgs = {
  cursor?: InputMaybe<VerificationTokenWhereUniqueInput>;
  distinct?: InputMaybe<Array<VerificationTokenScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<VerificationTokenOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VerificationTokenWhereInput>;
};


export type QueryFindFirstVerificationTokenOrThrowArgs = {
  cursor?: InputMaybe<VerificationTokenWhereUniqueInput>;
  distinct?: InputMaybe<Array<VerificationTokenScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<VerificationTokenOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VerificationTokenWhereInput>;
};


export type QueryGetAccountArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: AccountWhereUniqueInput;
};


export type QueryGetLeaderboardArgs = {
  input: GetLeaderboardInput;
};


export type QueryGetSessionArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: SessionWhereUniqueInput;
};


export type QueryGetTagArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: TagWhereUniqueInput;
};


export type QueryGetTypingRunArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: TypingRunWhereUniqueInput;
};


export type QueryGetUserArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserWhereUniqueInput;
};


export type QueryGetUserConfigurationArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserConfigurationWhereUniqueInput;
};


export type QueryGetUserExperienceArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserExperienceWhereUniqueInput;
};


export type QueryGetUserNotificationArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserNotificationWhereUniqueInput;
};


export type QueryGetUsersChallengeArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UsersChallengeWhereUniqueInput;
};


export type QueryGetUsersChallengeMatchArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UsersChallengeMatchWhereUniqueInput;
};


export type QueryGetVerificationTokenArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: VerificationTokenWhereUniqueInput;
};


export type QueryGroupByAccountArgs = {
  by: Array<AccountScalarFieldEnum>;
  having?: InputMaybe<AccountScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<AccountOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccountWhereInput>;
};


export type QueryGroupBySessionArgs = {
  by: Array<SessionScalarFieldEnum>;
  having?: InputMaybe<SessionScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<SessionOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SessionWhereInput>;
};


export type QueryGroupByTagArgs = {
  by: Array<TagScalarFieldEnum>;
  having?: InputMaybe<TagScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<TagOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TagWhereInput>;
};


export type QueryGroupByTypingRunArgs = {
  by: Array<TypingRunScalarFieldEnum>;
  having?: InputMaybe<TypingRunScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<TypingRunOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TypingRunWhereInput>;
};


export type QueryGroupByUserArgs = {
  by: Array<UserScalarFieldEnum>;
  having?: InputMaybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryGroupByUserConfigurationArgs = {
  by: Array<UserConfigurationScalarFieldEnum>;
  having?: InputMaybe<UserConfigurationScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserConfigurationOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserConfigurationWhereInput>;
};


export type QueryGroupByUserExperienceArgs = {
  by: Array<UserExperienceScalarFieldEnum>;
  having?: InputMaybe<UserExperienceScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserExperienceOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserExperienceWhereInput>;
};


export type QueryGroupByUserNotificationArgs = {
  by: Array<UserNotificationScalarFieldEnum>;
  having?: InputMaybe<UserNotificationScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserNotificationOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserNotificationWhereInput>;
};


export type QueryGroupByUsersChallengeArgs = {
  by: Array<UsersChallengeScalarFieldEnum>;
  having?: InputMaybe<UsersChallengeScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UsersChallengeOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UsersChallengeWhereInput>;
};


export type QueryGroupByUsersChallengeMatchArgs = {
  by: Array<UsersChallengeMatchScalarFieldEnum>;
  having?: InputMaybe<UsersChallengeMatchScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UsersChallengeMatchOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UsersChallengeMatchWhereInput>;
};


export type QueryGroupByVerificationTokenArgs = {
  by: Array<VerificationTokenScalarFieldEnum>;
  having?: InputMaybe<VerificationTokenScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<VerificationTokenOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VerificationTokenWhereInput>;
};


export type QuerySearchArgs = {
  search?: UsersSearchInput;
};


export type QuerySessionArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: SessionWhereUniqueInput;
};


export type QuerySessionsArgs = {
  cursor?: InputMaybe<SessionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SessionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SessionOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SessionWhereInput>;
};


export type QueryTagArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: TagWhereUniqueInput;
};


export type QueryTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  distinct?: InputMaybe<Array<TagScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TagOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TagWhereInput>;
};


export type QueryTypingRunArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: TypingRunWhereUniqueInput;
};


export type QueryTypingRunsArgs = {
  cursor?: InputMaybe<TypingRunWhereUniqueInput>;
  distinct?: InputMaybe<Array<TypingRunScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TypingRunOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TypingRunWhereInput>;
};


export type QueryUserArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserWhereUniqueInput;
};


export type QueryUserConfigurationArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserConfigurationWhereUniqueInput;
};


export type QueryUserConfigurationsArgs = {
  cursor?: InputMaybe<UserConfigurationWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserConfigurationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserConfigurationOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserConfigurationWhereInput>;
};


export type QueryUserExperienceArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserExperienceWhereUniqueInput;
};


export type QueryUserExperiencesArgs = {
  cursor?: InputMaybe<UserExperienceWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserExperienceScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserExperienceOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserExperienceWhereInput>;
};


export type QueryUserNotificationArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserNotificationWhereUniqueInput;
};


export type QueryUserNotificationsArgs = {
  cursor?: InputMaybe<UserNotificationWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserNotificationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserNotificationOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserNotificationWhereInput>;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryUsersChallengeArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UsersChallengeWhereUniqueInput;
};


export type QueryUsersChallengeMatchArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UsersChallengeMatchWhereUniqueInput;
};


export type QueryUsersChallengeMatchesArgs = {
  cursor?: InputMaybe<UsersChallengeMatchWhereUniqueInput>;
  distinct?: InputMaybe<Array<UsersChallengeMatchScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UsersChallengeMatchOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UsersChallengeMatchWhereInput>;
};


export type QueryUsersChallengesArgs = {
  cursor?: InputMaybe<UsersChallengeWhereUniqueInput>;
  distinct?: InputMaybe<Array<UsersChallengeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UsersChallengeOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UsersChallengeWhereInput>;
};


export type QueryVerificationTokenArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: VerificationTokenWhereUniqueInput;
};


export type QueryVerificationTokensArgs = {
  cursor?: InputMaybe<VerificationTokenWhereUniqueInput>;
  distinct?: InputMaybe<Array<VerificationTokenScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<VerificationTokenOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VerificationTokenWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum RelationLoadStrategy {
  Join = 'join',
  Query = 'query'
}

export enum RunDifficulty {
  Expert = 'EXPERT',
  Master = 'MASTER',
  Normal = 'NORMAL'
}

export type Session = {
  __typename?: 'Session';
  createdAt: Scalars['DateTimeISO']['output'];
  expires: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  sessionToken: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  userConfigurationId?: Maybe<Scalars['String']['output']>;
  userId: Scalars['String']['output'];
};

export type SessionCountAggregate = {
  __typename?: 'SessionCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  expires: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  sessionToken: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userConfigurationId: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type SessionCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  expires?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userConfigurationId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SessionCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  expires: Scalars['DateTimeISO']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  sessionToken: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user: UserCreateNestedOneWithoutSessionsInput;
  userConfigurationId?: InputMaybe<Scalars['String']['input']>;
};

export type SessionCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  expires: Scalars['DateTimeISO']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  sessionToken: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userConfigurationId?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['String']['input'];
};

export type SessionCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  expires: Scalars['DateTimeISO']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  sessionToken: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userConfigurationId?: InputMaybe<Scalars['String']['input']>;
};

export type SessionCreateManyUserInputEnvelope = {
  data: Array<SessionCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SessionCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SessionCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<SessionCreateWithoutUserInput>>;
  createMany?: InputMaybe<SessionCreateManyUserInputEnvelope>;
};

export type SessionCreateOrConnectWithoutUserInput = {
  create: SessionCreateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  expires: Scalars['DateTimeISO']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  sessionToken: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userConfigurationId?: InputMaybe<Scalars['String']['input']>;
};

export type SessionGroupBy = {
  __typename?: 'SessionGroupBy';
  _count?: Maybe<SessionCountAggregate>;
  _max?: Maybe<SessionMaxAggregate>;
  _min?: Maybe<SessionMinAggregate>;
  createdAt: Scalars['DateTimeISO']['output'];
  expires: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  sessionToken: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  userConfigurationId?: Maybe<Scalars['String']['output']>;
  userId: Scalars['String']['output'];
};

export type SessionListRelationFilter = {
  every?: InputMaybe<SessionWhereInput>;
  none?: InputMaybe<SessionWhereInput>;
  some?: InputMaybe<SessionWhereInput>;
};

export type SessionMaxAggregate = {
  __typename?: 'SessionMaxAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  expires?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  sessionToken?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userConfigurationId?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type SessionMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  expires?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userConfigurationId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SessionMinAggregate = {
  __typename?: 'SessionMinAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  expires?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  sessionToken?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userConfigurationId?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type SessionMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  expires?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userConfigurationId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SessionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum SessionOrderByRelevanceFieldEnum {
  Id = 'id',
  SessionToken = 'sessionToken',
  UserConfigurationId = 'userConfigurationId',
  UserId = 'userId'
}

export type SessionOrderByRelevanceInput = {
  fields: Array<SessionOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type SessionOrderByWithAggregationInput = {
  _count?: InputMaybe<SessionCountOrderByAggregateInput>;
  _max?: InputMaybe<SessionMaxOrderByAggregateInput>;
  _min?: InputMaybe<SessionMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  expires?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userConfigurationId?: InputMaybe<SortOrderInput>;
  userId?: InputMaybe<SortOrder>;
};

export type SessionOrderByWithRelationInput = {
  _relevance?: InputMaybe<SessionOrderByRelevanceInput>;
  createdAt?: InputMaybe<SortOrder>;
  expires?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userConfigurationId?: InputMaybe<SortOrderInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum SessionScalarFieldEnum {
  CreatedAt = 'createdAt',
  Expires = 'expires',
  Id = 'id',
  SessionToken = 'sessionToken',
  UpdatedAt = 'updatedAt',
  UserConfigurationId = 'userConfigurationId',
  UserId = 'userId'
}

export type SessionScalarWhereInput = {
  AND?: InputMaybe<Array<SessionScalarWhereInput>>;
  NOT?: InputMaybe<Array<SessionScalarWhereInput>>;
  OR?: InputMaybe<Array<SessionScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expires?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  sessionToken?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userConfigurationId?: InputMaybe<StringNullableFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type SessionScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<SessionScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<SessionScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<SessionScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  expires?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  sessionToken?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userConfigurationId?: InputMaybe<StringNullableWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type SessionUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  sessionToken?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutSessionsNestedInput>;
  userConfigurationId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type SessionUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  sessionToken?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userConfigurationId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type SessionUpdateManyWithWhereWithoutUserInput = {
  data: SessionUpdateManyMutationInput;
  where: SessionScalarWhereInput;
};

export type SessionUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SessionCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<SessionCreateWithoutUserInput>>;
  createMany?: InputMaybe<SessionCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<SessionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SessionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  set?: InputMaybe<Array<SessionWhereUniqueInput>>;
  update?: InputMaybe<Array<SessionUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<SessionUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<SessionUpsertWithWhereUniqueWithoutUserInput>>;
};

export type SessionUpdateWithWhereUniqueWithoutUserInput = {
  data: SessionUpdateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  sessionToken?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userConfigurationId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type SessionUpsertWithWhereUniqueWithoutUserInput = {
  create: SessionCreateWithoutUserInput;
  update: SessionUpdateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionWhereInput = {
  AND?: InputMaybe<Array<SessionWhereInput>>;
  NOT?: InputMaybe<Array<SessionWhereInput>>;
  OR?: InputMaybe<Array<SessionWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expires?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  sessionToken?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userConfigurationId?: InputMaybe<StringNullableFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type SessionWhereUniqueInput = {
  AND?: InputMaybe<Array<SessionWhereInput>>;
  NOT?: InputMaybe<Array<SessionWhereInput>>;
  OR?: InputMaybe<Array<SessionWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expires?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  sessionToken?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userConfigurationId?: InputMaybe<StringNullableFilter>;
  userId?: InputMaybe<StringFilter>;
};

export enum ShowAverage {
  Acc = 'ACC',
  Both = 'BOTH',
  Off = 'OFF',
  Speed = 'SPEED'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type SortOrderInput = {
  nulls?: InputMaybe<NullsOrder>;
  sort: SortOrder;
};

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Tag = {
  __typename?: 'Tag';
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  /** [TagMetadata] */
  metadata?: Maybe<Scalars['JSON']['output']>;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  userConfigurationId?: Maybe<Scalars['String']['output']>;
  userId: Scalars['String']['output'];
};

export type TagCountAggregate = {
  __typename?: 'TagCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  metadata: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userConfigurationId: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type TagCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userConfigurationId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type TagCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user: UserCreateNestedOneWithoutTagsInput;
  userConfigurationId?: InputMaybe<Scalars['String']['input']>;
};

export type TagCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userConfigurationId?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['String']['input'];
};

export type TagCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userConfigurationId?: InputMaybe<Scalars['String']['input']>;
};

export type TagCreateManyUserInputEnvelope = {
  data: Array<TagCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TagCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TagCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<TagCreateWithoutUserInput>>;
  createMany?: InputMaybe<TagCreateManyUserInputEnvelope>;
};

export type TagCreateOrConnectWithoutUserInput = {
  create: TagCreateWithoutUserInput;
  where: TagWhereUniqueInput;
};

export type TagCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userConfigurationId?: InputMaybe<Scalars['String']['input']>;
};

export type TagGroupBy = {
  __typename?: 'TagGroupBy';
  _count?: Maybe<TagCountAggregate>;
  _max?: Maybe<TagMaxAggregate>;
  _min?: Maybe<TagMinAggregate>;
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  userConfigurationId?: Maybe<Scalars['String']['output']>;
  userId: Scalars['String']['output'];
};

export type TagListRelationFilter = {
  every?: InputMaybe<TagWhereInput>;
  none?: InputMaybe<TagWhereInput>;
  some?: InputMaybe<TagWhereInput>;
};

export type TagMaxAggregate = {
  __typename?: 'TagMaxAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userConfigurationId?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type TagMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userConfigurationId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type TagMinAggregate = {
  __typename?: 'TagMinAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userConfigurationId?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type TagMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userConfigurationId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type TagOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum TagOrderByRelevanceFieldEnum {
  Id = 'id',
  Name = 'name',
  UserConfigurationId = 'userConfigurationId',
  UserId = 'userId'
}

export type TagOrderByRelevanceInput = {
  fields: Array<TagOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type TagOrderByWithAggregationInput = {
  _count?: InputMaybe<TagCountOrderByAggregateInput>;
  _max?: InputMaybe<TagMaxOrderByAggregateInput>;
  _min?: InputMaybe<TagMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrderInput>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userConfigurationId?: InputMaybe<SortOrderInput>;
  userId?: InputMaybe<SortOrder>;
};

export type TagOrderByWithRelationInput = {
  _relevance?: InputMaybe<TagOrderByRelevanceInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrderInput>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userConfigurationId?: InputMaybe<SortOrderInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum TagScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Metadata = 'metadata',
  Name = 'name',
  UpdatedAt = 'updatedAt',
  UserConfigurationId = 'userConfigurationId',
  UserId = 'userId'
}

export type TagScalarWhereInput = {
  AND?: InputMaybe<Array<TagScalarWhereInput>>;
  NOT?: InputMaybe<Array<TagScalarWhereInput>>;
  OR?: InputMaybe<Array<TagScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<UuidFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userConfigurationId?: InputMaybe<StringNullableFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type TagScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<TagScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<TagScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<TagScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<UuidWithAggregatesFilter>;
  metadata?: InputMaybe<JsonNullableWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userConfigurationId?: InputMaybe<StringNullableWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type TagUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutTagsNestedInput>;
  userConfigurationId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type TagUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userConfigurationId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type TagUpdateManyWithWhereWithoutUserInput = {
  data: TagUpdateManyMutationInput;
  where: TagScalarWhereInput;
};

export type TagUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TagCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<TagCreateWithoutUserInput>>;
  createMany?: InputMaybe<TagCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<TagWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TagScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TagWhereUniqueInput>>;
  set?: InputMaybe<Array<TagWhereUniqueInput>>;
  update?: InputMaybe<Array<TagUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<TagUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<TagUpsertWithWhereUniqueWithoutUserInput>>;
};

export type TagUpdateWithWhereUniqueWithoutUserInput = {
  data: TagUpdateWithoutUserInput;
  where: TagWhereUniqueInput;
};

export type TagUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userConfigurationId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type TagUpsertWithWhereUniqueWithoutUserInput = {
  create: TagCreateWithoutUserInput;
  update: TagUpdateWithoutUserInput;
  where: TagWhereUniqueInput;
};

export type TagWhereInput = {
  AND?: InputMaybe<Array<TagWhereInput>>;
  NOT?: InputMaybe<Array<TagWhereInput>>;
  OR?: InputMaybe<Array<TagWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<UuidFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userConfigurationId?: InputMaybe<StringNullableFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type TagWhereUniqueInput = {
  AND?: InputMaybe<Array<TagWhereInput>>;
  NOT?: InputMaybe<Array<TagWhereInput>>;
  OR?: InputMaybe<Array<TagWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<JsonNullableFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userConfigurationId?: InputMaybe<StringNullableFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type TypingRun = {
  __typename?: 'TypingRun';
  _count?: Maybe<TypingRunCount>;
  createdAt: Scalars['DateTimeISO']['output'];
  flags: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  /** [TypingRunMetadata] */
  metadata?: Maybe<Scalars['JSON']['output']>;
  mode: TypingRunMode;
  time?: Maybe<Scalars['Int']['output']>;
  totalTimeMilliseconds: Scalars['Int']['output'];
  /** [TypedLetters] */
  typedLetters: Scalars['JSON']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  userId: Scalars['String']['output'];
  wordCount?: Maybe<Scalars['Int']['output']>;
};

export type TypingRunAvgAggregate = {
  __typename?: 'TypingRunAvgAggregate';
  flags?: Maybe<Scalars['Float']['output']>;
  time?: Maybe<Scalars['Float']['output']>;
  totalTimeMilliseconds?: Maybe<Scalars['Float']['output']>;
  wordCount?: Maybe<Scalars['Float']['output']>;
};

export type TypingRunAvgOrderByAggregateInput = {
  flags?: InputMaybe<SortOrder>;
  time?: InputMaybe<SortOrder>;
  totalTimeMilliseconds?: InputMaybe<SortOrder>;
  wordCount?: InputMaybe<SortOrder>;
};

export type TypingRunCount = {
  __typename?: 'TypingRunCount';
  challanges_one: Scalars['Int']['output'];
  challenges_two: Scalars['Int']['output'];
};


export type TypingRunCountChallanges_OneArgs = {
  where?: InputMaybe<UsersChallengeWhereInput>;
};


export type TypingRunCountChallenges_TwoArgs = {
  where?: InputMaybe<UsersChallengeWhereInput>;
};

export type TypingRunCountAggregate = {
  __typename?: 'TypingRunCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  flags: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  metadata: Scalars['Int']['output'];
  mode: Scalars['Int']['output'];
  time: Scalars['Int']['output'];
  totalTimeMilliseconds: Scalars['Int']['output'];
  typedLetters: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
  wordCount: Scalars['Int']['output'];
};

export type TypingRunCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  flags?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrder>;
  mode?: InputMaybe<SortOrder>;
  time?: InputMaybe<SortOrder>;
  totalTimeMilliseconds?: InputMaybe<SortOrder>;
  typedLetters?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  wordCount?: InputMaybe<SortOrder>;
};

export type TypingRunCreateInput = {
  challanges_one?: InputMaybe<UsersChallengeCreateNestedManyWithoutUserOneRunInput>;
  challenges_two?: InputMaybe<UsersChallengeCreateNestedManyWithoutUserTwoRunInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  flags: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  mode: TypingRunMode;
  time?: InputMaybe<Scalars['Int']['input']>;
  totalTimeMilliseconds: Scalars['Int']['input'];
  typedLetters: Scalars['JSON']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user: UserCreateNestedOneWithoutTypingRunsInput;
  wordCount?: InputMaybe<Scalars['Int']['input']>;
};

export type TypingRunCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  flags: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  mode: TypingRunMode;
  time?: InputMaybe<Scalars['Int']['input']>;
  totalTimeMilliseconds: Scalars['Int']['input'];
  typedLetters: Scalars['JSON']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userId: Scalars['String']['input'];
  wordCount?: InputMaybe<Scalars['Int']['input']>;
};

export type TypingRunCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  flags: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  mode: TypingRunMode;
  time?: InputMaybe<Scalars['Int']['input']>;
  totalTimeMilliseconds: Scalars['Int']['input'];
  typedLetters: Scalars['JSON']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  wordCount?: InputMaybe<Scalars['Int']['input']>;
};

export type TypingRunCreateManyUserInputEnvelope = {
  data: Array<TypingRunCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TypingRunCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<TypingRunWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TypingRunCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<TypingRunCreateWithoutUserInput>>;
  createMany?: InputMaybe<TypingRunCreateManyUserInputEnvelope>;
};

export type TypingRunCreateNestedOneWithoutChallanges_OneInput = {
  connect?: InputMaybe<TypingRunWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TypingRunCreateOrConnectWithoutChallanges_OneInput>;
  create?: InputMaybe<TypingRunCreateWithoutChallanges_OneInput>;
};

export type TypingRunCreateNestedOneWithoutChallenges_TwoInput = {
  connect?: InputMaybe<TypingRunWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TypingRunCreateOrConnectWithoutChallenges_TwoInput>;
  create?: InputMaybe<TypingRunCreateWithoutChallenges_TwoInput>;
};

export type TypingRunCreateOrConnectWithoutChallanges_OneInput = {
  create: TypingRunCreateWithoutChallanges_OneInput;
  where: TypingRunWhereUniqueInput;
};

export type TypingRunCreateOrConnectWithoutChallenges_TwoInput = {
  create: TypingRunCreateWithoutChallenges_TwoInput;
  where: TypingRunWhereUniqueInput;
};

export type TypingRunCreateOrConnectWithoutUserInput = {
  create: TypingRunCreateWithoutUserInput;
  where: TypingRunWhereUniqueInput;
};

export type TypingRunCreateWithoutChallanges_OneInput = {
  challenges_two?: InputMaybe<UsersChallengeCreateNestedManyWithoutUserTwoRunInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  flags: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  mode: TypingRunMode;
  time?: InputMaybe<Scalars['Int']['input']>;
  totalTimeMilliseconds: Scalars['Int']['input'];
  typedLetters: Scalars['JSON']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user: UserCreateNestedOneWithoutTypingRunsInput;
  wordCount?: InputMaybe<Scalars['Int']['input']>;
};

export type TypingRunCreateWithoutChallenges_TwoInput = {
  challanges_one?: InputMaybe<UsersChallengeCreateNestedManyWithoutUserOneRunInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  flags: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  mode: TypingRunMode;
  time?: InputMaybe<Scalars['Int']['input']>;
  totalTimeMilliseconds: Scalars['Int']['input'];
  typedLetters: Scalars['JSON']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user: UserCreateNestedOneWithoutTypingRunsInput;
  wordCount?: InputMaybe<Scalars['Int']['input']>;
};

export type TypingRunCreateWithoutUserInput = {
  challanges_one?: InputMaybe<UsersChallengeCreateNestedManyWithoutUserOneRunInput>;
  challenges_two?: InputMaybe<UsersChallengeCreateNestedManyWithoutUserTwoRunInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  flags: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  mode: TypingRunMode;
  time?: InputMaybe<Scalars['Int']['input']>;
  totalTimeMilliseconds: Scalars['Int']['input'];
  typedLetters: Scalars['JSON']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  wordCount?: InputMaybe<Scalars['Int']['input']>;
};

export type TypingRunGroupBy = {
  __typename?: 'TypingRunGroupBy';
  _avg?: Maybe<TypingRunAvgAggregate>;
  _count?: Maybe<TypingRunCountAggregate>;
  _max?: Maybe<TypingRunMaxAggregate>;
  _min?: Maybe<TypingRunMinAggregate>;
  _sum?: Maybe<TypingRunSumAggregate>;
  createdAt: Scalars['DateTimeISO']['output'];
  flags: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  mode: TypingRunMode;
  time?: Maybe<Scalars['Int']['output']>;
  totalTimeMilliseconds: Scalars['Int']['output'];
  typedLetters: Scalars['JSON']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  userId: Scalars['String']['output'];
  wordCount?: Maybe<Scalars['Int']['output']>;
};

export type TypingRunListRelationFilter = {
  every?: InputMaybe<TypingRunWhereInput>;
  none?: InputMaybe<TypingRunWhereInput>;
  some?: InputMaybe<TypingRunWhereInput>;
};

export type TypingRunMaxAggregate = {
  __typename?: 'TypingRunMaxAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  flags?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  mode?: Maybe<TypingRunMode>;
  time?: Maybe<Scalars['Int']['output']>;
  totalTimeMilliseconds?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
  wordCount?: Maybe<Scalars['Int']['output']>;
};

export type TypingRunMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  flags?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  mode?: InputMaybe<SortOrder>;
  time?: InputMaybe<SortOrder>;
  totalTimeMilliseconds?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  wordCount?: InputMaybe<SortOrder>;
};

export type TypingRunMinAggregate = {
  __typename?: 'TypingRunMinAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  flags?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  mode?: Maybe<TypingRunMode>;
  time?: Maybe<Scalars['Int']['output']>;
  totalTimeMilliseconds?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
  wordCount?: Maybe<Scalars['Int']['output']>;
};

export type TypingRunMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  flags?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  mode?: InputMaybe<SortOrder>;
  time?: InputMaybe<SortOrder>;
  totalTimeMilliseconds?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  wordCount?: InputMaybe<SortOrder>;
};

export enum TypingRunMode {
  Time = 'TIME',
  Words = 'WORDS'
}

export type TypingRunNullableRelationFilter = {
  is?: InputMaybe<TypingRunWhereInput>;
  isNot?: InputMaybe<TypingRunWhereInput>;
};

export type TypingRunOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum TypingRunOrderByRelevanceFieldEnum {
  Id = 'id',
  UserId = 'userId'
}

export type TypingRunOrderByRelevanceInput = {
  fields: Array<TypingRunOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type TypingRunOrderByWithAggregationInput = {
  _avg?: InputMaybe<TypingRunAvgOrderByAggregateInput>;
  _count?: InputMaybe<TypingRunCountOrderByAggregateInput>;
  _max?: InputMaybe<TypingRunMaxOrderByAggregateInput>;
  _min?: InputMaybe<TypingRunMinOrderByAggregateInput>;
  _sum?: InputMaybe<TypingRunSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  flags?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrderInput>;
  mode?: InputMaybe<SortOrder>;
  time?: InputMaybe<SortOrderInput>;
  totalTimeMilliseconds?: InputMaybe<SortOrder>;
  typedLetters?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  wordCount?: InputMaybe<SortOrderInput>;
};

export type TypingRunOrderByWithRelationInput = {
  _relevance?: InputMaybe<TypingRunOrderByRelevanceInput>;
  challanges_one?: InputMaybe<UsersChallengeOrderByRelationAggregateInput>;
  challenges_two?: InputMaybe<UsersChallengeOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  flags?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrderInput>;
  mode?: InputMaybe<SortOrder>;
  time?: InputMaybe<SortOrderInput>;
  totalTimeMilliseconds?: InputMaybe<SortOrder>;
  typedLetters?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
  wordCount?: InputMaybe<SortOrderInput>;
};

export enum TypingRunScalarFieldEnum {
  CreatedAt = 'createdAt',
  Flags = 'flags',
  Id = 'id',
  Metadata = 'metadata',
  Mode = 'mode',
  Time = 'time',
  TotalTimeMilliseconds = 'totalTimeMilliseconds',
  TypedLetters = 'typedLetters',
  UpdatedAt = 'updatedAt',
  UserId = 'userId',
  WordCount = 'wordCount'
}

export type TypingRunScalarWhereInput = {
  AND?: InputMaybe<Array<TypingRunScalarWhereInput>>;
  NOT?: InputMaybe<Array<TypingRunScalarWhereInput>>;
  OR?: InputMaybe<Array<TypingRunScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  flags?: InputMaybe<IntFilter>;
  id?: InputMaybe<UuidFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  mode?: InputMaybe<EnumTypingRunModeFilter>;
  time?: InputMaybe<IntNullableFilter>;
  totalTimeMilliseconds?: InputMaybe<IntFilter>;
  typedLetters?: InputMaybe<JsonFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
  wordCount?: InputMaybe<IntNullableFilter>;
};

export type TypingRunScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<TypingRunScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<TypingRunScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<TypingRunScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  flags?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<UuidWithAggregatesFilter>;
  metadata?: InputMaybe<JsonNullableWithAggregatesFilter>;
  mode?: InputMaybe<EnumTypingRunModeWithAggregatesFilter>;
  time?: InputMaybe<IntNullableWithAggregatesFilter>;
  totalTimeMilliseconds?: InputMaybe<IntWithAggregatesFilter>;
  typedLetters?: InputMaybe<JsonWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
  wordCount?: InputMaybe<IntNullableWithAggregatesFilter>;
};

export type TypingRunSumAggregate = {
  __typename?: 'TypingRunSumAggregate';
  flags?: Maybe<Scalars['Int']['output']>;
  time?: Maybe<Scalars['Int']['output']>;
  totalTimeMilliseconds?: Maybe<Scalars['Int']['output']>;
  wordCount?: Maybe<Scalars['Int']['output']>;
};

export type TypingRunSumOrderByAggregateInput = {
  flags?: InputMaybe<SortOrder>;
  time?: InputMaybe<SortOrder>;
  totalTimeMilliseconds?: InputMaybe<SortOrder>;
  wordCount?: InputMaybe<SortOrder>;
};

export type TypingRunUpdateInput = {
  challanges_one?: InputMaybe<UsersChallengeUpdateManyWithoutUserOneRunNestedInput>;
  challenges_two?: InputMaybe<UsersChallengeUpdateManyWithoutUserTwoRunNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  flags?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  mode?: InputMaybe<EnumTypingRunModeFieldUpdateOperationsInput>;
  time?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  totalTimeMilliseconds?: InputMaybe<IntFieldUpdateOperationsInput>;
  typedLetters?: InputMaybe<Scalars['JSON']['input']>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutTypingRunsNestedInput>;
  wordCount?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type TypingRunUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  flags?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  mode?: InputMaybe<EnumTypingRunModeFieldUpdateOperationsInput>;
  time?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  totalTimeMilliseconds?: InputMaybe<IntFieldUpdateOperationsInput>;
  typedLetters?: InputMaybe<Scalars['JSON']['input']>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  wordCount?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type TypingRunUpdateManyWithWhereWithoutUserInput = {
  data: TypingRunUpdateManyMutationInput;
  where: TypingRunScalarWhereInput;
};

export type TypingRunUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<TypingRunWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TypingRunCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<TypingRunCreateWithoutUserInput>>;
  createMany?: InputMaybe<TypingRunCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<TypingRunWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TypingRunScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TypingRunWhereUniqueInput>>;
  set?: InputMaybe<Array<TypingRunWhereUniqueInput>>;
  update?: InputMaybe<Array<TypingRunUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<TypingRunUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<TypingRunUpsertWithWhereUniqueWithoutUserInput>>;
};

export type TypingRunUpdateOneWithoutChallanges_OneNestedInput = {
  connect?: InputMaybe<TypingRunWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TypingRunCreateOrConnectWithoutChallanges_OneInput>;
  create?: InputMaybe<TypingRunCreateWithoutChallanges_OneInput>;
  delete?: InputMaybe<TypingRunWhereInput>;
  disconnect?: InputMaybe<TypingRunWhereInput>;
  update?: InputMaybe<TypingRunUpdateToOneWithWhereWithoutChallanges_OneInput>;
  upsert?: InputMaybe<TypingRunUpsertWithoutChallanges_OneInput>;
};

export type TypingRunUpdateOneWithoutChallenges_TwoNestedInput = {
  connect?: InputMaybe<TypingRunWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TypingRunCreateOrConnectWithoutChallenges_TwoInput>;
  create?: InputMaybe<TypingRunCreateWithoutChallenges_TwoInput>;
  delete?: InputMaybe<TypingRunWhereInput>;
  disconnect?: InputMaybe<TypingRunWhereInput>;
  update?: InputMaybe<TypingRunUpdateToOneWithWhereWithoutChallenges_TwoInput>;
  upsert?: InputMaybe<TypingRunUpsertWithoutChallenges_TwoInput>;
};

export type TypingRunUpdateToOneWithWhereWithoutChallanges_OneInput = {
  data: TypingRunUpdateWithoutChallanges_OneInput;
  where?: InputMaybe<TypingRunWhereInput>;
};

export type TypingRunUpdateToOneWithWhereWithoutChallenges_TwoInput = {
  data: TypingRunUpdateWithoutChallenges_TwoInput;
  where?: InputMaybe<TypingRunWhereInput>;
};

export type TypingRunUpdateWithWhereUniqueWithoutUserInput = {
  data: TypingRunUpdateWithoutUserInput;
  where: TypingRunWhereUniqueInput;
};

export type TypingRunUpdateWithoutChallanges_OneInput = {
  challenges_two?: InputMaybe<UsersChallengeUpdateManyWithoutUserTwoRunNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  flags?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  mode?: InputMaybe<EnumTypingRunModeFieldUpdateOperationsInput>;
  time?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  totalTimeMilliseconds?: InputMaybe<IntFieldUpdateOperationsInput>;
  typedLetters?: InputMaybe<Scalars['JSON']['input']>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutTypingRunsNestedInput>;
  wordCount?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type TypingRunUpdateWithoutChallenges_TwoInput = {
  challanges_one?: InputMaybe<UsersChallengeUpdateManyWithoutUserOneRunNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  flags?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  mode?: InputMaybe<EnumTypingRunModeFieldUpdateOperationsInput>;
  time?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  totalTimeMilliseconds?: InputMaybe<IntFieldUpdateOperationsInput>;
  typedLetters?: InputMaybe<Scalars['JSON']['input']>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutTypingRunsNestedInput>;
  wordCount?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type TypingRunUpdateWithoutUserInput = {
  challanges_one?: InputMaybe<UsersChallengeUpdateManyWithoutUserOneRunNestedInput>;
  challenges_two?: InputMaybe<UsersChallengeUpdateManyWithoutUserTwoRunNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  flags?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  mode?: InputMaybe<EnumTypingRunModeFieldUpdateOperationsInput>;
  time?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  totalTimeMilliseconds?: InputMaybe<IntFieldUpdateOperationsInput>;
  typedLetters?: InputMaybe<Scalars['JSON']['input']>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  wordCount?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type TypingRunUpsertWithWhereUniqueWithoutUserInput = {
  create: TypingRunCreateWithoutUserInput;
  update: TypingRunUpdateWithoutUserInput;
  where: TypingRunWhereUniqueInput;
};

export type TypingRunUpsertWithoutChallanges_OneInput = {
  create: TypingRunCreateWithoutChallanges_OneInput;
  update: TypingRunUpdateWithoutChallanges_OneInput;
  where?: InputMaybe<TypingRunWhereInput>;
};

export type TypingRunUpsertWithoutChallenges_TwoInput = {
  create: TypingRunCreateWithoutChallenges_TwoInput;
  update: TypingRunUpdateWithoutChallenges_TwoInput;
  where?: InputMaybe<TypingRunWhereInput>;
};

export type TypingRunWhereInput = {
  AND?: InputMaybe<Array<TypingRunWhereInput>>;
  NOT?: InputMaybe<Array<TypingRunWhereInput>>;
  OR?: InputMaybe<Array<TypingRunWhereInput>>;
  challanges_one?: InputMaybe<UsersChallengeListRelationFilter>;
  challenges_two?: InputMaybe<UsersChallengeListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  flags?: InputMaybe<IntFilter>;
  id?: InputMaybe<UuidFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  mode?: InputMaybe<EnumTypingRunModeFilter>;
  time?: InputMaybe<IntNullableFilter>;
  totalTimeMilliseconds?: InputMaybe<IntFilter>;
  typedLetters?: InputMaybe<JsonFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
  wordCount?: InputMaybe<IntNullableFilter>;
};

export type TypingRunWhereUniqueInput = {
  AND?: InputMaybe<Array<TypingRunWhereInput>>;
  NOT?: InputMaybe<Array<TypingRunWhereInput>>;
  OR?: InputMaybe<Array<TypingRunWhereInput>>;
  challanges_one?: InputMaybe<UsersChallengeListRelationFilter>;
  challenges_two?: InputMaybe<UsersChallengeListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  flags?: InputMaybe<IntFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<JsonNullableFilter>;
  mode?: InputMaybe<EnumTypingRunModeFilter>;
  time?: InputMaybe<IntNullableFilter>;
  totalTimeMilliseconds?: InputMaybe<IntFilter>;
  typedLetters?: InputMaybe<JsonFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
  wordCount?: InputMaybe<IntNullableFilter>;
};

/** Always after the prisma-client-js generator */
export type User = {
  __typename?: 'User';
  _count?: Maybe<UserCount>;
  accounts: Array<Account>;
  challenge_matches_one: Array<UsersChallengeMatch>;
  challenge_matches_two: Array<UsersChallengeMatch>;
  challenges_one: Array<UsersChallenge>;
  challenges_two: Array<UsersChallenge>;
  configuration?: Maybe<UserConfiguration>;
  createdAt: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  emailVerified?: Maybe<Scalars['DateTimeISO']['output']>;
  experience?: Maybe<UserExperience>;
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  /** [UserMetadata] */
  metadata?: Maybe<Scalars['JSON']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  notifications: Array<UserNotification>;
  password?: Maybe<Scalars['String']['output']>;
  sessions: Array<Session>;
  tags: Array<Tag>;
  typingRuns: Array<TypingRun>;
  updatedAt: Scalars['DateTimeISO']['output'];
};


/** Always after the prisma-client-js generator */
export type UserAccountsArgs = {
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  distinct?: InputMaybe<Array<AccountScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AccountOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccountWhereInput>;
};


/** Always after the prisma-client-js generator */
export type UserChallenge_Matches_OneArgs = {
  cursor?: InputMaybe<UsersChallengeMatchWhereUniqueInput>;
  distinct?: InputMaybe<Array<UsersChallengeMatchScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UsersChallengeMatchOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UsersChallengeMatchWhereInput>;
};


/** Always after the prisma-client-js generator */
export type UserChallenge_Matches_TwoArgs = {
  cursor?: InputMaybe<UsersChallengeMatchWhereUniqueInput>;
  distinct?: InputMaybe<Array<UsersChallengeMatchScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UsersChallengeMatchOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UsersChallengeMatchWhereInput>;
};


/** Always after the prisma-client-js generator */
export type UserChallenges_OneArgs = {
  cursor?: InputMaybe<UsersChallengeWhereUniqueInput>;
  distinct?: InputMaybe<Array<UsersChallengeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UsersChallengeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UsersChallengeWhereInput>;
};


/** Always after the prisma-client-js generator */
export type UserChallenges_TwoArgs = {
  cursor?: InputMaybe<UsersChallengeWhereUniqueInput>;
  distinct?: InputMaybe<Array<UsersChallengeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UsersChallengeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UsersChallengeWhereInput>;
};


/** Always after the prisma-client-js generator */
export type UserConfigurationArgs = {
  where?: InputMaybe<UserConfigurationWhereInput>;
};


/** Always after the prisma-client-js generator */
export type UserExperienceArgs = {
  where?: InputMaybe<UserExperienceWhereInput>;
};


/** Always after the prisma-client-js generator */
export type UserNotificationsArgs = {
  cursor?: InputMaybe<UserNotificationWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserNotificationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserNotificationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserNotificationWhereInput>;
};


/** Always after the prisma-client-js generator */
export type UserSessionsArgs = {
  cursor?: InputMaybe<SessionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SessionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SessionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SessionWhereInput>;
};


/** Always after the prisma-client-js generator */
export type UserTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  distinct?: InputMaybe<Array<TagScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TagOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TagWhereInput>;
};


/** Always after the prisma-client-js generator */
export type UserTypingRunsArgs = {
  cursor?: InputMaybe<TypingRunWhereUniqueInput>;
  distinct?: InputMaybe<Array<TypingRunScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TypingRunOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TypingRunWhereInput>;
};

export type UserConfiguration = {
  __typename?: 'UserConfiguration';
  auto_save_mode: Scalars['Boolean']['output'];
  blind_mode: Scalars['Boolean']['output'];
  caret_smoothness: CaretSmoothness;
  caret_style: CaretStyle;
  createdAt: Scalars['DateTimeISO']['output'];
  elements_show_average: ShowAverage;
  elements_show_caps_lock_warning: Scalars['Boolean']['output'];
  elements_show_key_tips: Scalars['Boolean']['output'];
  elements_show_oof_warning: Scalars['Boolean']['output'];
  font_family: Scalars['String']['output'];
  font_size: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  input_confidence_mode: ConfidenceMode;
  input_freedom_mode: Scalars['Boolean']['output'];
  input_indicate_typos: IndicateTypos;
  language: Scalars['String']['output'];
  /** [UserConfigurationMetadata] */
  metadata?: Maybe<Scalars['JSON']['output']>;
  pace_caret_speed: PaceCaretSpeed;
  pace_caret_style: CaretStyle;
  sound_click_sound?: Maybe<Scalars['String']['output']>;
  sound_error_sound?: Maybe<Scalars['String']['output']>;
  test_difficulty: RunDifficulty;
  theme: Scalars['String']['output'];
  theme_colorful_mode: Scalars['Boolean']['output'];
  theme_flip_colors: Scalars['Boolean']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  userId: Scalars['String']['output'];
};

export type UserConfigurationAvgAggregate = {
  __typename?: 'UserConfigurationAvgAggregate';
  font_size?: Maybe<Scalars['Float']['output']>;
};

export type UserConfigurationAvgOrderByAggregateInput = {
  font_size?: InputMaybe<SortOrder>;
};

export type UserConfigurationCountAggregate = {
  __typename?: 'UserConfigurationCountAggregate';
  _all: Scalars['Int']['output'];
  auto_save_mode: Scalars['Int']['output'];
  blind_mode: Scalars['Int']['output'];
  caret_smoothness: Scalars['Int']['output'];
  caret_style: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  elements_show_average: Scalars['Int']['output'];
  elements_show_caps_lock_warning: Scalars['Int']['output'];
  elements_show_key_tips: Scalars['Int']['output'];
  elements_show_oof_warning: Scalars['Int']['output'];
  font_family: Scalars['Int']['output'];
  font_size: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  input_confidence_mode: Scalars['Int']['output'];
  input_freedom_mode: Scalars['Int']['output'];
  input_indicate_typos: Scalars['Int']['output'];
  language: Scalars['Int']['output'];
  metadata: Scalars['Int']['output'];
  pace_caret_speed: Scalars['Int']['output'];
  pace_caret_style: Scalars['Int']['output'];
  sound_click_sound: Scalars['Int']['output'];
  sound_error_sound: Scalars['Int']['output'];
  test_difficulty: Scalars['Int']['output'];
  theme: Scalars['Int']['output'];
  theme_colorful_mode: Scalars['Int']['output'];
  theme_flip_colors: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type UserConfigurationCountOrderByAggregateInput = {
  auto_save_mode?: InputMaybe<SortOrder>;
  blind_mode?: InputMaybe<SortOrder>;
  caret_smoothness?: InputMaybe<SortOrder>;
  caret_style?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  elements_show_average?: InputMaybe<SortOrder>;
  elements_show_caps_lock_warning?: InputMaybe<SortOrder>;
  elements_show_key_tips?: InputMaybe<SortOrder>;
  elements_show_oof_warning?: InputMaybe<SortOrder>;
  font_family?: InputMaybe<SortOrder>;
  font_size?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  input_confidence_mode?: InputMaybe<SortOrder>;
  input_freedom_mode?: InputMaybe<SortOrder>;
  input_indicate_typos?: InputMaybe<SortOrder>;
  language?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrder>;
  pace_caret_speed?: InputMaybe<SortOrder>;
  pace_caret_style?: InputMaybe<SortOrder>;
  sound_click_sound?: InputMaybe<SortOrder>;
  sound_error_sound?: InputMaybe<SortOrder>;
  test_difficulty?: InputMaybe<SortOrder>;
  theme?: InputMaybe<SortOrder>;
  theme_colorful_mode?: InputMaybe<SortOrder>;
  theme_flip_colors?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserConfigurationCreateInput = {
  auto_save_mode?: InputMaybe<Scalars['Boolean']['input']>;
  blind_mode?: InputMaybe<Scalars['Boolean']['input']>;
  caret_smoothness?: InputMaybe<CaretSmoothness>;
  caret_style?: InputMaybe<CaretStyle>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  elements_show_average?: InputMaybe<ShowAverage>;
  elements_show_caps_lock_warning?: InputMaybe<Scalars['Boolean']['input']>;
  elements_show_key_tips?: InputMaybe<Scalars['Boolean']['input']>;
  elements_show_oof_warning?: InputMaybe<Scalars['Boolean']['input']>;
  font_family?: InputMaybe<Scalars['String']['input']>;
  font_size?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  input_confidence_mode?: InputMaybe<ConfidenceMode>;
  input_freedom_mode?: InputMaybe<Scalars['Boolean']['input']>;
  input_indicate_typos?: InputMaybe<IndicateTypos>;
  language?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  pace_caret_speed?: InputMaybe<PaceCaretSpeed>;
  pace_caret_style?: InputMaybe<CaretStyle>;
  sound_click_sound?: InputMaybe<Scalars['String']['input']>;
  sound_error_sound?: InputMaybe<Scalars['String']['input']>;
  test_difficulty?: InputMaybe<RunDifficulty>;
  theme?: InputMaybe<Scalars['String']['input']>;
  theme_colorful_mode?: InputMaybe<Scalars['Boolean']['input']>;
  theme_flip_colors?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user: UserCreateNestedOneWithoutConfigurationInput;
};

export type UserConfigurationCreateManyInput = {
  auto_save_mode?: InputMaybe<Scalars['Boolean']['input']>;
  blind_mode?: InputMaybe<Scalars['Boolean']['input']>;
  caret_smoothness?: InputMaybe<CaretSmoothness>;
  caret_style?: InputMaybe<CaretStyle>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  elements_show_average?: InputMaybe<ShowAverage>;
  elements_show_caps_lock_warning?: InputMaybe<Scalars['Boolean']['input']>;
  elements_show_key_tips?: InputMaybe<Scalars['Boolean']['input']>;
  elements_show_oof_warning?: InputMaybe<Scalars['Boolean']['input']>;
  font_family?: InputMaybe<Scalars['String']['input']>;
  font_size?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  input_confidence_mode?: InputMaybe<ConfidenceMode>;
  input_freedom_mode?: InputMaybe<Scalars['Boolean']['input']>;
  input_indicate_typos?: InputMaybe<IndicateTypos>;
  language?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  pace_caret_speed?: InputMaybe<PaceCaretSpeed>;
  pace_caret_style?: InputMaybe<CaretStyle>;
  sound_click_sound?: InputMaybe<Scalars['String']['input']>;
  sound_error_sound?: InputMaybe<Scalars['String']['input']>;
  test_difficulty?: InputMaybe<RunDifficulty>;
  theme?: InputMaybe<Scalars['String']['input']>;
  theme_colorful_mode?: InputMaybe<Scalars['Boolean']['input']>;
  theme_flip_colors?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userId: Scalars['String']['input'];
};

export type UserConfigurationCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<UserConfigurationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserConfigurationCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<UserConfigurationCreateWithoutUserInput>;
};

export type UserConfigurationCreateOrConnectWithoutUserInput = {
  create: UserConfigurationCreateWithoutUserInput;
  where: UserConfigurationWhereUniqueInput;
};

export type UserConfigurationCreateWithoutUserInput = {
  auto_save_mode?: InputMaybe<Scalars['Boolean']['input']>;
  blind_mode?: InputMaybe<Scalars['Boolean']['input']>;
  caret_smoothness?: InputMaybe<CaretSmoothness>;
  caret_style?: InputMaybe<CaretStyle>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  elements_show_average?: InputMaybe<ShowAverage>;
  elements_show_caps_lock_warning?: InputMaybe<Scalars['Boolean']['input']>;
  elements_show_key_tips?: InputMaybe<Scalars['Boolean']['input']>;
  elements_show_oof_warning?: InputMaybe<Scalars['Boolean']['input']>;
  font_family?: InputMaybe<Scalars['String']['input']>;
  font_size?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  input_confidence_mode?: InputMaybe<ConfidenceMode>;
  input_freedom_mode?: InputMaybe<Scalars['Boolean']['input']>;
  input_indicate_typos?: InputMaybe<IndicateTypos>;
  language?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  pace_caret_speed?: InputMaybe<PaceCaretSpeed>;
  pace_caret_style?: InputMaybe<CaretStyle>;
  sound_click_sound?: InputMaybe<Scalars['String']['input']>;
  sound_error_sound?: InputMaybe<Scalars['String']['input']>;
  test_difficulty?: InputMaybe<RunDifficulty>;
  theme?: InputMaybe<Scalars['String']['input']>;
  theme_colorful_mode?: InputMaybe<Scalars['Boolean']['input']>;
  theme_flip_colors?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type UserConfigurationGroupBy = {
  __typename?: 'UserConfigurationGroupBy';
  _avg?: Maybe<UserConfigurationAvgAggregate>;
  _count?: Maybe<UserConfigurationCountAggregate>;
  _max?: Maybe<UserConfigurationMaxAggregate>;
  _min?: Maybe<UserConfigurationMinAggregate>;
  _sum?: Maybe<UserConfigurationSumAggregate>;
  auto_save_mode: Scalars['Boolean']['output'];
  blind_mode: Scalars['Boolean']['output'];
  caret_smoothness: CaretSmoothness;
  caret_style: CaretStyle;
  createdAt: Scalars['DateTimeISO']['output'];
  elements_show_average: ShowAverage;
  elements_show_caps_lock_warning: Scalars['Boolean']['output'];
  elements_show_key_tips: Scalars['Boolean']['output'];
  elements_show_oof_warning: Scalars['Boolean']['output'];
  font_family: Scalars['String']['output'];
  font_size: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  input_confidence_mode: ConfidenceMode;
  input_freedom_mode: Scalars['Boolean']['output'];
  input_indicate_typos: IndicateTypos;
  language: Scalars['String']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  pace_caret_speed: PaceCaretSpeed;
  pace_caret_style: CaretStyle;
  sound_click_sound?: Maybe<Scalars['String']['output']>;
  sound_error_sound?: Maybe<Scalars['String']['output']>;
  test_difficulty: RunDifficulty;
  theme: Scalars['String']['output'];
  theme_colorful_mode: Scalars['Boolean']['output'];
  theme_flip_colors: Scalars['Boolean']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  userId: Scalars['String']['output'];
};

export type UserConfigurationMaxAggregate = {
  __typename?: 'UserConfigurationMaxAggregate';
  auto_save_mode?: Maybe<Scalars['Boolean']['output']>;
  blind_mode?: Maybe<Scalars['Boolean']['output']>;
  caret_smoothness?: Maybe<CaretSmoothness>;
  caret_style?: Maybe<CaretStyle>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  elements_show_average?: Maybe<ShowAverage>;
  elements_show_caps_lock_warning?: Maybe<Scalars['Boolean']['output']>;
  elements_show_key_tips?: Maybe<Scalars['Boolean']['output']>;
  elements_show_oof_warning?: Maybe<Scalars['Boolean']['output']>;
  font_family?: Maybe<Scalars['String']['output']>;
  font_size?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  input_confidence_mode?: Maybe<ConfidenceMode>;
  input_freedom_mode?: Maybe<Scalars['Boolean']['output']>;
  input_indicate_typos?: Maybe<IndicateTypos>;
  language?: Maybe<Scalars['String']['output']>;
  pace_caret_speed?: Maybe<PaceCaretSpeed>;
  pace_caret_style?: Maybe<CaretStyle>;
  sound_click_sound?: Maybe<Scalars['String']['output']>;
  sound_error_sound?: Maybe<Scalars['String']['output']>;
  test_difficulty?: Maybe<RunDifficulty>;
  theme?: Maybe<Scalars['String']['output']>;
  theme_colorful_mode?: Maybe<Scalars['Boolean']['output']>;
  theme_flip_colors?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type UserConfigurationMaxOrderByAggregateInput = {
  auto_save_mode?: InputMaybe<SortOrder>;
  blind_mode?: InputMaybe<SortOrder>;
  caret_smoothness?: InputMaybe<SortOrder>;
  caret_style?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  elements_show_average?: InputMaybe<SortOrder>;
  elements_show_caps_lock_warning?: InputMaybe<SortOrder>;
  elements_show_key_tips?: InputMaybe<SortOrder>;
  elements_show_oof_warning?: InputMaybe<SortOrder>;
  font_family?: InputMaybe<SortOrder>;
  font_size?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  input_confidence_mode?: InputMaybe<SortOrder>;
  input_freedom_mode?: InputMaybe<SortOrder>;
  input_indicate_typos?: InputMaybe<SortOrder>;
  language?: InputMaybe<SortOrder>;
  pace_caret_speed?: InputMaybe<SortOrder>;
  pace_caret_style?: InputMaybe<SortOrder>;
  sound_click_sound?: InputMaybe<SortOrder>;
  sound_error_sound?: InputMaybe<SortOrder>;
  test_difficulty?: InputMaybe<SortOrder>;
  theme?: InputMaybe<SortOrder>;
  theme_colorful_mode?: InputMaybe<SortOrder>;
  theme_flip_colors?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserConfigurationMinAggregate = {
  __typename?: 'UserConfigurationMinAggregate';
  auto_save_mode?: Maybe<Scalars['Boolean']['output']>;
  blind_mode?: Maybe<Scalars['Boolean']['output']>;
  caret_smoothness?: Maybe<CaretSmoothness>;
  caret_style?: Maybe<CaretStyle>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  elements_show_average?: Maybe<ShowAverage>;
  elements_show_caps_lock_warning?: Maybe<Scalars['Boolean']['output']>;
  elements_show_key_tips?: Maybe<Scalars['Boolean']['output']>;
  elements_show_oof_warning?: Maybe<Scalars['Boolean']['output']>;
  font_family?: Maybe<Scalars['String']['output']>;
  font_size?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  input_confidence_mode?: Maybe<ConfidenceMode>;
  input_freedom_mode?: Maybe<Scalars['Boolean']['output']>;
  input_indicate_typos?: Maybe<IndicateTypos>;
  language?: Maybe<Scalars['String']['output']>;
  pace_caret_speed?: Maybe<PaceCaretSpeed>;
  pace_caret_style?: Maybe<CaretStyle>;
  sound_click_sound?: Maybe<Scalars['String']['output']>;
  sound_error_sound?: Maybe<Scalars['String']['output']>;
  test_difficulty?: Maybe<RunDifficulty>;
  theme?: Maybe<Scalars['String']['output']>;
  theme_colorful_mode?: Maybe<Scalars['Boolean']['output']>;
  theme_flip_colors?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type UserConfigurationMinOrderByAggregateInput = {
  auto_save_mode?: InputMaybe<SortOrder>;
  blind_mode?: InputMaybe<SortOrder>;
  caret_smoothness?: InputMaybe<SortOrder>;
  caret_style?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  elements_show_average?: InputMaybe<SortOrder>;
  elements_show_caps_lock_warning?: InputMaybe<SortOrder>;
  elements_show_key_tips?: InputMaybe<SortOrder>;
  elements_show_oof_warning?: InputMaybe<SortOrder>;
  font_family?: InputMaybe<SortOrder>;
  font_size?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  input_confidence_mode?: InputMaybe<SortOrder>;
  input_freedom_mode?: InputMaybe<SortOrder>;
  input_indicate_typos?: InputMaybe<SortOrder>;
  language?: InputMaybe<SortOrder>;
  pace_caret_speed?: InputMaybe<SortOrder>;
  pace_caret_style?: InputMaybe<SortOrder>;
  sound_click_sound?: InputMaybe<SortOrder>;
  sound_error_sound?: InputMaybe<SortOrder>;
  test_difficulty?: InputMaybe<SortOrder>;
  theme?: InputMaybe<SortOrder>;
  theme_colorful_mode?: InputMaybe<SortOrder>;
  theme_flip_colors?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserConfigurationNullableRelationFilter = {
  is?: InputMaybe<UserConfigurationWhereInput>;
  isNot?: InputMaybe<UserConfigurationWhereInput>;
};

export enum UserConfigurationOrderByRelevanceFieldEnum {
  FontFamily = 'font_family',
  Id = 'id',
  Language = 'language',
  SoundClickSound = 'sound_click_sound',
  SoundErrorSound = 'sound_error_sound',
  Theme = 'theme',
  UserId = 'userId'
}

export type UserConfigurationOrderByRelevanceInput = {
  fields: Array<UserConfigurationOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type UserConfigurationOrderByWithAggregationInput = {
  _avg?: InputMaybe<UserConfigurationAvgOrderByAggregateInput>;
  _count?: InputMaybe<UserConfigurationCountOrderByAggregateInput>;
  _max?: InputMaybe<UserConfigurationMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserConfigurationMinOrderByAggregateInput>;
  _sum?: InputMaybe<UserConfigurationSumOrderByAggregateInput>;
  auto_save_mode?: InputMaybe<SortOrder>;
  blind_mode?: InputMaybe<SortOrder>;
  caret_smoothness?: InputMaybe<SortOrder>;
  caret_style?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  elements_show_average?: InputMaybe<SortOrder>;
  elements_show_caps_lock_warning?: InputMaybe<SortOrder>;
  elements_show_key_tips?: InputMaybe<SortOrder>;
  elements_show_oof_warning?: InputMaybe<SortOrder>;
  font_family?: InputMaybe<SortOrder>;
  font_size?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  input_confidence_mode?: InputMaybe<SortOrder>;
  input_freedom_mode?: InputMaybe<SortOrder>;
  input_indicate_typos?: InputMaybe<SortOrder>;
  language?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrderInput>;
  pace_caret_speed?: InputMaybe<SortOrder>;
  pace_caret_style?: InputMaybe<SortOrder>;
  sound_click_sound?: InputMaybe<SortOrderInput>;
  sound_error_sound?: InputMaybe<SortOrderInput>;
  test_difficulty?: InputMaybe<SortOrder>;
  theme?: InputMaybe<SortOrder>;
  theme_colorful_mode?: InputMaybe<SortOrder>;
  theme_flip_colors?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserConfigurationOrderByWithRelationInput = {
  _relevance?: InputMaybe<UserConfigurationOrderByRelevanceInput>;
  auto_save_mode?: InputMaybe<SortOrder>;
  blind_mode?: InputMaybe<SortOrder>;
  caret_smoothness?: InputMaybe<SortOrder>;
  caret_style?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  elements_show_average?: InputMaybe<SortOrder>;
  elements_show_caps_lock_warning?: InputMaybe<SortOrder>;
  elements_show_key_tips?: InputMaybe<SortOrder>;
  elements_show_oof_warning?: InputMaybe<SortOrder>;
  font_family?: InputMaybe<SortOrder>;
  font_size?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  input_confidence_mode?: InputMaybe<SortOrder>;
  input_freedom_mode?: InputMaybe<SortOrder>;
  input_indicate_typos?: InputMaybe<SortOrder>;
  language?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrderInput>;
  pace_caret_speed?: InputMaybe<SortOrder>;
  pace_caret_style?: InputMaybe<SortOrder>;
  sound_click_sound?: InputMaybe<SortOrderInput>;
  sound_error_sound?: InputMaybe<SortOrderInput>;
  test_difficulty?: InputMaybe<SortOrder>;
  theme?: InputMaybe<SortOrder>;
  theme_colorful_mode?: InputMaybe<SortOrder>;
  theme_flip_colors?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum UserConfigurationScalarFieldEnum {
  AutoSaveMode = 'auto_save_mode',
  BlindMode = 'blind_mode',
  CaretSmoothness = 'caret_smoothness',
  CaretStyle = 'caret_style',
  CreatedAt = 'createdAt',
  ElementsShowAverage = 'elements_show_average',
  ElementsShowCapsLockWarning = 'elements_show_caps_lock_warning',
  ElementsShowKeyTips = 'elements_show_key_tips',
  ElementsShowOofWarning = 'elements_show_oof_warning',
  FontFamily = 'font_family',
  FontSize = 'font_size',
  Id = 'id',
  InputConfidenceMode = 'input_confidence_mode',
  InputFreedomMode = 'input_freedom_mode',
  InputIndicateTypos = 'input_indicate_typos',
  Language = 'language',
  Metadata = 'metadata',
  PaceCaretSpeed = 'pace_caret_speed',
  PaceCaretStyle = 'pace_caret_style',
  SoundClickSound = 'sound_click_sound',
  SoundErrorSound = 'sound_error_sound',
  TestDifficulty = 'test_difficulty',
  Theme = 'theme',
  ThemeColorfulMode = 'theme_colorful_mode',
  ThemeFlipColors = 'theme_flip_colors',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type UserConfigurationScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserConfigurationScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserConfigurationScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserConfigurationScalarWhereWithAggregatesInput>>;
  auto_save_mode?: InputMaybe<BoolWithAggregatesFilter>;
  blind_mode?: InputMaybe<BoolWithAggregatesFilter>;
  caret_smoothness?: InputMaybe<EnumCaretSmoothnessWithAggregatesFilter>;
  caret_style?: InputMaybe<EnumCaretStyleWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  elements_show_average?: InputMaybe<EnumShowAverageWithAggregatesFilter>;
  elements_show_caps_lock_warning?: InputMaybe<BoolWithAggregatesFilter>;
  elements_show_key_tips?: InputMaybe<BoolWithAggregatesFilter>;
  elements_show_oof_warning?: InputMaybe<BoolWithAggregatesFilter>;
  font_family?: InputMaybe<StringWithAggregatesFilter>;
  font_size?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  input_confidence_mode?: InputMaybe<EnumConfidenceModeWithAggregatesFilter>;
  input_freedom_mode?: InputMaybe<BoolWithAggregatesFilter>;
  input_indicate_typos?: InputMaybe<EnumIndicateTyposWithAggregatesFilter>;
  language?: InputMaybe<StringWithAggregatesFilter>;
  metadata?: InputMaybe<JsonNullableWithAggregatesFilter>;
  pace_caret_speed?: InputMaybe<EnumPaceCaretSpeedWithAggregatesFilter>;
  pace_caret_style?: InputMaybe<EnumCaretStyleWithAggregatesFilter>;
  sound_click_sound?: InputMaybe<StringNullableWithAggregatesFilter>;
  sound_error_sound?: InputMaybe<StringNullableWithAggregatesFilter>;
  test_difficulty?: InputMaybe<EnumRunDifficultyWithAggregatesFilter>;
  theme?: InputMaybe<StringWithAggregatesFilter>;
  theme_colorful_mode?: InputMaybe<BoolWithAggregatesFilter>;
  theme_flip_colors?: InputMaybe<BoolWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type UserConfigurationSumAggregate = {
  __typename?: 'UserConfigurationSumAggregate';
  font_size?: Maybe<Scalars['Int']['output']>;
};

export type UserConfigurationSumOrderByAggregateInput = {
  font_size?: InputMaybe<SortOrder>;
};

export type UserConfigurationUpdateInput = {
  auto_save_mode?: InputMaybe<BoolFieldUpdateOperationsInput>;
  blind_mode?: InputMaybe<BoolFieldUpdateOperationsInput>;
  caret_smoothness?: InputMaybe<EnumCaretSmoothnessFieldUpdateOperationsInput>;
  caret_style?: InputMaybe<EnumCaretStyleFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  elements_show_average?: InputMaybe<EnumShowAverageFieldUpdateOperationsInput>;
  elements_show_caps_lock_warning?: InputMaybe<BoolFieldUpdateOperationsInput>;
  elements_show_key_tips?: InputMaybe<BoolFieldUpdateOperationsInput>;
  elements_show_oof_warning?: InputMaybe<BoolFieldUpdateOperationsInput>;
  font_family?: InputMaybe<StringFieldUpdateOperationsInput>;
  font_size?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  input_confidence_mode?: InputMaybe<EnumConfidenceModeFieldUpdateOperationsInput>;
  input_freedom_mode?: InputMaybe<BoolFieldUpdateOperationsInput>;
  input_indicate_typos?: InputMaybe<EnumIndicateTyposFieldUpdateOperationsInput>;
  language?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  pace_caret_speed?: InputMaybe<EnumPaceCaretSpeedFieldUpdateOperationsInput>;
  pace_caret_style?: InputMaybe<EnumCaretStyleFieldUpdateOperationsInput>;
  sound_click_sound?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sound_error_sound?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  test_difficulty?: InputMaybe<EnumRunDifficultyFieldUpdateOperationsInput>;
  theme?: InputMaybe<StringFieldUpdateOperationsInput>;
  theme_colorful_mode?: InputMaybe<BoolFieldUpdateOperationsInput>;
  theme_flip_colors?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutConfigurationNestedInput>;
};

export type UserConfigurationUpdateManyMutationInput = {
  auto_save_mode?: InputMaybe<BoolFieldUpdateOperationsInput>;
  blind_mode?: InputMaybe<BoolFieldUpdateOperationsInput>;
  caret_smoothness?: InputMaybe<EnumCaretSmoothnessFieldUpdateOperationsInput>;
  caret_style?: InputMaybe<EnumCaretStyleFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  elements_show_average?: InputMaybe<EnumShowAverageFieldUpdateOperationsInput>;
  elements_show_caps_lock_warning?: InputMaybe<BoolFieldUpdateOperationsInput>;
  elements_show_key_tips?: InputMaybe<BoolFieldUpdateOperationsInput>;
  elements_show_oof_warning?: InputMaybe<BoolFieldUpdateOperationsInput>;
  font_family?: InputMaybe<StringFieldUpdateOperationsInput>;
  font_size?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  input_confidence_mode?: InputMaybe<EnumConfidenceModeFieldUpdateOperationsInput>;
  input_freedom_mode?: InputMaybe<BoolFieldUpdateOperationsInput>;
  input_indicate_typos?: InputMaybe<EnumIndicateTyposFieldUpdateOperationsInput>;
  language?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  pace_caret_speed?: InputMaybe<EnumPaceCaretSpeedFieldUpdateOperationsInput>;
  pace_caret_style?: InputMaybe<EnumCaretStyleFieldUpdateOperationsInput>;
  sound_click_sound?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sound_error_sound?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  test_difficulty?: InputMaybe<EnumRunDifficultyFieldUpdateOperationsInput>;
  theme?: InputMaybe<StringFieldUpdateOperationsInput>;
  theme_colorful_mode?: InputMaybe<BoolFieldUpdateOperationsInput>;
  theme_flip_colors?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserConfigurationUpdateOneWithoutUserNestedInput = {
  connect?: InputMaybe<UserConfigurationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserConfigurationCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<UserConfigurationCreateWithoutUserInput>;
  delete?: InputMaybe<UserConfigurationWhereInput>;
  disconnect?: InputMaybe<UserConfigurationWhereInput>;
  update?: InputMaybe<UserConfigurationUpdateToOneWithWhereWithoutUserInput>;
  upsert?: InputMaybe<UserConfigurationUpsertWithoutUserInput>;
};

export type UserConfigurationUpdateToOneWithWhereWithoutUserInput = {
  data: UserConfigurationUpdateWithoutUserInput;
  where?: InputMaybe<UserConfigurationWhereInput>;
};

export type UserConfigurationUpdateWithoutUserInput = {
  auto_save_mode?: InputMaybe<BoolFieldUpdateOperationsInput>;
  blind_mode?: InputMaybe<BoolFieldUpdateOperationsInput>;
  caret_smoothness?: InputMaybe<EnumCaretSmoothnessFieldUpdateOperationsInput>;
  caret_style?: InputMaybe<EnumCaretStyleFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  elements_show_average?: InputMaybe<EnumShowAverageFieldUpdateOperationsInput>;
  elements_show_caps_lock_warning?: InputMaybe<BoolFieldUpdateOperationsInput>;
  elements_show_key_tips?: InputMaybe<BoolFieldUpdateOperationsInput>;
  elements_show_oof_warning?: InputMaybe<BoolFieldUpdateOperationsInput>;
  font_family?: InputMaybe<StringFieldUpdateOperationsInput>;
  font_size?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  input_confidence_mode?: InputMaybe<EnumConfidenceModeFieldUpdateOperationsInput>;
  input_freedom_mode?: InputMaybe<BoolFieldUpdateOperationsInput>;
  input_indicate_typos?: InputMaybe<EnumIndicateTyposFieldUpdateOperationsInput>;
  language?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  pace_caret_speed?: InputMaybe<EnumPaceCaretSpeedFieldUpdateOperationsInput>;
  pace_caret_style?: InputMaybe<EnumCaretStyleFieldUpdateOperationsInput>;
  sound_click_sound?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sound_error_sound?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  test_difficulty?: InputMaybe<EnumRunDifficultyFieldUpdateOperationsInput>;
  theme?: InputMaybe<StringFieldUpdateOperationsInput>;
  theme_colorful_mode?: InputMaybe<BoolFieldUpdateOperationsInput>;
  theme_flip_colors?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserConfigurationUpsertWithoutUserInput = {
  create: UserConfigurationCreateWithoutUserInput;
  update: UserConfigurationUpdateWithoutUserInput;
  where?: InputMaybe<UserConfigurationWhereInput>;
};

export type UserConfigurationWhereInput = {
  AND?: InputMaybe<Array<UserConfigurationWhereInput>>;
  NOT?: InputMaybe<Array<UserConfigurationWhereInput>>;
  OR?: InputMaybe<Array<UserConfigurationWhereInput>>;
  auto_save_mode?: InputMaybe<BoolFilter>;
  blind_mode?: InputMaybe<BoolFilter>;
  caret_smoothness?: InputMaybe<EnumCaretSmoothnessFilter>;
  caret_style?: InputMaybe<EnumCaretStyleFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  elements_show_average?: InputMaybe<EnumShowAverageFilter>;
  elements_show_caps_lock_warning?: InputMaybe<BoolFilter>;
  elements_show_key_tips?: InputMaybe<BoolFilter>;
  elements_show_oof_warning?: InputMaybe<BoolFilter>;
  font_family?: InputMaybe<StringFilter>;
  font_size?: InputMaybe<IntFilter>;
  id?: InputMaybe<StringFilter>;
  input_confidence_mode?: InputMaybe<EnumConfidenceModeFilter>;
  input_freedom_mode?: InputMaybe<BoolFilter>;
  input_indicate_typos?: InputMaybe<EnumIndicateTyposFilter>;
  language?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  pace_caret_speed?: InputMaybe<EnumPaceCaretSpeedFilter>;
  pace_caret_style?: InputMaybe<EnumCaretStyleFilter>;
  sound_click_sound?: InputMaybe<StringNullableFilter>;
  sound_error_sound?: InputMaybe<StringNullableFilter>;
  test_difficulty?: InputMaybe<EnumRunDifficultyFilter>;
  theme?: InputMaybe<StringFilter>;
  theme_colorful_mode?: InputMaybe<BoolFilter>;
  theme_flip_colors?: InputMaybe<BoolFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type UserConfigurationWhereUniqueInput = {
  AND?: InputMaybe<Array<UserConfigurationWhereInput>>;
  NOT?: InputMaybe<Array<UserConfigurationWhereInput>>;
  OR?: InputMaybe<Array<UserConfigurationWhereInput>>;
  auto_save_mode?: InputMaybe<BoolFilter>;
  blind_mode?: InputMaybe<BoolFilter>;
  caret_smoothness?: InputMaybe<EnumCaretSmoothnessFilter>;
  caret_style?: InputMaybe<EnumCaretStyleFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  elements_show_average?: InputMaybe<EnumShowAverageFilter>;
  elements_show_caps_lock_warning?: InputMaybe<BoolFilter>;
  elements_show_key_tips?: InputMaybe<BoolFilter>;
  elements_show_oof_warning?: InputMaybe<BoolFilter>;
  font_family?: InputMaybe<StringFilter>;
  font_size?: InputMaybe<IntFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  input_confidence_mode?: InputMaybe<EnumConfidenceModeFilter>;
  input_freedom_mode?: InputMaybe<BoolFilter>;
  input_indicate_typos?: InputMaybe<EnumIndicateTyposFilter>;
  language?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  pace_caret_speed?: InputMaybe<EnumPaceCaretSpeedFilter>;
  pace_caret_style?: InputMaybe<EnumCaretStyleFilter>;
  sound_click_sound?: InputMaybe<StringNullableFilter>;
  sound_error_sound?: InputMaybe<StringNullableFilter>;
  test_difficulty?: InputMaybe<EnumRunDifficultyFilter>;
  theme?: InputMaybe<StringFilter>;
  theme_colorful_mode?: InputMaybe<BoolFilter>;
  theme_flip_colors?: InputMaybe<BoolFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type UserCount = {
  __typename?: 'UserCount';
  accounts: Scalars['Int']['output'];
  challenge_matches_one: Scalars['Int']['output'];
  challenge_matches_two: Scalars['Int']['output'];
  challenges_one: Scalars['Int']['output'];
  challenges_two: Scalars['Int']['output'];
  notifications: Scalars['Int']['output'];
  sessions: Scalars['Int']['output'];
  tags: Scalars['Int']['output'];
  typingRuns: Scalars['Int']['output'];
};


export type UserCountAccountsArgs = {
  where?: InputMaybe<AccountWhereInput>;
};


export type UserCountChallenge_Matches_OneArgs = {
  where?: InputMaybe<UsersChallengeMatchWhereInput>;
};


export type UserCountChallenge_Matches_TwoArgs = {
  where?: InputMaybe<UsersChallengeMatchWhereInput>;
};


export type UserCountChallenges_OneArgs = {
  where?: InputMaybe<UsersChallengeWhereInput>;
};


export type UserCountChallenges_TwoArgs = {
  where?: InputMaybe<UsersChallengeWhereInput>;
};


export type UserCountNotificationsArgs = {
  where?: InputMaybe<UserNotificationWhereInput>;
};


export type UserCountSessionsArgs = {
  where?: InputMaybe<SessionWhereInput>;
};


export type UserCountTagsArgs = {
  where?: InputMaybe<TagWhereInput>;
};


export type UserCountTypingRunsArgs = {
  where?: InputMaybe<TypingRunWhereInput>;
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  emailVerified: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  image: Scalars['Int']['output'];
  metadata: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  password: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type UserCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  challenge_matches_one?: InputMaybe<UsersChallengeMatchCreateNestedManyWithoutUserOneInput>;
  challenge_matches_two?: InputMaybe<UsersChallengeMatchCreateNestedManyWithoutUserTwoInput>;
  challenges_one?: InputMaybe<UsersChallengeCreateNestedManyWithoutUserOneInput>;
  challenges_two?: InputMaybe<UsersChallengeCreateNestedManyWithoutUserTwoInput>;
  configuration?: InputMaybe<UserConfigurationCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  experience?: InputMaybe<UserExperienceCreateNestedOneWithoutUserInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  notifications?: InputMaybe<UserNotificationCreateNestedManyWithoutUserInput>;
  password?: InputMaybe<Scalars['String']['input']>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  tags?: InputMaybe<TagCreateNestedManyWithoutUserInput>;
  typingRuns?: InputMaybe<TypingRunCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type UserCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type UserCreateNestedOneWithoutAccountsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAccountsInput>;
  create?: InputMaybe<UserCreateWithoutAccountsInput>;
};

export type UserCreateNestedOneWithoutChallenge_Matches_OneInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutChallenge_Matches_OneInput>;
  create?: InputMaybe<UserCreateWithoutChallenge_Matches_OneInput>;
};

export type UserCreateNestedOneWithoutChallenge_Matches_TwoInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutChallenge_Matches_TwoInput>;
  create?: InputMaybe<UserCreateWithoutChallenge_Matches_TwoInput>;
};

export type UserCreateNestedOneWithoutChallenges_OneInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutChallenges_OneInput>;
  create?: InputMaybe<UserCreateWithoutChallenges_OneInput>;
};

export type UserCreateNestedOneWithoutChallenges_TwoInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutChallenges_TwoInput>;
  create?: InputMaybe<UserCreateWithoutChallenges_TwoInput>;
};

export type UserCreateNestedOneWithoutConfigurationInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutConfigurationInput>;
  create?: InputMaybe<UserCreateWithoutConfigurationInput>;
};

export type UserCreateNestedOneWithoutExperienceInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutExperienceInput>;
  create?: InputMaybe<UserCreateWithoutExperienceInput>;
};

export type UserCreateNestedOneWithoutNotificationsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutNotificationsInput>;
  create?: InputMaybe<UserCreateWithoutNotificationsInput>;
};

export type UserCreateNestedOneWithoutSessionsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSessionsInput>;
  create?: InputMaybe<UserCreateWithoutSessionsInput>;
};

export type UserCreateNestedOneWithoutTagsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutTagsInput>;
  create?: InputMaybe<UserCreateWithoutTagsInput>;
};

export type UserCreateNestedOneWithoutTypingRunsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutTypingRunsInput>;
  create?: InputMaybe<UserCreateWithoutTypingRunsInput>;
};

export type UserCreateOrConnectWithoutAccountsInput = {
  create: UserCreateWithoutAccountsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutChallenge_Matches_OneInput = {
  create: UserCreateWithoutChallenge_Matches_OneInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutChallenge_Matches_TwoInput = {
  create: UserCreateWithoutChallenge_Matches_TwoInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutChallenges_OneInput = {
  create: UserCreateWithoutChallenges_OneInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutChallenges_TwoInput = {
  create: UserCreateWithoutChallenges_TwoInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutConfigurationInput = {
  create: UserCreateWithoutConfigurationInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutExperienceInput = {
  create: UserCreateWithoutExperienceInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutNotificationsInput = {
  create: UserCreateWithoutNotificationsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutSessionsInput = {
  create: UserCreateWithoutSessionsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutTagsInput = {
  create: UserCreateWithoutTagsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutTypingRunsInput = {
  create: UserCreateWithoutTypingRunsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutAccountsInput = {
  challenge_matches_one?: InputMaybe<UsersChallengeMatchCreateNestedManyWithoutUserOneInput>;
  challenge_matches_two?: InputMaybe<UsersChallengeMatchCreateNestedManyWithoutUserTwoInput>;
  challenges_one?: InputMaybe<UsersChallengeCreateNestedManyWithoutUserOneInput>;
  challenges_two?: InputMaybe<UsersChallengeCreateNestedManyWithoutUserTwoInput>;
  configuration?: InputMaybe<UserConfigurationCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  experience?: InputMaybe<UserExperienceCreateNestedOneWithoutUserInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  notifications?: InputMaybe<UserNotificationCreateNestedManyWithoutUserInput>;
  password?: InputMaybe<Scalars['String']['input']>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  tags?: InputMaybe<TagCreateNestedManyWithoutUserInput>;
  typingRuns?: InputMaybe<TypingRunCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type UserCreateWithoutChallenge_Matches_OneInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  challenge_matches_two?: InputMaybe<UsersChallengeMatchCreateNestedManyWithoutUserTwoInput>;
  challenges_one?: InputMaybe<UsersChallengeCreateNestedManyWithoutUserOneInput>;
  challenges_two?: InputMaybe<UsersChallengeCreateNestedManyWithoutUserTwoInput>;
  configuration?: InputMaybe<UserConfigurationCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  experience?: InputMaybe<UserExperienceCreateNestedOneWithoutUserInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  notifications?: InputMaybe<UserNotificationCreateNestedManyWithoutUserInput>;
  password?: InputMaybe<Scalars['String']['input']>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  tags?: InputMaybe<TagCreateNestedManyWithoutUserInput>;
  typingRuns?: InputMaybe<TypingRunCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type UserCreateWithoutChallenge_Matches_TwoInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  challenge_matches_one?: InputMaybe<UsersChallengeMatchCreateNestedManyWithoutUserOneInput>;
  challenges_one?: InputMaybe<UsersChallengeCreateNestedManyWithoutUserOneInput>;
  challenges_two?: InputMaybe<UsersChallengeCreateNestedManyWithoutUserTwoInput>;
  configuration?: InputMaybe<UserConfigurationCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  experience?: InputMaybe<UserExperienceCreateNestedOneWithoutUserInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  notifications?: InputMaybe<UserNotificationCreateNestedManyWithoutUserInput>;
  password?: InputMaybe<Scalars['String']['input']>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  tags?: InputMaybe<TagCreateNestedManyWithoutUserInput>;
  typingRuns?: InputMaybe<TypingRunCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type UserCreateWithoutChallenges_OneInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  challenge_matches_one?: InputMaybe<UsersChallengeMatchCreateNestedManyWithoutUserOneInput>;
  challenge_matches_two?: InputMaybe<UsersChallengeMatchCreateNestedManyWithoutUserTwoInput>;
  challenges_two?: InputMaybe<UsersChallengeCreateNestedManyWithoutUserTwoInput>;
  configuration?: InputMaybe<UserConfigurationCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  experience?: InputMaybe<UserExperienceCreateNestedOneWithoutUserInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  notifications?: InputMaybe<UserNotificationCreateNestedManyWithoutUserInput>;
  password?: InputMaybe<Scalars['String']['input']>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  tags?: InputMaybe<TagCreateNestedManyWithoutUserInput>;
  typingRuns?: InputMaybe<TypingRunCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type UserCreateWithoutChallenges_TwoInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  challenge_matches_one?: InputMaybe<UsersChallengeMatchCreateNestedManyWithoutUserOneInput>;
  challenge_matches_two?: InputMaybe<UsersChallengeMatchCreateNestedManyWithoutUserTwoInput>;
  challenges_one?: InputMaybe<UsersChallengeCreateNestedManyWithoutUserOneInput>;
  configuration?: InputMaybe<UserConfigurationCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  experience?: InputMaybe<UserExperienceCreateNestedOneWithoutUserInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  notifications?: InputMaybe<UserNotificationCreateNestedManyWithoutUserInput>;
  password?: InputMaybe<Scalars['String']['input']>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  tags?: InputMaybe<TagCreateNestedManyWithoutUserInput>;
  typingRuns?: InputMaybe<TypingRunCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type UserCreateWithoutConfigurationInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  challenge_matches_one?: InputMaybe<UsersChallengeMatchCreateNestedManyWithoutUserOneInput>;
  challenge_matches_two?: InputMaybe<UsersChallengeMatchCreateNestedManyWithoutUserTwoInput>;
  challenges_one?: InputMaybe<UsersChallengeCreateNestedManyWithoutUserOneInput>;
  challenges_two?: InputMaybe<UsersChallengeCreateNestedManyWithoutUserTwoInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  experience?: InputMaybe<UserExperienceCreateNestedOneWithoutUserInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  notifications?: InputMaybe<UserNotificationCreateNestedManyWithoutUserInput>;
  password?: InputMaybe<Scalars['String']['input']>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  tags?: InputMaybe<TagCreateNestedManyWithoutUserInput>;
  typingRuns?: InputMaybe<TypingRunCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type UserCreateWithoutExperienceInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  challenge_matches_one?: InputMaybe<UsersChallengeMatchCreateNestedManyWithoutUserOneInput>;
  challenge_matches_two?: InputMaybe<UsersChallengeMatchCreateNestedManyWithoutUserTwoInput>;
  challenges_one?: InputMaybe<UsersChallengeCreateNestedManyWithoutUserOneInput>;
  challenges_two?: InputMaybe<UsersChallengeCreateNestedManyWithoutUserTwoInput>;
  configuration?: InputMaybe<UserConfigurationCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  notifications?: InputMaybe<UserNotificationCreateNestedManyWithoutUserInput>;
  password?: InputMaybe<Scalars['String']['input']>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  tags?: InputMaybe<TagCreateNestedManyWithoutUserInput>;
  typingRuns?: InputMaybe<TypingRunCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type UserCreateWithoutNotificationsInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  challenge_matches_one?: InputMaybe<UsersChallengeMatchCreateNestedManyWithoutUserOneInput>;
  challenge_matches_two?: InputMaybe<UsersChallengeMatchCreateNestedManyWithoutUserTwoInput>;
  challenges_one?: InputMaybe<UsersChallengeCreateNestedManyWithoutUserOneInput>;
  challenges_two?: InputMaybe<UsersChallengeCreateNestedManyWithoutUserTwoInput>;
  configuration?: InputMaybe<UserConfigurationCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  experience?: InputMaybe<UserExperienceCreateNestedOneWithoutUserInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  tags?: InputMaybe<TagCreateNestedManyWithoutUserInput>;
  typingRuns?: InputMaybe<TypingRunCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type UserCreateWithoutSessionsInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  challenge_matches_one?: InputMaybe<UsersChallengeMatchCreateNestedManyWithoutUserOneInput>;
  challenge_matches_two?: InputMaybe<UsersChallengeMatchCreateNestedManyWithoutUserTwoInput>;
  challenges_one?: InputMaybe<UsersChallengeCreateNestedManyWithoutUserOneInput>;
  challenges_two?: InputMaybe<UsersChallengeCreateNestedManyWithoutUserTwoInput>;
  configuration?: InputMaybe<UserConfigurationCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  experience?: InputMaybe<UserExperienceCreateNestedOneWithoutUserInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  notifications?: InputMaybe<UserNotificationCreateNestedManyWithoutUserInput>;
  password?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<TagCreateNestedManyWithoutUserInput>;
  typingRuns?: InputMaybe<TypingRunCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type UserCreateWithoutTagsInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  challenge_matches_one?: InputMaybe<UsersChallengeMatchCreateNestedManyWithoutUserOneInput>;
  challenge_matches_two?: InputMaybe<UsersChallengeMatchCreateNestedManyWithoutUserTwoInput>;
  challenges_one?: InputMaybe<UsersChallengeCreateNestedManyWithoutUserOneInput>;
  challenges_two?: InputMaybe<UsersChallengeCreateNestedManyWithoutUserTwoInput>;
  configuration?: InputMaybe<UserConfigurationCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  experience?: InputMaybe<UserExperienceCreateNestedOneWithoutUserInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  notifications?: InputMaybe<UserNotificationCreateNestedManyWithoutUserInput>;
  password?: InputMaybe<Scalars['String']['input']>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  typingRuns?: InputMaybe<TypingRunCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type UserCreateWithoutTypingRunsInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  challenge_matches_one?: InputMaybe<UsersChallengeMatchCreateNestedManyWithoutUserOneInput>;
  challenge_matches_two?: InputMaybe<UsersChallengeMatchCreateNestedManyWithoutUserTwoInput>;
  challenges_one?: InputMaybe<UsersChallengeCreateNestedManyWithoutUserOneInput>;
  challenges_two?: InputMaybe<UsersChallengeCreateNestedManyWithoutUserTwoInput>;
  configuration?: InputMaybe<UserConfigurationCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  experience?: InputMaybe<UserExperienceCreateNestedOneWithoutUserInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  notifications?: InputMaybe<UserNotificationCreateNestedManyWithoutUserInput>;
  password?: InputMaybe<Scalars['String']['input']>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  tags?: InputMaybe<TagCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type UserExperience = {
  __typename?: 'UserExperience';
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  level: Scalars['Int']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  points: Scalars['Int']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  userId: Scalars['String']['output'];
};

export type UserExperienceAvgAggregate = {
  __typename?: 'UserExperienceAvgAggregate';
  level?: Maybe<Scalars['Float']['output']>;
  points?: Maybe<Scalars['Float']['output']>;
};

export type UserExperienceAvgOrderByAggregateInput = {
  level?: InputMaybe<SortOrder>;
  points?: InputMaybe<SortOrder>;
};

export type UserExperienceCountAggregate = {
  __typename?: 'UserExperienceCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  level: Scalars['Int']['output'];
  metadata: Scalars['Int']['output'];
  points: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type UserExperienceCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  level?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrder>;
  points?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserExperienceCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  points?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user: UserCreateNestedOneWithoutExperienceInput;
};

export type UserExperienceCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  points?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userId: Scalars['String']['input'];
};

export type UserExperienceCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<UserExperienceWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserExperienceCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<UserExperienceCreateWithoutUserInput>;
};

export type UserExperienceCreateOrConnectWithoutUserInput = {
  create: UserExperienceCreateWithoutUserInput;
  where: UserExperienceWhereUniqueInput;
};

export type UserExperienceCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  points?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type UserExperienceGroupBy = {
  __typename?: 'UserExperienceGroupBy';
  _avg?: Maybe<UserExperienceAvgAggregate>;
  _count?: Maybe<UserExperienceCountAggregate>;
  _max?: Maybe<UserExperienceMaxAggregate>;
  _min?: Maybe<UserExperienceMinAggregate>;
  _sum?: Maybe<UserExperienceSumAggregate>;
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  level: Scalars['Int']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  points: Scalars['Int']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  userId: Scalars['String']['output'];
};

export type UserExperienceMaxAggregate = {
  __typename?: 'UserExperienceMaxAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  level?: Maybe<Scalars['Int']['output']>;
  points?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type UserExperienceMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  level?: InputMaybe<SortOrder>;
  points?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserExperienceMinAggregate = {
  __typename?: 'UserExperienceMinAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  level?: Maybe<Scalars['Int']['output']>;
  points?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type UserExperienceMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  level?: InputMaybe<SortOrder>;
  points?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserExperienceNullableRelationFilter = {
  is?: InputMaybe<UserExperienceWhereInput>;
  isNot?: InputMaybe<UserExperienceWhereInput>;
};

export enum UserExperienceOrderByRelevanceFieldEnum {
  Id = 'id',
  UserId = 'userId'
}

export type UserExperienceOrderByRelevanceInput = {
  fields: Array<UserExperienceOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type UserExperienceOrderByWithAggregationInput = {
  _avg?: InputMaybe<UserExperienceAvgOrderByAggregateInput>;
  _count?: InputMaybe<UserExperienceCountOrderByAggregateInput>;
  _max?: InputMaybe<UserExperienceMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserExperienceMinOrderByAggregateInput>;
  _sum?: InputMaybe<UserExperienceSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  level?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrderInput>;
  points?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserExperienceOrderByWithRelationInput = {
  _relevance?: InputMaybe<UserExperienceOrderByRelevanceInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  level?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrderInput>;
  points?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum UserExperienceScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Level = 'level',
  Metadata = 'metadata',
  Points = 'points',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type UserExperienceScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserExperienceScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserExperienceScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserExperienceScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  level?: InputMaybe<IntWithAggregatesFilter>;
  metadata?: InputMaybe<JsonNullableWithAggregatesFilter>;
  points?: InputMaybe<IntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type UserExperienceSumAggregate = {
  __typename?: 'UserExperienceSumAggregate';
  level?: Maybe<Scalars['Int']['output']>;
  points?: Maybe<Scalars['Int']['output']>;
};

export type UserExperienceSumOrderByAggregateInput = {
  level?: InputMaybe<SortOrder>;
  points?: InputMaybe<SortOrder>;
};

export type UserExperienceUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  level?: InputMaybe<IntFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  points?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutExperienceNestedInput>;
};

export type UserExperienceUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  level?: InputMaybe<IntFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  points?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserExperienceUpdateOneWithoutUserNestedInput = {
  connect?: InputMaybe<UserExperienceWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserExperienceCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<UserExperienceCreateWithoutUserInput>;
  delete?: InputMaybe<UserExperienceWhereInput>;
  disconnect?: InputMaybe<UserExperienceWhereInput>;
  update?: InputMaybe<UserExperienceUpdateToOneWithWhereWithoutUserInput>;
  upsert?: InputMaybe<UserExperienceUpsertWithoutUserInput>;
};

export type UserExperienceUpdateToOneWithWhereWithoutUserInput = {
  data: UserExperienceUpdateWithoutUserInput;
  where?: InputMaybe<UserExperienceWhereInput>;
};

export type UserExperienceUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  level?: InputMaybe<IntFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  points?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserExperienceUpsertWithoutUserInput = {
  create: UserExperienceCreateWithoutUserInput;
  update: UserExperienceUpdateWithoutUserInput;
  where?: InputMaybe<UserExperienceWhereInput>;
};

export type UserExperienceWhereInput = {
  AND?: InputMaybe<Array<UserExperienceWhereInput>>;
  NOT?: InputMaybe<Array<UserExperienceWhereInput>>;
  OR?: InputMaybe<Array<UserExperienceWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  level?: InputMaybe<IntFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  points?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type UserExperienceWhereUniqueInput = {
  AND?: InputMaybe<Array<UserExperienceWhereInput>>;
  NOT?: InputMaybe<Array<UserExperienceWhereInput>>;
  OR?: InputMaybe<Array<UserExperienceWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  level?: InputMaybe<IntFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  points?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  createdAt: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  emailVerified?: Maybe<Scalars['DateTimeISO']['output']>;
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailVerified?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type UserMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailVerified?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type UserMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserNotification = {
  __typename?: 'UserNotification';
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  /** [UserNotificationPayload] */
  payload?: Maybe<Scalars['JSON']['output']>;
  read: Scalars['Boolean']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  userId: Scalars['String']['output'];
};

export type UserNotificationCountAggregate = {
  __typename?: 'UserNotificationCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  metadata: Scalars['Int']['output'];
  payload: Scalars['Int']['output'];
  read: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type UserNotificationCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrder>;
  payload?: InputMaybe<SortOrder>;
  read?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserNotificationCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  payload?: InputMaybe<Scalars['JSON']['input']>;
  read?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user: UserCreateNestedOneWithoutNotificationsInput;
};

export type UserNotificationCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  payload?: InputMaybe<Scalars['JSON']['input']>;
  read?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userId: Scalars['String']['input'];
};

export type UserNotificationCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  payload?: InputMaybe<Scalars['JSON']['input']>;
  read?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type UserNotificationCreateManyUserInputEnvelope = {
  data: Array<UserNotificationCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserNotificationCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<UserNotificationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserNotificationCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserNotificationCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserNotificationCreateManyUserInputEnvelope>;
};

export type UserNotificationCreateOrConnectWithoutUserInput = {
  create: UserNotificationCreateWithoutUserInput;
  where: UserNotificationWhereUniqueInput;
};

export type UserNotificationCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  payload?: InputMaybe<Scalars['JSON']['input']>;
  read?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type UserNotificationGroupBy = {
  __typename?: 'UserNotificationGroupBy';
  _count?: Maybe<UserNotificationCountAggregate>;
  _max?: Maybe<UserNotificationMaxAggregate>;
  _min?: Maybe<UserNotificationMinAggregate>;
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  payload?: Maybe<Scalars['JSON']['output']>;
  read: Scalars['Boolean']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  userId: Scalars['String']['output'];
};

export type UserNotificationListRelationFilter = {
  every?: InputMaybe<UserNotificationWhereInput>;
  none?: InputMaybe<UserNotificationWhereInput>;
  some?: InputMaybe<UserNotificationWhereInput>;
};

export type UserNotificationMaxAggregate = {
  __typename?: 'UserNotificationMaxAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  read?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type UserNotificationMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  read?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserNotificationMinAggregate = {
  __typename?: 'UserNotificationMinAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  read?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type UserNotificationMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  read?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserNotificationOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum UserNotificationOrderByRelevanceFieldEnum {
  Id = 'id',
  UserId = 'userId'
}

export type UserNotificationOrderByRelevanceInput = {
  fields: Array<UserNotificationOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type UserNotificationOrderByWithAggregationInput = {
  _count?: InputMaybe<UserNotificationCountOrderByAggregateInput>;
  _max?: InputMaybe<UserNotificationMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserNotificationMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrderInput>;
  payload?: InputMaybe<SortOrderInput>;
  read?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserNotificationOrderByWithRelationInput = {
  _relevance?: InputMaybe<UserNotificationOrderByRelevanceInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrderInput>;
  payload?: InputMaybe<SortOrderInput>;
  read?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum UserNotificationScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Metadata = 'metadata',
  Payload = 'payload',
  Read = 'read',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type UserNotificationScalarWhereInput = {
  AND?: InputMaybe<Array<UserNotificationScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserNotificationScalarWhereInput>>;
  OR?: InputMaybe<Array<UserNotificationScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  payload?: InputMaybe<JsonNullableFilter>;
  read?: InputMaybe<BoolFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type UserNotificationScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserNotificationScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserNotificationScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserNotificationScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  metadata?: InputMaybe<JsonNullableWithAggregatesFilter>;
  payload?: InputMaybe<JsonNullableWithAggregatesFilter>;
  read?: InputMaybe<BoolWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type UserNotificationUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  payload?: InputMaybe<Scalars['JSON']['input']>;
  read?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutNotificationsNestedInput>;
};

export type UserNotificationUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  payload?: InputMaybe<Scalars['JSON']['input']>;
  read?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserNotificationUpdateManyWithWhereWithoutUserInput = {
  data: UserNotificationUpdateManyMutationInput;
  where: UserNotificationScalarWhereInput;
};

export type UserNotificationUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<UserNotificationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserNotificationCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserNotificationCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserNotificationCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<UserNotificationWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserNotificationScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserNotificationWhereUniqueInput>>;
  set?: InputMaybe<Array<UserNotificationWhereUniqueInput>>;
  update?: InputMaybe<Array<UserNotificationUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<UserNotificationUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<UserNotificationUpsertWithWhereUniqueWithoutUserInput>>;
};

export type UserNotificationUpdateWithWhereUniqueWithoutUserInput = {
  data: UserNotificationUpdateWithoutUserInput;
  where: UserNotificationWhereUniqueInput;
};

export type UserNotificationUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  payload?: InputMaybe<Scalars['JSON']['input']>;
  read?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserNotificationUpsertWithWhereUniqueWithoutUserInput = {
  create: UserNotificationCreateWithoutUserInput;
  update: UserNotificationUpdateWithoutUserInput;
  where: UserNotificationWhereUniqueInput;
};

export type UserNotificationWhereInput = {
  AND?: InputMaybe<Array<UserNotificationWhereInput>>;
  NOT?: InputMaybe<Array<UserNotificationWhereInput>>;
  OR?: InputMaybe<Array<UserNotificationWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  payload?: InputMaybe<JsonNullableFilter>;
  read?: InputMaybe<BoolFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type UserNotificationWhereUniqueInput = {
  AND?: InputMaybe<Array<UserNotificationWhereInput>>;
  NOT?: InputMaybe<Array<UserNotificationWhereInput>>;
  OR?: InputMaybe<Array<UserNotificationWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<JsonNullableFilter>;
  payload?: InputMaybe<JsonNullableFilter>;
  read?: InputMaybe<BoolFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export enum UserOrderByRelevanceFieldEnum {
  Email = 'email',
  Id = 'id',
  Image = 'image',
  Name = 'name',
  Password = 'password'
}

export type UserOrderByRelevanceInput = {
  fields: Array<UserOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type UserOrderByWithAggregationInput = {
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrderInput>;
  metadata?: InputMaybe<SortOrderInput>;
  name?: InputMaybe<SortOrderInput>;
  password?: InputMaybe<SortOrderInput>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  _relevance?: InputMaybe<UserOrderByRelevanceInput>;
  accounts?: InputMaybe<AccountOrderByRelationAggregateInput>;
  challenge_matches_one?: InputMaybe<UsersChallengeMatchOrderByRelationAggregateInput>;
  challenge_matches_two?: InputMaybe<UsersChallengeMatchOrderByRelationAggregateInput>;
  challenges_one?: InputMaybe<UsersChallengeOrderByRelationAggregateInput>;
  challenges_two?: InputMaybe<UsersChallengeOrderByRelationAggregateInput>;
  configuration?: InputMaybe<UserConfigurationOrderByWithRelationInput>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrderInput>;
  experience?: InputMaybe<UserExperienceOrderByWithRelationInput>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrderInput>;
  metadata?: InputMaybe<SortOrderInput>;
  name?: InputMaybe<SortOrderInput>;
  notifications?: InputMaybe<UserNotificationOrderByRelationAggregateInput>;
  password?: InputMaybe<SortOrderInput>;
  sessions?: InputMaybe<SessionOrderByRelationAggregateInput>;
  tags?: InputMaybe<TagOrderByRelationAggregateInput>;
  typingRuns?: InputMaybe<TypingRunOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Email = 'email',
  EmailVerified = 'emailVerified',
  Id = 'id',
  Image = 'image',
  Metadata = 'metadata',
  Name = 'name',
  Password = 'password',
  UpdatedAt = 'updatedAt'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  emailVerified?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  image?: InputMaybe<StringNullableWithAggregatesFilter>;
  metadata?: InputMaybe<JsonNullableWithAggregatesFilter>;
  name?: InputMaybe<StringNullableWithAggregatesFilter>;
  password?: InputMaybe<StringNullableWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type UserSearchResponse = {
  __typename?: 'UserSearchResponse';
  _count?: Maybe<UserCount>;
  accounts: Array<Account>;
  challenge_matches_one: Array<UsersChallengeMatch>;
  challenge_matches_two: Array<UsersChallengeMatch>;
  challenges_one: Array<UsersChallenge>;
  challenges_two: Array<UsersChallenge>;
  configuration?: Maybe<UserConfiguration>;
  createdAt: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  emailVerified?: Maybe<Scalars['DateTimeISO']['output']>;
  experience?: Maybe<UserExperience>;
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  /** [UserMetadata] */
  metadata?: Maybe<Scalars['JSON']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  notifications: Array<UserNotification>;
  password?: Maybe<Scalars['String']['output']>;
  sessions: Array<Session>;
  tags: Array<Tag>;
  typingRuns: Array<TypingRun>;
  updatedAt: Scalars['DateTimeISO']['output'];
};


export type UserSearchResponseAccountsArgs = {
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  distinct?: InputMaybe<Array<AccountScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AccountOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccountWhereInput>;
};


export type UserSearchResponseChallenge_Matches_OneArgs = {
  cursor?: InputMaybe<UsersChallengeMatchWhereUniqueInput>;
  distinct?: InputMaybe<Array<UsersChallengeMatchScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UsersChallengeMatchOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UsersChallengeMatchWhereInput>;
};


export type UserSearchResponseChallenge_Matches_TwoArgs = {
  cursor?: InputMaybe<UsersChallengeMatchWhereUniqueInput>;
  distinct?: InputMaybe<Array<UsersChallengeMatchScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UsersChallengeMatchOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UsersChallengeMatchWhereInput>;
};


export type UserSearchResponseChallenges_OneArgs = {
  cursor?: InputMaybe<UsersChallengeWhereUniqueInput>;
  distinct?: InputMaybe<Array<UsersChallengeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UsersChallengeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UsersChallengeWhereInput>;
};


export type UserSearchResponseChallenges_TwoArgs = {
  cursor?: InputMaybe<UsersChallengeWhereUniqueInput>;
  distinct?: InputMaybe<Array<UsersChallengeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UsersChallengeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UsersChallengeWhereInput>;
};


export type UserSearchResponseConfigurationArgs = {
  where?: InputMaybe<UserConfigurationWhereInput>;
};


export type UserSearchResponseExperienceArgs = {
  where?: InputMaybe<UserExperienceWhereInput>;
};


export type UserSearchResponseNotificationsArgs = {
  cursor?: InputMaybe<UserNotificationWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserNotificationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserNotificationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserNotificationWhereInput>;
};


export type UserSearchResponseSessionsArgs = {
  cursor?: InputMaybe<SessionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SessionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SessionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SessionWhereInput>;
};


export type UserSearchResponseTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  distinct?: InputMaybe<Array<TagScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TagOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TagWhereInput>;
};


export type UserSearchResponseTypingRunsArgs = {
  cursor?: InputMaybe<TypingRunWhereUniqueInput>;
  distinct?: InputMaybe<Array<TypingRunScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TypingRunOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TypingRunWhereInput>;
};

export type UserSignInInput = {
  email?: Scalars['String']['input'];
  password?: Scalars['String']['input'];
  username?: Scalars['String']['input'];
};

export type UserSignUpInput = {
  email?: Scalars['String']['input'];
  password?: Scalars['String']['input'];
  username?: Scalars['String']['input'];
};

export type UserUpdateInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  challenge_matches_one?: InputMaybe<UsersChallengeMatchUpdateManyWithoutUserOneNestedInput>;
  challenge_matches_two?: InputMaybe<UsersChallengeMatchUpdateManyWithoutUserTwoNestedInput>;
  challenges_one?: InputMaybe<UsersChallengeUpdateManyWithoutUserOneNestedInput>;
  challenges_two?: InputMaybe<UsersChallengeUpdateManyWithoutUserTwoNestedInput>;
  configuration?: InputMaybe<UserConfigurationUpdateOneWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  experience?: InputMaybe<UserExperienceUpdateOneWithoutUserNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<UserNotificationUpdateManyWithoutUserNestedInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserNestedInput>;
  tags?: InputMaybe<TagUpdateManyWithoutUserNestedInput>;
  typingRuns?: InputMaybe<TypingRunUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAccountsInput>;
  create?: InputMaybe<UserCreateWithoutAccountsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutAccountsInput>;
  upsert?: InputMaybe<UserUpsertWithoutAccountsInput>;
};

export type UserUpdateOneRequiredWithoutChallenge_Matches_OneNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutChallenge_Matches_OneInput>;
  create?: InputMaybe<UserCreateWithoutChallenge_Matches_OneInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutChallenge_Matches_OneInput>;
  upsert?: InputMaybe<UserUpsertWithoutChallenge_Matches_OneInput>;
};

export type UserUpdateOneRequiredWithoutChallenge_Matches_TwoNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutChallenge_Matches_TwoInput>;
  create?: InputMaybe<UserCreateWithoutChallenge_Matches_TwoInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutChallenge_Matches_TwoInput>;
  upsert?: InputMaybe<UserUpsertWithoutChallenge_Matches_TwoInput>;
};

export type UserUpdateOneRequiredWithoutChallenges_OneNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutChallenges_OneInput>;
  create?: InputMaybe<UserCreateWithoutChallenges_OneInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutChallenges_OneInput>;
  upsert?: InputMaybe<UserUpsertWithoutChallenges_OneInput>;
};

export type UserUpdateOneRequiredWithoutChallenges_TwoNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutChallenges_TwoInput>;
  create?: InputMaybe<UserCreateWithoutChallenges_TwoInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutChallenges_TwoInput>;
  upsert?: InputMaybe<UserUpsertWithoutChallenges_TwoInput>;
};

export type UserUpdateOneRequiredWithoutConfigurationNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutConfigurationInput>;
  create?: InputMaybe<UserCreateWithoutConfigurationInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutConfigurationInput>;
  upsert?: InputMaybe<UserUpsertWithoutConfigurationInput>;
};

export type UserUpdateOneRequiredWithoutExperienceNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutExperienceInput>;
  create?: InputMaybe<UserCreateWithoutExperienceInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutExperienceInput>;
  upsert?: InputMaybe<UserUpsertWithoutExperienceInput>;
};

export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutNotificationsInput>;
  create?: InputMaybe<UserCreateWithoutNotificationsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutNotificationsInput>;
  upsert?: InputMaybe<UserUpsertWithoutNotificationsInput>;
};

export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSessionsInput>;
  create?: InputMaybe<UserCreateWithoutSessionsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutSessionsInput>;
  upsert?: InputMaybe<UserUpsertWithoutSessionsInput>;
};

export type UserUpdateOneRequiredWithoutTagsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutTagsInput>;
  create?: InputMaybe<UserCreateWithoutTagsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutTagsInput>;
  upsert?: InputMaybe<UserUpsertWithoutTagsInput>;
};

export type UserUpdateOneRequiredWithoutTypingRunsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutTypingRunsInput>;
  create?: InputMaybe<UserCreateWithoutTypingRunsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutTypingRunsInput>;
  upsert?: InputMaybe<UserUpsertWithoutTypingRunsInput>;
};

export type UserUpdateToOneWithWhereWithoutAccountsInput = {
  data: UserUpdateWithoutAccountsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutChallenge_Matches_OneInput = {
  data: UserUpdateWithoutChallenge_Matches_OneInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutChallenge_Matches_TwoInput = {
  data: UserUpdateWithoutChallenge_Matches_TwoInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutChallenges_OneInput = {
  data: UserUpdateWithoutChallenges_OneInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutChallenges_TwoInput = {
  data: UserUpdateWithoutChallenges_TwoInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutConfigurationInput = {
  data: UserUpdateWithoutConfigurationInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutExperienceInput = {
  data: UserUpdateWithoutExperienceInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
  data: UserUpdateWithoutNotificationsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutSessionsInput = {
  data: UserUpdateWithoutSessionsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutTagsInput = {
  data: UserUpdateWithoutTagsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutTypingRunsInput = {
  data: UserUpdateWithoutTypingRunsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateWithoutAccountsInput = {
  challenge_matches_one?: InputMaybe<UsersChallengeMatchUpdateManyWithoutUserOneNestedInput>;
  challenge_matches_two?: InputMaybe<UsersChallengeMatchUpdateManyWithoutUserTwoNestedInput>;
  challenges_one?: InputMaybe<UsersChallengeUpdateManyWithoutUserOneNestedInput>;
  challenges_two?: InputMaybe<UsersChallengeUpdateManyWithoutUserTwoNestedInput>;
  configuration?: InputMaybe<UserConfigurationUpdateOneWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  experience?: InputMaybe<UserExperienceUpdateOneWithoutUserNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<UserNotificationUpdateManyWithoutUserNestedInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserNestedInput>;
  tags?: InputMaybe<TagUpdateManyWithoutUserNestedInput>;
  typingRuns?: InputMaybe<TypingRunUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutChallenge_Matches_OneInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  challenge_matches_two?: InputMaybe<UsersChallengeMatchUpdateManyWithoutUserTwoNestedInput>;
  challenges_one?: InputMaybe<UsersChallengeUpdateManyWithoutUserOneNestedInput>;
  challenges_two?: InputMaybe<UsersChallengeUpdateManyWithoutUserTwoNestedInput>;
  configuration?: InputMaybe<UserConfigurationUpdateOneWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  experience?: InputMaybe<UserExperienceUpdateOneWithoutUserNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<UserNotificationUpdateManyWithoutUserNestedInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserNestedInput>;
  tags?: InputMaybe<TagUpdateManyWithoutUserNestedInput>;
  typingRuns?: InputMaybe<TypingRunUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutChallenge_Matches_TwoInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  challenge_matches_one?: InputMaybe<UsersChallengeMatchUpdateManyWithoutUserOneNestedInput>;
  challenges_one?: InputMaybe<UsersChallengeUpdateManyWithoutUserOneNestedInput>;
  challenges_two?: InputMaybe<UsersChallengeUpdateManyWithoutUserTwoNestedInput>;
  configuration?: InputMaybe<UserConfigurationUpdateOneWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  experience?: InputMaybe<UserExperienceUpdateOneWithoutUserNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<UserNotificationUpdateManyWithoutUserNestedInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserNestedInput>;
  tags?: InputMaybe<TagUpdateManyWithoutUserNestedInput>;
  typingRuns?: InputMaybe<TypingRunUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutChallenges_OneInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  challenge_matches_one?: InputMaybe<UsersChallengeMatchUpdateManyWithoutUserOneNestedInput>;
  challenge_matches_two?: InputMaybe<UsersChallengeMatchUpdateManyWithoutUserTwoNestedInput>;
  challenges_two?: InputMaybe<UsersChallengeUpdateManyWithoutUserTwoNestedInput>;
  configuration?: InputMaybe<UserConfigurationUpdateOneWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  experience?: InputMaybe<UserExperienceUpdateOneWithoutUserNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<UserNotificationUpdateManyWithoutUserNestedInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserNestedInput>;
  tags?: InputMaybe<TagUpdateManyWithoutUserNestedInput>;
  typingRuns?: InputMaybe<TypingRunUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutChallenges_TwoInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  challenge_matches_one?: InputMaybe<UsersChallengeMatchUpdateManyWithoutUserOneNestedInput>;
  challenge_matches_two?: InputMaybe<UsersChallengeMatchUpdateManyWithoutUserTwoNestedInput>;
  challenges_one?: InputMaybe<UsersChallengeUpdateManyWithoutUserOneNestedInput>;
  configuration?: InputMaybe<UserConfigurationUpdateOneWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  experience?: InputMaybe<UserExperienceUpdateOneWithoutUserNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<UserNotificationUpdateManyWithoutUserNestedInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserNestedInput>;
  tags?: InputMaybe<TagUpdateManyWithoutUserNestedInput>;
  typingRuns?: InputMaybe<TypingRunUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutConfigurationInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  challenge_matches_one?: InputMaybe<UsersChallengeMatchUpdateManyWithoutUserOneNestedInput>;
  challenge_matches_two?: InputMaybe<UsersChallengeMatchUpdateManyWithoutUserTwoNestedInput>;
  challenges_one?: InputMaybe<UsersChallengeUpdateManyWithoutUserOneNestedInput>;
  challenges_two?: InputMaybe<UsersChallengeUpdateManyWithoutUserTwoNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  experience?: InputMaybe<UserExperienceUpdateOneWithoutUserNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<UserNotificationUpdateManyWithoutUserNestedInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserNestedInput>;
  tags?: InputMaybe<TagUpdateManyWithoutUserNestedInput>;
  typingRuns?: InputMaybe<TypingRunUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutExperienceInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  challenge_matches_one?: InputMaybe<UsersChallengeMatchUpdateManyWithoutUserOneNestedInput>;
  challenge_matches_two?: InputMaybe<UsersChallengeMatchUpdateManyWithoutUserTwoNestedInput>;
  challenges_one?: InputMaybe<UsersChallengeUpdateManyWithoutUserOneNestedInput>;
  challenges_two?: InputMaybe<UsersChallengeUpdateManyWithoutUserTwoNestedInput>;
  configuration?: InputMaybe<UserConfigurationUpdateOneWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<UserNotificationUpdateManyWithoutUserNestedInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserNestedInput>;
  tags?: InputMaybe<TagUpdateManyWithoutUserNestedInput>;
  typingRuns?: InputMaybe<TypingRunUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutNotificationsInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  challenge_matches_one?: InputMaybe<UsersChallengeMatchUpdateManyWithoutUserOneNestedInput>;
  challenge_matches_two?: InputMaybe<UsersChallengeMatchUpdateManyWithoutUserTwoNestedInput>;
  challenges_one?: InputMaybe<UsersChallengeUpdateManyWithoutUserOneNestedInput>;
  challenges_two?: InputMaybe<UsersChallengeUpdateManyWithoutUserTwoNestedInput>;
  configuration?: InputMaybe<UserConfigurationUpdateOneWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  experience?: InputMaybe<UserExperienceUpdateOneWithoutUserNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserNestedInput>;
  tags?: InputMaybe<TagUpdateManyWithoutUserNestedInput>;
  typingRuns?: InputMaybe<TypingRunUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutSessionsInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  challenge_matches_one?: InputMaybe<UsersChallengeMatchUpdateManyWithoutUserOneNestedInput>;
  challenge_matches_two?: InputMaybe<UsersChallengeMatchUpdateManyWithoutUserTwoNestedInput>;
  challenges_one?: InputMaybe<UsersChallengeUpdateManyWithoutUserOneNestedInput>;
  challenges_two?: InputMaybe<UsersChallengeUpdateManyWithoutUserTwoNestedInput>;
  configuration?: InputMaybe<UserConfigurationUpdateOneWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  experience?: InputMaybe<UserExperienceUpdateOneWithoutUserNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<UserNotificationUpdateManyWithoutUserNestedInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  tags?: InputMaybe<TagUpdateManyWithoutUserNestedInput>;
  typingRuns?: InputMaybe<TypingRunUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutTagsInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  challenge_matches_one?: InputMaybe<UsersChallengeMatchUpdateManyWithoutUserOneNestedInput>;
  challenge_matches_two?: InputMaybe<UsersChallengeMatchUpdateManyWithoutUserTwoNestedInput>;
  challenges_one?: InputMaybe<UsersChallengeUpdateManyWithoutUserOneNestedInput>;
  challenges_two?: InputMaybe<UsersChallengeUpdateManyWithoutUserTwoNestedInput>;
  configuration?: InputMaybe<UserConfigurationUpdateOneWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  experience?: InputMaybe<UserExperienceUpdateOneWithoutUserNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<UserNotificationUpdateManyWithoutUserNestedInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserNestedInput>;
  typingRuns?: InputMaybe<TypingRunUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutTypingRunsInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  challenge_matches_one?: InputMaybe<UsersChallengeMatchUpdateManyWithoutUserOneNestedInput>;
  challenge_matches_two?: InputMaybe<UsersChallengeMatchUpdateManyWithoutUserTwoNestedInput>;
  challenges_one?: InputMaybe<UsersChallengeUpdateManyWithoutUserOneNestedInput>;
  challenges_two?: InputMaybe<UsersChallengeUpdateManyWithoutUserTwoNestedInput>;
  configuration?: InputMaybe<UserConfigurationUpdateOneWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  experience?: InputMaybe<UserExperienceUpdateOneWithoutUserNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<UserNotificationUpdateManyWithoutUserNestedInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserNestedInput>;
  tags?: InputMaybe<TagUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutAccountsInput = {
  create: UserCreateWithoutAccountsInput;
  update: UserUpdateWithoutAccountsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutChallenge_Matches_OneInput = {
  create: UserCreateWithoutChallenge_Matches_OneInput;
  update: UserUpdateWithoutChallenge_Matches_OneInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutChallenge_Matches_TwoInput = {
  create: UserCreateWithoutChallenge_Matches_TwoInput;
  update: UserUpdateWithoutChallenge_Matches_TwoInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutChallenges_OneInput = {
  create: UserCreateWithoutChallenges_OneInput;
  update: UserUpdateWithoutChallenges_OneInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutChallenges_TwoInput = {
  create: UserCreateWithoutChallenges_TwoInput;
  update: UserUpdateWithoutChallenges_TwoInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutConfigurationInput = {
  create: UserCreateWithoutConfigurationInput;
  update: UserUpdateWithoutConfigurationInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutExperienceInput = {
  create: UserCreateWithoutExperienceInput;
  update: UserUpdateWithoutExperienceInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutNotificationsInput = {
  create: UserCreateWithoutNotificationsInput;
  update: UserUpdateWithoutNotificationsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutSessionsInput = {
  create: UserCreateWithoutSessionsInput;
  update: UserUpdateWithoutSessionsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutTagsInput = {
  create: UserCreateWithoutTagsInput;
  update: UserUpdateWithoutTagsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutTypingRunsInput = {
  create: UserCreateWithoutTypingRunsInput;
  update: UserUpdateWithoutTypingRunsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  accounts?: InputMaybe<AccountListRelationFilter>;
  challenge_matches_one?: InputMaybe<UsersChallengeMatchListRelationFilter>;
  challenge_matches_two?: InputMaybe<UsersChallengeMatchListRelationFilter>;
  challenges_one?: InputMaybe<UsersChallengeListRelationFilter>;
  challenges_two?: InputMaybe<UsersChallengeListRelationFilter>;
  configuration?: InputMaybe<UserConfigurationNullableRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  emailVerified?: InputMaybe<DateTimeNullableFilter>;
  experience?: InputMaybe<UserExperienceNullableRelationFilter>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringNullableFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  name?: InputMaybe<StringNullableFilter>;
  notifications?: InputMaybe<UserNotificationListRelationFilter>;
  password?: InputMaybe<StringNullableFilter>;
  sessions?: InputMaybe<SessionListRelationFilter>;
  tags?: InputMaybe<TagListRelationFilter>;
  typingRuns?: InputMaybe<TypingRunListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  accounts?: InputMaybe<AccountListRelationFilter>;
  challenge_matches_one?: InputMaybe<UsersChallengeMatchListRelationFilter>;
  challenge_matches_two?: InputMaybe<UsersChallengeMatchListRelationFilter>;
  challenges_one?: InputMaybe<UsersChallengeListRelationFilter>;
  challenges_two?: InputMaybe<UsersChallengeListRelationFilter>;
  configuration?: InputMaybe<UserConfigurationNullableRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<DateTimeNullableFilter>;
  experience?: InputMaybe<UserExperienceNullableRelationFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<StringNullableFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  name?: InputMaybe<StringNullableFilter>;
  notifications?: InputMaybe<UserNotificationListRelationFilter>;
  password?: InputMaybe<StringNullableFilter>;
  sessions?: InputMaybe<SessionListRelationFilter>;
  tags?: InputMaybe<TagListRelationFilter>;
  typingRuns?: InputMaybe<TypingRunListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type UsersChallenge = {
  __typename?: 'UsersChallenge';
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  matchId: Scalars['String']['output'];
  /** [UsersChallengeMetadata] */
  metadata?: Maybe<Scalars['JSON']['output']>;
  state: UsersChallengeState;
  updatedAt: Scalars['DateTimeISO']['output'];
  userOneId: Scalars['String']['output'];
  userOneRunId?: Maybe<Scalars['String']['output']>;
  userTwoId: Scalars['String']['output'];
  userTwoRunId?: Maybe<Scalars['String']['output']>;
};

export type UsersChallengeCountAggregate = {
  __typename?: 'UsersChallengeCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  matchId: Scalars['Int']['output'];
  metadata: Scalars['Int']['output'];
  state: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userOneId: Scalars['Int']['output'];
  userOneRunId: Scalars['Int']['output'];
  userTwoId: Scalars['Int']['output'];
  userTwoRunId: Scalars['Int']['output'];
};

export type UsersChallengeCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  matchId?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userOneId?: InputMaybe<SortOrder>;
  userOneRunId?: InputMaybe<SortOrder>;
  userTwoId?: InputMaybe<SortOrder>;
  userTwoRunId?: InputMaybe<SortOrder>;
};

export type UsersChallengeCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  match: UsersChallengeMatchCreateNestedOneWithoutChallengesInput;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<UsersChallengeState>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userOne: UserCreateNestedOneWithoutChallenges_OneInput;
  userOneRun?: InputMaybe<TypingRunCreateNestedOneWithoutChallanges_OneInput>;
  userTwo: UserCreateNestedOneWithoutChallenges_TwoInput;
  userTwoRun?: InputMaybe<TypingRunCreateNestedOneWithoutChallenges_TwoInput>;
};

export type UsersChallengeCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  matchId: Scalars['String']['input'];
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<UsersChallengeState>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userOneId: Scalars['String']['input'];
  userOneRunId?: InputMaybe<Scalars['String']['input']>;
  userTwoId: Scalars['String']['input'];
  userTwoRunId?: InputMaybe<Scalars['String']['input']>;
};

export type UsersChallengeCreateManyMatchInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<UsersChallengeState>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userOneId: Scalars['String']['input'];
  userOneRunId?: InputMaybe<Scalars['String']['input']>;
  userTwoId: Scalars['String']['input'];
  userTwoRunId?: InputMaybe<Scalars['String']['input']>;
};

export type UsersChallengeCreateManyMatchInputEnvelope = {
  data: Array<UsersChallengeCreateManyMatchInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UsersChallengeCreateManyUserOneInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  matchId: Scalars['String']['input'];
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<UsersChallengeState>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userOneRunId?: InputMaybe<Scalars['String']['input']>;
  userTwoId: Scalars['String']['input'];
  userTwoRunId?: InputMaybe<Scalars['String']['input']>;
};

export type UsersChallengeCreateManyUserOneInputEnvelope = {
  data: Array<UsersChallengeCreateManyUserOneInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UsersChallengeCreateManyUserOneRunInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  matchId: Scalars['String']['input'];
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<UsersChallengeState>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userOneId: Scalars['String']['input'];
  userTwoId: Scalars['String']['input'];
  userTwoRunId?: InputMaybe<Scalars['String']['input']>;
};

export type UsersChallengeCreateManyUserOneRunInputEnvelope = {
  data: Array<UsersChallengeCreateManyUserOneRunInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UsersChallengeCreateManyUserTwoInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  matchId: Scalars['String']['input'];
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<UsersChallengeState>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userOneId: Scalars['String']['input'];
  userOneRunId?: InputMaybe<Scalars['String']['input']>;
  userTwoRunId?: InputMaybe<Scalars['String']['input']>;
};

export type UsersChallengeCreateManyUserTwoInputEnvelope = {
  data: Array<UsersChallengeCreateManyUserTwoInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UsersChallengeCreateManyUserTwoRunInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  matchId: Scalars['String']['input'];
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<UsersChallengeState>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userOneId: Scalars['String']['input'];
  userOneRunId?: InputMaybe<Scalars['String']['input']>;
  userTwoId: Scalars['String']['input'];
};

export type UsersChallengeCreateManyUserTwoRunInputEnvelope = {
  data: Array<UsersChallengeCreateManyUserTwoRunInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UsersChallengeCreateNestedManyWithoutMatchInput = {
  connect?: InputMaybe<Array<UsersChallengeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UsersChallengeCreateOrConnectWithoutMatchInput>>;
  create?: InputMaybe<Array<UsersChallengeCreateWithoutMatchInput>>;
  createMany?: InputMaybe<UsersChallengeCreateManyMatchInputEnvelope>;
};

export type UsersChallengeCreateNestedManyWithoutUserOneInput = {
  connect?: InputMaybe<Array<UsersChallengeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UsersChallengeCreateOrConnectWithoutUserOneInput>>;
  create?: InputMaybe<Array<UsersChallengeCreateWithoutUserOneInput>>;
  createMany?: InputMaybe<UsersChallengeCreateManyUserOneInputEnvelope>;
};

export type UsersChallengeCreateNestedManyWithoutUserOneRunInput = {
  connect?: InputMaybe<Array<UsersChallengeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UsersChallengeCreateOrConnectWithoutUserOneRunInput>>;
  create?: InputMaybe<Array<UsersChallengeCreateWithoutUserOneRunInput>>;
  createMany?: InputMaybe<UsersChallengeCreateManyUserOneRunInputEnvelope>;
};

export type UsersChallengeCreateNestedManyWithoutUserTwoInput = {
  connect?: InputMaybe<Array<UsersChallengeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UsersChallengeCreateOrConnectWithoutUserTwoInput>>;
  create?: InputMaybe<Array<UsersChallengeCreateWithoutUserTwoInput>>;
  createMany?: InputMaybe<UsersChallengeCreateManyUserTwoInputEnvelope>;
};

export type UsersChallengeCreateNestedManyWithoutUserTwoRunInput = {
  connect?: InputMaybe<Array<UsersChallengeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UsersChallengeCreateOrConnectWithoutUserTwoRunInput>>;
  create?: InputMaybe<Array<UsersChallengeCreateWithoutUserTwoRunInput>>;
  createMany?: InputMaybe<UsersChallengeCreateManyUserTwoRunInputEnvelope>;
};

export type UsersChallengeCreateOrConnectWithoutMatchInput = {
  create: UsersChallengeCreateWithoutMatchInput;
  where: UsersChallengeWhereUniqueInput;
};

export type UsersChallengeCreateOrConnectWithoutUserOneInput = {
  create: UsersChallengeCreateWithoutUserOneInput;
  where: UsersChallengeWhereUniqueInput;
};

export type UsersChallengeCreateOrConnectWithoutUserOneRunInput = {
  create: UsersChallengeCreateWithoutUserOneRunInput;
  where: UsersChallengeWhereUniqueInput;
};

export type UsersChallengeCreateOrConnectWithoutUserTwoInput = {
  create: UsersChallengeCreateWithoutUserTwoInput;
  where: UsersChallengeWhereUniqueInput;
};

export type UsersChallengeCreateOrConnectWithoutUserTwoRunInput = {
  create: UsersChallengeCreateWithoutUserTwoRunInput;
  where: UsersChallengeWhereUniqueInput;
};

export type UsersChallengeCreateWithoutMatchInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<UsersChallengeState>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userOne: UserCreateNestedOneWithoutChallenges_OneInput;
  userOneRun?: InputMaybe<TypingRunCreateNestedOneWithoutChallanges_OneInput>;
  userTwo: UserCreateNestedOneWithoutChallenges_TwoInput;
  userTwoRun?: InputMaybe<TypingRunCreateNestedOneWithoutChallenges_TwoInput>;
};

export type UsersChallengeCreateWithoutUserOneInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  match: UsersChallengeMatchCreateNestedOneWithoutChallengesInput;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<UsersChallengeState>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userOneRun?: InputMaybe<TypingRunCreateNestedOneWithoutChallanges_OneInput>;
  userTwo: UserCreateNestedOneWithoutChallenges_TwoInput;
  userTwoRun?: InputMaybe<TypingRunCreateNestedOneWithoutChallenges_TwoInput>;
};

export type UsersChallengeCreateWithoutUserOneRunInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  match: UsersChallengeMatchCreateNestedOneWithoutChallengesInput;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<UsersChallengeState>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userOne: UserCreateNestedOneWithoutChallenges_OneInput;
  userTwo: UserCreateNestedOneWithoutChallenges_TwoInput;
  userTwoRun?: InputMaybe<TypingRunCreateNestedOneWithoutChallenges_TwoInput>;
};

export type UsersChallengeCreateWithoutUserTwoInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  match: UsersChallengeMatchCreateNestedOneWithoutChallengesInput;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<UsersChallengeState>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userOne: UserCreateNestedOneWithoutChallenges_OneInput;
  userOneRun?: InputMaybe<TypingRunCreateNestedOneWithoutChallanges_OneInput>;
  userTwoRun?: InputMaybe<TypingRunCreateNestedOneWithoutChallenges_TwoInput>;
};

export type UsersChallengeCreateWithoutUserTwoRunInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  match: UsersChallengeMatchCreateNestedOneWithoutChallengesInput;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<UsersChallengeState>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userOne: UserCreateNestedOneWithoutChallenges_OneInput;
  userOneRun?: InputMaybe<TypingRunCreateNestedOneWithoutChallanges_OneInput>;
  userTwo: UserCreateNestedOneWithoutChallenges_TwoInput;
};

export type UsersChallengeGroupBy = {
  __typename?: 'UsersChallengeGroupBy';
  _count?: Maybe<UsersChallengeCountAggregate>;
  _max?: Maybe<UsersChallengeMaxAggregate>;
  _min?: Maybe<UsersChallengeMinAggregate>;
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  matchId: Scalars['String']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  state: UsersChallengeState;
  updatedAt: Scalars['DateTimeISO']['output'];
  userOneId: Scalars['String']['output'];
  userOneRunId?: Maybe<Scalars['String']['output']>;
  userTwoId: Scalars['String']['output'];
  userTwoRunId?: Maybe<Scalars['String']['output']>;
};

export type UsersChallengeListRelationFilter = {
  every?: InputMaybe<UsersChallengeWhereInput>;
  none?: InputMaybe<UsersChallengeWhereInput>;
  some?: InputMaybe<UsersChallengeWhereInput>;
};

export type UsersChallengeMatch = {
  __typename?: 'UsersChallengeMatch';
  _count?: Maybe<UsersChallengeMatchCount>;
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  /** [UsersChallengeMatchMetadata] */
  metadata?: Maybe<Scalars['JSON']['output']>;
  state: UsersChallengeMatchState;
  updatedAt: Scalars['DateTimeISO']['output'];
  userOneId: Scalars['String']['output'];
  userTwoId: Scalars['String']['output'];
};

export type UsersChallengeMatchCount = {
  __typename?: 'UsersChallengeMatchCount';
  challenges: Scalars['Int']['output'];
};


export type UsersChallengeMatchCountChallengesArgs = {
  where?: InputMaybe<UsersChallengeWhereInput>;
};

export type UsersChallengeMatchCountAggregate = {
  __typename?: 'UsersChallengeMatchCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  metadata: Scalars['Int']['output'];
  state: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userOneId: Scalars['Int']['output'];
  userTwoId: Scalars['Int']['output'];
};

export type UsersChallengeMatchCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userOneId?: InputMaybe<SortOrder>;
  userTwoId?: InputMaybe<SortOrder>;
};

export type UsersChallengeMatchCreateInput = {
  challenges?: InputMaybe<UsersChallengeCreateNestedManyWithoutMatchInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<UsersChallengeMatchState>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userOne: UserCreateNestedOneWithoutChallenge_Matches_OneInput;
  userTwo: UserCreateNestedOneWithoutChallenge_Matches_TwoInput;
};

export type UsersChallengeMatchCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<UsersChallengeMatchState>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userOneId: Scalars['String']['input'];
  userTwoId: Scalars['String']['input'];
};

export type UsersChallengeMatchCreateManyUserOneInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<UsersChallengeMatchState>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userTwoId: Scalars['String']['input'];
};

export type UsersChallengeMatchCreateManyUserOneInputEnvelope = {
  data: Array<UsersChallengeMatchCreateManyUserOneInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UsersChallengeMatchCreateManyUserTwoInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<UsersChallengeMatchState>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userOneId: Scalars['String']['input'];
};

export type UsersChallengeMatchCreateManyUserTwoInputEnvelope = {
  data: Array<UsersChallengeMatchCreateManyUserTwoInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UsersChallengeMatchCreateNestedManyWithoutUserOneInput = {
  connect?: InputMaybe<Array<UsersChallengeMatchWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UsersChallengeMatchCreateOrConnectWithoutUserOneInput>>;
  create?: InputMaybe<Array<UsersChallengeMatchCreateWithoutUserOneInput>>;
  createMany?: InputMaybe<UsersChallengeMatchCreateManyUserOneInputEnvelope>;
};

export type UsersChallengeMatchCreateNestedManyWithoutUserTwoInput = {
  connect?: InputMaybe<Array<UsersChallengeMatchWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UsersChallengeMatchCreateOrConnectWithoutUserTwoInput>>;
  create?: InputMaybe<Array<UsersChallengeMatchCreateWithoutUserTwoInput>>;
  createMany?: InputMaybe<UsersChallengeMatchCreateManyUserTwoInputEnvelope>;
};

export type UsersChallengeMatchCreateNestedOneWithoutChallengesInput = {
  connect?: InputMaybe<UsersChallengeMatchWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UsersChallengeMatchCreateOrConnectWithoutChallengesInput>;
  create?: InputMaybe<UsersChallengeMatchCreateWithoutChallengesInput>;
};

export type UsersChallengeMatchCreateOrConnectWithoutChallengesInput = {
  create: UsersChallengeMatchCreateWithoutChallengesInput;
  where: UsersChallengeMatchWhereUniqueInput;
};

export type UsersChallengeMatchCreateOrConnectWithoutUserOneInput = {
  create: UsersChallengeMatchCreateWithoutUserOneInput;
  where: UsersChallengeMatchWhereUniqueInput;
};

export type UsersChallengeMatchCreateOrConnectWithoutUserTwoInput = {
  create: UsersChallengeMatchCreateWithoutUserTwoInput;
  where: UsersChallengeMatchWhereUniqueInput;
};

export type UsersChallengeMatchCreateWithoutChallengesInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<UsersChallengeMatchState>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userOne: UserCreateNestedOneWithoutChallenge_Matches_OneInput;
  userTwo: UserCreateNestedOneWithoutChallenge_Matches_TwoInput;
};

export type UsersChallengeMatchCreateWithoutUserOneInput = {
  challenges?: InputMaybe<UsersChallengeCreateNestedManyWithoutMatchInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<UsersChallengeMatchState>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userTwo: UserCreateNestedOneWithoutChallenge_Matches_TwoInput;
};

export type UsersChallengeMatchCreateWithoutUserTwoInput = {
  challenges?: InputMaybe<UsersChallengeCreateNestedManyWithoutMatchInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<UsersChallengeMatchState>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userOne: UserCreateNestedOneWithoutChallenge_Matches_OneInput;
};

export type UsersChallengeMatchGroupBy = {
  __typename?: 'UsersChallengeMatchGroupBy';
  _count?: Maybe<UsersChallengeMatchCountAggregate>;
  _max?: Maybe<UsersChallengeMatchMaxAggregate>;
  _min?: Maybe<UsersChallengeMatchMinAggregate>;
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  state: UsersChallengeMatchState;
  updatedAt: Scalars['DateTimeISO']['output'];
  userOneId: Scalars['String']['output'];
  userTwoId: Scalars['String']['output'];
};

export type UsersChallengeMatchListRelationFilter = {
  every?: InputMaybe<UsersChallengeMatchWhereInput>;
  none?: InputMaybe<UsersChallengeMatchWhereInput>;
  some?: InputMaybe<UsersChallengeMatchWhereInput>;
};

export type UsersChallengeMatchMaxAggregate = {
  __typename?: 'UsersChallengeMatchMaxAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  state?: Maybe<UsersChallengeMatchState>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userOneId?: Maybe<Scalars['String']['output']>;
  userTwoId?: Maybe<Scalars['String']['output']>;
};

export type UsersChallengeMatchMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userOneId?: InputMaybe<SortOrder>;
  userTwoId?: InputMaybe<SortOrder>;
};

export type UsersChallengeMatchMinAggregate = {
  __typename?: 'UsersChallengeMatchMinAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  state?: Maybe<UsersChallengeMatchState>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userOneId?: Maybe<Scalars['String']['output']>;
  userTwoId?: Maybe<Scalars['String']['output']>;
};

export type UsersChallengeMatchMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userOneId?: InputMaybe<SortOrder>;
  userTwoId?: InputMaybe<SortOrder>;
};

export type UsersChallengeMatchOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum UsersChallengeMatchOrderByRelevanceFieldEnum {
  Id = 'id',
  UserOneId = 'userOneId',
  UserTwoId = 'userTwoId'
}

export type UsersChallengeMatchOrderByRelevanceInput = {
  fields: Array<UsersChallengeMatchOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type UsersChallengeMatchOrderByWithAggregationInput = {
  _count?: InputMaybe<UsersChallengeMatchCountOrderByAggregateInput>;
  _max?: InputMaybe<UsersChallengeMatchMaxOrderByAggregateInput>;
  _min?: InputMaybe<UsersChallengeMatchMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrderInput>;
  state?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userOneId?: InputMaybe<SortOrder>;
  userTwoId?: InputMaybe<SortOrder>;
};

export type UsersChallengeMatchOrderByWithRelationInput = {
  _relevance?: InputMaybe<UsersChallengeMatchOrderByRelevanceInput>;
  challenges?: InputMaybe<UsersChallengeOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrderInput>;
  state?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userOne?: InputMaybe<UserOrderByWithRelationInput>;
  userOneId?: InputMaybe<SortOrder>;
  userTwo?: InputMaybe<UserOrderByWithRelationInput>;
  userTwoId?: InputMaybe<SortOrder>;
};

export type UsersChallengeMatchRelationFilter = {
  is?: InputMaybe<UsersChallengeMatchWhereInput>;
  isNot?: InputMaybe<UsersChallengeMatchWhereInput>;
};

export enum UsersChallengeMatchScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Metadata = 'metadata',
  State = 'state',
  UpdatedAt = 'updatedAt',
  UserOneId = 'userOneId',
  UserTwoId = 'userTwoId'
}

export type UsersChallengeMatchScalarWhereInput = {
  AND?: InputMaybe<Array<UsersChallengeMatchScalarWhereInput>>;
  NOT?: InputMaybe<Array<UsersChallengeMatchScalarWhereInput>>;
  OR?: InputMaybe<Array<UsersChallengeMatchScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<UuidFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  state?: InputMaybe<EnumUsersChallengeMatchStateFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userOneId?: InputMaybe<StringFilter>;
  userTwoId?: InputMaybe<StringFilter>;
};

export type UsersChallengeMatchScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UsersChallengeMatchScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UsersChallengeMatchScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UsersChallengeMatchScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<UuidWithAggregatesFilter>;
  metadata?: InputMaybe<JsonNullableWithAggregatesFilter>;
  state?: InputMaybe<EnumUsersChallengeMatchStateWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userOneId?: InputMaybe<StringWithAggregatesFilter>;
  userTwoId?: InputMaybe<StringWithAggregatesFilter>;
};

export enum UsersChallengeMatchState {
  Accepted = 'Accepted',
  HalfAccepted = 'HalfAccepted',
  Pending = 'Pending',
  Rejected = 'Rejected',
  Started = 'Started'
}

export type UsersChallengeMatchUpdateInput = {
  challenges?: InputMaybe<UsersChallengeUpdateManyWithoutMatchNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<EnumUsersChallengeMatchStateFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userOne?: InputMaybe<UserUpdateOneRequiredWithoutChallenge_Matches_OneNestedInput>;
  userTwo?: InputMaybe<UserUpdateOneRequiredWithoutChallenge_Matches_TwoNestedInput>;
};

export type UsersChallengeMatchUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<EnumUsersChallengeMatchStateFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UsersChallengeMatchUpdateManyWithWhereWithoutUserOneInput = {
  data: UsersChallengeMatchUpdateManyMutationInput;
  where: UsersChallengeMatchScalarWhereInput;
};

export type UsersChallengeMatchUpdateManyWithWhereWithoutUserTwoInput = {
  data: UsersChallengeMatchUpdateManyMutationInput;
  where: UsersChallengeMatchScalarWhereInput;
};

export type UsersChallengeMatchUpdateManyWithoutUserOneNestedInput = {
  connect?: InputMaybe<Array<UsersChallengeMatchWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UsersChallengeMatchCreateOrConnectWithoutUserOneInput>>;
  create?: InputMaybe<Array<UsersChallengeMatchCreateWithoutUserOneInput>>;
  createMany?: InputMaybe<UsersChallengeMatchCreateManyUserOneInputEnvelope>;
  delete?: InputMaybe<Array<UsersChallengeMatchWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UsersChallengeMatchScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UsersChallengeMatchWhereUniqueInput>>;
  set?: InputMaybe<Array<UsersChallengeMatchWhereUniqueInput>>;
  update?: InputMaybe<Array<UsersChallengeMatchUpdateWithWhereUniqueWithoutUserOneInput>>;
  updateMany?: InputMaybe<Array<UsersChallengeMatchUpdateManyWithWhereWithoutUserOneInput>>;
  upsert?: InputMaybe<Array<UsersChallengeMatchUpsertWithWhereUniqueWithoutUserOneInput>>;
};

export type UsersChallengeMatchUpdateManyWithoutUserTwoNestedInput = {
  connect?: InputMaybe<Array<UsersChallengeMatchWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UsersChallengeMatchCreateOrConnectWithoutUserTwoInput>>;
  create?: InputMaybe<Array<UsersChallengeMatchCreateWithoutUserTwoInput>>;
  createMany?: InputMaybe<UsersChallengeMatchCreateManyUserTwoInputEnvelope>;
  delete?: InputMaybe<Array<UsersChallengeMatchWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UsersChallengeMatchScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UsersChallengeMatchWhereUniqueInput>>;
  set?: InputMaybe<Array<UsersChallengeMatchWhereUniqueInput>>;
  update?: InputMaybe<Array<UsersChallengeMatchUpdateWithWhereUniqueWithoutUserTwoInput>>;
  updateMany?: InputMaybe<Array<UsersChallengeMatchUpdateManyWithWhereWithoutUserTwoInput>>;
  upsert?: InputMaybe<Array<UsersChallengeMatchUpsertWithWhereUniqueWithoutUserTwoInput>>;
};

export type UsersChallengeMatchUpdateOneRequiredWithoutChallengesNestedInput = {
  connect?: InputMaybe<UsersChallengeMatchWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UsersChallengeMatchCreateOrConnectWithoutChallengesInput>;
  create?: InputMaybe<UsersChallengeMatchCreateWithoutChallengesInput>;
  update?: InputMaybe<UsersChallengeMatchUpdateToOneWithWhereWithoutChallengesInput>;
  upsert?: InputMaybe<UsersChallengeMatchUpsertWithoutChallengesInput>;
};

export type UsersChallengeMatchUpdateToOneWithWhereWithoutChallengesInput = {
  data: UsersChallengeMatchUpdateWithoutChallengesInput;
  where?: InputMaybe<UsersChallengeMatchWhereInput>;
};

export type UsersChallengeMatchUpdateWithWhereUniqueWithoutUserOneInput = {
  data: UsersChallengeMatchUpdateWithoutUserOneInput;
  where: UsersChallengeMatchWhereUniqueInput;
};

export type UsersChallengeMatchUpdateWithWhereUniqueWithoutUserTwoInput = {
  data: UsersChallengeMatchUpdateWithoutUserTwoInput;
  where: UsersChallengeMatchWhereUniqueInput;
};

export type UsersChallengeMatchUpdateWithoutChallengesInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<EnumUsersChallengeMatchStateFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userOne?: InputMaybe<UserUpdateOneRequiredWithoutChallenge_Matches_OneNestedInput>;
  userTwo?: InputMaybe<UserUpdateOneRequiredWithoutChallenge_Matches_TwoNestedInput>;
};

export type UsersChallengeMatchUpdateWithoutUserOneInput = {
  challenges?: InputMaybe<UsersChallengeUpdateManyWithoutMatchNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<EnumUsersChallengeMatchStateFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userTwo?: InputMaybe<UserUpdateOneRequiredWithoutChallenge_Matches_TwoNestedInput>;
};

export type UsersChallengeMatchUpdateWithoutUserTwoInput = {
  challenges?: InputMaybe<UsersChallengeUpdateManyWithoutMatchNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<EnumUsersChallengeMatchStateFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userOne?: InputMaybe<UserUpdateOneRequiredWithoutChallenge_Matches_OneNestedInput>;
};

export type UsersChallengeMatchUpsertWithWhereUniqueWithoutUserOneInput = {
  create: UsersChallengeMatchCreateWithoutUserOneInput;
  update: UsersChallengeMatchUpdateWithoutUserOneInput;
  where: UsersChallengeMatchWhereUniqueInput;
};

export type UsersChallengeMatchUpsertWithWhereUniqueWithoutUserTwoInput = {
  create: UsersChallengeMatchCreateWithoutUserTwoInput;
  update: UsersChallengeMatchUpdateWithoutUserTwoInput;
  where: UsersChallengeMatchWhereUniqueInput;
};

export type UsersChallengeMatchUpsertWithoutChallengesInput = {
  create: UsersChallengeMatchCreateWithoutChallengesInput;
  update: UsersChallengeMatchUpdateWithoutChallengesInput;
  where?: InputMaybe<UsersChallengeMatchWhereInput>;
};

export type UsersChallengeMatchWhereInput = {
  AND?: InputMaybe<Array<UsersChallengeMatchWhereInput>>;
  NOT?: InputMaybe<Array<UsersChallengeMatchWhereInput>>;
  OR?: InputMaybe<Array<UsersChallengeMatchWhereInput>>;
  challenges?: InputMaybe<UsersChallengeListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<UuidFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  state?: InputMaybe<EnumUsersChallengeMatchStateFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userOne?: InputMaybe<UserRelationFilter>;
  userOneId?: InputMaybe<StringFilter>;
  userTwo?: InputMaybe<UserRelationFilter>;
  userTwoId?: InputMaybe<StringFilter>;
};

export type UsersChallengeMatchWhereUniqueInput = {
  AND?: InputMaybe<Array<UsersChallengeMatchWhereInput>>;
  NOT?: InputMaybe<Array<UsersChallengeMatchWhereInput>>;
  OR?: InputMaybe<Array<UsersChallengeMatchWhereInput>>;
  challenges?: InputMaybe<UsersChallengeListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<JsonNullableFilter>;
  state?: InputMaybe<EnumUsersChallengeMatchStateFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userOne?: InputMaybe<UserRelationFilter>;
  userOneId?: InputMaybe<StringFilter>;
  userTwo?: InputMaybe<UserRelationFilter>;
  userTwoId?: InputMaybe<StringFilter>;
};

export type UsersChallengeMaxAggregate = {
  __typename?: 'UsersChallengeMaxAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  matchId?: Maybe<Scalars['String']['output']>;
  state?: Maybe<UsersChallengeState>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userOneId?: Maybe<Scalars['String']['output']>;
  userOneRunId?: Maybe<Scalars['String']['output']>;
  userTwoId?: Maybe<Scalars['String']['output']>;
  userTwoRunId?: Maybe<Scalars['String']['output']>;
};

export type UsersChallengeMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  matchId?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userOneId?: InputMaybe<SortOrder>;
  userOneRunId?: InputMaybe<SortOrder>;
  userTwoId?: InputMaybe<SortOrder>;
  userTwoRunId?: InputMaybe<SortOrder>;
};

export type UsersChallengeMinAggregate = {
  __typename?: 'UsersChallengeMinAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  matchId?: Maybe<Scalars['String']['output']>;
  state?: Maybe<UsersChallengeState>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userOneId?: Maybe<Scalars['String']['output']>;
  userOneRunId?: Maybe<Scalars['String']['output']>;
  userTwoId?: Maybe<Scalars['String']['output']>;
  userTwoRunId?: Maybe<Scalars['String']['output']>;
};

export type UsersChallengeMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  matchId?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userOneId?: InputMaybe<SortOrder>;
  userOneRunId?: InputMaybe<SortOrder>;
  userTwoId?: InputMaybe<SortOrder>;
  userTwoRunId?: InputMaybe<SortOrder>;
};

export type UsersChallengeOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum UsersChallengeOrderByRelevanceFieldEnum {
  Id = 'id',
  MatchId = 'matchId',
  UserOneId = 'userOneId',
  UserOneRunId = 'userOneRunId',
  UserTwoId = 'userTwoId',
  UserTwoRunId = 'userTwoRunId'
}

export type UsersChallengeOrderByRelevanceInput = {
  fields: Array<UsersChallengeOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type UsersChallengeOrderByWithAggregationInput = {
  _count?: InputMaybe<UsersChallengeCountOrderByAggregateInput>;
  _max?: InputMaybe<UsersChallengeMaxOrderByAggregateInput>;
  _min?: InputMaybe<UsersChallengeMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  matchId?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrderInput>;
  state?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userOneId?: InputMaybe<SortOrder>;
  userOneRunId?: InputMaybe<SortOrderInput>;
  userTwoId?: InputMaybe<SortOrder>;
  userTwoRunId?: InputMaybe<SortOrderInput>;
};

export type UsersChallengeOrderByWithRelationInput = {
  _relevance?: InputMaybe<UsersChallengeOrderByRelevanceInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  match?: InputMaybe<UsersChallengeMatchOrderByWithRelationInput>;
  matchId?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrderInput>;
  state?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userOne?: InputMaybe<UserOrderByWithRelationInput>;
  userOneId?: InputMaybe<SortOrder>;
  userOneRun?: InputMaybe<TypingRunOrderByWithRelationInput>;
  userOneRunId?: InputMaybe<SortOrderInput>;
  userTwo?: InputMaybe<UserOrderByWithRelationInput>;
  userTwoId?: InputMaybe<SortOrder>;
  userTwoRun?: InputMaybe<TypingRunOrderByWithRelationInput>;
  userTwoRunId?: InputMaybe<SortOrderInput>;
};

export enum UsersChallengeScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  MatchId = 'matchId',
  Metadata = 'metadata',
  State = 'state',
  UpdatedAt = 'updatedAt',
  UserOneId = 'userOneId',
  UserOneRunId = 'userOneRunId',
  UserTwoId = 'userTwoId',
  UserTwoRunId = 'userTwoRunId'
}

export type UsersChallengeScalarWhereInput = {
  AND?: InputMaybe<Array<UsersChallengeScalarWhereInput>>;
  NOT?: InputMaybe<Array<UsersChallengeScalarWhereInput>>;
  OR?: InputMaybe<Array<UsersChallengeScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<UuidFilter>;
  matchId?: InputMaybe<UuidFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  state?: InputMaybe<EnumUsersChallengeStateFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userOneId?: InputMaybe<StringFilter>;
  userOneRunId?: InputMaybe<UuidNullableFilter>;
  userTwoId?: InputMaybe<StringFilter>;
  userTwoRunId?: InputMaybe<UuidNullableFilter>;
};

export type UsersChallengeScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UsersChallengeScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UsersChallengeScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UsersChallengeScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<UuidWithAggregatesFilter>;
  matchId?: InputMaybe<UuidWithAggregatesFilter>;
  metadata?: InputMaybe<JsonNullableWithAggregatesFilter>;
  state?: InputMaybe<EnumUsersChallengeStateWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userOneId?: InputMaybe<StringWithAggregatesFilter>;
  userOneRunId?: InputMaybe<UuidNullableWithAggregatesFilter>;
  userTwoId?: InputMaybe<StringWithAggregatesFilter>;
  userTwoRunId?: InputMaybe<UuidNullableWithAggregatesFilter>;
};

export enum UsersChallengeState {
  Finished = 'Finished',
  Pending = 'Pending',
  Playing = 'Playing',
  Stopped = 'Stopped'
}

export type UsersChallengeUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  match?: InputMaybe<UsersChallengeMatchUpdateOneRequiredWithoutChallengesNestedInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<EnumUsersChallengeStateFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userOne?: InputMaybe<UserUpdateOneRequiredWithoutChallenges_OneNestedInput>;
  userOneRun?: InputMaybe<TypingRunUpdateOneWithoutChallanges_OneNestedInput>;
  userTwo?: InputMaybe<UserUpdateOneRequiredWithoutChallenges_TwoNestedInput>;
  userTwoRun?: InputMaybe<TypingRunUpdateOneWithoutChallenges_TwoNestedInput>;
};

export type UsersChallengeUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<EnumUsersChallengeStateFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UsersChallengeUpdateManyWithWhereWithoutMatchInput = {
  data: UsersChallengeUpdateManyMutationInput;
  where: UsersChallengeScalarWhereInput;
};

export type UsersChallengeUpdateManyWithWhereWithoutUserOneInput = {
  data: UsersChallengeUpdateManyMutationInput;
  where: UsersChallengeScalarWhereInput;
};

export type UsersChallengeUpdateManyWithWhereWithoutUserOneRunInput = {
  data: UsersChallengeUpdateManyMutationInput;
  where: UsersChallengeScalarWhereInput;
};

export type UsersChallengeUpdateManyWithWhereWithoutUserTwoInput = {
  data: UsersChallengeUpdateManyMutationInput;
  where: UsersChallengeScalarWhereInput;
};

export type UsersChallengeUpdateManyWithWhereWithoutUserTwoRunInput = {
  data: UsersChallengeUpdateManyMutationInput;
  where: UsersChallengeScalarWhereInput;
};

export type UsersChallengeUpdateManyWithoutMatchNestedInput = {
  connect?: InputMaybe<Array<UsersChallengeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UsersChallengeCreateOrConnectWithoutMatchInput>>;
  create?: InputMaybe<Array<UsersChallengeCreateWithoutMatchInput>>;
  createMany?: InputMaybe<UsersChallengeCreateManyMatchInputEnvelope>;
  delete?: InputMaybe<Array<UsersChallengeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UsersChallengeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UsersChallengeWhereUniqueInput>>;
  set?: InputMaybe<Array<UsersChallengeWhereUniqueInput>>;
  update?: InputMaybe<Array<UsersChallengeUpdateWithWhereUniqueWithoutMatchInput>>;
  updateMany?: InputMaybe<Array<UsersChallengeUpdateManyWithWhereWithoutMatchInput>>;
  upsert?: InputMaybe<Array<UsersChallengeUpsertWithWhereUniqueWithoutMatchInput>>;
};

export type UsersChallengeUpdateManyWithoutUserOneNestedInput = {
  connect?: InputMaybe<Array<UsersChallengeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UsersChallengeCreateOrConnectWithoutUserOneInput>>;
  create?: InputMaybe<Array<UsersChallengeCreateWithoutUserOneInput>>;
  createMany?: InputMaybe<UsersChallengeCreateManyUserOneInputEnvelope>;
  delete?: InputMaybe<Array<UsersChallengeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UsersChallengeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UsersChallengeWhereUniqueInput>>;
  set?: InputMaybe<Array<UsersChallengeWhereUniqueInput>>;
  update?: InputMaybe<Array<UsersChallengeUpdateWithWhereUniqueWithoutUserOneInput>>;
  updateMany?: InputMaybe<Array<UsersChallengeUpdateManyWithWhereWithoutUserOneInput>>;
  upsert?: InputMaybe<Array<UsersChallengeUpsertWithWhereUniqueWithoutUserOneInput>>;
};

export type UsersChallengeUpdateManyWithoutUserOneRunNestedInput = {
  connect?: InputMaybe<Array<UsersChallengeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UsersChallengeCreateOrConnectWithoutUserOneRunInput>>;
  create?: InputMaybe<Array<UsersChallengeCreateWithoutUserOneRunInput>>;
  createMany?: InputMaybe<UsersChallengeCreateManyUserOneRunInputEnvelope>;
  delete?: InputMaybe<Array<UsersChallengeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UsersChallengeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UsersChallengeWhereUniqueInput>>;
  set?: InputMaybe<Array<UsersChallengeWhereUniqueInput>>;
  update?: InputMaybe<Array<UsersChallengeUpdateWithWhereUniqueWithoutUserOneRunInput>>;
  updateMany?: InputMaybe<Array<UsersChallengeUpdateManyWithWhereWithoutUserOneRunInput>>;
  upsert?: InputMaybe<Array<UsersChallengeUpsertWithWhereUniqueWithoutUserOneRunInput>>;
};

export type UsersChallengeUpdateManyWithoutUserTwoNestedInput = {
  connect?: InputMaybe<Array<UsersChallengeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UsersChallengeCreateOrConnectWithoutUserTwoInput>>;
  create?: InputMaybe<Array<UsersChallengeCreateWithoutUserTwoInput>>;
  createMany?: InputMaybe<UsersChallengeCreateManyUserTwoInputEnvelope>;
  delete?: InputMaybe<Array<UsersChallengeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UsersChallengeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UsersChallengeWhereUniqueInput>>;
  set?: InputMaybe<Array<UsersChallengeWhereUniqueInput>>;
  update?: InputMaybe<Array<UsersChallengeUpdateWithWhereUniqueWithoutUserTwoInput>>;
  updateMany?: InputMaybe<Array<UsersChallengeUpdateManyWithWhereWithoutUserTwoInput>>;
  upsert?: InputMaybe<Array<UsersChallengeUpsertWithWhereUniqueWithoutUserTwoInput>>;
};

export type UsersChallengeUpdateManyWithoutUserTwoRunNestedInput = {
  connect?: InputMaybe<Array<UsersChallengeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UsersChallengeCreateOrConnectWithoutUserTwoRunInput>>;
  create?: InputMaybe<Array<UsersChallengeCreateWithoutUserTwoRunInput>>;
  createMany?: InputMaybe<UsersChallengeCreateManyUserTwoRunInputEnvelope>;
  delete?: InputMaybe<Array<UsersChallengeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UsersChallengeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UsersChallengeWhereUniqueInput>>;
  set?: InputMaybe<Array<UsersChallengeWhereUniqueInput>>;
  update?: InputMaybe<Array<UsersChallengeUpdateWithWhereUniqueWithoutUserTwoRunInput>>;
  updateMany?: InputMaybe<Array<UsersChallengeUpdateManyWithWhereWithoutUserTwoRunInput>>;
  upsert?: InputMaybe<Array<UsersChallengeUpsertWithWhereUniqueWithoutUserTwoRunInput>>;
};

export type UsersChallengeUpdateWithWhereUniqueWithoutMatchInput = {
  data: UsersChallengeUpdateWithoutMatchInput;
  where: UsersChallengeWhereUniqueInput;
};

export type UsersChallengeUpdateWithWhereUniqueWithoutUserOneInput = {
  data: UsersChallengeUpdateWithoutUserOneInput;
  where: UsersChallengeWhereUniqueInput;
};

export type UsersChallengeUpdateWithWhereUniqueWithoutUserOneRunInput = {
  data: UsersChallengeUpdateWithoutUserOneRunInput;
  where: UsersChallengeWhereUniqueInput;
};

export type UsersChallengeUpdateWithWhereUniqueWithoutUserTwoInput = {
  data: UsersChallengeUpdateWithoutUserTwoInput;
  where: UsersChallengeWhereUniqueInput;
};

export type UsersChallengeUpdateWithWhereUniqueWithoutUserTwoRunInput = {
  data: UsersChallengeUpdateWithoutUserTwoRunInput;
  where: UsersChallengeWhereUniqueInput;
};

export type UsersChallengeUpdateWithoutMatchInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<EnumUsersChallengeStateFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userOne?: InputMaybe<UserUpdateOneRequiredWithoutChallenges_OneNestedInput>;
  userOneRun?: InputMaybe<TypingRunUpdateOneWithoutChallanges_OneNestedInput>;
  userTwo?: InputMaybe<UserUpdateOneRequiredWithoutChallenges_TwoNestedInput>;
  userTwoRun?: InputMaybe<TypingRunUpdateOneWithoutChallenges_TwoNestedInput>;
};

export type UsersChallengeUpdateWithoutUserOneInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  match?: InputMaybe<UsersChallengeMatchUpdateOneRequiredWithoutChallengesNestedInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<EnumUsersChallengeStateFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userOneRun?: InputMaybe<TypingRunUpdateOneWithoutChallanges_OneNestedInput>;
  userTwo?: InputMaybe<UserUpdateOneRequiredWithoutChallenges_TwoNestedInput>;
  userTwoRun?: InputMaybe<TypingRunUpdateOneWithoutChallenges_TwoNestedInput>;
};

export type UsersChallengeUpdateWithoutUserOneRunInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  match?: InputMaybe<UsersChallengeMatchUpdateOneRequiredWithoutChallengesNestedInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<EnumUsersChallengeStateFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userOne?: InputMaybe<UserUpdateOneRequiredWithoutChallenges_OneNestedInput>;
  userTwo?: InputMaybe<UserUpdateOneRequiredWithoutChallenges_TwoNestedInput>;
  userTwoRun?: InputMaybe<TypingRunUpdateOneWithoutChallenges_TwoNestedInput>;
};

export type UsersChallengeUpdateWithoutUserTwoInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  match?: InputMaybe<UsersChallengeMatchUpdateOneRequiredWithoutChallengesNestedInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<EnumUsersChallengeStateFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userOne?: InputMaybe<UserUpdateOneRequiredWithoutChallenges_OneNestedInput>;
  userOneRun?: InputMaybe<TypingRunUpdateOneWithoutChallanges_OneNestedInput>;
  userTwoRun?: InputMaybe<TypingRunUpdateOneWithoutChallenges_TwoNestedInput>;
};

export type UsersChallengeUpdateWithoutUserTwoRunInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  match?: InputMaybe<UsersChallengeMatchUpdateOneRequiredWithoutChallengesNestedInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<EnumUsersChallengeStateFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userOne?: InputMaybe<UserUpdateOneRequiredWithoutChallenges_OneNestedInput>;
  userOneRun?: InputMaybe<TypingRunUpdateOneWithoutChallanges_OneNestedInput>;
  userTwo?: InputMaybe<UserUpdateOneRequiredWithoutChallenges_TwoNestedInput>;
};

export type UsersChallengeUpsertWithWhereUniqueWithoutMatchInput = {
  create: UsersChallengeCreateWithoutMatchInput;
  update: UsersChallengeUpdateWithoutMatchInput;
  where: UsersChallengeWhereUniqueInput;
};

export type UsersChallengeUpsertWithWhereUniqueWithoutUserOneInput = {
  create: UsersChallengeCreateWithoutUserOneInput;
  update: UsersChallengeUpdateWithoutUserOneInput;
  where: UsersChallengeWhereUniqueInput;
};

export type UsersChallengeUpsertWithWhereUniqueWithoutUserOneRunInput = {
  create: UsersChallengeCreateWithoutUserOneRunInput;
  update: UsersChallengeUpdateWithoutUserOneRunInput;
  where: UsersChallengeWhereUniqueInput;
};

export type UsersChallengeUpsertWithWhereUniqueWithoutUserTwoInput = {
  create: UsersChallengeCreateWithoutUserTwoInput;
  update: UsersChallengeUpdateWithoutUserTwoInput;
  where: UsersChallengeWhereUniqueInput;
};

export type UsersChallengeUpsertWithWhereUniqueWithoutUserTwoRunInput = {
  create: UsersChallengeCreateWithoutUserTwoRunInput;
  update: UsersChallengeUpdateWithoutUserTwoRunInput;
  where: UsersChallengeWhereUniqueInput;
};

export type UsersChallengeWhereInput = {
  AND?: InputMaybe<Array<UsersChallengeWhereInput>>;
  NOT?: InputMaybe<Array<UsersChallengeWhereInput>>;
  OR?: InputMaybe<Array<UsersChallengeWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<UuidFilter>;
  match?: InputMaybe<UsersChallengeMatchRelationFilter>;
  matchId?: InputMaybe<UuidFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  state?: InputMaybe<EnumUsersChallengeStateFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userOne?: InputMaybe<UserRelationFilter>;
  userOneId?: InputMaybe<StringFilter>;
  userOneRun?: InputMaybe<TypingRunNullableRelationFilter>;
  userOneRunId?: InputMaybe<UuidNullableFilter>;
  userTwo?: InputMaybe<UserRelationFilter>;
  userTwoId?: InputMaybe<StringFilter>;
  userTwoRun?: InputMaybe<TypingRunNullableRelationFilter>;
  userTwoRunId?: InputMaybe<UuidNullableFilter>;
};

export type UsersChallengeWhereUniqueInput = {
  AND?: InputMaybe<Array<UsersChallengeWhereInput>>;
  NOT?: InputMaybe<Array<UsersChallengeWhereInput>>;
  OR?: InputMaybe<Array<UsersChallengeWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  match?: InputMaybe<UsersChallengeMatchRelationFilter>;
  matchId?: InputMaybe<UuidFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  state?: InputMaybe<EnumUsersChallengeStateFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userOne?: InputMaybe<UserRelationFilter>;
  userOneId?: InputMaybe<StringFilter>;
  userOneRun?: InputMaybe<TypingRunNullableRelationFilter>;
  userOneRunId?: InputMaybe<UuidNullableFilter>;
  userTwo?: InputMaybe<UserRelationFilter>;
  userTwoId?: InputMaybe<StringFilter>;
  userTwoRun?: InputMaybe<TypingRunNullableRelationFilter>;
  userTwoRunId?: InputMaybe<UuidNullableFilter>;
};

export type UsersSearchInput = {
  limit?: Scalars['Int']['input'];
  search?: Scalars['String']['input'];
};

export type UuidFilter = {
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedUuidFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type UuidNullableFilter = {
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedUuidNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type UuidNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedUuidNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type UuidWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedUuidWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type VerificationToken = {
  __typename?: 'VerificationToken';
  expires: Scalars['DateTimeISO']['output'];
  identifier: Scalars['String']['output'];
  token: Scalars['String']['output'];
};

export type VerificationTokenCountAggregate = {
  __typename?: 'VerificationTokenCountAggregate';
  _all: Scalars['Int']['output'];
  expires: Scalars['Int']['output'];
  identifier: Scalars['Int']['output'];
  token: Scalars['Int']['output'];
};

export type VerificationTokenCountOrderByAggregateInput = {
  expires?: InputMaybe<SortOrder>;
  identifier?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export type VerificationTokenCreateInput = {
  expires: Scalars['DateTimeISO']['input'];
  identifier: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type VerificationTokenCreateManyInput = {
  expires: Scalars['DateTimeISO']['input'];
  identifier: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type VerificationTokenGroupBy = {
  __typename?: 'VerificationTokenGroupBy';
  _count?: Maybe<VerificationTokenCountAggregate>;
  _max?: Maybe<VerificationTokenMaxAggregate>;
  _min?: Maybe<VerificationTokenMinAggregate>;
  expires: Scalars['DateTimeISO']['output'];
  identifier: Scalars['String']['output'];
  token: Scalars['String']['output'];
};

export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
  identifier: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type VerificationTokenMaxAggregate = {
  __typename?: 'VerificationTokenMaxAggregate';
  expires?: Maybe<Scalars['DateTimeISO']['output']>;
  identifier?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

export type VerificationTokenMaxOrderByAggregateInput = {
  expires?: InputMaybe<SortOrder>;
  identifier?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export type VerificationTokenMinAggregate = {
  __typename?: 'VerificationTokenMinAggregate';
  expires?: Maybe<Scalars['DateTimeISO']['output']>;
  identifier?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

export type VerificationTokenMinOrderByAggregateInput = {
  expires?: InputMaybe<SortOrder>;
  identifier?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export enum VerificationTokenOrderByRelevanceFieldEnum {
  Identifier = 'identifier',
  Token = 'token'
}

export type VerificationTokenOrderByRelevanceInput = {
  fields: Array<VerificationTokenOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type VerificationTokenOrderByWithAggregationInput = {
  _count?: InputMaybe<VerificationTokenCountOrderByAggregateInput>;
  _max?: InputMaybe<VerificationTokenMaxOrderByAggregateInput>;
  _min?: InputMaybe<VerificationTokenMinOrderByAggregateInput>;
  expires?: InputMaybe<SortOrder>;
  identifier?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export type VerificationTokenOrderByWithRelationInput = {
  _relevance?: InputMaybe<VerificationTokenOrderByRelevanceInput>;
  expires?: InputMaybe<SortOrder>;
  identifier?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export enum VerificationTokenScalarFieldEnum {
  Expires = 'expires',
  Identifier = 'identifier',
  Token = 'token'
}

export type VerificationTokenScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<VerificationTokenScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<VerificationTokenScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<VerificationTokenScalarWhereWithAggregatesInput>>;
  expires?: InputMaybe<DateTimeWithAggregatesFilter>;
  identifier?: InputMaybe<StringWithAggregatesFilter>;
  token?: InputMaybe<StringWithAggregatesFilter>;
};

export type VerificationTokenUpdateInput = {
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  identifier?: InputMaybe<StringFieldUpdateOperationsInput>;
  token?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type VerificationTokenUpdateManyMutationInput = {
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  identifier?: InputMaybe<StringFieldUpdateOperationsInput>;
  token?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type VerificationTokenWhereInput = {
  AND?: InputMaybe<Array<VerificationTokenWhereInput>>;
  NOT?: InputMaybe<Array<VerificationTokenWhereInput>>;
  OR?: InputMaybe<Array<VerificationTokenWhereInput>>;
  expires?: InputMaybe<DateTimeFilter>;
  identifier?: InputMaybe<StringFilter>;
  token?: InputMaybe<StringFilter>;
};

export type VerificationTokenWhereUniqueInput = {
  AND?: InputMaybe<Array<VerificationTokenWhereInput>>;
  NOT?: InputMaybe<Array<VerificationTokenWhereInput>>;
  OR?: InputMaybe<Array<VerificationTokenWhereInput>>;
  expires?: InputMaybe<DateTimeFilter>;
  identifier?: InputMaybe<StringFilter>;
  identifier_token?: InputMaybe<VerificationTokenIdentifierTokenCompoundUniqueInput>;
  token?: InputMaybe<StringFilter>;
};

export type SignInMutationVariables = Exact<{
  signInModel: UserSignInInput;
}>;


export type SignInMutation = { __typename?: 'Mutation', signIn?: { __typename?: 'User', id: string, image?: string | null, metadata?: any | null, name?: string | null } | null };

export type UserQueryQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type UserQueryQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, email: string, image?: string | null, name?: string | null, metadata?: any | null } | null };

export type SignUpMutationVariables = Exact<{
  signUpModel: UserSignUpInput;
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUp: { __typename?: 'User', id: string, image?: string | null, metadata?: any | null, name?: string | null } };

export type UserFragmentFragment = { __typename?: 'User', id: string, image?: string | null, metadata?: any | null, name?: string | null, emailVerified?: any | null, email: string, tags: Array<{ __typename?: 'Tag', id: string, metadata?: any | null, name: string, createdAt: any }>, typingRuns: Array<{ __typename?: 'TypingRun', flags: number, createdAt: any, id: string, metadata?: any | null, mode: TypingRunMode, time?: number | null, typedLetters: any }>, experience?: { __typename?: 'UserExperience', points: number, metadata?: any | null, level: number, id: string } | null } & { ' $fragmentName'?: 'UserFragmentFragment' };

export type UserQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type UserQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, image?: string | null, metadata?: any | null, name?: string | null, emailVerified?: any | null, email: string, tags: Array<{ __typename?: 'Tag', id: string, metadata?: any | null, name: string, createdAt: any }>, typingRuns: Array<{ __typename?: 'TypingRun', flags: number, createdAt: any, id: string, metadata?: any | null, mode: TypingRunMode, time?: number | null, typedLetters: any }>, experience?: { __typename?: 'UserExperience', points: number, metadata?: any | null, level: number, id: string } | null } | null };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, image?: string | null, metadata?: any | null, name?: string | null, emailVerified?: any | null, email: string, tags: Array<{ __typename?: 'Tag', id: string, metadata?: any | null, name: string, createdAt: any }>, typingRuns: Array<{ __typename?: 'TypingRun', flags: number, createdAt: any, id: string, metadata?: any | null, mode: TypingRunMode, time?: number | null, typedLetters: any }>, experience?: { __typename?: 'UserExperience', points: number, metadata?: any | null, level: number, id: string } | null }> };

export type SignOutMutationVariables = Exact<{ [key: string]: never; }>;


export type SignOutMutation = { __typename?: 'Mutation', signOut: boolean };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, image?: string | null, metadata?: any | null, name?: string | null, emailVerified?: any | null, email: string, tags: Array<{ __typename?: 'Tag', id: string, metadata?: any | null, name: string, createdAt: any }>, typingRuns: Array<{ __typename?: 'TypingRun', flags: number, createdAt: any, id: string, metadata?: any | null, mode: TypingRunMode, time?: number | null, typedLetters: any }>, experience?: { __typename?: 'UserExperience', points: number, metadata?: any | null, level: number, id: string } | null } | null };


      export interface IntrospectionResultData {
        __schema: {
          types: {
            kind: string;
            name: string;
            possibleTypes: {
              name: string;
            }[];
          }[];
        };
      }

      const result: IntrospectionResultData = {
  "__schema": {
    "types": []
  }
};

      export default result;
    