<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/cloud/metastore/v1alpha/metastore.proto

namespace Google\Cloud\Metastore\V1alpha;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * The metadata management activities of the metastore service.
 *
 * Generated from protobuf message <code>google.cloud.metastore.v1alpha.MetadataManagementActivity</code>
 */
class MetadataManagementActivity extends \Google\Protobuf\Internal\Message
{
    /**
     * Output only. The latest metadata exports of the metastore service.
     *
     * Generated from protobuf field <code>repeated .google.cloud.metastore.v1alpha.MetadataExport metadata_exports = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];</code>
     */
    private $metadata_exports;
    /**
     * Output only. The latest restores of the metastore service.
     *
     * Generated from protobuf field <code>repeated .google.cloud.metastore.v1alpha.Restore restores = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];</code>
     */
    private $restores;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Google\Cloud\Metastore\V1alpha\MetadataExport[]|\Google\Protobuf\Internal\RepeatedField $metadata_exports
     *           Output only. The latest metadata exports of the metastore service.
     *     @type \Google\Cloud\Metastore\V1alpha\Restore[]|\Google\Protobuf\Internal\RepeatedField $restores
     *           Output only. The latest restores of the metastore service.
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Google\Cloud\Metastore\V1Alpha\Metastore::initOnce();
        parent::__construct($data);
    }

    /**
     * Output only. The latest metadata exports of the metastore service.
     *
     * Generated from protobuf field <code>repeated .google.cloud.metastore.v1alpha.MetadataExport metadata_exports = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getMetadataExports()
    {
        return $this->metadata_exports;
    }

    /**
     * Output only. The latest metadata exports of the metastore service.
     *
     * Generated from protobuf field <code>repeated .google.cloud.metastore.v1alpha.MetadataExport metadata_exports = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];</code>
     * @param \Google\Cloud\Metastore\V1alpha\MetadataExport[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setMetadataExports($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Google\Cloud\Metastore\V1alpha\MetadataExport::class);
        $this->metadata_exports = $arr;

        return $this;
    }

    /**
     * Output only. The latest restores of the metastore service.
     *
     * Generated from protobuf field <code>repeated .google.cloud.metastore.v1alpha.Restore restores = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getRestores()
    {
        return $this->restores;
    }

    /**
     * Output only. The latest restores of the metastore service.
     *
     * Generated from protobuf field <code>repeated .google.cloud.metastore.v1alpha.Restore restores = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];</code>
     * @param \Google\Cloud\Metastore\V1alpha\Restore[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setRestores($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Google\Cloud\Metastore\V1alpha\Restore::class);
        $this->restores = $arr;

        return $this;
    }

}

