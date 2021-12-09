<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/cloud/compute/v1/compute.proto

namespace Google\Cloud\Compute\V1\VpnGatewayStatusHighAvailabilityRequirementState;

use UnexpectedValueException;

/**
 * Indicates the high availability requirement state for the VPN connection. Valid values are CONNECTION_REDUNDANCY_MET, CONNECTION_REDUNDANCY_NOT_MET.
 *
 * Protobuf type <code>google.cloud.compute.v1.VpnGatewayStatusHighAvailabilityRequirementState.State</code>
 */
class State
{
    /**
     * A value indicating that the enum field is not set.
     *
     * Generated from protobuf enum <code>UNDEFINED_STATE = 0;</code>
     */
    const UNDEFINED_STATE = 0;
    /**
     * Generated from protobuf enum <code>CONNECTION_REDUNDANCY_MET = 505242907;</code>
     */
    const CONNECTION_REDUNDANCY_MET = 505242907;
    /**
     * Generated from protobuf enum <code>CONNECTION_REDUNDANCY_NOT_MET = 511863311;</code>
     */
    const CONNECTION_REDUNDANCY_NOT_MET = 511863311;

    private static $valueToName = [
        self::UNDEFINED_STATE => 'UNDEFINED_STATE',
        self::CONNECTION_REDUNDANCY_MET => 'CONNECTION_REDUNDANCY_MET',
        self::CONNECTION_REDUNDANCY_NOT_MET => 'CONNECTION_REDUNDANCY_NOT_MET',
    ];

    public static function name($value)
    {
        if (!isset(self::$valueToName[$value])) {
            throw new UnexpectedValueException(sprintf(
                    'Enum %s has no name defined for value %s', __CLASS__, $value));
        }
        return self::$valueToName[$value];
    }


    public static function value($name)
    {
        $const = __CLASS__ . '::' . strtoupper($name);
        if (!defined($const)) {
            throw new UnexpectedValueException(sprintf(
                    'Enum %s has no value defined for name %s', __CLASS__, $name));
        }
        return constant($const);
    }
}


