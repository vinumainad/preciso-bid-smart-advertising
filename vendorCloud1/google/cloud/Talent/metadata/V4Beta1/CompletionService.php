<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/cloud/talent/v4beta1/completion_service.proto

namespace GPBMetadata\Google\Cloud\Talent\V4Beta1;

class CompletionService
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();

        if (static::$is_initialized == true) {
          return;
        }
        \GPBMetadata\Google\Api\Annotations::initOnce();
        \GPBMetadata\Google\Api\FieldBehavior::initOnce();
        \GPBMetadata\Google\Api\Resource::initOnce();
        \GPBMetadata\Google\Cloud\Talent\V4Beta1\Common::initOnce();
        \GPBMetadata\Google\Api\Client::initOnce();
        $pool->internalAddGeneratedFile(
            '
�
4google/cloud/talent/v4beta1/completion_service.protogoogle.cloud.talent.v4beta1google/api/field_behavior.protogoogle/api/resource.proto(google/cloud/talent/v4beta1/common.protogoogle/api/client.proto"�
CompleteQueryRequest3
parent (	B#�A�Ajobs.googleapis.com/Company
query (	B�A
language_codes (	
	page_size (B�A1
company (	B �A
jobs.googleapis.com/CompanyP
scope (2A.google.cloud.talent.v4beta1.CompleteQueryRequest.CompletionScopeN
type (2@.google.cloud.talent.v4beta1.CompleteQueryRequest.CompletionType"K
CompletionScope 
COMPLETION_SCOPE_UNSPECIFIED 

TENANT

PUBLIC"`
CompletionType
COMPLETION_TYPE_UNSPECIFIED 
	JOB_TITLE
COMPANY_NAME
COMBINED"�
CompleteQueryResponse_
completion_results (2C.google.cloud.talent.v4beta1.CompleteQueryResponse.CompletionResult?
metadata (2-.google.cloud.talent.v4beta1.ResponseMetadata�
CompletionResult

suggestion (	N
type (2@.google.cloud.talent.v4beta1.CompleteQueryRequest.CompletionType
	image_uri (	2�

Completion�
CompleteQuery1.google.cloud.talent.v4beta1.CompleteQueryRequest2.google.cloud.talent.v4beta1.CompleteQueryResponse"`���Z//v4beta1/{parent=projects/*/tenants/*}:completeZ\'%/v4beta1/{parent=projects/*}:completel�Ajobs.googleapis.com�AShttps://www.googleapis.com/auth/cloud-platform,https://www.googleapis.com/auth/jobsB�
com.google.cloud.talent.v4beta1BCompletionServiceProtoPZAgoogle.golang.org/genproto/googleapis/cloud/talent/v4beta1;talent�CTSbproto3'
        , true);

        static::$is_initialized = true;
    }
}

