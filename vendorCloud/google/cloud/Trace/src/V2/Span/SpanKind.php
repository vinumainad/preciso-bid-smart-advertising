<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/devtools/cloudtrace/v2/trace.proto

namespace Google\Cloud\Trace\V2\Span;

use UnexpectedValueException;

/**
 * Type of span. Can be used to specify additional relationships between spans
 * in addition to a parent/child relationship.
 *
 * Protobuf type <code>google.devtools.cloudtrace.v2.Span.SpanKind</code>
 */
class SpanKind
{
    /**
     * Unspecified. Do NOT use as default.
     * Implementations MAY assume SpanKind.INTERNAL to be default.
     *
     * Generated from protobuf enum <code>SPAN_KIND_UNSPECIFIED = 0;</code>
     */
    const SPAN_KIND_UNSPECIFIED = 0;
    /**
     * Indicates that the span is used internally. Default value.
     *
     * Generated from protobuf enum <code>INTERNAL = 1;</code>
     */
    const INTERNAL = 1;
    /**
     * Indicates that the span covers server-side handling of an RPC or other
     * remote network request.
     *
     * Generated from protobuf enum <code>SERVER = 2;</code>
     */
    const SERVER = 2;
    /**
     * Indicates that the span covers the client-side wrapper around an RPC or
     * other remote request.
     *
     * Generated from protobuf enum <code>CLIENT = 3;</code>
     */
    const CLIENT = 3;
    /**
     * Indicates that the span describes producer sending a message to a broker.
     * Unlike client and  server, there is no direct critical path latency
     * relationship between producer and consumer spans (e.g. publishing a
     * message to a pubsub service).
     *
     * Generated from protobuf enum <code>PRODUCER = 4;</code>
     */
    const PRODUCER = 4;
    /**
     * Indicates that the span describes consumer receiving a message from a
     * broker. Unlike client and  server, there is no direct critical path
     * latency relationship between producer and consumer spans (e.g. receiving
     * a message from a pubsub service subscription).
     *
     * Generated from protobuf enum <code>CONSUMER = 5;</code>
     */
    const CONSUMER = 5;

    private static $valueToName = [
        self::SPAN_KIND_UNSPECIFIED => 'SPAN_KIND_UNSPECIFIED',
        self::INTERNAL => 'INTERNAL',
        self::SERVER => 'SERVER',
        self::CLIENT => 'CLIENT',
        self::PRODUCER => 'PRODUCER',
        self::CONSUMER => 'CONSUMER',
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
class_alias(SpanKind::class, \Google\Cloud\Trace\V2\Span_SpanKind::class);

