<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/cloud/osconfig/v1/inventory.proto

namespace GPBMetadata\Google\Cloud\Osconfig\V1;

class Inventory
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();

        if (static::$is_initialized == true) {
          return;
        }
        \GPBMetadata\Google\Protobuf\Timestamp::initOnce();
        $pool->internalAddGeneratedFile(
            '
�
(google/cloud/osconfig/v1/inventory.protogoogle.cloud.osconfig.v1"�
	Inventory;
os_info (2*.google.cloud.osconfig.v1.Inventory.OsInfo=
items (2..google.cloud.osconfig.v1.Inventory.ItemsEntry�
OsInfo
hostname	 (	
	long_name (	

short_name (	
version (	
architecture (	
kernel_version (	
kernel_release (	
osconfig_agent_version (	�
Item

id (	H
origin_type (23.google.cloud.osconfig.v1.Inventory.Item.OriginType/
create_time (2.google.protobuf.Timestamp/
update_time	 (2.google.protobuf.Timestamp;
type (2-.google.cloud.osconfig.v1.Inventory.Item.TypeP
installed_package (23.google.cloud.osconfig.v1.Inventory.SoftwarePackageH P
available_package (23.google.cloud.osconfig.v1.Inventory.SoftwarePackageH "?

OriginType
ORIGIN_TYPE_UNSPECIFIED 
INVENTORY_REPORT"J
Type
TYPE_UNSPECIFIED 
INSTALLED_PACKAGE
AVAILABLE_PACKAGEB	
details�
SoftwarePackageK
yum_package (24.google.cloud.osconfig.v1.Inventory.VersionedPackageH K
apt_package (24.google.cloud.osconfig.v1.Inventory.VersionedPackageH N
zypper_package (24.google.cloud.osconfig.v1.Inventory.VersionedPackageH N
googet_package (24.google.cloud.osconfig.v1.Inventory.VersionedPackageH G
zypper_patch (2/.google.cloud.osconfig.v1.Inventory.ZypperPatchH O
wua_package (28.google.cloud.osconfig.v1.Inventory.WindowsUpdatePackageH \\
qfe_package (2E.google.cloud.osconfig.v1.Inventory.WindowsQuickFixEngineeringPackageH K
cos_package (24.google.cloud.osconfig.v1.Inventory.VersionedPackageH B	
detailsO
VersionedPackage
package_name (	
architecture (	
version (	�
WindowsUpdatePackage
title (	
description (	b

categories (2N.google.cloud.osconfig.v1.Inventory.WindowsUpdatePackage.WindowsUpdateCategory
kb_article_ids (	
support_url (	
more_info_urls (	
	update_id (	
revision_number (?
last_deployment_change_time
 (2.google.protobuf.Timestamp1
WindowsUpdateCategory

id (	
name (	V
ZypperPatch

patch_name (	
category (	
severity (	
summary (	�
!WindowsQuickFixEngineeringPackage
caption (	
description (	

hot_fix_id (	0
install_time (2.google.protobuf.TimestampV

ItemsEntry
key (	7
value (2(.google.cloud.osconfig.v1.Inventory.Item:8B�
com.google.cloud.osconfig.v1BInventoriesPZ@google.golang.org/genproto/googleapis/cloud/osconfig/v1;osconfig�Google.Cloud.OsConfig.V1�Google\\Cloud\\OsConfig\\V1�Google::Cloud::OsConfig::V1bproto3'
        , true);

        static::$is_initialized = true;
    }
}

