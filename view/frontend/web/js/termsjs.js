var ctoken = sessionStorage.getItem("token"); 
      var ttoken = ctoken.trim();
      if(ttoken){ 
        $('#token').val(ttoken);
      }

    $(document).ready(function(){
      $('.api-loader').css('display','none');
      $( "#regisnSubmit" ).click(function( event ) {
        $('.api-loader').css('display','block');
        var form= $("#terms");
        //console.log(form.serialize());
        $.ajax({
            type: form.attr('method'),
            url: form.attr('action'),
            data: form.serialize(),
            success: function (data) {
            //console.log(data);
            if(data.status.statusCode =='F_200')
             {
               
             }
             if(data.status.statusCode =='S_200')
             {
             // alert('dashboard ' + window.location.href);
             var bodyData = jQuery("#logico-body").attr("data-signed_payload");
             linkLocation = 'https://appbigcommercetest.mainad.com/index.php?signed_payload='+bodyData; 
             window.location = linkLocation;
             // location.reload(); 

              
              // var shop = $('#shop').val(); 
              // $.ajax({
              //   url: 'https://appbigcommercetest.mainad.com/templates/ajax/termstatup.php',
              //   data: {
              //       status: 1,
              //       shop: '1615878'
              //   },
              //   type: 'POST',
              //   success: function(response) {
              //       //console.log(response);
              //       window.location.href = 'https://appbigcommercetest.mainad.com/';
              //       // location.reload();
              //   }
              // });  
             }
            }
        });





      });

    });