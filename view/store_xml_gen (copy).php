<?php
$root = $_SERVER["DOCUMENT_ROOT"];

putenv("GOOGLE_APPLICATION_CREDENTIALS=".$root.
    "/vendor/preciso/preciso-bid-smart-for-merchant/view/java-290610-d670b2eca70e.json");



include_once $root.
    "/vendor/preciso/preciso-bid-smart-for-merchant/view/xml_export_functons.php";
include_once $root.
    "/vendor/preciso/preciso-bid-smart-for-merchant/vendorCloud/autoload.php";

use Google\Cloud\Storage\StorageClient;

$projectId = "java-290610";

function upload_files_cloud($source, $objectName, $bucketName)
{
    $projectId = "java-290610";
    $storage = new StorageClient([
        "projectId" => $projectId,
    ]);

    $file = file_get_contents($source);
    $bucket = $storage->bucket($bucketName);
    $object = $bucket->upload($file, [
        "name" => "Magento_plugin/feed/".$objectName,
    ]);
    // printf('Uploaded %s to gs://%s/%s' . PHP_EOL, basename($source), $bucketName, $objectName);
}


$objectManager = \Magento\Framework\App\ObjectManager::getInstance();
$storeManager = $objectManager->get(
    \Magento\Store\Model\StoreManagerInterface::class
);
$shop_url = $storeManager
    ->getStore()
    ->getBaseUrl(\Magento\Framework\UrlInterface::URL_TYPE_WEB);
$admin_base_url = $objectManager
    ->create(Magento\Backend\Helper\Data::class)
    ->getHomePageUrl();
$admin_name = $objectManager
    ->create(Magento\Backend\Helper\Data::class)
    ->getAreaFrontName();
$admin_base_url = $shop_url . "" . $admin_name; //dirname($admin_base_url);
$shop_name = $storeManager->getStore()->getName();
$url = $objectManager->get(\Magento\Backend\Model\UrlInterface::class);
if ($shop_name == "" || $shop_name == null) {
    $shop_name == "Magento Shop";
}

try {
    $_cacheTypeList = $objectManager->create(
        Magento\Framework\App\Cache\TypeListInterface::class
    );
    $_cacheFrontendPool = $objectManager->create(
        Magento\Framework\App\Cache\Frontend\Pool::class
    );
    $types = [
        "config",
        "layout",
        "block_html",
        "collections",
        "reflection",
        "db_ddl",
        "eav",
        "config_integration",
        "config_integration_api",
        "full_page",
        "translate",
        "config_webservice",
    ];
    foreach ($types as $type) {
        $_cacheTypeList->cleanType($type);
    }
    foreach ($_cacheFrontendPool as $cacheFrontend) {
        $cacheFrontend->getBackend()->clean();
    }
} catch (Exception $e) {
    $msg = "Error : " . $e->getMessage();
    return $msg;
}

// echo $url->getSecretKey();

/** @var \Magento\Framework\UrlInterface $urlInterface */
$urlInterface = \Magento\Framework\App\ObjectManager::getInstance()->get(
    Magento\Framework\UrlInterface::class
);
$currentUrl = $urlInterface->getCurrentUrl(); //.'?isAjax=true'
// $ajaxurl = $block->getUrl("PrecisoBidSmartAdvertising/ajax/index").'?isAjax=true'; // Controller Url

// Get products
$objectManager = \Magento\Framework\App\ObjectManager::getInstance();
/** @var \Magento\Catalog\Model\ResourceModel\Product\Collection $productCollection */
$productCollection = $objectManager->create(
    Magento\Catalog\Model\ResourceModel\Product\Collection::class
);
/** Apply filters here */
$collection = $productCollection->addAttributeToSelect("*")->load();
$product_Ids = [];
foreach ($collection as $productData) {
    $product_Ids[] = $productData->getEntityId();
}

$objectManager =  \Magento\Framework\App\ObjectManager::getInstance()->get(\Magento\Catalog\Model\Session::class);
$termPage = $objectManager->getMyName();
$GetUserToken = $objectManager->getToken();
$GetUserCampaignId = $objectManager->getCampaignId();
$GetUserId = $objectManager->getUserId();
$GetUserName = $objectManager->getUsername();
$GetUserPass = $objectManager->getUserpass();

$cmpId = $GetUserCampaignId;

$isTableExist = $connection->isTableExists('Preciso_plugin_set');
$tableName = $_resources->getTableName('Preciso_plugin_set');

if ($isTableExist) {   
    $select_plugin_data = $connection->fetchAll("SELECT * FROM ".$tableName." WHERE id='1'");
    $cmpId = $select_plugin_data[0]['campaignId'];   
}

