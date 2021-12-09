<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/cloud/talent/v4/common.proto

namespace Google\Cloud\Talent\V4\CompensationInfo;

use UnexpectedValueException;

/**
 * Pay frequency.
 *
 * Protobuf type <code>google.cloud.talent.v4.CompensationInfo.CompensationUnit</code>
 */
class CompensationUnit
{
    /**
     * Default value.
     *
     * Generated from protobuf enum <code>COMPENSATION_UNIT_UNSPECIFIED = 0;</code>
     */
    const COMPENSATION_UNIT_UNSPECIFIED = 0;
    /**
     * Hourly.
     *
     * Generated from protobuf enum <code>HOURLY = 1;</code>
     */
    const HOURLY = 1;
    /**
     * Daily.
     *
     * Generated from protobuf enum <code>DAILY = 2;</code>
     */
    const DAILY = 2;
    /**
     * Weekly
     *
     * Generated from protobuf enum <code>WEEKLY = 3;</code>
     */
    const WEEKLY = 3;
    /**
     * Monthly.
     *
     * Generated from protobuf enum <code>MONTHLY = 4;</code>
     */
    const MONTHLY = 4;
    /**
     * Yearly.
     *
     * Generated from protobuf enum <code>YEARLY = 5;</code>
     */
    const YEARLY = 5;
    /**
     * One time.
     *
     * Generated from protobuf enum <code>ONE_TIME = 6;</code>
     */
    const ONE_TIME = 6;
    /**
     * Other compensation units.
     *
     * Generated from protobuf enum <code>OTHER_COMPENSATION_UNIT = 7;</code>
     */
    const OTHER_COMPENSATION_UNIT = 7;

    private static $valueToName = [
        self::COMPENSATION_UNIT_UNSPECIFIED => 'COMPENSATION_UNIT_UNSPECIFIED',
        self::HOURLY => 'HOURLY',
        self::DAILY => 'DAILY',
        self::WEEKLY => 'WEEKLY',
        self::MONTHLY => 'MONTHLY',
        self::YEARLY => 'YEARLY',
        self::ONE_TIME => 'ONE_TIME',
        self::OTHER_COMPENSATION_UNIT => 'OTHER_COMPENSATION_UNIT',
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

// Adding a class alias for backwards compatibility with the previous class name.
class_alias(CompensationUnit::class, \Google\Cloud\Talent\V4\CompensationInfo_CompensationUnit::class);

