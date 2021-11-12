<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/monitoring/v3/uptime.proto

namespace Google\Cloud\Monitoring\V3\UptimeCheckConfig;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Optional. Used to perform content matching. This allows matching based on
 * substrings and regular expressions, together with their negations. Only the
 * first 4&nbsp;MB of an HTTP or HTTPS check's response (and the first
 * 1&nbsp;MB of a TCP check's response) are examined for purposes of content
 * matching.
 *
 * Generated from protobuf message <code>google.monitoring.v3.UptimeCheckConfig.ContentMatcher</code>
 */
class ContentMatcher extends \Google\Protobuf\Internal\Message
{
    /**
     * String or regex content to match. Maximum 1024 bytes. An empty `content`
     * string indicates no content matching is to be performed.
     *
     * Generated from protobuf field <code>string content = 1;</code>
     */
    private $content = '';
    /**
     * The type of content matcher that will be applied to the server output,
     * compared to the `content` string when the check is run.
     *
     * Generated from protobuf field <code>.google.monitoring.v3.UptimeCheckConfig.ContentMatcher.ContentMatcherOption matcher = 2;</code>
     */
    private $matcher = 0;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $content
     *           String or regex content to match. Maximum 1024 bytes. An empty `content`
     *           string indicates no content matching is to be performed.
     *     @type int $matcher
     *           The type of content matcher that will be applied to the server output,
     *           compared to the `content` string when the check is run.
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Google\Monitoring\V3\Uptime::initOnce();
        parent::__construct($data);
    }

    /**
     * String or regex content to match. Maximum 1024 bytes. An empty `content`
     * string indicates no content matching is to be performed.
     *
     * Generated from protobuf field <code>string content = 1;</code>
     * @return string
     */
    public function getContent()
    {
        return $this->content;
    }

    /**
     * String or regex content to match. Maximum 1024 bytes. An empty `content`
     * string indicates no content matching is to be performed.
     *
     * Generated from protobuf field <code>string content = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setContent($var)
    {
        GPBUtil::checkString($var, True);
        $this->content = $var;

        return $this;
    }

    /**
     * The type of content matcher that will be applied to the server output,
     * compared to the `content` string when the check is run.
     *
     * Generated from protobuf field <code>.google.monitoring.v3.UptimeCheckConfig.ContentMatcher.ContentMatcherOption matcher = 2;</code>
     * @return int
     */
    public function getMatcher()
    {
        return $this->matcher;
    }

    /**
     * The type of content matcher that will be applied to the server output,
     * compared to the `content` string when the check is run.
     *
     * Generated from protobuf field <code>.google.monitoring.v3.UptimeCheckConfig.ContentMatcher.ContentMatcherOption matcher = 2;</code>
     * @param int $var
     * @return $this
     */
    public function setMatcher($var)
    {
        GPBUtil::checkEnum($var, \Google\Cloud\Monitoring\V3\UptimeCheckConfig_ContentMatcher_ContentMatcherOption::class);
        $this->matcher = $var;

        return $this;
    }

}

// Adding a class alias for backwards compatibility with the previous class name.
class_alias(ContentMatcher::class, \Google\Cloud\Monitoring\V3\UptimeCheckConfig_ContentMatcher::class);

