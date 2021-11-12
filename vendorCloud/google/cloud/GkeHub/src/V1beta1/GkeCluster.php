<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/cloud/gkehub/v1beta1/membership.proto

namespace Google\Cloud\GkeHub\V1beta1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * GkeCluster contains information specific to GKE clusters.
 *
 * Generated from protobuf message <code>google.cloud.gkehub.v1beta1.GkeCluster</code>
 */
class GkeCluster extends \Google\Protobuf\Internal\Message
{
    /**
     * Immutable. Self-link of the GCP resource for the GKE cluster. For example:
     * > container.googleapis.com/projects/my-project/locations/us-west1-a/clusters/my-cluster
     * Zonal clusters are also supported.
     *
     * Generated from protobuf field <code>string resource_link = 1 [(.google.api.field_behavior) = IMMUTABLE];</code>
     */
    private $resource_link = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $resource_link
     *           Immutable. Self-link of the GCP resource for the GKE cluster. For example:
     *           > container.googleapis.com/projects/my-project/locations/us-west1-a/clusters/my-cluster
     *           Zonal clusters are also supported.
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Google\Cloud\Gkehub\V1Beta1\Membership::initOnce();
        parent::__construct($data);
    }

    /**
     * Immutable. Self-link of the GCP resource for the GKE cluster. For example:
     * > container.googleapis.com/projects/my-project/locations/us-west1-a/clusters/my-cluster
     * Zonal clusters are also supported.
     *
     * Generated from protobuf field <code>string resource_link = 1 [(.google.api.field_behavior) = IMMUTABLE];</code>
     * @return string
     */
    public function getResourceLink()
    {
        return $this->resource_link;
    }

    /**
     * Immutable. Self-link of the GCP resource for the GKE cluster. For example:
     * > container.googleapis.com/projects/my-project/locations/us-west1-a/clusters/my-cluster
     * Zonal clusters are also supported.
     *
     * Generated from protobuf field <code>string resource_link = 1 [(.google.api.field_behavior) = IMMUTABLE];</code>
     * @param string $var
     * @return $this
     */
    public function setResourceLink($var)
    {
        GPBUtil::checkString($var, True);
        $this->resource_link = $var;

        return $this;
    }

}

