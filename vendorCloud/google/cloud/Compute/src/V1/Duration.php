<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/cloud/compute/v1/compute.proto

namespace Google\Cloud\Compute\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * A Duration represents a fixed-length span of time represented as a count of seconds and fractions of seconds at nanosecond resolution. It is independent of any calendar and concepts like "day" or "month". Range is approximately 10,000 years.
 *
 * Generated from protobuf message <code>google.cloud.compute.v1.Duration</code>
 */
class Duration extends \Google\Protobuf\Internal\Message
{
    /**
     * Span of time that's a fraction of a second at nanosecond resolution. Durations less than one second are represented with a 0 `seconds` field and a positive `nanos` field. Must be from 0 to 999,999,999 inclusive.
     *
     * Generated from protobuf field <code>int32 nanos = 104586303;</code>
     */
    private $nanos = null;
    /**
     * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. Note: these bounds are computed from: 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years
     *
     * Generated from protobuf field <code>string seconds = 359484031;</code>
     */
    private $seconds = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type int $nanos
     *           Span of time that's a fraction of a second at nanosecond resolution. Durations less than one second are represented with a 0 `seconds` field and a positive `nanos` field. Must be from 0 to 999,999,999 inclusive.
     *     @type string $seconds
     *           Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. Note: these bounds are computed from: 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Google\Cloud\Compute\V1\Compute::initOnce();
        parent::__construct($data);
    }

    /**
     * Span of time that's a fraction of a second at nanosecond resolution. Durations less than one second are represented with a 0 `seconds` field and a positive `nanos` field. Must be from 0 to 999,999,999 inclusive.
     *
     * Generated from protobuf field <code>int32 nanos = 104586303;</code>
     * @return int
     */
    public function getNanos()
    {
        return isset($this->nanos) ? $this->nanos : 0;
    }

    public function hasNanos()
    {
        return isset($this->nanos);
    }

    public function clearNanos()
    {
        unset($this->nanos);
    }

    /**
     * Span of time that's a fraction of a second at nanosecond resolution. Durations less than one second are represented with a 0 `seconds` field and a positive `nanos` field. Must be from 0 to 999,999,999 inclusive.
     *
     * Generated from protobuf field <code>int32 nanos = 104586303;</code>
     * @param int $var
     * @return $this
     */
    public function setNanos($var)
    {
        GPBUtil::checkInt32($var);
        $this->nanos = $var;

        return $this;
    }

    /**
     * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. Note: these bounds are computed from: 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years
     *
     * Generated from protobuf field <code>string seconds = 359484031;</code>
     * @return string
     */
    public function getSeconds()
    {
        return isset($this->seconds) ? $this->seconds : '';
    }

    public function hasSeconds()
    {
        return isset($this->seconds);
    }

    public function clearSeconds()
    {
        unset($this->seconds);
    }

    /**
     * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. Note: these bounds are computed from: 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years
     *
     * Generated from protobuf field <code>string seconds = 359484031;</code>
     * @param string $var
     * @return $this
     */
    public function setSeconds($var)
    {
        GPBUtil::checkString($var, True);
        $this->seconds = $var;

        return $this;
    }

}

