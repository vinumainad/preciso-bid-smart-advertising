let rtgsettings = {};
define([
    "jquery",
    "jquery/ui",
    // "https://appshopify.mainad.com/shopify-js/main-min.js"
], function($){
    "use strict";
 
    function main(config, element) {
        var $element = $(element);
        var campaignId = config.campaignId;
        var CurrentPage = config.CurrentPage;

		// console.log(campaignId);
        // $(document).ready(function(){
			if( CurrentPage == 'Home' ) {		
				var url = window.location.href;
				var res = url.split('/');
				var pdt_url = res['2'];	
				rtgsettings ={
					'pdt_url': pdt_url,
					'pagetype': 'home',
					'key': 'SPY',
					'token': campaignId,
					'layer': 'iframe'
				};
				// (function(d) {
				// var s = d.createElement('script'); s.async = true;s.id='madv2014rtg';s.type='text/javascript';
				// s.src = (d.location.protocol == 'https:' ? 'https:' : 'http:') + '//appshopify.mainad.com/shopify-js/main-min.js';
				// var a = d.getElementsByTagName('script')[0]; a.parentNode.insertBefore(s, a);
				// }(document));
				// console.log(rtgsettings);
			}

			if( CurrentPage == 'ProductViewPage' ) {
				var url = window.location.href;
				var proId = config.CurrentProductId;
				var proTitle = config.CurrentProductName;
				var proPrice = config.CurrentProductSalePrice;
				var procmpPrice = config.CurrentProductRegularprice;
				var proImage = config.CurrentProductImageUrl;
				var proCate = config.CurrentProductCat;
				var proDescription = config.CurrentProductDescription;
				var shopCurr =config.CurrentProductShopCurrency;
				var sku = config.CurrentProductSKU;
				var ProInve = config.CurrentProductQuantity;
				rtgsettings ={
					'pdt_id': proId,
					'pdt_sku': sku,
					'pdt_name': proTitle,
					'pdt_price': proPrice,
					'pdt_amount': procmpPrice,
					'pdt_currency': shopCurr,
					'pdt_url': url,
					'pdt_photo': proImage,
					'pdt_instock': ProInve ,
					'pdt_expdate': '$pdt_expdate$',
					'pdt_category_list': proCate,
					'pdt_smalldescription': proDescription,
					'pagetype': 'product',
					'key': 'SPY',
					'token': campaignId,
					'layer': 'iframe'
				  };
				// (function(d) {
				// 	var s = d.createElement('script'); s.async = true;s.id='madv2014rtg';s.type='text/javascript';
				// 	s.src = (d.location.protocol == 'https:' ? 'https:' : 'http:') + '//appshopify.mainad.com/shopify-js/main-min.js';
				// 	var a = d.getElementsByTagName('script')[0]; a.parentNode.insertBefore(s, a);
				// }(document));
			}

			if( CurrentPage == 'Cart' ) {
				var url = window.location.href;
			    var cartitems = config.cartIds;
			    var cartcolltitle = config.titles; 
			    var cartsku = config.cartSKU; 
			    var ty_orderamt = config.totalamount;
			    var urlSite = window.location.href;
			    rtgsettings ={
			        'pdt_id': cartitems,
			        'pdt_sku':cartsku,
			        'pdt_category_list': cartcolltitle,
			        'pdt_url': url,
			        'ty_orderamt':ty_orderamt,
			        'ty_orderdate':'$ty_orderdate$',
			        'ty_orderstatus':'$ty_orderstatus$',
			        'pagetype': 'basket',
			        'key': 'SPY',
			        'token': campaignId,
			        'layer': 'iframe'
			    };
			 //    (function(d) {
				// 	var s = d.createElement('script'); s.async = true;s.id='madv2014rtg';s.type='text/javascript';
				// 	s.src = (d.location.protocol == 'https:' ? 'https:' : 'http:') + '//appshopify.mainad.com/shopify-js/main-min.js';
				// 	var a = d.getElementsByTagName('script')[0]; a.parentNode.insertBefore(s, a);
				// }(document));
			}

			if( CurrentPage == 'CatPage' ) {
				var url = window.location.href;
				var pdt_category_list = config.pdtCategoryList;
				var pdt_id = config.pdtId;
				rtgsettings ={
	                'pdt_url': url,
	                'pdt_category_list': pdt_category_list,
	                'pdt_id': pdt_id,
	                'pagetype': 'category',
	                'key': 'SPY',
	                'token': campaignId,
	                'layer': 'iframe'
	              };
				// (function(d) {
				// 	var s = d.createElement('script'); s.async = true;s.id='madv2014rtg';s.type='text/javascript';
				// 	s.src = (d.location.protocol == 'https:' ? 'https:' : 'http:') + '//appshopify.mainad.com/shopify-js/main-min.js';
				// 	var a = d.getElementsByTagName('script')[0]; a.parentNode.insertBefore(s, a);
				// }(document));
			}

			if( CurrentPage == 'OrderSuccess' ) {
				var proID = config.proID;
				var SKU = config.productsku; 
				var price = config.checkoutamount; 
				var orderid = config.orderid; 
				var orderstatus = config.orderstatus; 
				var ordercurrency = config.ordercurrency; 
				var orderdate = config.orderdate; 
				var ordercustomer = config.ordercustomer; 
				var urlSite = window.location.href;

				rtgsettings ={
					'pdt_id': proID,
					'pdt_currency':ordercurrency,
					'pagetype': 'checkout',
					'ty_orderid':orderid,
					'ty_orderamt':price,
					'key': 'SPY',
					'token': campaignId,
					'layer': 'iframe'
					// 'pdt_sku': SKU,
					// 'pdt_category_list': '$pdt_category_list$',
					// 'ty_orderdate':orderdate,
					// 'ty_orderstatus':orderstatus,
					// 'ty_googleclickid':'$ty_googleclickid$',
					// 'ty_appmetadata':'$ty_appmetadata$',
					// 'ty_rawdeviceid':'$ty_rawdeviceid$',
					// 'ty_osname':'$ty_osname$',
					// 'ty_devicemodel':'$ty_devicemodel$',
					// 'ty_cusid':ordercustomer,
					// 'ty_custype':'$ty_custype$',
					// 'ty_cuscoupon':'$ty_ cuscoupon$',
				};
				console.log(rtgsettings,"sapan112");
				// (function(d) {
				// 	var s = d.createElement('script'); s.async = true;s.id='madv2014rtg';s.type='text/javascript';
				// 	s.src = (d.location.protocol == 'https:' ? 'https:' : 'http:') + '//appshopify.mainad.com/shopify-js/main-min.js';
				// 	var a = d.getElementsByTagName('script')[0]; a.parentNode.insertBefore(s, a);
				// }(document));
			}

        // });
 
 
    };
    return main;
    // main();
});