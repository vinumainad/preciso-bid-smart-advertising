<?php
/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*
 * GENERATED CODE WARNING
 * Generated by gapic-generator-php from the file
 * https://github.com/google/googleapis/blob/master/google/cloud/privatecatalog/v1beta1/private_catalog.proto
 * Updates to the above are reflected here through a refresh process.
 *
 * @experimental
 */

namespace Google\Cloud\PrivateCatalog\V1beta1\Gapic;

use Google\ApiCore\ApiException;
use Google\ApiCore\CredentialsWrapper;

use Google\ApiCore\GapicClientTrait;
use Google\ApiCore\RequestParamsHeaderDescriptor;
use Google\ApiCore\RetrySettings;
use Google\ApiCore\Transport\TransportInterface;
use Google\ApiCore\ValidationException;
use Google\Auth\FetchAuthTokenInterface;
use Google\Cloud\PrivateCatalog\V1beta1\SearchCatalogsRequest;
use Google\Cloud\PrivateCatalog\V1beta1\SearchCatalogsResponse;
use Google\Cloud\PrivateCatalog\V1beta1\SearchProductsRequest;
use Google\Cloud\PrivateCatalog\V1beta1\SearchProductsResponse;
use Google\Cloud\PrivateCatalog\V1beta1\SearchVersionsRequest;
use Google\Cloud\PrivateCatalog\V1beta1\SearchVersionsResponse;

/**
 * Service Description: `PrivateCatalog` allows catalog consumers to retrieve `Catalog`, `Product`
 * and `Version` resources under a target resource context.
 *
 * `Catalog` is computed based on the [Association][]s linked to the target
 * resource and its ancestors. Each association's
 * [google.cloud.privatecatalogproducer.v1beta.Catalog][] is transformed into a
 * `Catalog`. If multiple associations have the same parent
 * [google.cloud.privatecatalogproducer.v1beta.Catalog][], they are
 * de-duplicated into one `Catalog`. Users must have
 * `cloudprivatecatalog.catalogTargets.get` IAM permission on the resource
 * context in order to access catalogs. `Catalog` contains the resource name and
 * a subset of data of the original
 * [google.cloud.privatecatalogproducer.v1beta.Catalog][].
 *
 * `Product` is child resource of the catalog. A `Product` contains the resource
 * name and a subset of the data of the original
 * [google.cloud.privatecatalogproducer.v1beta.Product][].
 *
 * `Version` is child resource of the product. A `Version` contains the resource
 * name and a subset of the data of the original
 * [google.cloud.privatecatalogproducer.v1beta.Version][].
 *
 * This class provides the ability to make remote calls to the backing service through method
 * calls that map to API methods. Sample code to get started:
 *
 * ```
 * $privateCatalogClient = new PrivateCatalogClient();
 * try {
 *     $resource = 'resource';
 *     // Iterate over pages of elements
 *     $pagedResponse = $privateCatalogClient->searchCatalogs($resource);
 *     foreach ($pagedResponse->iteratePages() as $page) {
 *         foreach ($page as $element) {
 *             // doSomethingWith($element);
 *         }
 *     }
 *     // Alternatively:
 *     // Iterate through all elements
 *     $pagedResponse = $privateCatalogClient->searchCatalogs($resource);
 *     foreach ($pagedResponse->iterateAllElements() as $element) {
 *         // doSomethingWith($element);
 *     }
 * } finally {
 *     $privateCatalogClient->close();
 * }
 * ```
 *
 * @experimental
 */
class PrivateCatalogGapicClient
{
    use GapicClientTrait;

    /**
     * The name of the service.
     */
    const SERVICE_NAME = 'google.cloud.privatecatalog.v1beta1.PrivateCatalog';

    /**
     * The default address of the service.
     */
    const SERVICE_ADDRESS = 'cloudprivatecatalog.googleapis.com';

    /**
     * The default port of the service.
     */
    const DEFAULT_SERVICE_PORT = 443;

    /**
     * The name of the code generator, to be included in the agent header.
     */
    const CODEGEN_NAME = 'gapic';

    /**
     * The default scopes required by the service.
     */
    public static $serviceScopes = [
        'https://www.googleapis.com/auth/cloud-platform',
    ];

