
    var url = window.location.href;
    var cartitems = Preciso_ajax_data_cart.cartIds;
    var cartcolltitle = Preciso_ajax_data_cart.titles; 
    var cartsku = Preciso_ajax_data_cart.cartSKU; 
    var ty_orderamt = Preciso_ajax_data_cart.totalamount;
    var urlSite = window.location.href;

    console.log(cartitems);
    console.log(cartcolltitle);
    console.log(cartsku);
    console.log(ty_orderamt); 

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
        'token': Preciso_ajax_data_cart.session.campaignId,
        'layer': 'iframe'
    };
    (function(d) {
    var s = d.createElement('script'); s.async = true;s.id='madv2014rtg';s.type='text/javascript';
    s.src = urlSite+'wp-content/plugins/Logico/assets/js/main-min.js';
    var a = d.getElementsByTagName('script')[0]; a.parentNode.insertBefore(s, a);
    }(document));