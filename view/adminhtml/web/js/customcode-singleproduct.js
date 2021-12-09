       
       var url = window.location.href;
       var proId = Preciso_ajax_data_product.allData.pro_id;
       var proTitle = Preciso_ajax_data_product.allData.pro_title;
       var proPrice = Preciso_ajax_data_product.allData.saleprice;
       var procmpPrice = Preciso_ajax_data_product.allData.regularprice;
       var proImage = Preciso_ajax_data_product.allData.image;
       var proCate = Preciso_ajax_data_product.allData.pro_cat;
       var proDescription = Preciso_ajax_data_product.allData.pro_dis;
       var shopCurr =Preciso_ajax_data_product.allData.shopcurrency;
       var sku = Preciso_ajax_data_product.allData.proSKU;
       var ProInve = Preciso_ajax_data_product.allData.quantity;
       var urlSite = window.location.href;

       console.log(proId);
       console.log(proTitle);
       console.log(proCate);
       console.log(proDescription);
       console.log(shopCurr);
       console.log(sku);
       console.log(ProInve); 
       console.log(proImage); 
       console.log(procmpPrice);       

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
           'token': Preciso_ajax_data_product.session.campaignId,
           'layer': 'iframe'
         };
       (function(d) {
         var s = d.createElement('script'); s.async = true;s.id='madv2014rtg';s.type='text/javascript';
         s.src = urlSite+'wp-content/plugins/Logico/assets/js/prod-min.js';
         var a = d.getElementsByTagName('script')[0]; a.parentNode.insertBefore(s, a);
       }(document));