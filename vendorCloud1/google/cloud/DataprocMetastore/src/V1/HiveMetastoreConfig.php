<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/cloud/metastore/v1/metastore.proto

namespace Google\Cloud\Metastore\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Specifies configuration information specific to running Hive metastore
 * software as the metastore service.
 *
 * Generated from protobuf message <code>google.cloud.metastore.v1.HiveMetastoreConfig</code>
 */
class HiveMetastoreConfig extends \Google\Protobuf\Internal\Message
{
    /**
     * Immutable. The Hive metastore schema version.
     *
     * Generated from protobuf field <code>string version = 1 [(.google.api.field_behavior) = IMMUTABLE];</code>
     */
    private $version = '';
    /**
     * A mapping of Hive metastore configuration key-value pairs to apply to the
     * Hive metastore (configured in `hive-site.xml`). The mappings
     * override system defaults (some keys cannot be overridden).
     *
     * Generated from protobuf field <code>map<string, string> config_overrides = 2;</code>
     */
    private $config_overrides;
    /**
     * Information used to configure the Hive metastore service as a service
     * principal in a Kerberos realm. To disable Kerberos, use the `UpdateService`
     * method and specify this field's path
     * (`hive_metastore_config.kerberos_config`) in the request's `update_mask`
     * while omitting this field from the request's `service`.
     *
     * Generated from protobuf field <code>.google.cloud.metastore.v1.KerberosConfig kerberos_config = 3;</code>
     */
    private $kerberos_config = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $version
     *           Immutable. The Hive metastore schema version.
     *     @type array|\Google\Protobuf\Internal\MapField $config_overrides
     *           A mapping of Hive metastore configuration key-value pairs to apply to the
     *           Hive metastore (configured in `hive-site.xml`). The mappings
     *           override system defaults (some keys cannot be overridden).
     *     @type \Google\Cloud\Metastore\V1\KerberosConfig $kerberos_config
     *           Information used to configure the Hive metastore service as a service
     *           principal in a Kerberos realm. To disable Kerberos, use the `UpdateService`
     *           method and specify this field's path
     *           (`hive_metastore_config.kerberos_config`) in the request's `update_mask`
     *           while omitting this field from the request's `service`.
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Google\Cloud\Metastore\V1\Metastore::initOnce();
        parent::__construct($data);
    }

    /**
     * Immutable. The Hive metastore schema version.
     *
     * Generated from protobuf field <code>string version = 1 [(.google.api.field_behavior) = IMMUTABLE];</code>
     * @return string
     */
    public function getVersion()
    {
        return $this->version;
    }

    /**
     * Immutable. The Hive metastore schema version.
     *
     * Generated from protobuf field <code>string version = 1 [(.google.api.field_behavior) = IMMUTABLE];</code>
     * @param string $var
     * @return $this
     */
    public function setVersion($var)
    {
        GPBUtil::checkString($var, True);
        $this->version = $var;

        return $this;
    }

    /**
     * A mapping of Hive metastore configuration key-value pairs to apply to the
     * Hive metastore (configured in `hive-site.xml`). The mappings
     * override system defaults (some keys cannot be overridden).
     *
     * Generated from protobuf field <code>map<string, string> config_overrides = 2;</code>
     * @return \Google\Protobuf\Internal\MapField
     */
    public function getConfigOverrides()
    {
        return $this->config_overrides;
    }

    /**
     * A mapping of Hive metastore configuration key-value pairs to apply to the
     * Hive metastore (configured in `hive-site.xml`). The mappings
     * override system defaults (some keys cannot be overridden).
     *
     * Generated from protobuf field <code>map<string, string> config_overrides = 2;</code>
     * @param array|\Google\Protobuf\Internal\MapField $var
     * @return $this
     */
    public function setConfigOverrides($var)
    {
        $arr = GPBUtil::checkMapField($var, \Google\Protobuf\Internal\GPBType::STRING, \Google\Protobuf\Internal\GPBType::STRING);
        $this->config_overrides = $arr;

        return $this;
    }

    /**
     * Information used to configure the Hive metastore service as a service
     * principal in a Kerberos realm. To disable Kerberos, use the `UpdateService`
     * method and specify this field's path
     * (`hive_metastore_config.kerberos_config`) in the request's `update_mask`
     * while omitting this field from the request's `service`.
     *
     * Generated from protobuf field <code>.google.cloud.metastore.v1.KerberosConfig kerberos_config = 3;</code>
     * @return \Google\Cloud\Metastore\V1\KerberosConfig|null
     */
    public function getKerberosConfig()
    {
        return isset($this->kerberos_config) ? $this->kerberos_config : null;
    }

    public function hasKerberosConfig()
    {
        return isset($this->kerberos_config);
    }

    public function clearKerberosConfig()
    {
        unset($this->kerberos_config);
    }

    /**
     * Information used to configure the Hive metastore service as a service
     * principal in a Kerberos realm. To disable Kerberos, use the `UpdateService`
     * method and specify this field's path
     * (`hive_metastore_config.kerberos_config`) in the request's `update_mask`
     * while omitting this field from the request's `service`.
     *
     * Generated from protobuf field <code>.google.cloud.metastore.v1.KerberosConfig kerberos_config = 3;</code>
     * @param \Google\Cloud\Metastore\V1\KerberosConfig $var
     * @return $this
     */
    public function setKerberosConfig($var)
    {
        GPBUtil::checkMessage($var, \Google\Cloud\Metastore\V1\KerberosConfig::class);
        $this->kerberos_config = $var;

        return $this;
    }

}

