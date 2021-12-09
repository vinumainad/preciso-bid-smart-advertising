<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/cloud/compute/v1/compute.proto

namespace Google\Cloud\Compute\V1\InstanceWithNamedPorts;

use UnexpectedValueException;

/**
 * [Output Only] The status of the instance.
 *
 * Protobuf type <code>google.cloud.compute.v1.InstanceWithNamedPorts.Status</code>
 */
class Status
{
    /**
     * A value indicating that the enum field is not set.
     *
     * Generated from protobuf enum <code>UNDEFINED_STATUS = 0;</code>
     */
    const UNDEFINED_STATUS = 0;
    /**
     * Generated from protobuf enum <code>DEPROVISIONING = 428935662;</code>
     */
    const DEPROVISIONING = 428935662;
    /**
     * Generated from protobuf enum <code>PROVISIONING = 290896621;</code>
     */
    const PROVISIONING = 290896621;
    /**
     * Generated from protobuf enum <code>REPAIRING = 413483285;</code>
     */
    const REPAIRING = 413483285;
    /**
     * Generated from protobuf enum <code>RUNNING = 121282975;</code>
     */
    const RUNNING = 121282975;
    /**
     * Generated from protobuf enum <code>STAGING = 431072283;</code>
     */
    const STAGING = 431072283;
    /**
     * Generated from protobuf enum <code>STOPPED = 444276141;</code>
     */
    const STOPPED = 444276141;
    /**
     * Generated from protobuf enum <code>STOPPING = 350791796;</code>
     */
    const STOPPING = 350791796;
    /**
     * Generated from protobuf enum <code>SUSPENDED = 51223995;</code>
     */
    const SUSPENDED = 51223995;
    /**
     * Generated from protobuf enum <code>SUSPENDING = 514206246;</code>
     */
    const SUSPENDING = 514206246;
    /**
     * Generated from protobuf enum <code>TERMINATED = 250018339;</code>
     */
    const TERMINATED = 250018339;

    private static $valueToName = [
        self::UNDEFINED_STATUS => 'UNDEFINED_STATUS',
        self::DEPROVISIONING => 'DEPROVISIONING',
        self::PROVISIONING => 'PROVISIONING',
        self::REPAIRING => 'REPAIRING',
        self::RUNNING => 'RUNNING',
        self::STAGING => 'STAGING',
        self::STOPPED => 'STOPPED',
        self::STOPPING => 'STOPPING',
        self::SUSPENDED => 'SUSPENDED',
        self::SUSPENDING => 'SUSPENDING',
        self::TERMINATED => 'TERMINATED',
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


