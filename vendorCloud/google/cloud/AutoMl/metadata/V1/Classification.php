<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/cloud/automl/v1/classification.proto

namespace GPBMetadata\Google\Cloud\Automl\V1;

class Classification
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
�

+google/cloud/automl/v1/classification.protogoogle.cloud.automl.v1")
ClassificationAnnotation
score ("�
ClassificationEvaluationMetrics
au_prc (
au_roc (
log_loss (p
confidence_metrics_entry (2N.google.cloud.automl.v1.ClassificationEvaluationMetrics.ConfidenceMetricsEntrya
confusion_matrix (2G.google.cloud.automl.v1.ClassificationEvaluationMetrics.ConfusionMatrix
annotation_spec_id (	�
ConfidenceMetricsEntry
confidence_threshold (
position_threshold (
recall (
	precision (
false_positive_rate (
f1_score (

recall_at1 (
precision_at1 (
false_positive_rate_at1	 (
f1_score_at1 (
true_positive_count
 (
false_positive_count (
false_negative_count (
true_negative_count (�
ConfusionMatrix
annotation_spec_id (	
display_name (	X
row (2K.google.cloud.automl.v1.ClassificationEvaluationMetrics.ConfusionMatrix.Row
Row
example_count (*Y
ClassificationType#
CLASSIFICATION_TYPE_UNSPECIFIED 

MULTICLASS

MULTILABELB�
com.google.cloud.automl.v1BClassificationProtoPZ<google.golang.org/genproto/googleapis/cloud/automl/v1;automl�Google.Cloud.AutoML.V1�Google\\Cloud\\AutoMl\\V1�Google::Cloud::AutoML::V1bproto3'
        , true);

        static::$is_initialized = true;
    }
}

