<?php 
//ini_set('display_errors', 1);
 //ini_set('display_startup_errors', 1);
 //error_reporting(E_ALL);
//require '../vendor/autoload.php';
//require '../config/core/myconn.php';
putenv("GOOGLE_APPLICATION_CREDENTIALS=java-290610-eab49d2aa191.json");
require 'vendorCloud/autoload.php';
require 'xml_export_functons.php';

use Google\Cloud\Storage\StorageClient;
 $projectId = 'java-290610';
function upload_files_cloud($source ,$objectName,$bucketName)
{
  $projectId = 'java-290610';
    $storage = new StorageClient([
      'projectId' => $projectId
    ]);

    $file = file_get_contents($source);
    $bucket = $storage->bucket($bucketName);
    $object = $bucket->upload($file, [
       'name' => 'Preciso_plugin/feed/'.$objectName
    ]);
   // printf('Uploaded %s to gs://%s/%s' . PHP_EOL, basename($source), $bucketName, $objectName);
}

$store_hash = $_SESSION["storeHash"];
$token = $_SESSION["access_token"];

$cmpId ="_";
$sql = "SELECT * FROM precisoteststore WHERE auth_details = '$token'";
$store = $conn->query($sql);

if ($store->num_rows > 0) {
$row = mysqli_fetch_assoc($store);
$auth_userId = $row['auth_userId'];
//echo $auth_userId;

$sql2 = "SELECT * FROM precisologinDetails WHERE storeUserId = '$auth_userId'";
$login_details = $conn->query($sql2);
if ($login_details->num_rows > 0) {
	$row2 = mysqli_fetch_assoc($login_details);
	
 $cmpId = $row2['campaignId']; 
 
}

	}

//------------------------------------------


$store_arr = get_store_detail($store_hash,$token);
$shop = "shop";
$shop_url = "";
if(isset($store_arr->name))
{
  $shop = $store_arr->name;
}
if(isset($store_arr->secure_url))
{
  $shop_url = $store_arr->secure_url;
}

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.bigcommerce.com/stores/".$store_hash."/v3/catalog/products?limit=250",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_HTTPHEADER => array(
    "x-auth-token:".$token
  ),
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);
if ($err) {
  echo "cURL Error #:" . $err;
} else {
 
  $response_arr = json_decode($response);
   if(isset($response_arr->data))
  {

// Create xml file
 $dom = new DOMDocument('1.0','UTF-8');
        $dom->formatOutput = true;

        $root = $dom->createElement('product');
        $dom->appendChild($root);
        $root->setAttribute('id', $shop);

        $result = $dom->createElement('details');
        $root->appendChild($result);
        $product = array();  
    
      foreach ( $response_arr->data as $key => $value) 
      {
        $prod = array();
           $cmPrice =$value->price;
           $brand_id = $value->brand_id;
        if($value->availability="available")
        {
          $product_id = $value->id;
          $img_arr1 = get_product_image($product_id,$store_hash,$token);
        
         $img = "";
         if (!empty($img_arr1->data[0]))
         {
          $img = $img_arr1->data[0]->url_zoom;
         }
        
         $brand_name = "";
         if($brand_id!=0 && $brand_id!="")
         {
         $brand_arr1 = get_brand_name($brand_id,$store_hash,$token);
        
         $brand_name = $brand_arr1->data->name;
         
      }
        
          $inventory_quantity = $value->inventory_level;
          $inventory_policy = $value->inventory_tracking;
          $handle = $value->custom_url->url;
           $productland =  $shop_url.$handle;
           $result = $dom->createElement('details');
           $root->appendChild($result);
           $result->setAttribute('id', $key);
           $result->appendChild( $dom->createElement('id', $value->id) );
           $result->appendChild( $dom->createElement('quantity', $inventory_quantity) );
           $result->appendChild( $dom->createElement('inventory_policy', $inventory_policy) );
           $result->appendChild( $dom->createElement('landing_page', $productland) );
           $result->appendChild( $dom->createElement('title', $value->name) );
           $result->appendChild( $dom->createElement('brand',$brand_name) );
           $result->appendChild( $dom->createElement('handle',$handle) );
           if($cmPrice != null){
               $result->appendChild( $dom->createElement('compare_at_price',$cmPrice) );
              }
              $result->appendChild( $dom->createElement('price',$value->price) );
              $result->appendChild( $dom->createElement('images',$img) );
              $prod['id'] = $value->id;
              $prod['quantity'] = $inventory_quantity;
              $prod['inventory_policy'] = $inventory_policy;
              $prod['landing_page'] = $productland;
              $prod['title'] = $value->name;
              $prod['brand'] = $brand_name;
              $prod['handle'] = $handle;
              $prod['compare_at_price'] = $cmPrice;
              $prod['price'] = $value->price;
              $prod['images'] = $img;
              $product[] = $prod;
             
                   
        }
          
      }
      $xmldata = $dom->saveXML();
    // echo '<xmp>'. $dom->saveXML() .'</xmp>';
     $dom->save('xml/feed_'.$cmpId.'.xml') or die('XML Create Error');
    //echo "xml saved";

//------------------------------------------
// upload file to google cloud
        $storage = new StorageClient([
        'projectId' => $projectId
        ]);
        $source = 'xml/feed_'.$cmpId.'.xml';
       // $source = '../xml/feed_'.$cmpId.'.xml';
      // $source = '../xml/feed_test_12366.xml';
        $bucketName = 'global-files-store-us';
        $objectName = 'feed_'.$cmpId.'.xml';
      // $objectName = 'feed_test_12366.xml';
     upload_files_cloud($source,$objectName,$bucketName); 


     //upload json
      $array = $product;
      $json = json_encode($array);
      $bytes = file_put_contents("json/feed_".$cmpId.".json", $json); 
      $source = 'json/feed_'.$cmpId.'.json';
      $bucketName = 'global-files-store-us';
      $objectName = 'feed_'.$cmpId.'.json';
      upload_files_cloud($source,$objectName,$bucketName);

  }
}

?>