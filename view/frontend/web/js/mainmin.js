define([
    "Preciso_PrecisoBidSmartAdvertising/js/customcodes"
], function($){
    "use strict";
    function main(config, element) {
    	// console.log(rtgsettings);
    	(function(d) {
		var s = d.createElement('script'); s.async = false;s.id='madv2014rtg';s.type='text/javascript';
		s.src = (d.location.protocol == 'https:' ? 'https:' : 'http:') + '//appshopify.mainad.com/shopify-js/main-min.js';
		var a = d.getElementsByTagName('script'); a=a[a.length-1];a.parentNode.insertBefore(s, a);
		}(document));
    };
    return main;
    // main();
});