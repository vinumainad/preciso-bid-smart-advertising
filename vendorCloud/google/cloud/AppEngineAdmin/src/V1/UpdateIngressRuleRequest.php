<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/appengine/v1/appengine.proto

namespace Google\Cloud\AppEngine\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Request message for `Firewall.UpdateIngressRule`.
 *
 * Generated from protobuf message <code>google.appengine.v1.UpdateIngressRuleRequest</code>
 */
class UpdateIngressRuleRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Name of the Firewall resource to update.
     * Example: `apps/myapp/firewall/ingressRules/100`.
     *
     * Generated from protobuf field <code>string name = 1;</code>
     */
    private $name = '';
    /**
     * A FirewallRule containing the updated resource
     *
     * Generated from protobuf field <code>.google.appengine.v1.FirewallRule rule = 2;</code>
     */
    private $rule = null;
    /**
     * Standard field mask for the set of fields to be updated.
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
     *           Name of the Firewall resource to update.
     *           Example: `apps/myapp/firewall/ingressRules/100`.
     *     @type \Google\Cloud\AppEngine\V1\FirewallRule $rule
     *           A FirewallRule containing the updated resource
     *     @type \Google\Protobuf\FieldMask $update_mask
     *           Standard field mask for the set of fields to be updated.
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Google\Appengine\V1\Appengine::initOnce();
        parent::__construct($data);
    }

    /**
     * Name of the Firewall resource to update.
     * Example: `apps/myapp/firewall/ingressRules/100`.
     *
     * Generated from protobuf field <code>string name = 1;</code>
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Name of the Firewall resource to update.
     * Example: `apps/myapp/firewall/ingressRules/100`.
     *
     * Generated from protobuf field <code>string name = 1;</code>
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
     * A FirewallRule containing the updated resource
     *
     * Generated from protobuf field <code>.google.appengine.v1.FirewallRule rule = 2;</code>
     * @return \Google\Cloud\AppEngine\V1\FirewallRule|null
     */
    public function getRule()
    {
        return isset($this->rule) ? $this->rule : null;
    }

    public function hasRule()
    {
        return isset($this->rule);
    }

    public function clearRule()
    {
        unset($this->rule);
    }

    /**
     * A FirewallRule containing the updated resource
     *
     * Generated from protobuf field <code>.google.appengine.v1.FirewallRule rule = 2;</code>
     * @param \Google\Cloud\AppEngine\V1\FirewallRule $var
     * @return $this
     */
    public function setRule($var)
    {
        GPBUtil::checkMessage($var, \Google\Cloud\AppEngine\V1\FirewallRule::class);
        $this->rule = $var;

        return $this;
    }

    /**
     * Standard field mask for the set of fields to be updated.
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
     * Standard field mask for the set of fields to be updated.
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
