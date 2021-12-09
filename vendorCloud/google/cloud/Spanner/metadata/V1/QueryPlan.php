<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/spanner/v1/query_plan.proto

namespace GPBMetadata\Google\Spanner\V1;

class QueryPlan
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();

        if (static::$is_initialized == true) {
          return;
        }
        \GPBMetadata\Google\Protobuf\Struct::initOnce();
        \GPBMetadata\Google\Api\Annotations::initOnce();
        $pool->internalAddGeneratedFile(
            '
�
"google/spanner/v1/query_plan.protogoogle.spanner.v1google/api/annotations.proto"�
PlanNode
index (.
kind (2 .google.spanner.v1.PlanNode.Kind
display_name (	:
child_links (2%.google.spanner.v1.PlanNode.ChildLinkM
short_representation (2/.google.spanner.v1.PlanNode.ShortRepresentation)
metadata (2.google.protobuf.Struct0
execution_stats (2.google.protobuf.Struct@
	ChildLink
child_index (
type (	
variable (	�
ShortRepresentation
description (	S

subqueries (2?.google.spanner.v1.PlanNode.ShortRepresentation.SubqueriesEntry1
SubqueriesEntry
key (	
value (:8"8
Kind
KIND_UNSPECIFIED 

RELATIONAL

SCALAR"<
	QueryPlan/

plan_nodes (2.google.spanner.v1.PlanNodeB�
com.google.spanner.v1BQueryPlanProtoPZ8google.golang.org/genproto/googleapis/spanner/v1;spanner�Google.Cloud.Spanner.V1�Google\\Cloud\\Spanner\\V1�Google::Cloud::Spanner::V1bproto3'
        , true);

        static::$is_initialized = true;
    }
}

