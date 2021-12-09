  
  var url = window.location.href;
  var res = url.split('/');

  var newdata = Preciso_ajax_data_shop.product_ids;
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
     'token': Preciso_ajax_data_shop.session.campaignId,
     'layer': 'iframe'
   };
  (function(d) {
   var s = d.createElement('script'); s.async = true;s.id='madv2014rtg';s.type='text/javascript';
   s.src = urlSite+'wp-content/plugins/Logico/assets/js/main-min.js';
   var a = d.getElementsByTagName('script')[0]; a.parentNode.insertBefore(s, a);
  }(document));