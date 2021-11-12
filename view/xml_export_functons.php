<?php 
//---------------------functions------------------------------

function get_product_image($product_id,$store_hash,$token)
{

$curl1 = curl_init();

curl_setopt_array($curl1, array(
  CURLOPT_URL => "https://api.bigcommerce.com/stores/".$store_hash."/v3/catalog/products/".$product_id."/images",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_HTTPHEADER => array(
    "accept: application/json",
    "content-type: application/json",
    "x-auth-token:".$token
  ),
));

$response1 = curl_exec($curl1);
$err = curl_error($curl1);

curl_close($curl1);

if ($err) 
{
  return "cURL Error #:" . $err;
} else 
  {
    $img_arr = json_decode($response1);
   
    return $img_arr;
  }
}

function get_brand_name($brand_id,$store_hash,$token)
{

$curl3 = curl_init();

curl_setopt_array($curl3, array(
  CURLOPT_URL => "https://api.bigcommerce.com/stores/".$store_hash."/v3/catalog/brands/".$brand_id,
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_HTTPHEADER => array(
    "accept: application/json",
    "content-type: application/json",
    "x-auth-token:".$token
  ),
));

$response2 = curl_exec($curl3);
$err = curl_error($curl3);

curl_close($curl3);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
   $brand_arr = json_decode($response2);
   
    return $brand_arr;
}

}

function get_store_detail($store_hash,$token)
{
  $curl4 = curl_init();

curl_setopt_array($curl4, array(
  CURLOPT_URL => "https://api.bigcommerce.com/stores/".$store_hash."/v2/store",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_HTTPHEADER => array(
    "accept: application/json",
    "content-type: application/json",
    "x-auth-token:".$token
  ),
));

$response3 = curl_exec($curl4);
$err = curl_error($curl4);

curl_close($curl4);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  $shop_arr = json_decode($response3);
  return $shop_arr;
}
}

?>