    private static function getClientDefaults()
    {
        return [
            'serviceName' => self::SERVICE_NAME,
            'apiEndpoint' => self::SERVICE_ADDRESS . ':' . self::DEFAULT_SERVICE_PORT,
            'clientConfig' => __DIR__ . '/../resources/private_catalog_client_config.json',
            'descriptorsConfigPath' => __DIR__ . '/../resources/private_catalog_descriptor_config.php',
            'gcpApiConfigPath' => __DIR__ . '/../resources/private_catalog_grpc_config.json',
            'credentialsConfig' => [
                'defaultScopes' => self::$serviceScopes,
            ],
            'transportConfig' => [
                'rest' => [
                    'restClientConfigPath' => __DIR__ . '/../resources/private_catalog_rest_client_config.php',
                ],
            ],
        ];
    }

    /**
     * Constructor.
     *
     * @param array $options {
     *     Optional. Options for configuring the service API wrapper.
     *
     *     @type string $serviceAddress
     *           **Deprecated**. This option will be removed in a future major release. Please
     *           utilize the `$apiEndpoint` option instead.
     *     @type string $apiEndpoint
     *           The address of the API remote host. May optionally include the port, formatted
     *           as "<uri>:<port>". Default 'cloudprivatecatalog.googleapis.com:443'.
     *     @type string|array|FetchAuthTokenInterface|CredentialsWrapper $credentials
     *           The credentials to be used by the client to authorize API calls. This option
     *           accepts either a path to a credentials file, or a decoded credentials file as a
     *           PHP array.
     *           *Advanced usage*: In addition, this option can also accept a pre-constructed
     *           {@see \Google\Auth\FetchAuthTokenInterface} object or
     *           {@see \Google\ApiCore\CredentialsWrapper} object. Note that when one of these
     *           objects are provided, any settings in $credentialsConfig will be ignored.
     *     @type array $credentialsConfig
     *           Options used to configure credentials, including auth token caching, for the
     *           client. For a full list of supporting configuration options, see
     *           {@see \Google\ApiCore\CredentialsWrapper::build()} .
     *     @type bool $disableRetries
     *           Determines whether or not retries defined by the client configuration should be
     *           disabled. Defaults to `false`.
     *     @type string|array $clientConfig
     *           Client method configuration, including retry settings. This option can be either
     *           a path to a JSON file, or a PHP array containing the decoded JSON data. By
     *           default this settings points to the default client config file, which is
     *           provided in the resources folder.
     *     @type string|TransportInterface $transport
     *           The transport used for executing network requests. May be either the string
     *           `rest` or `grpc`. Defaults to `grpc` if gRPC support is detected on the system.
     *           *Advanced usage*: Additionally, it is possible to pass in an already
     *           instantiated {@see \Google\ApiCore\Transport\TransportInterface} object. Note
     *           that when this object is provided, any settings in $transportConfig, and any
     *           $serviceAddress setting, will be ignored.
     *     @type array $transportConfig
     *           Configuration options that will be used to construct the transport. Options for
     *           each supported transport type should be passed in a key for that transport. For
     *           example:
     *           $transportConfig = [
     *               'grpc' => [...],
     *               'rest' => [...],
     *           ];
     *           See the {@see \Google\ApiCore\Transport\GrpcTransport::build()} and
     *           {@see \Google\ApiCore\Transport\RestTransport::build()} methods for the
     *           supported options.
     * }
     *
     * @throws ValidationException
     *
     * @experimental
     */
    public function __construct(array $options = [])
    {
        $clientOptions = $this->buildClientOptions($options);
        $this->setClientOptions($clientOptions);
    }

