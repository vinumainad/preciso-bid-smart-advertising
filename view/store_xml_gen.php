<?php
$root = $_SERVER["DOCUMENT_ROOT"];

//Function to post json to feed generator url
function post_to_url( $url, $data ) {
    $post = curl_init();
    $headers = array(
        'Content-Type:application/json',
    );
    curl_setopt( $post, CURLOPT_HTTPHEADER, $headers );
    curl_setopt( $post, CURLOPT_USERPWD, 'remote_user:P@55w06D0fR3m0t3Us3r' );
    curl_setopt( $post, CURLOPT_URL, $url );
    curl_setopt( $post, CURLOPT_POSTFIELDS, $data );
    curl_setopt( $post, CURLOPT_RETURNTRANSFER, 1 );
    $result = curl_exec( $post );
    curl_close( $post );
    return $result;
}

$objectManager1 = \Magento\Framework\App\ObjectManager::getInstance();
$storeManager1 = $objectManager1->get(
    \Magento\Store\Model\StoreManagerInterface::class
);
$shop_url = $storeManager1
    ->getStore()
    ->getBaseUrl(\Magento\Framework\UrlInterface::URL_TYPE_WEB);
$admin_base_url = $objectManager1
    ->create(Magento\Backend\Helper\Data::class)
    ->getHomePageUrl();
$admin_name = $objectManager1
    ->create(Magento\Backend\Helper\Data::class)
    ->getAreaFrontName();
$admin_base_url = $shop_url . "" . $admin_name; //dirname($admin_base_url);
$shop_name = $storeManager1->getStore()->getName();
$url = $objectManager1->get(\Magento\Backend\Model\UrlInterface::class);
if ($shop_name == "" || $shop_name == null) {
    $shop_name == "Magento Shop";
}

try {
    $_cacheTypeList = $objectManager1->create(
        Magento\Framework\App\Cache\TypeListInterface::class
    );
    $_cacheFrontendPool = $objectManager1->create(
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
$objectManager1 = \Magento\Framework\App\ObjectManager::getInstance();
/** @var \Magento\Catalog\Model\ResourceModel\Product\Collection $productCollection */
$productCollection = $objectManager1->create(
    Magento\Catalog\Model\ResourceModel\Product\Collection::class
);
/** Apply filters here */
$collection = $productCollection->addAttributeToSelect("*")->load();
$product_Ids = [];
foreach ($collection as $productData) {
    $product_Ids[] = $productData->getEntityId();
}

$objectManager1 =  \Magento\Framework\App\ObjectManager::getInstance()->get(\Magento\Catalog\Model\Session::class);
$termPage = $objectManager1->getMyName();
$GetUserToken = $objectManager1->getToken();
$GetUserCampaignId = $objectManager1->getCampaignId();
$GetUserId = $objectManager1->getUserId();
$GetUserName = $objectManager1->getUsername();
$GetUserPass = $objectManager1->getUserpass();

$cmpId = $GetUserCampaignId;

$isTableExist = $connection->isTableExists('Preciso_plugin_set');
$tableName = $_resources->getTableName('Preciso_plugin_set');

if ($isTableExist) {   
    $select_plugin_data = $connection->fetchAll("SELECT * FROM ".$tableName." WHERE id='1'");
    $cmpId = $select_plugin_data[0]['campaignId'];   
}

$objectManager1 = \Magento\Framework\App\ObjectManager::getInstance();
$StockState = $objectManager1->get(
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
            $cat = $objectManager1->create(Magento\Catalog\Model\Category::class)->load($category);
            $cat_arr[] = trim($cat->getName());
            $brand_arr[] = trim($cat->getName()).'-'.trim($productData->getSku());
        }

        $brand_name = $cat_name = "";

        $cat_name = implode(', ', $cat_arr);
        $brand_name = implode(', ',  $brand_arr);

        if ($stockItem > 0) {
            $product_id = $productData->getEntityId();

            // $img = $productData->getData("image");
            $store = $objectManager1->get(Magento\Store\Model\StoreManagerInterface::class)->getStore();
            $img = $store->getBaseUrl( \Magento\Framework\UrlInterface::URL_TYPE_MEDIA ).'catalog/product'.$productData->getImage();

            $inventory_quantity = $stockItem;
            $inventory_policy = "tracking";
            $handle = $productData->getProductUrl();

            $productland = $productData->getProductUrl();
            
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
   
    //upload json
    $array = $product;
   
    $json_data_arr = array();
    $json_data_arr['shop'] = $shop_name;
    $json_data_arr['cmpid'] = $cmpId;
    $json_data_arr['product_data'] = $product;
    $json = json_encode( $json_data_arr );

    echo $curl_response = post_to_url( 'https://wpfeedupload.preciso.net/feed_upload_magento.php', $json );

    // $bytes = file_put_contents('/var/www/html/vendor/preciso/preciso-bid-smart-for-merchant/view/json-file/feed_'.$cmpId.'.json', $json);

    // $source = '/var/www/html/vendor/preciso/preciso-bid-smart-for-merchant/view/json-file/feed_'.$cmpId.'.json';
    // // print_r($source);
    // $bucketName = 'global-files-store-us';
    // $objectName = 'feed_'.$cmpId.'.json';
    // upload_files_cloud($source, $objectName, $bucketName);
}
?>
                         