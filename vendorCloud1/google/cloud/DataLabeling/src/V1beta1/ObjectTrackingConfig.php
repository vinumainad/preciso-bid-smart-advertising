<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/cloud/datalabeling/v1beta1/human_annotation_config.proto

namespace Google\Cloud\DataLabeling\V1beta1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Config for video object tracking human labeling task.
 *
 * Generated from protobuf message <code>google.cloud.datalabeling.v1beta1.ObjectTrackingConfig</code>
 */
class ObjectTrackingConfig extends \Google\Protobuf\Internal\Message
{
    /**
     * Required. Annotation spec set resource name.
     *
     * Generated from protobuf field <code>string annotation_spec_set = 1 [(.google.api.field_behavior) = REQUIRED];</code>
     */
    private $annotation_spec_set = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $annotation_spec_set
     *           Required. Annotation spec set resource name.
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Google\Cloud\Datalabeling\V1Beta1\HumanAnnotationConfig::initOnce();
        parent::__construct($data);
    }

    /**
     * Required. Annotation spec set resource name.
     *
     * Generated from protobuf field <code>string annotation_spec_set = 1 [(.google.api.field_behavior) = REQUIRED];</code>
     * @return string
     */
    public function getAnnotationSpecSet()
    {
        return $this->annotation_spec_set;
    }

    /**
     * Required. Annotation spec set resource name.
     *
     * Generated from protobuf field <code>string annotation_spec_set = 1 [(.google.api.field_behavior) = REQUIRED];</code>
     * @param string $var
     * @return $this
     */
    public function setAnnotationSpecSet($var)
    {
        GPBUtil::checkString($var, True);
        $this->annotation_spec_set = $var;

        return $this;
    }

}

