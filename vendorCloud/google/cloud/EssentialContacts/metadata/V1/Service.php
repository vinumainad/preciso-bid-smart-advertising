<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/cloud/essentialcontacts/v1/service.proto

namespace GPBMetadata\Google\Cloud\Essentialcontacts\V1;

class Service
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();

        if (static::$is_initialized == true) {
          return;
        }
        \GPBMetadata\Google\Api\Annotations::initOnce();
        \GPBMetadata\Google\Api\Client::initOnce();
        \GPBMetadata\Google\Api\FieldBehavior::initOnce();
        \GPBMetadata\Google\Api\Resource::initOnce();
        \GPBMetadata\Google\Cloud\Essentialcontacts\V1\Enums::initOnce();
        \GPBMetadata\Google\Protobuf\GPBEmpty::initOnce();
        \GPBMetadata\Google\Protobuf\FieldMask::initOnce();
        \GPBMetadata\Google\Protobuf\Timestamp::initOnce();
        $pool->internalAddGeneratedFile(
            '
�"
/google/cloud/essentialcontacts/v1/service.proto!google.cloud.essentialcontacts.v1google/api/client.protogoogle/api/field_behavior.protogoogle/api/resource.proto-google/cloud/essentialcontacts/v1/enums.protogoogle/protobuf/empty.proto google/protobuf/field_mask.protogoogle/protobuf/timestamp.proto"�
Contact
name (	
email (	d
#notification_category_subscriptions (27.google.cloud.essentialcontacts.v1.NotificationCategory
language_tag (	L
validation_state (22.google.cloud.essentialcontacts.v1.ValidationState1
validate_time	 (2.google.protobuf.Timestamp:��A�
(essentialcontacts.googleapis.com/Contact%projects/{project}/contacts/{contact}#folders/{folder}/contacts/{contact}/organizations/{organization}/contacts/{contact}"�
ListContactsRequest@
parent (	B0�A�A*(essentialcontacts.googleapis.com/Contact
	page_size (B�A

page_token (	B�A"m
ListContactsResponse<
contacts (2*.google.cloud.essentialcontacts.v1.Contact
next_page_token (	"S
GetContactRequest>
name (	B0�A�A*
(essentialcontacts.googleapis.com/Contact"V
DeleteContactRequest>
name (	B0�A�A*
(essentialcontacts.googleapis.com/Contact"�
CreateContactRequest@
parent (	B0�A�A*(essentialcontacts.googleapis.com/Contact@
contact (2*.google.cloud.essentialcontacts.v1.ContactB�A"�
UpdateContactRequest@
contact (2*.google.cloud.essentialcontacts.v1.ContactB�A4
update_mask (2.google.protobuf.FieldMaskB�A"�
ComputeContactsRequest@
parent (	B0�A�A*(essentialcontacts.googleapis.com/ContactX
notification_categories (27.google.cloud.essentialcontacts.v1.NotificationCategory
	page_size (B�A

page_token (	B�A"p
ComputeContactsResponse<
contacts (2*.google.cloud.essentialcontacts.v1.Contact
next_page_token (	"�
SendTestMessageRequestB
contacts (	B0�A�A*
(essentialcontacts.googleapis.com/ContactB
resource (	B0�A�A*(essentialcontacts.googleapis.com/Contact[
notification_category (27.google.cloud.essentialcontacts.v1.NotificationCategoryB�A2�
EssentialContactsService�
CreateContact7.google.cloud.essentialcontacts.v1.CreateContactRequest*.google.cloud.essentialcontacts.v1.Contact"�����" /v1/{parent=projects/*}/contacts:contactZ*"/v1/{parent=folders/*}/contacts:contactZ0"%/v1/{parent=organizations/*}/contacts:contact�Aparent,contact�
UpdateContact7.google.cloud.essentialcontacts.v1.UpdateContactRequest*.google.cloud.essentialcontacts.v1.Contact"�����2(/v1/{contact.name=projects/*/contacts/*}:contactZ22\'/v1/{contact.name=folders/*/contacts/*}:contactZ82-/v1/{contact.name=organizations/*/contacts/*}:contact�Acontact,update_mask�
ListContacts6.google.cloud.essentialcontacts.v1.ListContactsRequest7.google.cloud.essentialcontacts.v1.ListContactsResponse"}���n /v1/{parent=projects/*}/contactsZ!/v1/{parent=folders/*}/contactsZ\'%/v1/{parent=organizations/*}/contacts�Aparent�

GetContact4.google.cloud.essentialcontacts.v1.GetContactRequest*.google.cloud.essentialcontacts.v1.Contact"{���n /v1/{name=projects/*/contacts/*}Z!/v1/{name=folders/*/contacts/*}Z\'%/v1/{name=organizations/*/contacts/*}�Aname�
DeleteContact7.google.cloud.essentialcontacts.v1.DeleteContactRequest.google.protobuf.Empty"{���n* /v1/{name=projects/*/contacts/*}Z!*/v1/{name=folders/*/contacts/*}Z\'*%/v1/{name=organizations/*/contacts/*}�Aname�
ComputeContacts9.google.cloud.essentialcontacts.v1.ComputeContactsRequest:.google.cloud.essentialcontacts.v1.ComputeContactsResponse"�����(/v1/{parent=projects/*}/contacts:computeZ)\'/v1/{parent=folders/*}/contacts:computeZ/-/v1/{parent=organizations/*}/contacts:compute�
SendTestMessage9.google.cloud.essentialcontacts.v1.SendTestMessageRequest.google.protobuf.Empty"�����"2/v1/{resource=projects/*}/contacts:sendTestMessage:*Z6"1/v1/{resource=folders/*}/contacts:sendTestMessage:*Z<"7/v1/{resource=organizations/*}/contacts:sendTestMessage:*T�A essentialcontacts.googleapis.com�A.https://www.googleapis.com/auth/cloud-platformB�
%com.google.cloud.essentialcontacts.v1PZRgoogle.golang.org/genproto/googleapis/cloud/essentialcontacts/v1;essentialcontacts�!Google.Cloud.EssentialContacts.V1�!Google\\Cloud\\EssentialContacts\\V1�$Google::Cloud::EssentialContacts::V1bproto3'
        , true);

        static::$is_initialized = true;
    }
}

