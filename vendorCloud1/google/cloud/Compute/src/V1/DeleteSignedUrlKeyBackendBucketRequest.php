<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/cloud/compute/v1/compute.proto

namespace Google\Cloud\Compute\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * A request message for BackendBuckets.DeleteSignedUrlKey. See the method description for details.
 *
 * Generated from protobuf message <code>google.cloud.compute.v1.DeleteSignedUrlKeyBackendBucketRequest</code>
 */
class DeleteSignedUrlKeyBackendBucketRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Name of the BackendBucket resource to which the Signed URL Key should be added. The name should conform to RFC1035.
     *
     * Generated from protobuf field <code>string backend_bucket = 91714037 [(.google.api.field_behavior) = REQUIRED];</code>
     */
    private $backend_bucket = '';
    /**
     * The name of the Signed URL Key to delete.
     *
     * Generated from protobuf field <code>string key_name = 500938859 [(.google.api.field_behavior) = REQUIRED];</code>
     */
    private $key_name = '';
    /**
     * Project ID for this request.
     *
     * Generated from protobuf field <code>string project = 227560217 [(.google.api.field_behavior) = REQUIRED];</code>
     */
    private $project = '';
    /**
     * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
     * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments.
     * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *
     * Generated from protobuf field <code>string request_id = 37109963;</code>
     */
    private $request_id = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $backend_bucket
     *           Name of the BackendBucket resource to which the Signed URL Key should be added. The name should conform to RFC1035.
     *     @type string $key_name
     *           The name of the Signed URL Key to delete.
     *     @type string $project
     *           Project ID for this request.
     *     @type string $request_id
     *           An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
     *           For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments.
     *           The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Google\Cloud\Compute\V1\Compute::initOnce();
        parent::__construct($data);
    }

    /**
     * Name of the BackendBucket resource to which the Signed URL Key should be added. The name should conform to RFC1035.
     *
     * Generated from protobuf field <code>string backend_bucket = 91714037 [(.google.api.field_behavior) = REQUIRED];</code>
     * @return string
     */
    public function getBackendBucket()
    {
        return $this->backend_bucket;
    }

    /**
     * Name of the BackendBucket resource to which the Signed URL Key should be added. The name should conform to RFC1035.
     *
     * Generated from protobuf field <code>string backend_bucket = 91714037 [(.google.api.field_behavior) = REQUIRED];</code>
     * @param string $var
     * @return $this
     */
    public function setBackendBucket($var)
    {
        GPBUtil::checkString($var, True);
        $this->backend_bucket = $var;

        return $this;
    }

    /**
     * The name of the Signed URL Key to delete.
     *
     * Generated from protobuf field <code>string key_name = 500938859 [(.google.api.field_behavior) = REQUIRED];</code>
     * @return string
     */
    public function getKeyName()
    {
        return $this->key_name;
    }

    /**
     * The name of the Signed URL Key to delete.
     *
     * Generated from protobuf field <code>string key_name = 500938859 [(.google.api.field_behavior) = REQUIRED];</code>
     * @param string $var
     * @return $this
     */
    public function setKeyName($var)
    {
        GPBUtil::checkString($var, True);
        $this->key_name = $var;

        return $this;
    }

    /**
     * Project ID for this request.
     *
     * Generated from protobuf field <code>string project = 227560217 [(.google.api.field_behavior) = REQUIRED];</code>
     * @return string
     */
    public function getProject()
    {
        return $this->project;
    }

    /**
     * Project ID for this request.
     *
     * Generated from protobuf field <code>string project = 227560217 [(.google.api.field_behavior) = REQUIRED];</code>
     * @param string $var
     * @return $this
     */
    public function setProject($var)
    {
        GPBUtil::checkString($var, True);
        $this->project = $var;

        return $this;
    }

    /**
     * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
     * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments.
     * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *
     * Generated from protobuf field <code>string request_id = 37109963;</code>
     * @return string
     */
    public function getRequestId()
    {
        return isset($this->request_id) ? $this->request_id : '';
    }

    public function hasRequestId()
    {
        return isset($this->request_id);
    }

    public function clearRequestId()
    {
        unset($this->request_id);
    }

    /**
     * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.
     * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments.
     * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *
     * Generated from protobuf field <code>string request_id = 37109963;</code>
     * @param string $var
     * @return $this
     */
    public function setRequestId($var)
    {
        GPBUtil::checkString($var, True);
        $this->request_id = $var;

        return $this;
    }

}

