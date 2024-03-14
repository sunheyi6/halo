/* tslint:disable */
/* eslint-disable */
/**
 * Halo Next API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { Configuration } from "../configuration";
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from "axios";
import globalAxios from "axios";
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setApiKeyToObject,
  setBasicAuthToObject,
  setBearerAuthToObject,
  setOAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction,
} from "../common";
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  RequestArgs,
  BaseAPI,
  RequiredError,
} from "../base";
// @ts-ignore
import { Comment } from "../models";
// @ts-ignore
import { CommentRequest } from "../models";
// @ts-ignore
import { ListedCommentList } from "../models";
// @ts-ignore
import { Reply } from "../models";
// @ts-ignore
import { ReplyRequest } from "../models";
/**
 * ApiConsoleHaloRunV1alpha1CommentApi - axios parameter creator
 * @export
 */
export const ApiConsoleHaloRunV1alpha1CommentApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Create a comment.
     * @param {CommentRequest} commentRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createComment: async (
      commentRequest: CommentRequest,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'commentRequest' is not null or undefined
      assertParamExists("createComment", "commentRequest", commentRequest);
      const localVarPath = `/apis/api.console.halo.run/v1alpha1/comments`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "POST",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication BasicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration);

      // authentication BearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        commentRequest,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Create a reply.
     * @param {string} name
     * @param {ReplyRequest} replyRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createReply: async (
      name: string,
      replyRequest: ReplyRequest,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'name' is not null or undefined
      assertParamExists("createReply", "name", name);
      // verify required parameter 'replyRequest' is not null or undefined
      assertParamExists("createReply", "replyRequest", replyRequest);
      const localVarPath =
        `/apis/api.console.halo.run/v1alpha1/comments/{name}/reply`.replace(
          `{${"name"}}`,
          encodeURIComponent(String(name))
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "POST",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication BasicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration);

      // authentication BearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        replyRequest,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * List comments.
     * @param {Array<string>} [fieldSelector] Field selector for filtering.
     * @param {string} [keyword] Comments filtered by keyword.
     * @param {Array<string>} [labelSelector] Label selector for filtering.
     * @param {string} [ownerKind] Commenter kind.
     * @param {string} [ownerName] Commenter name.
     * @param {number} [page] The page number. Zero indicates no page.
     * @param {number} [size] Size of one page. Zero indicates no limit.
     * @param {Array<string>} [sort] Sort property and direction of the list result. Supported fields: metadata.creationTimestamp,status.replyCount,status.lastReplyTime
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listComments: async (
      fieldSelector?: Array<string>,
      keyword?: string,
      labelSelector?: Array<string>,
      ownerKind?: string,
      ownerName?: string,
      page?: number,
      size?: number,
      sort?: Array<string>,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/apis/api.console.halo.run/v1alpha1/comments`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication BasicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration);

      // authentication BearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      if (fieldSelector) {
        localVarQueryParameter["fieldSelector"] = fieldSelector;
      }

      if (keyword !== undefined) {
        localVarQueryParameter["keyword"] = keyword;
      }

      if (labelSelector) {
        localVarQueryParameter["labelSelector"] = labelSelector;
      }

      if (ownerKind !== undefined) {
        localVarQueryParameter["ownerKind"] = ownerKind;
      }

      if (ownerName !== undefined) {
        localVarQueryParameter["ownerName"] = ownerName;
      }

      if (page !== undefined) {
        localVarQueryParameter["page"] = page;
      }

      if (size !== undefined) {
        localVarQueryParameter["size"] = size;
      }

      if (sort) {
        localVarQueryParameter["sort"] = Array.from(sort);
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * ApiConsoleHaloRunV1alpha1CommentApi - functional programming interface
 * @export
 */
export const ApiConsoleHaloRunV1alpha1CommentApiFp = function (
  configuration?: Configuration
) {
  const localVarAxiosParamCreator =
    ApiConsoleHaloRunV1alpha1CommentApiAxiosParamCreator(configuration);
  return {
    /**
     * Create a comment.
     * @param {CommentRequest} commentRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createComment(
      commentRequest: CommentRequest,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Comment>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createComment(
        commentRequest,
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Create a reply.
     * @param {string} name
     * @param {ReplyRequest} replyRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createReply(
      name: string,
      replyRequest: ReplyRequest,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Reply>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createReply(
        name,
        replyRequest,
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * List comments.
     * @param {Array<string>} [fieldSelector] Field selector for filtering.
     * @param {string} [keyword] Comments filtered by keyword.
     * @param {Array<string>} [labelSelector] Label selector for filtering.
     * @param {string} [ownerKind] Commenter kind.
     * @param {string} [ownerName] Commenter name.
     * @param {number} [page] The page number. Zero indicates no page.
     * @param {number} [size] Size of one page. Zero indicates no limit.
     * @param {Array<string>} [sort] Sort property and direction of the list result. Supported fields: metadata.creationTimestamp,status.replyCount,status.lastReplyTime
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listComments(
      fieldSelector?: Array<string>,
      keyword?: string,
      labelSelector?: Array<string>,
      ownerKind?: string,
      ownerName?: string,
      page?: number,
      size?: number,
      sort?: Array<string>,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ListedCommentList>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.listComments(
        fieldSelector,
        keyword,
        labelSelector,
        ownerKind,
        ownerName,
        page,
        size,
        sort,
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
  };
};

/**
 * ApiConsoleHaloRunV1alpha1CommentApi - factory interface
 * @export
 */
export const ApiConsoleHaloRunV1alpha1CommentApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = ApiConsoleHaloRunV1alpha1CommentApiFp(configuration);
  return {
    /**
     * Create a comment.
     * @param {ApiConsoleHaloRunV1alpha1CommentApiCreateCommentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createComment(
      requestParameters: ApiConsoleHaloRunV1alpha1CommentApiCreateCommentRequest,
      options?: AxiosRequestConfig
    ): AxiosPromise<Comment> {
      return localVarFp
        .createComment(requestParameters.commentRequest, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Create a reply.
     * @param {ApiConsoleHaloRunV1alpha1CommentApiCreateReplyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createReply(
      requestParameters: ApiConsoleHaloRunV1alpha1CommentApiCreateReplyRequest,
      options?: AxiosRequestConfig
    ): AxiosPromise<Reply> {
      return localVarFp
        .createReply(
          requestParameters.name,
          requestParameters.replyRequest,
          options
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * List comments.
     * @param {ApiConsoleHaloRunV1alpha1CommentApiListCommentsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listComments(
      requestParameters: ApiConsoleHaloRunV1alpha1CommentApiListCommentsRequest = {},
      options?: AxiosRequestConfig
    ): AxiosPromise<ListedCommentList> {
      return localVarFp
        .listComments(
          requestParameters.fieldSelector,
          requestParameters.keyword,
          requestParameters.labelSelector,
          requestParameters.ownerKind,
          requestParameters.ownerName,
          requestParameters.page,
          requestParameters.size,
          requestParameters.sort,
          options
        )
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * Request parameters for createComment operation in ApiConsoleHaloRunV1alpha1CommentApi.
 * @export
 * @interface ApiConsoleHaloRunV1alpha1CommentApiCreateCommentRequest
 */
export interface ApiConsoleHaloRunV1alpha1CommentApiCreateCommentRequest {
  /**
   *
   * @type {CommentRequest}
   * @memberof ApiConsoleHaloRunV1alpha1CommentApiCreateComment
   */
  readonly commentRequest: CommentRequest;
}

/**
 * Request parameters for createReply operation in ApiConsoleHaloRunV1alpha1CommentApi.
 * @export
 * @interface ApiConsoleHaloRunV1alpha1CommentApiCreateReplyRequest
 */
export interface ApiConsoleHaloRunV1alpha1CommentApiCreateReplyRequest {
  /**
   *
   * @type {string}
   * @memberof ApiConsoleHaloRunV1alpha1CommentApiCreateReply
   */
  readonly name: string;

  /**
   *
   * @type {ReplyRequest}
   * @memberof ApiConsoleHaloRunV1alpha1CommentApiCreateReply
   */
  readonly replyRequest: ReplyRequest;
}

/**
 * Request parameters for listComments operation in ApiConsoleHaloRunV1alpha1CommentApi.
 * @export
 * @interface ApiConsoleHaloRunV1alpha1CommentApiListCommentsRequest
 */
export interface ApiConsoleHaloRunV1alpha1CommentApiListCommentsRequest {
  /**
   * Field selector for filtering.
   * @type {Array<string>}
   * @memberof ApiConsoleHaloRunV1alpha1CommentApiListComments
   */
  readonly fieldSelector?: Array<string>;

  /**
   * Comments filtered by keyword.
   * @type {string}
   * @memberof ApiConsoleHaloRunV1alpha1CommentApiListComments
   */
  readonly keyword?: string;

  /**
   * Label selector for filtering.
   * @type {Array<string>}
   * @memberof ApiConsoleHaloRunV1alpha1CommentApiListComments
   */
  readonly labelSelector?: Array<string>;

  /**
   * Commenter kind.
   * @type {string}
   * @memberof ApiConsoleHaloRunV1alpha1CommentApiListComments
   */
  readonly ownerKind?: string;

  /**
   * Commenter name.
   * @type {string}
   * @memberof ApiConsoleHaloRunV1alpha1CommentApiListComments
   */
  readonly ownerName?: string;

  /**
   * The page number. Zero indicates no page.
   * @type {number}
   * @memberof ApiConsoleHaloRunV1alpha1CommentApiListComments
   */
  readonly page?: number;

  /**
   * Size of one page. Zero indicates no limit.
   * @type {number}
   * @memberof ApiConsoleHaloRunV1alpha1CommentApiListComments
   */
  readonly size?: number;

  /**
   * Sort property and direction of the list result. Supported fields: metadata.creationTimestamp,status.replyCount,status.lastReplyTime
   * @type {Array<string>}
   * @memberof ApiConsoleHaloRunV1alpha1CommentApiListComments
   */
  readonly sort?: Array<string>;
}

/**
 * ApiConsoleHaloRunV1alpha1CommentApi - object-oriented interface
 * @export
 * @class ApiConsoleHaloRunV1alpha1CommentApi
 * @extends {BaseAPI}
 */
export class ApiConsoleHaloRunV1alpha1CommentApi extends BaseAPI {
  /**
   * Create a comment.
   * @param {ApiConsoleHaloRunV1alpha1CommentApiCreateCommentRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ApiConsoleHaloRunV1alpha1CommentApi
   */
  public createComment(
    requestParameters: ApiConsoleHaloRunV1alpha1CommentApiCreateCommentRequest,
    options?: AxiosRequestConfig
  ) {
    return ApiConsoleHaloRunV1alpha1CommentApiFp(this.configuration)
      .createComment(requestParameters.commentRequest, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Create a reply.
   * @param {ApiConsoleHaloRunV1alpha1CommentApiCreateReplyRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ApiConsoleHaloRunV1alpha1CommentApi
   */
  public createReply(
    requestParameters: ApiConsoleHaloRunV1alpha1CommentApiCreateReplyRequest,
    options?: AxiosRequestConfig
  ) {
    return ApiConsoleHaloRunV1alpha1CommentApiFp(this.configuration)
      .createReply(
        requestParameters.name,
        requestParameters.replyRequest,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * List comments.
   * @param {ApiConsoleHaloRunV1alpha1CommentApiListCommentsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ApiConsoleHaloRunV1alpha1CommentApi
   */
  public listComments(
    requestParameters: ApiConsoleHaloRunV1alpha1CommentApiListCommentsRequest = {},
    options?: AxiosRequestConfig
  ) {
    return ApiConsoleHaloRunV1alpha1CommentApiFp(this.configuration)
      .listComments(
        requestParameters.fieldSelector,
        requestParameters.keyword,
        requestParameters.labelSelector,
        requestParameters.ownerKind,
        requestParameters.ownerName,
        requestParameters.page,
        requestParameters.size,
        requestParameters.sort,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }
}