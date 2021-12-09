<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/cloud/automl/v1/io.proto

namespace GPBMetadata\Google\Cloud\Automl\V1;

class Io
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();

        if (static::$is_initialized == true) {
          return;
        }
        \GPBMetadata\Google\Api\FieldBehavior::initOnce();
        \GPBMetadata\Google\Api\Annotations::initOnce();
        $pool->internalAddGeneratedFile(
            '
�	
google/cloud/automl/v1/io.protogoogle.cloud.automl.v1google/api/annotations.proto"�
InputConfig7

gcs_source (2!.google.cloud.automl.v1.GcsSourceH ?
params (2/.google.cloud.automl.v1.InputConfig.ParamsEntry-
ParamsEntry
key (	
value (	:8B
source"a
BatchPredictInputConfig<

gcs_source (2!.google.cloud.automl.v1.GcsSourceB�AH B
source"L
DocumentInputConfig5

gcs_source (2!.google.cloud.automl.v1.GcsSource"e
OutputConfigF
gcs_destination (2&.google.cloud.automl.v1.GcsDestinationB�AH B
destination"q
BatchPredictOutputConfigF
gcs_destination (2&.google.cloud.automl.v1.GcsDestinationB�AH B
destination"�
ModelExportOutputConfigF
gcs_destination (2&.google.cloud.automl.v1.GcsDestinationB�AH 
model_format (	K
params (2;.google.cloud.automl.v1.ModelExportOutputConfig.ParamsEntry-
ParamsEntry
key (	
value (	:8B
destination"$
	GcsSource

input_uris (	B�A"0
GcsDestination
output_uri_prefix (	B�AB�
com.google.cloud.automl.v1PZ<google.golang.org/genproto/googleapis/cloud/automl/v1;automl�Google.Cloud.AutoML.V1�Google\\Cloud\\AutoMl\\V1�Google::Cloud::AutoML::V1bproto3'
        , true);

        static::$is_initialized = true;
    }
}

