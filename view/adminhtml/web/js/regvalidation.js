define([
    "jquery",
    "jquery/ui"
], function($){
    "use strict";
 
    function main(config, element) {
      var $element = $(element);
      var origin   = config.AdminBaseUrl; //window.location.origin;
      var customurl = origin + '/precisobidsmartadvertising/ajax/index/';
      var CurrentPage = config.CurrentPage;
      $(document).ready(function(){

      	$(document).on("focusout","input#inputEmail",function(){
			var email = document.getElementById('inputEmail');
			var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

			if (!filter.test(email.value)) {
			  jQuery('.emailerror').show();
			/*  jQuery('input#inputEmail').css({
			  'border': '1px solid red',
			  'background': '#ff000021'
			  });*/
			  email.focus;
			  return false;
			} else {
			  jQuery('input#inputEmail').css({
			  'border': 'unset',
			  'background': '#eaeef1'
			  });
			  jQuery('.emailerror').hide();
			}
		});

      // 	 function checkEmail() {
      //     var email = document.getElementById('inputEmail');
      //     var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

      //     if (!filter.test(email.value)) {
      //         jQuery('.emailerror').show();
      //         jQuery('input#inputEmail').css({
      //         'border': '1px solid red',
      //         'background': '#ff000021'
      //         });
      //         email.focus;
      //         return false;
      //     } else {
      //         jQuery('input#inputEmail').css({
      //         'border': 'unset',
      //         'background': '#eaeef1'
      //         });
      //         jQuery('.emailerror').hide();
      //     }
      // }

      $(document).on("focusout","input#inputStoreLogo",function(){
			var img = new Image();
			var url = document.getElementById("inputStoreLogo").value;
			img.onload = function(){
			// alert("the image exists");
			jQuery('.storeerror').hide(); 
			return true;  
			};
			img.onerror = function(){
			// alert("error while loading.."); 
			jQuery('.storeerror').show(); 
			return false; 
			}

			img.src = url;
		});


      // function validImage(){
      //     var img = new Image();
      //   var url = document.getElementById("inputStoreLogo").value;
      //   img.onload = function(){
      //       // alert("the image exists");
      //       jQuery('.storeerror').hide(); 
      //       return true;  
      //   };
      //   img.onerror = function(){
      //       // alert("error while loading.."); 
      //       jQuery('.storeerror').show(); 
      //       return false; 
      //   }

      //   img.src = url;
      // }

      $(document).on("focusout","input#dailylBudget",function(){
		var dailylBudget = document.getElementById("dailylBudget").value;
		jQuery("#ddlBudget").attr({
		   "min" : dailylBudget
		});
		var ddlBudget = parseInt(document.getElementById("ddlBudget").value);
		if(dailylBudget <= ddlBudget){
		  jQuery('.totalbudegeterror').hide(); 
		  // jQuery("#regisnSubmit").removeAttr('disabled');
		return true; 
		} else {
		  jQuery('.totalbudegeterror').show();
		  return false;
		}
      });

      // function validdailylBudget(){
      //     var dailylBudget = document.getElementById("dailylBudget").value;
      //      jQuery("#ddlBudget").attr({
      //          "min" : dailylBudget
      //    });
      //    var ddlBudget = parseInt(document.getElementById("ddlBudget").value);
      //     if(dailylBudget <= ddlBudget){
      //         jQuery('.totalbudegeterror').hide(); 
      //         // jQuery("#regisnSubmit").removeAttr('disabled');
      //       return true; 
      //     } else {
      //         jQuery('.totalbudegeterror').show();
      //         return false;
      //     }
      // }

      $(document).on("focusout","input#ddlBudget",function(){
      	var dailylBudget = parseInt(document.getElementById("dailylBudget").value);
          var ddlBudget = parseInt(document.getElementById("ddlBudget").value);
          if(dailylBudget <= ddlBudget){
              jQuery('.totalbudegeterror').hide(); 
              // jQuery("#regisnSubmit").removeAttr('disabled');
            return true; 
          } else {
              jQuery('.totalbudegeterror').show();
              return false;
          }
      });

      // function validddlBudget(){
      //     var dailylBudget = parseInt(document.getElementById("dailylBudget").value);
      //     var ddlBudget = parseInt(document.getElementById("ddlBudget").value);
      //     if(dailylBudget <= ddlBudget){
      //         jQuery('.totalbudegeterror').hide(); 
      //         // jQuery("#regisnSubmit").removeAttr('disabled');
      //       return true; 
      //     } else {
      //         jQuery('.totalbudegeterror').show();
      //         return false;
      //     }
      // }

      $(document).on("focusout","input#landPage",function(){
      	var url = document.getElementById("inputStoreLogo").value;
		var pattern = /^(?:(?:https):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i;
		if (pattern.test(url)) {
		  jQuery('.storeerror').hide();
		  return true;
		}
		jQuery('.storeerror').show();
		return false;
      });

      // function validatestore() {
      //     var url = document.getElementById("inputStoreLogo").value;
      //     var pattern = /^(?:(?:https):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i;
      //     if (pattern.test(url)) {
      //         jQuery('.storeerror').hide();
      //         return true;
      //     }
      //     jQuery('.storeerror').show();
      //     return false;
      // }

      $(document).on("focusout","input#inputWebsiteURL",function(){
		var url = document.getElementById("inputWebsiteURL").value;
		var pattern = /^(?:(?:https):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i;
		if (pattern.test(url)) {
		  jQuery('.domainerror').hide();
		  return true;
		}
		jQuery('.domainerror').show();
		return false;
      });

      // function validatedomain() {
      //     var url = document.getElementById("inputWebsiteURL").value;
      //     var pattern = /^(?:(?:https):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i;
      //     if (pattern.test(url)) {
      //         jQuery('.domainerror').hide();
      //         return true;
      //     }
      //     jQuery('.domainerror').show();
      //     return false;
      // }
     	});
   };
   return main;
});