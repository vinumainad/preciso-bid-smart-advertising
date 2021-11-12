<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/cloud/automl/v1beta1/io.proto

namespace GPBMetadata\Google\Cloud\Automl\V1Beta1;

class Io
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();

        if (static::$is_initialized == true) {
          return;
        }
        \GPBMetadata\Google\Api\Annotations::initOnce();
        $pool->internalAddGeneratedFile(
            '
�
$google/cloud/automl/v1beta1/io.protogoogle.cloud.automl.v1beta1"�
InputConfig<

gcs_source (2&.google.cloud.automl.v1beta1.GcsSourceH F
bigquery_source (2+.google.cloud.automl.v1beta1.BigQuerySourceH D
params (24.google.cloud.automl.v1beta1.InputConfig.ParamsEntry-
ParamsEntry
key (	
value (	:8B
source"�
BatchPredictInputConfig<

gcs_source (2&.google.cloud.automl.v1beta1.GcsSourceH F
bigquery_source (2+.google.cloud.automl.v1beta1.BigQuerySourceH B
source"Q
DocumentInputConfig:

gcs_source (2&.google.cloud.automl.v1beta1.GcsSource"�
OutputConfigF
gcs_destination (2+.google.cloud.automl.v1beta1.GcsDestinationH P
bigquery_destination (20.google.cloud.automl.v1beta1.BigQueryDestinationH B
destination"�
BatchPredictOutputConfigF
gcs_destination (2+.google.cloud.automl.v1beta1.GcsDestinationH P
bigquery_destination (20.google.cloud.automl.v1beta1.BigQueryDestinationH B
destination"�
ModelExportOutputConfigF
gcs_destination (2+.google.cloud.automl.v1beta1.GcsDestinationH F
gcr_destination (2+.google.cloud.automl.v1beta1.GcrDestinationH 
model_format (	P
params (2@.google.cloud.automl.v1beta1.ModelExportOutputConfig.ParamsEntry-
ParamsEntry
key (	
value (	:8B
destination"�
#ExportEvaluatedExamplesOutputConfigP
bigquery_destination (20.google.cloud.automl.v1beta1.BigQueryDestinationH B
destination"
	GcsSource

input_uris (	"#
BigQuerySource
	input_uri (	"+
GcsDestination
output_uri_prefix (	")
BigQueryDestination

output_uri (	"$
GcrDestination

output_uri (	B�
com.google.cloud.automl.v1beta1PZAgoogle.golang.org/genproto/googleapis/cloud/automl/v1beta1;automl�Google\\Cloud\\AutoMl\\V1beta1�Google::Cloud::AutoML::V1beta1bproto3'
        , true);

        static::$is_initialized = true;
    }
}