    /**
     * Search [Catalog][google.cloud.privatecatalog.v1beta1.Catalog] resources that consumers have access to, within the
     * scope of the consumer cloud resource hierarchy context.
     *
     * Sample code:
     * ```
     * $privateCatalogClient = new PrivateCatalogClient();
     * try {
     *     $resource = 'resource';
     *     // Iterate over pages of elements
     *     $pagedResponse = $privateCatalogClient->searchCatalogs($resource);
     *     foreach ($pagedResponse->iteratePages() as $page) {
     *         foreach ($page as $element) {
     *             // doSomethingWith($element);
     *         }
     *     }
     *     // Alternatively:
     *     // Iterate through all elements
     *     $pagedResponse = $privateCatalogClient->searchCatalogs($resource);
     *     foreach ($pagedResponse->iterateAllElements() as $element) {
     *         // doSomethingWith($element);
     *     }
     * } finally {
     *     $privateCatalogClient->close();
     * }
     * ```
     *
     * @param string $resource     Required. The name of the resource context. It can be in following formats:
     *
     *                             * `projects/{project}`
     *                             * `folders/{folder}`
     *                             * `organizations/{organization}`
     * @param array  $optionalArgs {
     *     Optional.
     *
     *     @type string $query
     *           The query to filter the catalogs. The supported queries are:
     *
     *           * Get a single catalog: `name=catalogs/{catalog}`
     *     @type int $pageSize
     *           The maximum number of resources contained in the underlying API
     *           response. The API may return fewer values in a page, even if
     *           there are additional values to be retrieved.
     *     @type string $pageToken
     *           A page token is used to specify a page of values to be returned.
     *           If no page token is specified (the default), the first page
     *           of values will be returned. Any page token used here must have
     *           been generated by a previous call to the API.
     *     @type RetrySettings|array $retrySettings
     *           Retry settings to use for this call. Can be a
     *           {@see Google\ApiCore\RetrySettings} object, or an associative array of retry
     *           settings parameters. See the documentation on
     *           {@see Google\ApiCore\RetrySettings} for example usage.
     * }
     *
     * @return \Google\ApiCore\PagedListResponse
     *
     * @throws ApiException if the remote call fails
     *
     * @experimental
     */
    public function searchCatalogs($resource, array $optionalArgs = [])
    {
        $request = new SearchCatalogsRequest();
        $requestParamHeaders = [];
        $request->setResource($resource);
        $requestParamHeaders['resource'] = $resource;
        if (isset($optionalArgs['query'])) {
            $request->setQuery($optionalArgs['query']);
        }

        if (isset($optionalArgs['pageSize'])) {
            $request->setPageSize($optionalArgs['pageSize']);
        }

        if (isset($optionalArgs['pageToken'])) {
            $request->setPageToken($optionalArgs['pageToken']);
        }

        $requestParams = new RequestParamsHeaderDescriptor($requestParamHeaders);
        $optionalArgs['headers'] = isset($optionalArgs['headers']) ? array_merge($requestParams->getHeader(), $optionalArgs['headers']) : $requestParams->getHeader();
        return $this->getPagedListResponse('SearchCatalogs', $optionalArgs, SearchCatalogsResponse::class, $request);
    }

    /**
     * Search [Product][google.cloud.privatecatalog.v1beta1.Product] resources that consumers have access to, within the
     * scope of the consumer cloud resource hierarchy context.
     *
     * Sample code:
     * ```
     * $privateCatalogClient = new PrivateCatalogClient();
     * try {
     *     $resource = 'resource';
     *     // Iterate over pages of elements
     *     $pagedResponse = $privateCatalogClient->searchProducts($resource);
     *     foreach ($pagedResponse->iteratePages() as $page) {
     *         foreach ($page as $element) {
     *             // doSomethingWith($element);
     *         }
     *     }
     *     // Alternatively:
     *     // Iterate through all elements
     *     $pagedResponse = $privateCatalogClient->searchProducts($resource);
     *     foreach ($pagedResponse->iterateAllElements() as $element) {
     *         // doSomethingWith($element);
     *     }
     * } finally {
     *     $privateCatalogClient->close();
     * }
     * ```
     *
     * @param string $resource     Required. The name of the resource context. See [SearchCatalogsRequest.resource][google.cloud.privatecatalog.v1beta1.SearchCatalogsRequest.resource]
     *                             for details.
     * @param array  $optionalArgs {
     *     Optional.
     *
     *     @type string $query
     *           The query to filter the products.
     *
     *           The supported queries are:
     *           * List products of all catalogs: empty
     *           * List products under a catalog: `parent=catalogs/{catalog}`
     *           * Get a product by name:
     *           `name=catalogs/{catalog}/products/{product}`
     *     @type int $pageSize
     *           The maximum number of resources contained in the underlying API
     *           response. The API may return fewer values in a page, even if
     *           there are additional values to be retrieved.
     *     @type string $pageToken
     *           A page token is used to specify a page of values to be returned.
     *           If no page token is specified (the default), the first page
     *           of values will be returned. Any page token used here must have
     *           been generated by a previous call to the API.
     *     @type RetrySettings|array $retrySettings
     *           Retry settings to use for this call. Can be a
     *           {@see Google\ApiCore\RetrySettings} object, or an associative array of retry
     *           settings parameters. See the documentation on
     *           {@see Google\ApiCore\RetrySettings} for example usage.
     * }
     *
     * @return \Google\ApiCore\PagedListResponse
     *
     * @throws ApiException if the remote call fails
     *
     * @experimental
     */
    public function searchProducts($resource, array $optionalArgs = [])
    {
        $request = new SearchProductsRequest();
        $requestParamHeaders = [];
        $request->setResource($resource);
        $requestParamHeaders['resource'] = $resource;
        if (isset($optionalArgs['query'])) {
            $request->setQuery($optionalArgs['query']);
        }

        if (isset($optionalArgs['pageSize'])) {
            $request->setPageSize($optionalArgs['pageSize']);
        }

        if (isset($optionalArgs['pageToken'])) {
            $request->setPageToken($optionalArgs['pageToken']);
        }

        $requestParams = new RequestParamsHeaderDescriptor($requestParamHeaders);
        $optionalArgs['headers'] = isset($optionalArgs['headers']) ? array_merge($requestParams->getHeader(), $optionalArgs['headers']) : $requestParams->getHeader();
        return $this->getPagedListResponse('SearchProducts', $optionalArgs, SearchProductsResponse::class, $request);
    }

