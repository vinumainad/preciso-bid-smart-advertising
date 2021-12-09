var shopurl = Preciso_ajax_deacticate.shop_url;
console.log(shopurl);

jQuery.ajax({
  url : 'https://api.logico3c.com/api/plugin/Pluginstartstop',
  type:'post',
  data:{
     store:shopurl,
     statusName:'Pause'
  },
  success: function (response) {
     console.log(response);
  }
});