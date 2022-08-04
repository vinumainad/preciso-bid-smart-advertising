<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/cloud/compute/v1/compute.proto

namespace Google\Cloud\Compute\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * A full or valid partial URL to a health check service. For example, the following are valid URLs:
 * - https://www.googleapis.com/compute/beta/projects/project-id/regions/us-west1/healthCheckServices/health-check-service
 * - projects/project-id/regions/us-west1/healthCheckServices/health-check-service
 * - regions/us-west1/healthCheckServices/health-check-service
 *
 * Generated from protobuf message <code>google.cloud.compute.v1.HealthCheckServiceReference</code>
 */
class HealthCheckServiceReference extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string health_check_service = 408374747;</code>
     */
    private $health_check_service = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $health_check_service
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Google\Cloud\Compute\V1\Compute::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string health_check_service = 408374747;</code>
     * @return string
     */
    public function getHealthCheckService()
    {
        return isset($this->health_check_service) ? $this->health_check_service : '';
    }

    public function hasHealthCheckService()
    {
        return isset($this->health_check_service);
    }

    public function clearHealthCheckService()
    {
        unset($this->health_check_service);
    }

    /**
     * Generated from protobuf field <code>string health_check_service = 408374747;</code>
     * @param string $var
     * @return $this
     */
    public function setHealthCheckService($var)
    {
        GPBUtil::checkString($var, True);
        $this->health_check_service = $var;

        return $this;
    }

}

