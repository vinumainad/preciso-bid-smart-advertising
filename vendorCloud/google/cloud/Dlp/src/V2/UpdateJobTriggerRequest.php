<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/privacy/dlp/v2/dlp.proto

namespace Google\Cloud\Dlp\V2;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Request message for UpdateJobTrigger.
 *
 * Generated from protobuf message <code>google.privacy.dlp.v2.UpdateJobTriggerRequest</code>
 */
class UpdateJobTriggerRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Required. Resource name of the project and the triggeredJob, for example
     * `projects/dlp-test-project/jobTriggers/53234423`.
     *
     * Generated from protobuf field <code>string name = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = {</code>
     */
    private $name = '';
    /**
     * New JobTrigger value.
     *
     * Generated from protobuf field <code>.google.privacy.dlp.v2.JobTrigger job_trigger = 2;</code>
     */
    private $job_trigger = null;
    /**
     * Mask to control which fields get updated.
     *
     * Generated from protobuf field <code>.google.protobuf.FieldMask update_mask = 3;</code>
     */
    private $update_mask = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $name
     *           Required. Resource name of the project and the triggeredJob, for example
     *           `projects/dlp-test-project/jobTriggers/53234423`.
     *     @type \Google\Cloud\Dlp\V2\JobTrigger $job_trigger
     *           New JobTrigger value.
     *     @type \Google\Protobuf\FieldMask $update_mask
     *           Mask to control which fields get updated.
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Google\Privacy\Dlp\V2\Dlp::initOnce();
        parent::__construct($data);
    }

    /**
     * Required. Resource name of the project and the triggeredJob, for example
     * `projects/dlp-test-project/jobTriggers/53234423`.
     *
     * Generated from protobuf field <code>string name = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = {</code>
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Required. Resource name of the project and the triggeredJob, for example
     * `projects/dlp-test-project/jobTriggers/53234423`.
     *
     * Generated from protobuf field <code>string name = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = {</code>
     * @param string $var
     * @return $this
     */
    public function setName($var)
    {
        GPBUtil::checkString($var, True);
        $this->name = $var;

        return $this;
    }

    /**
     * New JobTrigger value.
     *
     * Generated from protobuf field <code>.google.privacy.dlp.v2.JobTrigger job_trigger = 2;</code>
     * @return \Google\Cloud\Dlp\V2\JobTrigger|null
     */
    public function getJobTrigger()
    {
        return isset($this->job_trigger) ? $this->job_trigger : null;
    }

    public function hasJobTrigger()
    {
        return isset($this->job_trigger);
    }

    public function clearJobTrigger()
    {
        unset($this->job_trigger);
    }

    /**
     * New JobTrigger value.
     *
     * Generated from protobuf field <code>.google.privacy.dlp.v2.JobTrigger job_trigger = 2;</code>
     * @param \Google\Cloud\Dlp\V2\JobTrigger $var
     * @return $this
     */
    public function setJobTrigger($var)
    {
        GPBUtil::checkMessage($var, \Google\Cloud\Dlp\V2\JobTrigger::class);
        $this->job_trigger = $var;

        return $this;
    }

    /**
     * Mask to control which fields get updated.
     *
     * Generated from protobuf field <code>.google.protobuf.FieldMask update_mask = 3;</code>
     * @return \Google\Protobuf\FieldMask|null
     */
    public function getUpdateMask()
    {
        return isset($this->update_mask) ? $this->update_mask : null;
    }

    public function hasUpdateMask()
    {
        return isset($this->update_mask);
    }

    public function clearUpdateMask()
    {
        unset($this->update_mask);
    }

    /**
     * Mask to control which fields get updated.
     *
     * Generated from protobuf field <code>.google.protobuf.FieldMask update_mask = 3;</code>
     * @param \Google\Protobuf\FieldMask $var
     * @return $this
     */
    public function setUpdateMask($var)
    {
        GPBUtil::checkMessage($var, \Google\Protobuf\FieldMask::class);
        $this->update_mask = $var;

        return $this;
    }

}

