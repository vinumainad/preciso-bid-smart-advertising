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
      // alert('d: ' + customurl);

      jQuery(document).ready(function () {
              jQuery('.skypeBtn').click(function(){
                jQuery('#rawa-box').css('opacity','1');
                jQuery('#rawa-box').css('visibility', 'visible');

              });
              jQuery('#rawa-close ').click(function(){
                jQuery('#rawa-box').css('opacity','0');
                jQuery('#rawa-box').css('visibility', 'hidden');
              });
              jQuery.ajax({
              url: "https://api.preciso.net/api/plugin/masters ",
              success: function (result) {
                  var currencyLen = result.currencyMasters.length;
                  var regionLen = result.regionMasters.length;
                  
                  for (var i = 0; i < currencyLen; i++) {
                      jQuery(' <option value="' + result.currencyMasters[i].currencyCode + '">' + result.currencyMasters[i].currencyName + '</option>').insertAfter(jQuery('.currencyOpt'))
                  }
              
                  for (var i = 0; i < regionLen; i++) {
                      jQuery(' <option value="' + result.regionMasters[i].regionCode + '">' + result.regionMasters[i].regionName + '</option>').insertAfter(jQuery('.regionOpt'))
                  }
                  
              }
          });

            setTimeout(function() {
            sortDropDownListByText();
            $('#ddlCurrency option[value="empty"]').insertBefore('#ddlCurrency option[value="AFN"]');
            $('#ddlRegion option[value="All"]').insertBefore('#ddlRegion option[value="AF"]');
            $('#ddlLanguage option[value="default"]').insertBefore('#ddlLanguage option[value="AB"]');
            $('#ChanelID option[value="empty"]').insertBefore('#ChanelID option[value="3"]');
            $('#ddldeviceId option[value="empty"]').insertBefore('#ddldeviceId option[value="1"]');
            $('#ddlStrategy option[value="empty"]').insertBefore('#ddlStrategy option[value="23"]');
            $('#ddlStrategy option').each(function(index) {
                if ($(this).val() == '19') {
                    $(this).prop('selected', true);
                } else {}
            });
            $('#ddldeviceId option').each(function(index) {
                if ($(this).text() == 'All') {
                    $(this).prop('selected', true);
                } else {}
            });
            $('#ddlLanguage option').each(function(index) {
                if ($(this).text() == 'English') {
                    $(this).prop('selected', true);
                } else {}
            });
            $('#ddlCurrency option').each(function(index) {
                if ($(this).text() == 'Euro Member Countries') {
                    $(this).prop('selected', true);
                } else {}
            });
            $('#ChanelID option').each(function(index) {
                if ($(this).text() == 'Retargeting') {
                    $(this).prop('selected', true);
                } else {}
            });
            $('#ChanelID option').each(function(index) {
                if ($(this).text() == 'Retargeting') {
                    $(this).prop('selected', true);
                } else {}
            });
            $('.api-loader').hide();
            // $('#rawa-box').css('opacity','1');
            // $('#rawa-box').css('visibility', 'visible');

        }, 100);

          jQuery('.btn-green').click(function () {
              jQuery('.api-loader').show();
              // location.href = sessionStorage.getItem("site-logico");
              location.reload();
          });

          jQuery('.btn-red').click(function () {
              jQuery('.failedalert').hide();
          });

          (function ($) {
              $.fn.inputFilter = function (inputFilter) {
                  return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function () {
                      if (inputFilter(this.value)) {
                      this.oldValue = this.value;
                      this.oldSelectionStart = this.selectionStart;
                      this.oldSelectionEnd = this.selectionEnd;
                      } else if (this.hasOwnProperty("oldValue")) {
                      this.value = this.oldValue;
                      this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
                      } else {
                      this.value = "";
                      }
                  });
              };
          }(jQuery));

          jQuery("#inputCPM").inputFilter(function (value) {
              return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 50);
          });

          jQuery("#ddlfreqCap").inputFilter(function (value) {
              return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 255);
          });

          jQuery("#ddlPC").inputFilter(function (value) {
              return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 255);
          });

          jQuery("#ddlPV").inputFilter(function (value) {
              return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 255);
          });

          jQuery("#dailylBudget").inputFilter(function (value) {
              return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 1000000000);
          });

          jQuery("#ddlBudget").inputFilter(function (value) {
              return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 1000000000);
          });

          jQuery("#ddlSpendDuration").inputFilter(function (value) {
              return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 99);
          });

          function sortDropDownListByText() {
              // Loop for each select element on the page.
              jQuery("select").each(function () {

                  // Keep track of the selected option.
                  var selectedValue = jQuery(this).val();

                  // Sort all the options by text. I could easily sort these by val.
                  jQuery(this).html(jQuery("option", jQuery(this)).sort(function (a, b) {
                      return a.text == b.text ? 0 : a.text < b.text ? -1 : 1
                  }));

                  // Select one option.
                  jQuery(this).val(selectedValue);
              });
          }

           function checkImage(url) {
              var request = new XMLHttpRequest();
              request.open("GET", url, true);
              request.send();
              request.onload = function() {
                status = request.status;
                if (request.status == 200) //if(statusText == OK)
                { 
                  return true;
                  // console.log("image exists");
                } else {
                  return false;
                  // console.log("image doesn't exist");
                }
              }
            }


          jQuery("#regisnSubmit").click(function (event) {
           
              jQuery('.fcaperror').hide();
              jQuery('.pcerror').hide();
              jQuery('.pverror').hide();
              jQuery('.maxcpmerror').hide();
              
              var storeLogo = jQuery('#inputStoreLogo').val();
              if (storeLogo == ''){
                 jQuery('#inputStoreLogo').val('https://cdn.2trk.info/rtgbannerimage/logo.png');
              }
              else {
                 if( ! checkImage(storeLogo) ) {
                    jQuery('#inputStoreLogo').val('https://cdn.2trk.info/rtgbannerimage/logo.png');
                 }
              }
            
              var email = jQuery('#inputEmail').val();
              var domainUrl = jQuery('#inputWebsiteURL').val();
              var programNm = jQuery('#ddlProgramName').val();
              var storeLogo = jQuery('#inputStoreLogo').val();
              var cnctNum = jQuery('#contactNumber').val();
              var ddlReg = jQuery('#ddlRegion').val();
              var ddllang = jQuery('#ddlLanguage').val();
              var ddlcurr = jQuery('#ddlCurrency').val();
              var chnllId = jQuery('#ChanelID').val();
              var inputCpm = jQuery('#inputCPM').val();
              var deviceId = jQuery('#ddldeviceId').val();
              var freqcp = jQuery('#ddlfreqCap').val();
              var pc = jQuery('#ddlPC').val();
              var pv = jQuery('#ddlPV').val();
              var budget = jQuery('#ddlBudget').val();
              var dailBude = jQuery('#dailylBudget').val();
              var spendDur = jQuery('#ddlSpendDuration').val();
              var stragey = jQuery('#ddlStrategy').val();
              var camptype = jQuery('#ddlCampaignType').val();
              var storeUrl = 0;
              var websiteUrl = 0;
              var prmInput = 0;
              var userInput = 0;
              var contInput = 0;
              var inputcpmval = 0;
              var dailyInput = 0;
              var totalInput = 0;
              var regSel = 0;
              if (jQuery('.storeerror').is(':visible')) {
                  storeUrl = 1;
              }
              if (jQuery('.domainerror').is(':visible')) {
                  websiteUrl = 1;
              }

              // console.log();

              if (email == '' || domainUrl == '' || programNm == '' || storeLogo == '' || cnctNum == '' || ddlReg == '' || ddllang == '' || ddlcurr == '' || chnllId == '' || inputCpm == '' || deviceId == '' || freqcp == '' || pc == '' || pv == '' || budget == '' || spendDur == '' || stragey == '' || camptype == '' || storeUrl == 1 || websiteUrl == 1) {
                 
                  if (email == '') {
                      jQuery('.emailerror').show();
                  } else {
                      jQuery('.emailerror').hide();
                  }
                  if (domainUrl == '') {
                      jQuery('.domainerror').show();
                  } else {
                      jQuery('.domainerror').hide();
                  }
                  if (programNm == '') {
                      jQuery('.programerror').show();
                  } else {
                      jQuery('.programerror').hide();
                  }
                  if (storeLogo == '') {
                      jQuery('.storeerror').show();
                  } else {
                      jQuery('.storeerror').hide();
                  }
                  if (cnctNum == '') {
                      jQuery('.contacterror').show();
                  } else {
                      jQuery('.contacterror').hide();
                  }
                  if (ddlReg == 'All') {
                      jQuery('.regionerror').show();
                  } else {
                      jQuery('.regionerror').hide();
                  }
                  if (ddllang == 'default') {
                      jQuery('.lanuageerror').show();
                  } else {
                      jQuery('.lanuageerror').hide();
                  }
                  if (ddlcurr == 'empty') {
                      jQuery('.currencyerror').show();
                  } else {
                      jQuery('.currencyerror').hide();
                  }
                  if (chnllId == 'empty') {
                      jQuery('.channelerror').show();
                  } else {
                      jQuery('.channelerror').hide();
                  }
                  if (inputCpm == '') {
                      jQuery('.maxcpmerror').show();
                  } else {
                      jQuery('.maxcpmerror').hide();
                  }
                  if (dailBude == '') {
                      jQuery('.budegeterror').show();
                  } else {
                      jQuery('.budegeterror').hide();
                  }
                  if (freqcp == '') {
                      jQuery('.fcaperror').show();
                  } else {
                      jQuery('.fcaperror').hide();
                  }
                  if (pc == '') {
                      jQuery('.pcerror').show();
                  } else {
                      jQuery('.pcerror').hide();
                  }
                  if (pv == '') {
                      jQuery('.pverror').show();
                  } else {
                      jQuery('.pverror').hide();
                  }
                  if (budget == '') {
                      jQuery('.totalbudegeterror').show();
                  } else {
                      jQuery('.totalbudegeterror').hide();
                  }
                  if (spendDur == '') {
                      jQuery('.durationerror').show();
                  } else {
                      jQuery('.durationerror').hide();
                  }
                  if (stragey == 'empty') {
                      jQuery('.strategyerror').show();
                  } else {
                      jQuery('.strategyerror').hide();
                  }
                  if (camptype == '') {
                      jQuery('.campaignerror').show();
                  } else {
                      jQuery('.campaignerror').hide();
                  }

              } else {

                  if (freqcp > 255 || pc > 255 || pv > 255 || inputCpm > 51 || ddlReg == 'All') {
                      if (freqcp > 255) {
                      jQuery('.fcaperror').text('You Enter Wrong Value' + freqcp + '. Please Enter Number Between 0-255');
                      jQuery('.fcaperror').show();
                      jQuery('input#ddlfreqCap').css({
                          'border': '1px solid red',
                          'background': '#ff000021'
                      });
                      }
                      if (pc > 255) {
                      jQuery('.pcerror').text('You Enter Wrong Value' + pc + '. Please Enter Number Between 0-255');
                      jQuery('.pcerror').show();
                      jQuery('input#ddlPC').css({
                          'border': '1px solid red',
                          'background': '#ff000021'
                      });
                      }
                      if (pv > 255) {
                      jQuery('.pverror').text('You Enter Wrong Value' + pv + '. Please Enter Number Between 0-255');
                      jQuery('.pverror').show();
                      jQuery('input#ddlPV').css({
                          'border': '1px solid red',
                          'background': '#ff000021'
                      });
                      }
                      if (inputCpm > 51) {
                      jQuery('.maxcpmerror').text('You Enter Wrong Value' + inputCpm + '. Please Enter Number Between 0-50');
                      jQuery('.maxcpmerror').show();
                      jQuery('input#inputCPM').css({
                          'border': '1px solid red',
                          'background': '#ff000021'
                      });
                      }
                      if (ddlReg == 'All') {
                      jQuery('select#ddlRegion').css({
                          'border': '1px solid red',
                          'background': '#ff000021'
                      });
                      }

                      // var img = new Image();
                      // var url = document.getElementById("inputStoreLogo").value;
                      // img.onload = function(){
                      //   jQuery('.storeerror').hide(); 
                      //   return true;  
                      // };
                      // img.onerror = function(){
                      //   jQuery('.storeerror').show(); 
                      //   return false; 
                      // }

                  } else {
                    var dailylBudget = parseInt(document.getElementById("dailylBudget").value);
                    var ddlBudget = parseInt(document.getElementById("ddlBudget").value);
                    if(dailylBudget <= ddlBudget){
                      jQuery('.totalbudegeterror').hide(); 
                      jQuery('.api-loader').show();
                      var form = jQuery("#target");
                      // console.log(form.serialize());
                    //  var BigcommerceUserID = jQuery('#BigcommerceUserID').val();
                      jQuery.ajax({
                      type: form.attr('method'),
                      url: form.attr('action'),
                      data: form.serialize(),
                      success: function (data) {
                       
                          // console.log(data.status.statusCode);
                          if (data.status.statusCode == 'F_200') {
                              jQuery('.api-loader').css('display', 'none');
                              jQuery('.failedalert').show();
                          }
                          if (data.status.statusCode == 'S_200') {                              
                              var password = data.UserDetails.password;
                              var email = data.UserDetails.userName;
                               jQuery.ajax({
                                  url : customurl,
                                  type: 'post',
                                  data: {
                                  form_key: window.FORM_KEY,
                                  optionname: 'plugin_set',
                                  optionvalue: 1,
                                   email:email,
                                   password:password
                                  },
                                  success: function (response) {
                                    jQuery('.api-loader').hide();
                                    jQuery('.successalert').show();
                                 
                                  }
                              });                            
                          }
                      }
                      });
                    } else {
                      jQuery('.totalbudegeterror').show();
                      return false;
                    }
                  }
              }
          }); 
      });         
      });
   };
   return main;
});