$objectManager = \Magento\Framework\App\ObjectManager::getInstance();
$StockState = $objectManager->get(
    "\Magento\CatalogInventory\Api\StockStateInterface"
);
// //------------------------------------------
if (count($product_Ids) > 0) {
    // Create xml file
    $dom = new DOMDocument("1.0", "UTF-8");
    $dom->formatOutput = true;

    $root = $dom->createElement("product");
    $dom->appendChild($root);
    $root->setAttribute("id", $shop_name);

    $result = $dom->createElement("details");
    $root->appendChild($result);
    $product = [];

    foreach ($collection as $productData) {
        $prod = [];

        $cmPrice = "";
        $brand_id = "brand";

        $stockItem = $StockState->getStockQty(
            $productData->getId(),
            $productData->getStore()->getWebsiteId()
        );

        $categories = $productData->getCategoryIds();
        $cat_arr = [];
        $brand_arr = [];
        foreach ($categories as $category) {
            $cat = $objectManager->create(Magento\Catalog\Model\Category::class)->load($category);
            $cat_arr[] = trim($cat->getName());
            $brand_arr[] = trim($cat->getName()).'-'.trim($productData->getSku());
        }

        $brand_name = $cat_name = "";

        $cat_name = implode(', ', $cat_arr);
        $brand_name = implode(', ',  $brand_arr);

        if ($stockItem > 0) {
            $product_id = $productData->getEntityId();

            // $img = $productData->getData("image");
            $store = $objectManager->get(Magento\Store\Model\StoreManagerInterface::class)->getStore();
            $img = $store->getBaseUrl( \Magento\Framework\UrlInterface::URL_TYPE_MEDIA ).'catalog/product'.$productData->getImage();

            $inventory_quantity = $stockItem;
            $inventory_policy = "tracking";
            $handle = $productData->getProductUrl();

            $productland = $productData->getProductUrl();
            $result = $dom->createElement("details");
            $root->appendChild($result);
            $result->setAttribute("id", $productData->getEntityId());
            $result->appendChild(
                $dom->createElement("id", $productData->getEntityId())
            );
            $result->appendChild(
                $dom->createElement("quantity", $inventory_quantity)
            );
            // $result->appendChild(
            //     $dom->createElement("category", $cat_arr)
            // );
            $result->appendChild(
                $dom->createElement("inventory_policy", $inventory_policy)
            );
            $result->appendChild(
                $dom->createElement("landing_page", $productland)
            );
            $result->appendChild(
                $dom->createElement("title", $productData->getName())
            );
            $result->appendChild($dom->createElement("brand", $brand_name));
            $result->appendChild($dom->createElement("category", $cat_name));

            $result->appendChild($dom->createElement("handle", $handle));
            if ($cmPrice != null) {
                $result->appendChild(
                    $dom->createElement("compare_at_price", $cmPrice)
                );
            }
            $result->appendChild(
                $dom->createElement("price", $productData->getFinalPrice())
            );
            $result->appendChild($dom->createElement("images", $img));
            $prod["id"] = $productData->getEntityId();
            $prod["quantity"] = $inventory_quantity;
            $prod["inventory_policy"] = $inventory_policy;
            $prod["landing_page"] = $productland;
            $prod["title"] = $productData->getName();
            $prod["brand"] = $brand_name;
            $prod["category"] = $cat_name;
            $prod["handle"] = $handle;

            $prod["compare_at_price"] = $cmPrice;
            $prod["price"] = $productData->getFinalPrice();
            $prod["images"] = $img;
            $product[] = $prod;
        }
    }
    $xmldata = $dom->saveXML();
    $dom->save(
        "/var/www/html/vendor/preciso/preciso-bid-smart-for-merchant/view/xml-file/feed_" .
            $cmpId .
            ".xml"
    ) or die("XML Create Error");

    //------------------------------------------
    // upload file to google cloud
    $storage = new StorageClient([
    'projectId' => $projectId
    ]);
    $source =
        "/var/www/html/vendor/preciso/preciso-bid-smart-for-merchant/view/xml-file/feed_" .
        $cmpId .
        ".xml";

    // $source = '../xml/feed_'.$cmpId.'.xml';
    // $source = '../xml/feed_test_12366.xml';
    $bucketName = "global-files-store-us";
    $objectName = "feed_" . $cmpId . ".xml";
    upload_files_cloud($source, $objectName, $bucketName);

    //upload json
    $array = $product;
    $json = json_encode($array);

    $bytes = file_put_contents('/var/www/html/vendor/preciso/preciso-bid-smart-for-merchant/view/json-file/feed_'.$cmpId.'.json', $json);

    $source = '/var/www/html/vendor/preciso/preciso-bid-smart-for-merchant/view/json-file/feed_'.$cmpId.'.json';
    // print_r($source);
    $bucketName = 'global-files-store-us';
    $objectName = 'feed_'.$cmpId.'.json';
    upload_files_cloud($source, $objectName, $bucketName);
}
?>
                         