    /**
     * Search [Version][google.cloud.privatecatalog.v1beta1.Version] resources that consumers have access to, within the
     * scope of the consumer cloud resource hierarchy context.
     *
     * Sample code:
     * ```
     * $privateCatalogClient = new PrivateCatalogClient();
     * try {
     *     $resource = 'resource';
     *     $query = 'query';
     *     // Iterate over pages of elements
     *     $pagedResponse = $privateCatalogClient->searchVersions($resource, $query);
     *     foreach ($pagedResponse->iteratePages() as $page) {
     *         foreach ($page as $element) {
     *             // doSomethingWith($element);
     *         }
     *     }
     *     // Alternatively:
     *     // Iterate through all elements
     *     $pagedResponse = $privateCatalogClient->searchVersions($resource, $query);
     *     foreach ($pagedResponse->iterateAllElements() as $element) {
     *         // doSomethingWith($element);
     *     }
     * } finally {
     *     $privateCatalogClient->close();
     * }
     * ```
     *
     * @param string $resource     Required. The name of the resource context. See [SearchCatalogsRequest.resource][google.cloud.privatecatalog.v1beta1.SearchCatalogsRequest.resource]
     *                             for details.
     * @param string $query        Required. The query to filter the versions.
     *
     *                             The supported queries are:
     *                             * List versions under a product:
     *                             `parent=catalogs/{catalog}/products/{product}`
     *                             * Get a version by name:
     *                             `name=catalogs/{catalog}/products/{product}/versions/{version}`
     * @param array  $optionalArgs {
     *     Optional.
     *
     *     @type int $pageSize
     *           The maximum number of resources contained in the underlying API
     *           response. The API may return fewer values in a page, even if
     *           there are additional values to be retrieved.
     *     @type string $pageToken
     *           A page token is used to specify a page of values to be returned.
     *           If no page token is specified (the default), the first page
     *           of values will be returned. Any page token used here must have
     *           been generated by a previous call to the API.
     *     @type RetrySettings|array $retrySettings
     *           Retry settings to use for this call. Can be a
     *           {@see Google\ApiCore\RetrySettings} object, or an associative array of retry
     *           settings parameters. See the documentation on
     *           {@see Google\ApiCore\RetrySettings} for example usage.
     * }
     *
     * @return \Google\ApiCore\PagedListResponse
     *
     * @throws ApiException if the remote call fails
     *
     * @experimental
     */
    public function searchVersions($resource, $query, array $optionalArgs = [])
    {
        $request = new SearchVersionsRequest();
        $requestParamHeaders = [];
        $request->setResource($resource);
        $request->setQuery($query);
        $requestParamHeaders['resource'] = $resource;
        if (isset($optionalArgs['pageSize'])) {
            $request->setPageSize($optionalArgs['pageSize']);
        }

        if (isset($optionalArgs['pageToken'])) {
            $request->setPageToken($optionalArgs['pageToken']);
        }

        $requestParams = new RequestParamsHeaderDescriptor($requestParamHeaders);
        $optionalArgs['headers'] = isset($optionalArgs['headers']) ? array_merge($requestParams->getHeader(), $optionalArgs['headers']) : $requestParams->getHeader();
        return $this->getPagedListResponse('SearchVersions', $optionalArgs, SearchVersionsResponse::class, $request);
    }
}
