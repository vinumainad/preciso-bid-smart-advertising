<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/cloud/videointelligence/v1/video_intelligence.proto

namespace Google\Cloud\VideoIntelligence\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Video frame level annotations for object detection and tracking. This field
 * stores per frame location, time offset, and confidence.
 *
 * Generated from protobuf message <code>google.cloud.videointelligence.v1.ObjectTrackingFrame</code>
 */
class ObjectTrackingFrame extends \Google\Protobuf\Internal\Message
{
    /**
     * The normalized bounding box location of this object track for the frame.
     *
     * Generated from protobuf field <code>.google.cloud.videointelligence.v1.NormalizedBoundingBox normalized_bounding_box = 1;</code>
     */
    private $normalized_bounding_box = null;
    /**
     * The timestamp of the frame in microseconds.
     *
     * Generated from protobuf field <code>.google.protobuf.Duration time_offset = 2;</code>
     */
    private $time_offset = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Google\Cloud\VideoIntelligence\V1\NormalizedBoundingBox $normalized_bounding_box
     *           The normalized bounding box location of this object track for the frame.
     *     @type \Google\Protobuf\Duration $time_offset
     *           The timestamp of the frame in microseconds.
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Google\Cloud\Videointelligence\V1\VideoIntelligence::initOnce();
        parent::__construct($data);
    }

    /**
     * The normalized bounding box location of this object track for the frame.
     *
     * Generated from protobuf field <code>.google.cloud.videointelligence.v1.NormalizedBoundingBox normalized_bounding_box = 1;</code>
     * @return \Google\Cloud\VideoIntelligence\V1\NormalizedBoundingBox|null
     */
    public function getNormalizedBoundingBox()
    {
        return isset($this->normalized_bounding_box) ? $this->normalized_bounding_box : null;
    }

    public function hasNormalizedBoundingBox()
    {
        return isset($this->normalized_bounding_box);
    }

    public function clearNormalizedBoundingBox()
    {
        unset($this->normalized_bounding_box);
    }

    /**
     * The normalized bounding box location of this object track for the frame.
     *
     * Generated from protobuf field <code>.google.cloud.videointelligence.v1.NormalizedBoundingBox normalized_bounding_box = 1;</code>
     * @param \Google\Cloud\VideoIntelligence\V1\NormalizedBoundingBox $var
     * @return $this
     */
    public function setNormalizedBoundingBox($var)
    {
        GPBUtil::checkMessage($var, \Google\Cloud\VideoIntelligence\V1\NormalizedBoundingBox::class);
        $this->normalized_bounding_box = $var;

        return $this;
    }

    /**
     * The timestamp of the frame in microseconds.
     *
     * Generated from protobuf field <code>.google.protobuf.Duration time_offset = 2;</code>
     * @return \Google\Protobuf\Duration|null
     */
    public function getTimeOffset()
    {
        return isset($this->time_offset) ? $this->time_offset : null;
    }

    public function hasTimeOffset()
    {
        return isset($this->time_offset);
    }

    public function clearTimeOffset()
    {
        unset($this->time_offset);
    }

    /**
     * The timestamp of the frame in microseconds.
     *
     * Generated from protobuf field <code>.google.protobuf.Duration time_offset = 2;</code>
     * @param \Google\Protobuf\Duration $var
     * @return $this
     */
    public function setTimeOffset($var)
    {
        GPBUtil::checkMessage($var, \Google\Protobuf\Duration::class);
        $this->time_offset = $var;

        return $this;
    }

}

