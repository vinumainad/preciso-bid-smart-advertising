<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/cloud/recommendationengine/v1beta1/import.proto

namespace GPBMetadata\Google\Cloud\Recommendationengine\V1Beta1;

class Import
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();

        if (static::$is_initialized == true) {
          return;
        }
        \GPBMetadata\Google\Api\FieldBehavior::initOnce();
        \GPBMetadata\Google\Api\Resource::initOnce();
        \GPBMetadata\Google\Cloud\Recommendationengine\V1Beta1\Catalog::initOnce();
        \GPBMetadata\Google\Cloud\Recommendationengine\V1Beta1\UserEvent::initOnce();
        \GPBMetadata\Google\Cloud\Recommendationengine\V1Beta1\RecommendationengineResources::initOnce();
        \GPBMetadata\Google\Protobuf\Timestamp::initOnce();
        \GPBMetadata\Google\Rpc\Status::initOnce();
        \GPBMetadata\Google\Api\Annotations::initOnce();
        $pool->internalAddGeneratedFile(
            '
�
6google/cloud/recommendationengine/v1beta1/import.proto)google.cloud.recommendationengine.v1beta1google/api/resource.proto7google/cloud/recommendationengine/v1beta1/catalog.proto:google/cloud/recommendationengine/v1beta1/user_event.protoNgoogle/cloud/recommendationengine/v1beta1/recommendationengine_resources.protogoogle/protobuf/timestamp.protogoogle/rpc/status.protogoogle/api/annotations.proto"$
	GcsSource

input_uris (	B�A"i
CatalogInlineSourceR
catalog_items (26.google.cloud.recommendationengine.v1beta1.CatalogItemB�A"g
UserEventInlineSourceN
user_events (24.google.cloud.recommendationengine.v1beta1.UserEventB�A"9
ImportErrorsConfig

gcs_prefix (	H B
destination"�
ImportCatalogItemsRequestC
parent (	B3�A�A-
+recommendationengine.googleapis.com/Catalog

request_id (	B�AQ
input_config (26.google.cloud.recommendationengine.v1beta1.InputConfigB�AY
errors_config (2=.google.cloud.recommendationengine.v1beta1.ImportErrorsConfigB�A"�
ImportUserEventsRequestF
parent (	B6�A�A0
.recommendationengine.googleapis.com/EventStore

request_id (	B�AQ
input_config (26.google.cloud.recommendationengine.v1beta1.InputConfigB�AY
errors_config (2=.google.cloud.recommendationengine.v1beta1.ImportErrorsConfigB�A"�
InputConfig_
catalog_inline_source (2>.google.cloud.recommendationengine.v1beta1.CatalogInlineSourceH J

gcs_source (24.google.cloud.recommendationengine.v1beta1.GcsSourceH d
user_event_inline_source (2@.google.cloud.recommendationengine.v1beta1.UserEventInlineSourceH B
source"�
ImportMetadata
operation_name (	

request_id (	/
create_time (2.google.protobuf.Timestamp
success_count (
failure_count (/
update_time (2.google.protobuf.Timestamp"�
ImportCatalogItemsResponse)
error_samples (2.google.rpc.StatusT
errors_config (2=.google.cloud.recommendationengine.v1beta1.ImportErrorsConfig"�
ImportUserEventsResponse)
error_samples (2.google.rpc.StatusT
errors_config (2=.google.cloud.recommendationengine.v1beta1.ImportErrorsConfigY
import_summary (2A.google.cloud.recommendationengine.v1beta1.UserEventImportSummary"T
UserEventImportSummary
joined_events_count (
unjoined_events_count (B�
-com.google.cloud.recommendationengine.v1beta1PZ]google.golang.org/genproto/googleapis/cloud/recommendationengine/v1beta1;recommendationengine�RECAI�)Google.Cloud.RecommendationEngine.V1Beta1�)Google\\Cloud\\RecommendationEngine\\V1beta1�,Google::Cloud::RecommendationEngine::V1beta1bproto3'
        , true);

        static::$is_initialized = true;
    }
}

