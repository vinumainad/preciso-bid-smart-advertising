jQuery(document).ready(function(){

	function accessCookie(cookieName)
        {
          var name = cookieName + "=";
          var allCookieArray = document.cookie.split(';');
          for(var i=0; i<allCookieArray.length; i++)
          {
            var temp = allCookieArray[i].trim();
            if (temp.indexOf(name)==0)
            return temp.substring(name.length,temp.length);
       	  }
        	return "";
        }

	var url = window.location.href;
	var res = url.split('/');
	var resSize = res.length;

	// console.log( resSize  );
	// console.log( res  );	

	if( resSize <= 4) {
		var pdt_url = res['2'];		

		var campaignId = accessCookie("campaignId"); //'<%= Session["campaignId"] %>'; 

		console.log( campaignId  );

		jQuery(".header").attr("data-campaignId",campaignId);

		rtgsettings ={
	     'pdt_url': pdt_url,
	     'pagetype': 'home',
	     'key': 'SPY',
	     'token': campaignId,
	     'layer': 'iframe'
	   	};
		(function(d) {
		var s = d.createElement('script'); s.async = true;s.id='madv2014rtg';s.type='text/javascript';
		s.src = (d.location.protocol == 'https:' ? 'https:' : 'http:') + '//apppartner.mainad.com/shopify-js/main-min.js';
		var a = d.getElementsByTagName('script')[0]; a.parentNode.insertBefore(s, a);
		}(document));

	} else if( res[3] == 'shop-all' ) {

	var newdata = '77|80|81|86|88|93|94|97|98|103|104|107|111|112|113|114|115|116';
	var urlSite = window.location.href;
	console.log(newdata);
	console.log(res[3]);
	console.log(url);
	rtgsettings ={
		'pdt_url': url,
		'pdt_category_list': res[3],
		'pdt_id': newdata,
		'pagetype': 'category',
		'key': 'SPY',
		'token': '<?php echo $_GET["campaignId"]; ?>',
		'layer': 'iframe'
	};

	console.log(rtgsettings);

	}

	 
 });