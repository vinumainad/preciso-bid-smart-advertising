<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/cloud/channel/v1/service.proto

namespace Google\Cloud\Channel\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Request message for [CloudChannelService.ChangeOffer][google.cloud.channel.v1.CloudChannelService.ChangeOffer].
 *
 * Generated from protobuf message <code>google.cloud.channel.v1.ChangeOfferRequest</code>
 */
class ChangeOfferRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Required. The resource name of the entitlement to update.
     * Name uses the format:
     * accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id}
     *
     * Generated from protobuf field <code>string name = 1 [(.google.api.field_behavior) = REQUIRED];</code>
     */
    private $name = '';
    /**
     * Required. New Offer.
     * Format: accounts/{account_id}/offers/{offer_id}.
     *
     * Generated from protobuf field <code>string offer = 2 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = {</code>
     */
    private $offer = '';
    /**
     * Optional. Parameters needed to purchase the Offer.
     *
     * Generated from protobuf field <code>repeated .google.cloud.channel.v1.Parameter parameters = 3 [(.google.api.field_behavior) = OPTIONAL];</code>
     */
    private $parameters;
    /**
     * Optional. Purchase order id provided by the reseller.
     *
     * Generated from protobuf field <code>string purchase_order_id = 5 [(.google.api.field_behavior) = OPTIONAL];</code>
     */
    private $purchase_order_id = '';
    /**
     * Optional. You can specify an optional unique request ID, and if you need to retry
     * your request, the server will know to ignore the request if it's complete.
     * For example, you make an initial request and the request times out. If you
     * make the request again with the same request ID, the server can check if
     * it received the original operation with the same request ID. If it did, it
     * will ignore the second request.
     * The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122)
     * with the exception that zero UUID is not supported
     * (`00000000-0000-0000-0000-000000000000`).
     *
     * Generated from protobuf field <code>string request_id = 6 [(.google.api.field_behavior) = OPTIONAL];</code>
     */
    private $request_id = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $name
     *           Required. The resource name of the entitlement to update.
     *           Name uses the format:
     *           accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id}
     *     @type string $offer
     *           Required. New Offer.
     *           Format: accounts/{account_id}/offers/{offer_id}.
     *     @type \Google\Cloud\Channel\V1\Parameter[]|\Google\Protobuf\Internal\RepeatedField $parameters
     *           Optional. Parameters needed to purchase the Offer.
     *     @type string $purchase_order_id
     *           Optional. Purchase order id provided by the reseller.
     *     @type string $request_id
     *           Optional. You can specify an optional unique request ID, and if you need to retry
     *           your request, the server will know to ignore the request if it's complete.
     *           For example, you make an initial request and the request times out. If you
     *           make the request again with the same request ID, the server can check if
     *           it received the original operation with the same request ID. If it did, it
     *           will ignore the second request.
     *           The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122)
     *           with the exception that zero UUID is not supported
     *           (`00000000-0000-0000-0000-000000000000`).
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Google\Cloud\Channel\V1\Service::initOnce();
        parent::__construct($data);
    }

    /**
     * Required. The resource name of the entitlement to update.
     * Name uses the format:
     * accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id}
     *
     * Generated from protobuf field <code>string name = 1 [(.google.api.field_behavior) = REQUIRED];</code>
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Required. The resource name of the entitlement to update.
     * Name uses the format:
     * accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id}
     *
     * Generated from protobuf field <code>string name = 1 [(.google.api.field_behavior) = REQUIRED];</code>
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
     * Required. New Offer.
     * Format: accounts/{account_id}/offers/{offer_id}.
     *
     * Generated from protobuf field <code>string offer = 2 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = {</code>
     * @return string
     */
    public function getOffer()
    {
        return $this->offer;
    }

    /**
     * Required. New Offer.
     * Format: accounts/{account_id}/offers/{offer_id}.
     *
     * Generated from protobuf field <code>string offer = 2 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = {</code>
     * @param string $var
     * @return $this
     */
    public function setOffer($var)
    {
        GPBUtil::checkString($var, True);
        $this->offer = $var;

        return $this;
    }

    /**
     * Optional. Parameters needed to purchase the Offer.
     *
     * Generated from protobuf field <code>repeated .google.cloud.channel.v1.Parameter parameters = 3 [(.google.api.field_behavior) = OPTIONAL];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getParameters()
    {
        return $this->parameters;
    }

    /**
     * Optional. Parameters needed to purchase the Offer.
     *
     * Generated from protobuf field <code>repeated .google.cloud.channel.v1.Parameter parameters = 3 [(.google.api.field_behavior) = OPTIONAL];</code>
     * @param \Google\Cloud\Channel\V1\Parameter[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setParameters($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Google\Cloud\Channel\V1\Parameter::class);
        $this->parameters = $arr;

        return $this;
    }

    /**
     * Optional. Purchase order id provided by the reseller.
     *
     * Generated from protobuf field <code>string purchase_order_id = 5 [(.google.api.field_behavior) = OPTIONAL];</code>
     * @return string
     */
    public function getPurchaseOrderId()
    {
        return $this->purchase_order_id;
    }

    /**
     * Optional. Purchase order id provided by the reseller.
     *
     * Generated from protobuf field <code>string purchase_order_id = 5 [(.google.api.field_behavior) = OPTIONAL];</code>
     * @param string $var
     * @return $this
     */
    public function setPurchaseOrderId($var)
    {
        GPBUtil::checkString($var, True);
        $this->purchase_order_id = $var;

        return $this;
    }

    /**
     * Optional. You can specify an optional unique request ID, and if you need to retry
     * your request, the server will know to ignore the request if it's complete.
     * For example, you make an initial request and the request times out. If you
     * make the request again with the same request ID, the server can check if
     * it received the original operation with the same request ID. If it did, it
     * will ignore the second request.
     * The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122)
     * with the exception that zero UUID is not supported
     * (`00000000-0000-0000-0000-000000000000`).
     *
     * Generated from protobuf field <code>string request_id = 6 [(.google.api.field_behavior) = OPTIONAL];</code>
     * @return string
     */
    public function getRequestId()
    {
        return $this->request_id;
    }

    /**
     * Optional. You can specify an optional unique request ID, and if you need to retry
     * your request, the server will know to ignore the request if it's complete.
     * For example, you make an initial request and the request times out. If you
     * make the request again with the same request ID, the server can check if
     * it received the original operation with the same request ID. If it did, it
     * will ignore the second request.
     * The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122)
     * with the exception that zero UUID is not supported
     * (`00000000-0000-0000-0000-000000000000`).
     *
     * Generated from protobuf field <code>string request_id = 6 [(.google.api.field_behavior) = OPTIONAL];</code>
     * @param string $var
     * @return $this
     */
    public function setRequestId($var)
    {
        GPBUtil::checkString($var, True);
        $this->request_id = $var;

        return $this;
    }

}

