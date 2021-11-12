define([
    "jquery",
    "Preciso_login",
    "jquery/ui"
], function($) {

    function main(config, element) {

        function validatestore() {
            var url = document.getElementById("landPage").value;
            var pattern = /^(?:(?:https):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i;
            if (pattern.test(url)) {
                jQuery('.landignerror').hide();
                return true;
            }
            jQuery('.landignerror').show();
            return false;
        }

        jQuery(document).ready(function() {

            jQuery('.skypeBtn').click(function(){
              jQuery('#rawa-box').css('opacity','1');
              jQuery('#rawa-box').css('visibility', 'visible');

            });
            jQuery('#rawa-close ').click(function(){
              jQuery('#rawa-box').css('opacity','0');
              jQuery('#rawa-box').css('visibility', 'hidden');
            }); 

            jQuery(document).ready(function(){
                jQuery('body').on( "click", ".specialbutton", function() {
                    jQuery('.tab-pane').toggleClass('enhanced');
                    if( jQuery('.tab-pane').hasClass('enhanced') ){
                        jQuery('.dashboard_wrp').css({"display" : "none"});
                        jQuery('.headinggWrp h6.section-title.h1').css({"display": "none"});
                        jQuery('.footer-Wrp').css({"background-color": "#fff","padding": "0px 0px"});
                        jQuery('.section-wrp').css({"background-color": "#fff","padding": "0px 0px"});
                        // jQuery("section#tabs").css({"padding":" 0px 0px !important", "background": "#fff !important"});
                        jQuery("section#tabs").attr("style", "padding: 0px 0px !important; background :#fff !important;");
                        jQuery(".section-wrp").attr("style", "background : #fff !important; padding: 0px 0px !important;");
                    }
                    else{
                        jQuery('.dashboard_wrp').css({"display": "block"});
                        jQuery('.headinggWrp h6.section-title.h1').css({"display": "block"});
                        jQuery('.footer-Wrp').css({"background-color":"#e2e2e2", "padding": "10px 15px" });
                        jQuery('.section-wrp').css({"background-color":"#e2e2e2", "padding": "10px 15px" });
                        jQuery("section#tabs").attr("style", "padding : 10px 15px !important; background : #f4f6f8 !important");
                        jQuery(".section-wrp").attr("style", "background : #f4f6f8 !important; padding: 10px 15px !important;");
                    }
                });
                       
            });
 


            jQuery('#nav-tab a[data-toggle="tab"]').on('click', function(e) {
                jQuery('#nav-tab a[data-toggle="tab"]').each(function() {
                    jQuery(this).removeClass("active");
                });
                jQuery(this).addClass('active');
                localStorage.setItem('activeTab', jQuery(e.target).attr('href'));
            });
            var activeTab = localStorage.getItem('activeTab');

            if (activeTab) {
                setTimeout(
                    function() {
                        // alert('#nav-tab a[href="' + activeTab + '"]');
                        jQuery('#tabs a[href="' + activeTab + '"]').trigger('click');
                    }, 2000);
            }

            jQuery(".messageDisplayrefresh").hover(function() {
                jQuery("a.messageHiderefresh").html('<p>Balance refreshes in every 5 minutes.</p>');
                jQuery(".messageHiderefresh").toggle();
            });

            jQuery(".messageDisplayrefreshicon").hover(function() {
                jQuery("a.messageHiderefreshicon").html('<p>Refresh.</p>');
                jQuery(".messageHiderefreshicon").toggle();
            });

        });

        function eraseCookie(name) {
            createCookie(name, "", -1);
        }

        function isUrlExists(url, cb){
            jQuery.ajax({
                url:      url,
                dataType: 'text',
                type:     'GET',
                complete:  function(xhr){
                    if(typeof cb === 'function')
                       cb.apply(this, [xhr.status]);
                }
            });
        }


        function readCookie(name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        }

        function createCookie(name, value, days) {
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                var expires = "; expires=" + date.toGMTString();
            } else var expires = "";
            document.cookie = name + "=" + value + expires + "; path=/";
        }

        function thousands_separators(num) {
            var num_parts = num.toString().split(".");
            num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return num_parts.join(".");
        }

        function sortDropDownListByText() {
            // Loop for each select element on the page.
            jQuery("select").each(function() {

                // Keep track of the selected option.
                var selectedValue = jQuery(this).val();

                // Sort all the options by text. I could easily sort these by val.
                jQuery(this).html(jQuery("option", jQuery(this)).sort(function(a, b) {
                    return a.text == b.text ? 0 : a.text < b.text ? -1 : 1
                }));

                // Select one option.
                jQuery(this).val(selectedValue);
            });
        }


       function checktpye() {
          jQuery('.flagbtn').val(1);
        
        }

        function checkcreatetpye() {
          jQuery('.flagcreatebtn').val(1);
        }

         jQuery(".landingpageurl").blur(function(){
            checktpye();
         });
         jQuery(".imageurl").blur(function(){
            checktpye();
         });

        jQuery(".landingpageurl1").blur(function(){
            checkcreatetpye();
         });
         jQuery(".imageurl1").blur(function(){
            checkcreatetpye();
         });

        jQuery(".landingpageurlFocusOut").focusout(function(){
          validatedomain();
        });


      function validatedomain() {
          var url = document.querySelector(".landingpageurlFocusOut").value;
          // alert(url);
          var pattern = /^(?:(?:https):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i;
          if (pattern.test(url)) {
              $('.landingpageurl').css('background-color','#fff');
              return true;
          } 
              $('.landingpageurl').css('background-color','#ff000040');
              return false;
      }



        jQuery(document).ready(function() {
            var totalSpend = 0;
            (function($) {
                $.fn.inputFilter = function(inputFilter) {
                    return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function() {
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

            jQuery("#freqCap").inputFilter(function(value) {
                return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 255);
            });
            jQuery("#cokieTime").inputFilter(function(value) {
                return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 255);
            });
            jQuery("#cokvTime").inputFilter(function(value) {
                return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 255);
            });
            jQuery("#daiBud").inputFilter(function(value) {
                return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 1000000000);
            });
            jQuery("#mntBud").inputFilter(function(value) {
                return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 1000000000);
            });

            jQuery.ajax({
                url: "https://api.preciso.net/api/plugin/masters ",
                success: function(result) {
                    var strategyLen = result.strategyList.length;
                    var channelLen = result.channelMasters.length;

                    for (var i = 0; i < strategyLen; i++) {
                        jQuery(' <option value="' + result.strategyList[i].strategyId + '">' + result.strategyList[i].strategyName + '</option>').insertAfter(jQuery('.strategyOpt'))
                    }

                    for (var i = 0; i < channelLen; i++) {
                        jQuery(' <option value="' + result.channelMasters[i].channelId + '">' + result.channelMasters[i].channelName + '</option>').insertAfter(jQuery('.channelOpt'))
                    }
                }
            });

            jQuery('.destroyCookie').click(function() {
                sessionStorage.removeItem("login");
                sessionStorage.removeItem("campaignId");
                sessionStorage.removeItem("token");
                sessionStorage.removeItem("userId");
                localStorage.clear();
                jQuery.ajax({
                    url: Preciso_ajax_url.ajax_url,
                    type: 'post',
                    data: {
                        action: 'Preciso_set_session_destroy',
                        sessionId: 'removeAll',
                    },
                    success: function(response) {
                        location.reload(true);
                    }
                });
            });

            var cuserId = sessionStorage.getItem("userId");
            var ccampaignId = sessionStorage.getItem("campaignId");
            var ctoken = sessionStorage.getItem("token");
            if (ctoken) {
                jQuery('.token').val(ctoken);
                jQuery('.rightHeader').css('display', 'inline-block');

                var newUrl = 'https://smartbid.preciso.net/#/login?ref=shopifypayment&token=' + ctoken;
                var newURLlogin = 'https://smartbid.preciso.net/#/login?ref=shopify&token=' + ctoken;
                var footerURL = 'https://smartbid.preciso.net/#/login?ref=shopifyhelp&amp;token=' + ctoken;
                var regionUrl = 'https://smartbid.preciso.net/#/login?ref=shopifycampaigntargetingcountry&token=' + ctoken + '&abc=test';
                var deviceUrl = 'https://smartbid.preciso.net/#/login?ref=shopifycampaigntargeting&token=' + ctoken;
                var bannerUrl = 'https://smartbid.preciso.net/#/login?ref=creativeinformation&token=' + ctoken;
                var bannerStatic = 'https://smartbid.preciso.net/#/login?ref=createstatic&token=' + ctoken;

                jQuery('.bannerURl').attr("href", bannerUrl);
                jQuery('.regionURL').attr("href", regionUrl);
                jQuery('.deiveURL').attr("href", deviceUrl);
                jQuery('.bannerstaticCreate').attr("href", bannerStatic);
                jQuery('.pageRedr').attr("href", newURLlogin);
                // jQuery('.messageDisplay').attr("href", newUrl);
                jQuery('.paymentBut').attr("href", newUrl);
                jQuery('.footerLink').attr("href", footerURL);
            }


            var campaignId = sessionStorage.getItem("campaignId");
            if (ccampaignId) {
                jQuery('.CampaignId').val(ccampaignId);
            }
            var userId = sessionStorage.getItem("userId");
            if (cuserId) {
                jQuery('.userid').val(cuserId);
            }

                setTimeout(function(){
                var formSet= jQuery("#getsettings");
                //console.log(formSet.serialize());
                jQuery.ajax({
                    type: formSet.attr('method'),
                    url: formSet.attr('action'),
                    data: formSet.serialize(),
                    success: function (data) {
                    // console.log(data);
                    if(data.status.statusCode =='F_200')
                     {
                        var shopNm = jQuery('#shop').val();
                        var othtk = jQuery('#outhTk').val();
                        window.location.href = 'https://apppartner.preciso.net/login.php?shop='+shopNm+'&oauth_token='+othtk;
                        sessionStorage.removeItem("login");
                        sessionStorage.removeItem("campaignId");
                        sessionStorage.removeItem("token");
                        sessionStorage.removeItem("userId");
                     }
                     if(data.status.statusCode =='S_200')
                     {
                        var campaignId = data.campaignDetails[0].campaignId;
                        jQuery('.cmpID').val(campaignId);
                        var campaignName = data.campaignDetails[0].campaignName;
                        jQuery('#cmpName').val(campaignName);
                        var programName = data.campaignDetails[0].programName;
                        jQuery('#prmName').val(programName);
                        var regionName = data.campaignDetails[0].regionName;
                        jQuery('#regName').val(regionName);
                        var channelName = data.campaignDetails[0].channelName;
                        jQuery('#chanelNm option').each(function(index){
                         if(jQuery( this ).text() == channelName){
                            jQuery(this).prop('selected', true);
                         }else{

                         }
                         });
                        var languageName = data.campaignDetails[0].languageName;
                        jQuery('#langName').val(languageName);
                        var deviceName = data.campaignDetails[0].deviceName;
                        jQuery('#device').val(deviceName);
                        var currency = data.campaignDetails[0].currency;
                        jQuery('#currency').val(currency);
                        var statusId = data.campaignDetails[0].statusId;
                        if(statusId == 1 ){
                          jQuery('#campSat').val('Active');
                        }else{
                          jQuery('#campSat').val('Pause');
                        }

                        var monthlybudget = data.campaignDetails[0].totalBudget;
                        jQuery('#mntBud').val(monthlybudget);
                        var dailyBudget = data.campaignDetails[0].dailyBudget;
                        jQuery('#daiBud').val(dailyBudget);
                        var landingPage =  data.campaignDetails[0].landingPage;
                        jQuery('#landPage').val(landingPage);
                        var frequencyCap = data.campaignDetails[0].frequencyCap;
                        jQuery('#freqCap').val(frequencyCap);
                        var biddingStatus = data.campaignDetails[0].biddingStatus;
                        jQuery('#bidStatus option').each(function(index){
                          if(jQuery( this ).text() == biddingStatus){
                            jQuery(this).prop('selected', true);
                         }else{
                         }
                         });
                                            if(biddingStatus == 'Active'){
                             jQuery('.biddingstatus').html('<span style="font-size: 18px;color:green;margin-right:10px;">Bidding: Active!</span>');
                            }else{
                             jQuery('.biddingstatus').html('<span style="font-size: 18px;color:red;margin-right:10px;">Bidding: Pause!</span>');
                            }
                        var strategyName = data.campaignDetails[0].strategyName;
                        jQuery('#stragName option').each(function(index){
                         if(jQuery( this ).text() == strategyName){
                            jQuery(this).prop('selected', true);
                         }else{
                         }
                         });
                        var campaignType = data.campaignDetails[0].campaignType;
                        jQuery('#camptpy option').each(function(index){
                         if(jQuery( this ).val() == campaignType){
                            jQuery(this).prop('selected', true);
                         }else{
                         }
                         });

                        var payoutType = data.campaignDetails[0].payoutType;
                        jQuery('#payuType').val(payoutType);
                        var pc = data.campaignDetails[0].pc;
                        jQuery('#cokieTime').val(pc);
                        var pv = data.campaignDetails[0].pv;
                        jQuery('#cokvTime').val(pv);
                       var selectedOption = jQuery('#chanelNm').children("option:selected").text();
                       //console.log(selectedOption);
                       if (selectedOption =='Branding' || selectedOption =='Prospecting') {
                        jQuery('#stragName option').each(function(index){
                          if(jQuery(this).text() == 'MainAd Private Audience' || jQuery(this).text() == 'Public Audience'){
                           jQuery(this).show();
                          }else{
                           jQuery(this).hide();
                          }
                        });
                       }else{
                        jQuery('#stragName option').each(function(index){
                          jQuery(this).show();
                        });
                       } 
                        jQuery('.api-loader').css('display','none');

                     }
                    }
                });
                }, 1000);

            var form = jQuery("#banner");
           
            $.ajax({
            type: form.attr('method'),
            url: form.attr('action'),
            data: form.serialize(),
            success: function(data) {
                // console.log(data);
                if (data.status.statusCode == 'F_200') {

                }
                if (data.status.statusCode == 'S_200') {
                    var token = $('.token').val();
                    var bannerPrev = data.bannerPreview;
                    var arrayLen = bannerPrev.length;
                    var i;
                    for (i = 0; i < arrayLen; i++) {
                        // alert(data.bannerPreview[i].sizeCode);
                    var bannerSize = data.bannerPreview[i].sizeCode;
                    var bannerType = data.bannerPreview[i].campaignBannerType;
                    var bannerCode = "<iframe src='" + data.bannerPreview[i].bannerurl + "' width='" + data.bannerPreview[i].width + "'  height= '" + data.bannerPreview[i].height + "' Marginwidth='0' Marginheight='0' Hspace='0' Vspace='0' Frameborder='0' Scrolling='No'></iframe>";
                    var campaignType = data.bannerPreview[i].type;
                    var bannerStatus = data.bannerPreview[i].bidderstatus;
                    var cretiD = data.bannerPreview[i].creativeid;
                    var sizcd = data.bannerPreview[i].sizeCode;
                    var campaignbidderstatus = data.bannerPreview[i].campaignbidderstatus;
                        var bidding_value = data.bannerPreview[i].audit;
                        var bidding_val_type = '';
                        if(bidding_value == 1){
                         bidding_val_type = 'Approved';
                        }else{
                         bidding_val_type = 'Pending Approval';
                        }
                        if (sizcd == '999') {
                          // console.log(bannerStatus);
                         $('<tr><td class="bannerSize">Auto Created Dynamic Banner</td><td class="bannerSize hideinmobile">' + bannerSize + '</td><td>' + cretiD + '</td><td class="bannerType">' + (campaignType == 2 && bannerType == 1 || campaignType == 1 && bannerType == 2 ? '<h1 class="reddot"></h1>' : ' <span class="greendot"></span>') + (bannerType == 1 ? 'Static' : 'Dynamic') + '</td><td class="bannerStatus_val">'+bidding_val_type+'</td><td class="bannerStatus" id=' + (bannerStatus == 43 ? 'active' : 'deactive') + '>' +(bannerStatus == 100 ? 'Forced Pause' : (bannerStatus == 43 ? 'Active' : 'Deactive|Pause'))  + '</td><td class="bannerCode"><div class="bannnerIframeWrap"><button class="btn btn-green bannerClose"  style="opacity:1">X</button><div class="bannnerIframe">Loading...</div></div><button class="btn btn-green bannerPreview" data-pre="' + bannerCode + '">Preview</button>'
                          + (campaignbidderstatus == 'Active' ? (bannerStatus == 43 || bannerStatus == 49 || bannerStatus == 45  ? '<button class="btn btn-green ' + (bidding_value == 0 ? 'bannerpaused' : 'pausebanner') + '" creativeid="'+cretiD+'" sizecode="'+sizcd+'" bidderstatus="'+(bannerStatus == 43 ? '49' : '43')+'">'+ (bannerStatus == 43 ? 'Pause' : 'Activate') +'</button>' : '<button class="btnpaused_hundred btn btn-green">Activate</button>') : '<button class="btncampaignpaused btn btn-green">Activate</button>')+'</td></tr>').insertAfter($('.dyncrow'));
                        
                        } else if (sizcd == '888') {


                        var bannerTitle = JSON.parse(data.bannerPreview[i].creativeMacro);
                        var fnltt = bannerTitle[3].value;
                        // console.log(fnltt+bannerStatus+campaignbidderstatus);
                        $('<tr><td class="bannerSize">' + fnltt + '</td><td class="bannerSize hideinmobile">' + bannerSize + '</td><td>' + cretiD + '</td><td class="bannerType">' + (campaignType == 2 && bannerType == 1 || campaignType == 1 && bannerType == 2 ? '<h1 class="reddot"></h1>' : ' <span class="greendot"></span>') + (bannerType == 1 ? 'Static' : 'Dynamic') + '</td><td class="bannerStatus_val">'+bidding_val_type+'</td><td class="bannerStatus" id=' + (bannerStatus == 43 ? 'active' : 'deactive') + '>' +(bannerStatus == 100 ? 'Forced Pause' : (bannerStatus == 43 ? 'Active' : 'Deactive|Pause'))  + '</td><td class="bannerCode"><div class="bannnerIframeWrap"><button class="btn btn-green bannerClose"  style="opacity:1">X</button><div class="bannnerIframe">Loading...</div></div><button class="btn btn-green bannerPreview" data-pre="' + bannerCode + '">Preview</button><button class="btn btn-green editbanner" creativeID=' + cretiD + ' sizeCode=' + sizcd + '>Edit</button><button class="btn btn-green deletebanner" creativeID=' + cretiD + ' sizeCode=' + sizcd + '>Delete</button>'
                          + (campaignbidderstatus == 'Active' ? (bannerStatus == 43 || bannerStatus == 49 || bannerStatus == 45  ? '<button class="btn btn-green ' + (bidding_value == 0 ? 'bannerpaused' : 'pausebanner') + '" creativeid="'+cretiD+'" sizecode="'+sizcd+'" bidderstatus="'+(bannerStatus == 43 ? '49' : '43')+'">'+ (bannerStatus == 43 ? 'Pause' : 'Activate') +'</button>' : '<button class="btnpaused_hundred btn btn-green">Activate</button>') : '<button class="btncampaignpaused btn btn-green">Activate</button>')+'</td></tr>').insertAfter($('.dyncrow'));
                      }
                        else {
                          // console.log('fnltt'+bannerStatus);
                         $('<tr><td class="bannerSize"></td><td class="bannerSize hideinmobile">' + bannerSize + '</td><td>' + cretiD + '</td><td class="bannerType">' + (campaignType == 2 && bannerType == 1 || campaignType == 1 && bannerType == 2 ? '<h1 class="reddot"></h1>' : ' <span class="greendot"></span>') + (bannerType == 1 ? 'Static' : 'Dynamic') + '</td><td class="bannerStatus_val">'+bidding_val_type+'</td><td class="bannerStatus" id=' + (bannerStatus == 43 ? 'active' : 'deactive') + '>' +(bannerStatus == 100 ? 'Forced Pause' : (bannerStatus == 43 ? 'Active' : 'Deactive|Pause'))  + '</td><td class="bannerCode"><div class="bannnerIframeWrap"><button class="btn btn-green bannerClose"  style="opacity:1">X</button><div class="bannnerIframe">Loading...</div></div><button class="btn btn-green bannerPreview" data-pre="' + bannerCode + '">Preview</button><a class="editbannerbtn" target="_blank" href="https://smartbid.preciso.net/#/login?ref=createstaticbyid&token='+token+'&cid='+cretiD+'">Edit</a><button class="btn btn-green deletebanner" creativeID=' + cretiD + ' sizeCode=' + sizcd + '>Delete</button>'+ (campaignbidderstatus == 'Active' ? (bannerStatus == 43 || bannerStatus == 49 || bannerStatus == 45  ? '<button class="btn btn-green ' + (bidding_value == 0 ? 'bannerpaused' : 'pausebanner') + '" creativeid="'+cretiD+'" sizecode="'+sizcd+'" bidderstatus="'+(bannerStatus == 43 ? '49' : '43')+'">'+ (bannerStatus == 43 ? 'Pause' : 'Activate') +'</button>' : '<button class="btnpaused_hundred btn btn-green">Activate</button>') : '<button class="btncampaignpaused btn btn-green">Activate</button>')+'</td></tr>').insertAfter($('.dyncrow'));
                        }
                    }
                    $('.successupdatebanner').hide();
                }
            }
        });


            jQuery(document).on('click', '.deletebanner', function(){
            jQuery('.api-loader').show(); 
            var creativeCode = jQuery(this).attr('creativeid');
              var sizeCODE = jQuery(this).attr('sizecode');
              jQuery('.creaativeID').val(creativeCode);
              jQuery('.sizeCCode').val(sizeCODE);
              //console.log(creativeCode+sizeCODE);

                var formcr= jQuery("#deletebanner");
                //console.log(formcr.serialize());
                jQuery.ajax({
                    type: formcr.attr('method'),
                    url: formcr.attr('action'),
                    data: formcr.serialize(),
                    success: function (data) {
                    //console.log(data);
                    if(data.status.statusCode =='F_200')
                     {
                      jQuery('.api-loader').hide(); 
                        jQuery('.failedalertbanner').show();

                     }
                     if(data.status.statusCode =='S_200')
                     {
                         jQuery('.api-loader').hide(); 
                         jQuery('.successalertbanner').show();
                       //console.log('Created Successfully');
                     }
                    }
                });

          });

        
    jQuery('.bannerdeletesuccess').click(function() {
        jQuery("#tablebanner").find("tr:not(:nth-child(1)):not(:nth-child(2))").remove();
        var form = jQuery("#banner");
        jQuery.ajax({
            type: form.attr('method'),
            url: form.attr('action'),
            data: form.serialize(),
            success: function(data) {
                // console.log(data);
                if (data.status.statusCode == 'F_200') {}
                if (data.status.statusCode == 'S_200') {
                    var token = jQuery('.token').val();
                    var bannerPrev = data.bannerPreview;
                    var arrayLen = bannerPrev.length;
                    var i;
                    for (i = 0; i < arrayLen; i++) {
                        // alert(data.bannerPreview[i].sizeCode);
                    var bannerSize = data.bannerPreview[i].sizeCode;
                    var bannerType = data.bannerPreview[i].campaignBannerType;
                    var bannerCode = "<iframe src='" + data.bannerPreview[i].bannerurl + "' width='" + data.bannerPreview[i].width + "'  height= '" + data.bannerPreview[i].height + "' Marginwidth='0' Marginheight='0' Hspace='0' Vspace='0' Frameborder='0' Scrolling='No'></iframe>";
                    var campaignType = data.bannerPreview[i].type;
                    var bannerStatus = data.bannerPreview[i].bidderstatus;
                    var cretiD = data.bannerPreview[i].creativeid;
                    var campaignbidderstatus = data.bannerPreview[i].campaignbidderstatus;
                    var sizcd = data.bannerPreview[i].sizeCode;
                        var bidding_value = data.bannerPreview[i].audit;
                        var bidding_val_type = '';
                        if(bidding_value == 1){
                         bidding_val_type = 'Approved';
                        }else{
                         bidding_val_type = 'Pending Approval';
                        }
                        if (sizcd == '999') {
                          // console.log(bannerStatus);
                         jQuery('<tr><td class="bannerSize">Auto Created Dynamic Banner</td><td class="bannerSize hideinmobile">' + bannerSize + '</td><td>' + cretiD + '</td><td class="bannerType">' + (campaignType == 2 && bannerType == 1 || campaignType == 1 && bannerType == 2 ? '<h1 class="reddot"></h1>' : ' <span class="greendot"></span>') + (bannerType == 1 ? 'Static' : 'Dynamic') + '</td><td class="bannerStatus_val">'+bidding_val_type+'</td><td class="bannerStatus" id=' + (bannerStatus == 43 ? 'active' : 'deactive') + '>' +(bannerStatus == 100 ? 'Forced Pause' : (bannerStatus == 43 ? 'Active' : 'Deactive|Pause'))  + '</td><td class="bannerCode"><div class="bannnerIframeWrap"><button class="btn btn-green bannerClose"  style="opacity:1">X</button><div class="bannnerIframe">Loading...</div></div><button class="btn btn-green bannerPreview" data-pre="' + bannerCode + '">Preview</button>'
                          + (campaignbidderstatus == 'Active' ? (bannerStatus == 43 || bannerStatus == 49 || bannerStatus == 45  ? '<button class="btn btn-green ' + (bidding_value == 0 ? 'bannerpaused' : 'pausebanner') + '" creativeid="'+cretiD+'" sizecode="'+sizcd+'" bidderstatus="'+(bannerStatus == 43 ? '49' : '43')+'">'+ (bannerStatus == 43 ? 'Pause' : 'Activate') +'</button>' : '<button class="btnpaused_hundred btn btn-green">Activate</button>') : '<button class="btncampaignpaused btn btn-green">Activate</button>')+'</td></tr>').insertAfter(jQuery('.dyncrow'));
                        
                        } else if (sizcd == '888') {


                        var bannerTitle = JSON.parse(data.bannerPreview[i].creativeMacro);
                        var fnltt = bannerTitle[3].value;
                        // console.log(fnltt+bannerStatus+campaignbidderstatus);
                        jQuery('<tr><td class="bannerSize">' + fnltt + '</td><td class="bannerSize hideinmobile">' + bannerSize + '</td><td>' + cretiD + '</td><td class="bannerType">' + (campaignType == 2 && bannerType == 1 || campaignType == 1 && bannerType == 2 ? '<h1 class="reddot"></h1>' : ' <span class="greendot"></span>') + (bannerType == 1 ? 'Static' : 'Dynamic') + '</td><td class="bannerStatus_val">'+bidding_val_type+'</td><td class="bannerStatus" id=' + (bannerStatus == 43 ? 'active' : 'deactive') + '>' +(bannerStatus == 100 ? 'Forced Pause' : (bannerStatus == 43 ? 'Active' : 'Deactive|Pause'))  + '</td><td class="bannerCode"><div class="bannnerIframeWrap"><button class="btn btn-green bannerClose"  style="opacity:1">X</button><div class="bannnerIframe">Loading...</div></div><button class="btn btn-green bannerPreview" data-pre="' + bannerCode + '">Preview</button><button class="btn btn-green editbanner" creativeID=' + cretiD + ' sizeCode=' + sizcd + '>Edit</button><button class="btn btn-green deletebanner" creativeID=' + cretiD + ' sizeCode=' + sizcd + '>Delete</button>'
                          + (campaignbidderstatus == 'Active' ? (bannerStatus == 43 || bannerStatus == 49 || bannerStatus == 45  ? '<button class="btn btn-green ' + (bidding_value == 0 ? 'bannerpaused' : 'pausebanner') + '" creativeid="'+cretiD+'" sizecode="'+sizcd+'" bidderstatus="'+(bannerStatus == 43 ? '49' : '43')+'">'+ (bannerStatus == 43 ? 'Pause' : 'Activate') +'</button>' : '<button class="btnpaused_hundred btn btn-green">Activate</button>') : '<button class="btncampaignpaused btn btn-green">Activate</button>')+'</td></tr>').insertAfter(jQuery('.dyncrow'));
                      }
                        else {
                          // console.log('fnltt'+bannerStatus);
                         jQuery('<tr><td class="bannerSize"></td><td class="bannerSize hideinmobile">' + bannerSize + '</td><td>' + cretiD + '</td><td class="bannerType">' + (campaignType == 2 && bannerType == 1 || campaignType == 1 && bannerType == 2 ? '<h1 class="reddot"></h1>' : ' <span class="greendot"></span>') + (bannerType == 1 ? 'Static' : 'Dynamic') + '</td><td class="bannerStatus_val">'+bidding_val_type+'</td><td class="bannerStatus" id=' + (bannerStatus == 43 ? 'active' : 'deactive') + '>' +(bannerStatus == 100 ? 'Forced Pause' : (bannerStatus == 43 ? 'Active' : 'Deactive|Pause'))  + '</td><td class="bannerCode"><div class="bannnerIframeWrap"><button class="btn btn-green bannerClose"  style="opacity:1">X</button><div class="bannnerIframe">Loading...</div></div><button class="btn btn-green bannerPreview" data-pre="' + bannerCode + '">Preview</button><a class="editbannerbtn" target="_blank" href="https://smartbid.preciso.net/#/login?ref=createstaticbyid&token='+token+'&cid='+cretiD+'">Edit</a><button class="btn btn-green deletebanner" creativeID=' + cretiD + ' sizeCode=' + sizcd + '>Delete</button>'+ (campaignbidderstatus == 'Active' ? (bannerStatus == 43 || bannerStatus == 49 || bannerStatus == 45  ? '<button class="btn btn-green ' + (bidding_value == 0 ? 'bannerpaused' : 'pausebanner') + '" creativeid="'+cretiD+'" sizecode="'+sizcd+'" bidderstatus="'+(bannerStatus == 43 ? '49' : '43')+'">'+ (bannerStatus == 43 ? 'Pause' : 'Activate') +'</button>' : '<button class="btnpaused_hundred btn btn-green">Activate</button>') : '<button class="btncampaignpaused btn btn-green">Activate</button>')+'</td></tr>').insertAfter(jQuery('.dyncrow'));
                        }


                    }
                    jQuery('.successalertbanner').hide();
                }
            }
        });
    });

                    jQuery(document).on("click", ".pausebanner", function() {
                        var creative_id = jQuery(this).attr('creativeid');
                        var size_code = jQuery(this).attr('sizecode');
                        // console.log(size_code);
                        var bidder_status = jQuery(this).attr('bidderstatus');
                        jQuery('.cretive_Id').val(creative_id);
                        jQuery('.size_Code').val(size_code);
                        jQuery('.bidder_Status').val(bidder_status);

                        var formcr = jQuery("#updateCreativeStatus");
                        // console.log(formcr.serialize());

                        jQuery.ajax({
                            type: formcr.attr('method'),
                            url: formcr.attr('action'),
                            data: formcr.serialize(),
                            success: function(data) {
                                // console.log(data.rtgBanner);
                                if (data.status.statusCode == 'F_200') {
                                }
                                if (data.status.statusCode == 'S_200') {
                                  jQuery('.statusupdatebanner').show();

                        jQuery("#tablebanner").find("tr:not(:nth-child(1)):not(:nth-child(2))").remove();
                        var form = jQuery("#banner");
                        jQuery.ajax({
                            type: form.attr('method'),
                            url: form.attr('action'),
                            data: form.serialize(),
                            success: function(data) {
                                //console.log(data);
                                if (data.status.statusCode == 'F_200') {}
                            if (data.status.statusCode == 'S_200') {
                                var token = jQuery('.token').val();
                                var bannerPrev = data.bannerPreview;
                                var arrayLen = bannerPrev.length;
                                var i;
                                for (i = 0; i < arrayLen; i++) {
                                    // alert(data.bannerPreview[i].sizeCode);
                                    var bannerSize = data.bannerPreview[i].sizeCode;
                                    var bannerType = data.bannerPreview[i].campaignBannerType;
                                    var bannerCode = "<iframe src='" + data.bannerPreview[i].bannerurl + "' width='" + data.bannerPreview[i].width + "'  height= '" + data.bannerPreview[i].height + "' Marginwidth='0' Marginheight='0' Hspace='0' Vspace='0' Frameborder='0' Scrolling='No'></iframe>";
                                    var campaignType = data.bannerPreview[i].type;
                                    var bannerStatus = data.bannerPreview[i].bidderstatus;
                                    var cretiD = data.bannerPreview[i].creativeid;
                                    var sizcd = data.bannerPreview[i].sizeCode;
                                    var campaignbidderstatus = data.bannerPreview[i].campaignbidderstatus;
                                    var bidding_value = data.bannerPreview[i].audit;
                                    var bidding_val_type = '';
                                        if(bidding_value == 1){
                                         bidding_val_type = 'Approved';
                                        }else{
                                         bidding_val_type = 'Pending Approval';
                                        }
                                        if (sizcd == '999') {
                                          // console.log(bannerStatus);
                                         jQuery('<tr><td class="bannerSize">Auto Created Dynamic Banner</td><td class="bannerSize hideinmobile">' + bannerSize + '</td><td>' + cretiD + '</td><td class="bannerType">' + (campaignType == 2 && bannerType == 1 || campaignType == 1 && bannerType == 2 ? '<h1 class="reddot"></h1>' : ' <span class="greendot"></span>') + (bannerType == 1 ? 'Static' : 'Dynamic') + '</td><td class="bannerStatus_val">'+bidding_val_type+'</td><td class="bannerStatus" id=' + (bannerStatus == 43 ? 'active' : 'deactive') + '>' +(bannerStatus == 100 ? 'Forced Pause' : (bannerStatus == 43 ? 'Active' : 'Deactive|Pause'))  + '</td><td class="bannerCode"><div class="bannnerIframeWrap"><button class="btn btn-green bannerClose"  style="opacity:1">X</button><div class="bannnerIframe">Loading...</div></div><button class="btn btn-green bannerPreview" data-pre="' + bannerCode + '">Preview</button>'
                                          + (campaignbidderstatus == 'Active' ? (bannerStatus == 43 || bannerStatus == 49 || bannerStatus == 45  ? '<button class="btn btn-green ' + (bidding_value == 0 ? 'bannerpaused' : 'pausebanner') + '" creativeid="'+cretiD+'" sizecode="'+sizcd+'" bidderstatus="'+(bannerStatus == 43 ? '49' : '43')+'">'+ (bannerStatus == 43 ? 'Pause' : 'Activate') +'</button>' : '<button class="btnpaused_hundred btn btn-green">Activate</button>') : '<button class="btncampaignpaused btn btn-green">Activate</button>')+'</td></tr>').insertAfter(jQuery('.dyncrow'));
                                        
                                        } else if (sizcd == '888') {


                                        var bannerTitle = JSON.parse(data.bannerPreview[i].creativeMacro);
                                        var fnltt = bannerTitle[3].value;
                                        // console.log(fnltt+bannerStatus+campaignbidderstatus);
                                        jQuery('<tr><td class="bannerSize">' + fnltt + '</td><td class="bannerSize hideinmobile">' + bannerSize + '</td><td>' + cretiD + '</td><td class="bannerType">' + (campaignType == 2 && bannerType == 1 || campaignType == 1 && bannerType == 2 ? '<h1 class="reddot"></h1>' : ' <span class="greendot"></span>') + (bannerType == 1 ? 'Static' : 'Dynamic') + '</td><td class="bannerStatus_val">'+bidding_val_type+'</td><td class="bannerStatus" id=' + (bannerStatus == 43 ? 'active' : 'deactive') + '>' +(bannerStatus == 100 ? 'Forced Pause' : (bannerStatus == 43 ? 'Active' : 'Deactive|Pause'))  + '</td><td class="bannerCode"><div class="bannnerIframeWrap"><button class="btn btn-green bannerClose"  style="opacity:1">X</button><div class="bannnerIframe">Loading...</div></div><button class="btn btn-green bannerPreview" data-pre="' + bannerCode + '">Preview</button><button class="btn btn-green editbanner" creativeID=' + cretiD + ' sizeCode=' + sizcd + '>Edit</button><button class="btn btn-green deletebanner" creativeID=' + cretiD + ' sizeCode=' + sizcd + '>Delete</button>'
                                          + (campaignbidderstatus == 'Active' ? (bannerStatus == 43 || bannerStatus == 49 || bannerStatus == 45  ? '<button class="btn btn-green ' + (bidding_value == 0 ? 'bannerpaused' : 'pausebanner') + '" creativeid="'+cretiD+'" sizecode="'+sizcd+'" bidderstatus="'+(bannerStatus == 43 ? '49' : '43')+'">'+ (bannerStatus == 43 ? 'Pause' : 'Activate') +'</button>' : '<button class="btnpaused_hundred btn btn-green">Activate</button>') : '<button class="btncampaignpaused btn btn-green">Activate</button>')+'</td></tr>').insertAfter(jQuery('.dyncrow'));
                                      }
                                        else {
                                          // console.log('fnltt'+bannerStatus);
                                         jQuery('<tr><td class="bannerSize"></td><td class="bannerSize hideinmobile">' + bannerSize + '</td><td>' + cretiD + '</td><td class="bannerType">' + (campaignType == 2 && bannerType == 1 || campaignType == 1 && bannerType == 2 ? '<h1 class="reddot"></h1>' : ' <span class="greendot"></span>') + (bannerType == 1 ? 'Static' : 'Dynamic') + '</td><td class="bannerStatus_val">'+bidding_val_type+'</td><td class="bannerStatus" id=' + (bannerStatus == 43 ? 'active' : 'deactive') + '>' +(bannerStatus == 100 ? 'Forced Pause' : (bannerStatus == 43 ? 'Active' : 'Deactive|Pause'))  + '</td><td class="bannerCode"><div class="bannnerIframeWrap"><button class="btn btn-green bannerClose"  style="opacity:1">X</button><div class="bannnerIframe">Loading...</div></div><button class="btn btn-green bannerPreview" data-pre="' + bannerCode + '">Preview</button><a class="editbannerbtn" target="_blank" href="https://smartbid.preciso.net/#/login?ref=createstaticbyid&token='+token+'&cid='+cretiD+'">Edit</a><button class="btn btn-green deletebanner" creativeID=' + cretiD + ' sizeCode=' + sizcd + '>Delete</button>'+ (campaignbidderstatus == 'Active' ? (bannerStatus == 43 || bannerStatus == 49 || bannerStatus == 45  ? '<button class="btn btn-green ' + (bidding_value == 0 ? 'bannerpaused' : 'pausebanner') + '" creativeid="'+cretiD+'" sizecode="'+sizcd+'" bidderstatus="'+(bannerStatus == 43 ? '49' : '43')+'">'+ (bannerStatus == 43 ? 'Pause' : 'Activate') +'</button>' : '<button class="btnpaused_hundred btn btn-green">Activate</button>') : '<button class="btncampaignpaused btn btn-green">Activate</button>')+'</td></tr>').insertAfter(jQuery('.dyncrow'));
                                        }
                                }
                            }
                            }
                        });


                                }
                            }
                        });

                  jQuery(document).on("click", ".statusupdatesuccess", function() {
                        jQuery(".statusupdatebanner").hide();
                    });
                });

    jQuery(document).on('click', '.editbanner', function(){
        // console.log("ss");
        var creativeCode = jQuery(this).attr('creativeid');
        jQuery('.editcreaativeID').val(creativeCode);
        jQuery('.crtVID').val(creativeCode);

            var formcr= jQuery("#bannerDetails");
            jQuery.ajax({
                type: formcr.attr('method'),
                url: formcr.attr('action'),
                data: formcr.serialize(),
                success: function (data) {
                // console.log(data);
                if(data.status.statusCode =='F_200')
                 {
                   // alert('unsucessful');
                 }
                 if(data.status.statusCode =='S_200')
                 {
                   var bannerDt = JSON.parse(data.rtgBanner[0].creativeMacro);
                   // console.log(bannerDt);
                   jQuery('.titleval').val(bannerDt[3].value);
                    var editarrLEn = bannerDt.length; 
                    if(editarrLEn == 9){
                   jQuery('#editprdIDCR').val(bannerDt[8].value);
                   }else{
                   jQuery('#editprdIDCR').val(' ');
                   }
                   jQuery('.brandval').val(bannerDt[2].value);
                   jQuery('.priceval').val(bannerDt[4].value);
                   jQuery('.imageurl').val(bannerDt[1].value);
                   jQuery('.landingpageurl').val(bannerDt[0].value);
                   jQuery('.buttontext').val(bannerDt[6].value);
                 }
                }
            });

    });


        jQuery('#dynamicbanneredit').click(function(){
          var varTitle = jQuery('.titleval').val();
          var varBrand = jQuery('.brandval').val();
          var varprice = jQuery('.priceval').val();
          var varimage = jQuery('.imageurl').val();
          var varlandingpage = jQuery('.landingpageurl').val();
          var varbuttonTxt = jQuery('.buttontext').val();

          if(varTitle == '' || varBrand == '' || varprice =='' || varimage == '' || varlandingpage == '' ||  varbuttonTxt == ''){

            if(varTitle == ''){
              jQuery('.titleval').css('background-color','#ff000040');
            }else{
              jQuery('.titleval').css('background-color','#fff');
            }

            if(varBrand == ''){
              jQuery('.brandval').css('background-color','#ff000040');
            }else{
              jQuery('.brandval').css('background-color','#fff');
            }

            if(varprice == ''){
              jQuery('.priceval').css('background-color','#ff000040');
            }else{
              jQuery('.priceval').css('background-color','#fff');
            }

            if(varbuttonTxt == ''){
              jQuery('.buttontext').css('background-color','#ff000040');
            }else{
              jQuery('.buttontext').css('background-color','#fff');
            }

          }else{

            if(varTitle == ''){
              jQuery('.titleval').css('background-color','#ff000040');
            }else{
              jQuery('.titleval').css('background-color','#fff');
            }

            if(varBrand == ''){
              jQuery('.brandval').css('background-color','#ff000040');
            }else{
              jQuery('.brandval').css('background-color','#fff');
            }

            if(varprice == ''){
              jQuery('.priceval').css('background-color','#ff000040');
            }else{
              jQuery('.priceval').css('background-color','#fff');
            }

            if(varbuttonTxt == ''){
              jQuery('.buttontext').css('background-color','#ff000040');
            }else{
              jQuery('.buttontext').css('background-color','#fff');
            }

            if(varimage != '' ){
          isUrlExists(varimage, function(status){
            if(status === 200){
              jQuery('.imageurl').css('background-color','#fff');
                var formcr= jQuery("#editBanner");
                  jQuery.ajax({
                      type: formcr.attr('method'),
                      url: formcr.attr('action'),
                      data: formcr.serialize(),
                      success: function (data) {
                      //console.log(data);
                      if(data.status.statusCode =='F_200')
                       {
                         // alert('unsucessful');
                       }
                       if(data.status.statusCode =='S_200')
                       {
                         
                         jQuery('.edit_banner_popup').hide();
                         jQuery('.successupdatebanner').show();
                       }
                      }
                  });
            }
            else if(status === 404){
              jQuery('.imageurl').css('background-color','#ff000040');
              }
          });
            }

          }
        });




        jQuery('.successupdatebtnbanner').click(function() {
            jQuery("#tablebanner").find("tr:not(:nth-child(1)):not(:nth-child(2))").remove();
            var form = jQuery("#banner");
            jQuery.ajax({
                type: form.attr('method'),
                url: form.attr('action'),
                data: form.serialize(),
                success: function(data) {
                    // console.log(data);
                    if (data.status.statusCode == 'F_200') {

                    }
                    if (data.status.statusCode == 'S_200') {
                        var token = jQuery('.token').val();
                        var bannerPrev = data.bannerPreview;
                        var arrayLen = bannerPrev.length;
                        var i;
                        for (i = 0; i < arrayLen; i++) {
                            // alert(data.bannerPreview[i].sizeCode);
                        var bannerSize = data.bannerPreview[i].sizeCode;
                        var bannerType = data.bannerPreview[i].campaignBannerType;
                        var bannerCode = "<iframe src='" + data.bannerPreview[i].bannerurl + "' width='" + data.bannerPreview[i].width + "'  height= '" + data.bannerPreview[i].height + "' Marginwidth='0' Marginheight='0' Hspace='0' Vspace='0' Frameborder='0' Scrolling='No'></iframe>";
                        var campaignType = data.bannerPreview[i].type;
                        var bannerStatus = data.bannerPreview[i].bidderstatus;
                        var cretiD = data.bannerPreview[i].creativeid;
                        var sizcd = data.bannerPreview[i].sizeCode;
                        var campaignbidderstatus = data.bannerPreview[i].campaignbidderstatus;
                            var bidding_value = data.bannerPreview[i].audit;
                            var bidding_val_type = '';
                            if(bidding_value == 1){
                             bidding_val_type = 'Approved';
                            }else{
                             bidding_val_type = 'Pending Approval';
                            }
                            if (sizcd == '999') {
                              // console.log(bannerStatus);
                             jQuery('<tr><td class="bannerSize">Auto Created Dynamic Banner</td><td class="bannerSize hideinmobile">' + bannerSize + '</td><td>' + cretiD + '</td><td class="bannerType">' + (campaignType == 2 && bannerType == 1 || campaignType == 1 && bannerType == 2 ? '<h1 class="reddot"></h1>' : ' <span class="greendot"></span>') + (bannerType == 1 ? 'Static' : 'Dynamic') + '</td><td class="bannerStatus_val">'+bidding_val_type+'</td><td class="bannerStatus" id=' + (bannerStatus == 43 ? 'active' : 'deactive') + '>' +(bannerStatus == 100 ? 'Forced Pause' : (bannerStatus == 43 ? 'Active' : 'Deactive|Pause'))  + '</td><td class="bannerCode"><div class="bannnerIframeWrap"><button class="btn btn-green bannerClose"  style="opacity:1">X</button><div class="bannnerIframe">Loading...</div></div><button class="btn btn-green bannerPreview" data-pre="' + bannerCode + '">Preview</button>'
                              + (campaignbidderstatus == 'Active' ? (bannerStatus == 43 || bannerStatus == 49 || bannerStatus == 45  ? '<button class="btn btn-green ' + (bidding_value == 0 ? 'bannerpaused' : 'pausebanner') + '" creativeid="'+cretiD+'" sizecode="'+sizcd+'" bidderstatus="'+(bannerStatus == 43 ? '49' : '43')+'">'+ (bannerStatus == 43 ? 'Pause' : 'Activate') +'</button>' : '<button class="btnpaused_hundred btn btn-green">Activate</button>') : '<button class="btncampaignpaused btn btn-green">Activate</button>')+'</td></tr>').insertAfter(jQuery('.dyncrow'));
                            
                            } else if (sizcd == '888') {


                            var bannerTitle = JSON.parse(data.bannerPreview[i].creativeMacro);
                            var fnltt = bannerTitle[3].value;
                            // console.log(fnltt+bannerStatus+campaignbidderstatus);
                            jQuery('<tr><td class="bannerSize">' + fnltt + '</td><td class="bannerSize hideinmobile">' + bannerSize + '</td><td>' + cretiD + '</td><td class="bannerType">' + (campaignType == 2 && bannerType == 1 || campaignType == 1 && bannerType == 2 ? '<h1 class="reddot"></h1>' : ' <span class="greendot"></span>') + (bannerType == 1 ? 'Static' : 'Dynamic') + '</td><td class="bannerStatus_val">'+bidding_val_type+'</td><td class="bannerStatus" id=' + (bannerStatus == 43 ? 'active' : 'deactive') + '>' +(bannerStatus == 100 ? 'Forced Pause' : (bannerStatus == 43 ? 'Active' : 'Deactive|Pause'))  + '</td><td class="bannerCode"><div class="bannnerIframeWrap"><button class="btn btn-green bannerClose"  style="opacity:1">X</button><div class="bannnerIframe">Loading...</div></div><button class="btn btn-green bannerPreview" data-pre="' + bannerCode + '">Preview</button><button class="btn btn-green editbanner" creativeID=' + cretiD + ' sizeCode=' + sizcd + '>Edit</button><button class="btn btn-green deletebanner" creativeID=' + cretiD + ' sizeCode=' + sizcd + '>Delete</button>'
                              + (campaignbidderstatus == 'Active' ? (bannerStatus == 43 || bannerStatus == 49 || bannerStatus == 45  ? '<button class="btn btn-green ' + (bidding_value == 0 ? 'bannerpaused' : 'pausebanner') + '" creativeid="'+cretiD+'" sizecode="'+sizcd+'" bidderstatus="'+(bannerStatus == 43 ? '49' : '43')+'">'+ (bannerStatus == 43 ? 'Pause' : 'Activate') +'</button>' : '<button class="btnpaused_hundred btn btn-green">Activate</button>') : '<button class="btncampaignpaused btn btn-green">Activate</button>')+'</td></tr>').insertAfter(jQuery('.dyncrow'));
                          }
                            else {
                              // console.log('fnltt'+bannerStatus);
                             jQuery('<tr><td class="bannerSize"></td><td class="bannerSize hideinmobile">' + bannerSize + '</td><td>' + cretiD + '</td><td class="bannerType">' + (campaignType == 2 && bannerType == 1 || campaignType == 1 && bannerType == 2 ? '<h1 class="reddot"></h1>' : ' <span class="greendot"></span>') + (bannerType == 1 ? 'Static' : 'Dynamic') + '</td><td class="bannerStatus_val">'+bidding_val_type+'</td><td class="bannerStatus" id=' + (bannerStatus == 43 ? 'active' : 'deactive') + '>' +(bannerStatus == 100 ? 'Forced Pause' : (bannerStatus == 43 ? 'Active' : 'Deactive|Pause'))  + '</td><td class="bannerCode"><div class="bannnerIframeWrap"><button class="btn btn-green bannerClose"  style="opacity:1">X</button><div class="bannnerIframe">Loading...</div></div><button class="btn btn-green bannerPreview" data-pre="' + bannerCode + '">Preview</button><a class="editbannerbtn" target="_blank" href="https://smartbid.preciso.net/#/login?ref=createstaticbyid&token='+token+'&cid='+cretiD+'">Edit</a><button class="btn btn-green deletebanner" creativeID=' + cretiD + ' sizeCode=' + sizcd + '>Delete</button>'+ (campaignbidderstatus == 'Active' ? (bannerStatus == 43 || bannerStatus == 49 || bannerStatus == 45  ? '<button class="btn btn-green ' + (bidding_value == 0 ? 'bannerpaused' : 'pausebanner') + '" creativeid="'+cretiD+'" sizecode="'+sizcd+'" bidderstatus="'+(bannerStatus == 43 ? '49' : '43')+'">'+ (bannerStatus == 43 ? 'Pause' : 'Activate') +'</button>' : '<button class="btnpaused_hundred btn btn-green">Activate</button>') : '<button class="btncampaignpaused btn btn-green">Activate</button>')+'</td></tr>').insertAfter(jQuery('.dyncrow'));
                            }
                        }
                        jQuery('.successupdatebanner').hide();
                    }
                }
            });

    });


            var form = jQuery("#paymentsettings");
            jQuery.ajax({
                type: form.attr('method'),
                url: form.attr('action'),
                data: form.serialize(),
                success: function(data) {
                    if (data.status.statusCode == 'F_200') {
                        jQuery(".destroyCookie").trigger("click");
                    }
                    if (data.status.statusCode == 'S_200') {

                        var paymentCount = data.paymentDetails;
                        var payarrayLen = paymentCount.length;
                        jQuery('.remainBudget').html(data.remainingBudget + ' €');
                        jQuery('.totalBudget').html(data.totalBudget + ' €');
                        jQuery('.paymentRecevied').html(data.totalPaymentReceived + ' €');
                        jQuery('.totalFundRemain').html(data.totalRemainingFundAvailable + ' €');
                        var i;
                        for (i = 0; i < payarrayLen; i++) {
                            jQuery('<tr><td>' + data.paymentDetails[i].PaidDate + '</td><td>' + data.paymentDetails[i].PaidAmount + ' €</td><td>' + data.paymentDetails[i].PaymentType + '</td></tr>').insertAfter(jQuery('.paydyncrow'));
                            if (data.totalBudget > data.totalPaymentReceived) {
                                totalSpend = data.totalPaymentReceived - data.remainingBudget;
                            } else {
                                totalSpend = data.totalBudget - data.remainingBudget;
                            }

                            jQuery('.totalSpentBud').html(totalSpend);
                        }

                        jQuery.ajax({
                            type: 'GET',
                            url: 'https://api.preciso.net/api/plugin/getrebate?userId=' + jQuery('.userid').val() + '&token=' + jQuery('.token').val(),
                            success: function(data) {
                                if (data.status.statusCode == 'S_200') {
                                    var rebateDetails = data.rebateDetails;
                                    var count_rebateDetails = rebateDetails.length;
                                    var rebateHTML = '';
                                    jQuery.each(rebateDetails, function(key, value) {
                                        var rebate = value.rebate;
                                        var rebate_res = rebate.split(".");
                                        rebateHTML += '<div class="col-3 offset-right10 "><div class="content-box mr-b0"><span>Deposit  >= ' + value.slabFrom + ' &euro;</span><br><span>' + rebate_res[0] + '% discount</span></div></div>';
                                    });
                                    if (count_rebateDetails > 0) {
                                        jQuery('h3.deposit_money_rebate').show();
                                        jQuery('#deposit_money_rebate').show().html(rebateHTML);
                                    }
                                }
                            }
                        });
                    }
                }
            });

            var remainBal = jQuery("#remainBalance");
            jQuery.ajax({
                type: remainBal.attr('method'),
                url: remainBal.attr('action'),
                data: remainBal.serialize(),
                success: function(data) {
                    if (data.status.statusCode == 'F_200') {
                        jQuery(".destroyCookie").trigger("click");
                    }
                    if (data.status.statusCode == 'S_200') {
                        jQuery('.remainingBalance').html('Fund/Budget Balance : ' + data.remainingBudget.remainingBudgetBalance + '€');
                        // jQuery('.messageHide').html('(' + data.remainingBudget.message + ')');
                    }
                }
            });

            setInterval(function() {
                var remainBal = jQuery("#remainBalance");
                jQuery.ajax({
                    type: remainBal.attr('method'),
                    url: remainBal.attr('action'),
                    data: remainBal.serialize(),
                    success: function(data) {
                        if (data.status.statusCode == 'F_200') {
                            jQuery(".destroyCookie").trigger("click");
                        }
                        if (data.status.statusCode == 'S_200') {
                            jQuery('.remainingBalance').html('Fund/Budget Balance : ' + data.remainingBudget.remainingBudgetBalance + '€');
                            // jQuery('.messageHide').html('(' + data.remainingBudget.message + ')');
                        }
                    }
                });
            }, 300000);

            var dailyReport = jQuery("#dailyreport");
            jQuery.ajax({
            type: dailyReport.attr('method'),
            url: dailyReport.attr('action'),
            data: dailyReport.serialize(),
            success: function (data) {

            //console.log(data);
            if(data.status.statusCode =='F_200')
             {
               
             }
             if(data.status.statusCode =='S_200')
             {

               var weeklyRep = data.weeklyReport;
               var weeklyLen = weeklyRep.length;
               var i;
               var datesArr = [];
               var clicksArr = [];
               var impressionArr = [];
               var salesArr = [];
               var viewsalesArr = [];
               var costArr = [];
               var totalimp = 0;
               var totalClick = 0;
               var totalpc = 0;
               var totalpv = 0;
               var totalmediaCost = 0;
               var convesrionSumPCPV = [];
              
               //console.log(weeklyLen);
               if(weeklyLen >= 1) {
                               
                for (i = 0; i < weeklyLen; i++) {
                 datesArr.push(data.weeklyReport[i].date);
                 clicksArr.push(data.weeklyReport[i].click);
                 var calculateImprs = data.weeklyReport[i].impression;
                 // ershad commented var calculateImprs = data.weeklyReport[i].impression/50;
                 impressionArr.push(calculateImprs);
                 salesArr.push(data.weeklyReport[i].clientSale);
                 viewsalesArr.push(data.weeklyReport[i].PVsale);
                 costArr.push(data.weeklyReport[i].FinalMediacost);
                 var conSum = data.weeklyReport[i].PVsale+data.weeklyReport[i].PCsale;
                 convesrionSumPCPV.push(conSum); 

                 totalimp += data.weeklyReport[i].impression << 0;
                 totalClick += data.weeklyReport[i].click << 0;
                 totalpc += data.weeklyReport[i].PCsale << 0;
                 totalpv += data.weeklyReport[i].PVsale << 0;
                 totalmediaCost += parseFloat(data.weeklyReport[i].FinalMediacost) || 0;
                  if((i + 1) == (weeklyLen)){

                   $('.dayImp').text(data.weeklyReport[i].impression);
                   $('.dayClk').text(data.weeklyReport[i].click);
                   $('.dayPv').text(data.weeklyReport[i].PVsale);
                   $('.dayCost').text(data.weeklyReport[i].FinalMediacost.toFixed(2)+' €');

                    if(data.weeklyReport[i].PCsale == 0){
                     ecapCal = 1;
                    }else{
                     ecapCal = data.weeklyReport[i].PCsale;
                    }
                    calculateEcpa = data.weeklyReport[i].FinalMediacost/ecapCal;

                   $('.daycpa').text(calculateEcpa+' €');
                   calSum_PCPC =data.weeklyReport[i].PVsale+data.weeklyReport[i].PCsale;
                   $('.conversionPc_PV').text(calSum_PCPC);

                    if(calSum_PCPC == 0){
                     sumCALPCPV = 1;
                    }else{
                     sumCALPCPV = calSum_PCPC;
                    }
                   var calsumPcPv = data.weeklyReport[i].FinalMediacost/sumCALPCPV;


                   $('.daypc_pv').text(calsumPcPv.toFixed(2)+' €');
                   $('.daycpm').text(data.weeklyReport[i].CPM.toFixed(2)+' €');
                  }


                }
              

               var sumSevenDay = totalimp+totalClick+totalpc+totalpv+totalmediaCost;
               if(totalpc == 0){
                totalPC = 1;
               }else{
                totalPC = totalpc;
               }
               var weekecpa = totalmediaCost/totalPC;
               var sumPc_Pv = totalpc+totalpv;
               if(sumPc_Pv == 0){
                sumPCPV = 1;
               }else{
                sumPCPV = sumPc_Pv;
               }
               var weekpc_pv = totalmediaCost/sumPCPV;
               var weekeCPm = totalmediaCost*1000/totalimp;


                $('.weekImp').text(totalimp);
                $('.weekClk').text(totalClick);
                $('.weekConversionPcPV').text(sumPc_Pv);
                $('.weekPv').text(totalpv);
                $('.weekcpapc').text(weekecpa.toFixed(2)+' €');
                $('.weekPc_Pv').text(weekpc_pv.toFixed(2)+' €');
                $('.weekmedia').text(totalmediaCost.toFixed(2)+' €');
                $('.weekCpm').text(weekeCPm.toFixed(2)+' €');




                var ctx = document.getElementById("myChart");
                ctx.height = 260;
               var ctxL = document.getElementById("myChart").getContext('2d');
                var myLineChart = new Chart(ctxL, {
                    type: 'line',
                    data: {
                        labels: datesArr,
                        datasets: [{
                                label: "Click",
                                data: clicksArr,
                                borderColor: [
                                    '#022a3a',
                                ],
                                borderWidth: 2
                            },
                            {
                                label: "Impression",
                                data: impressionArr,
                                borderColor: [
                                    '#07c18b',
                                ],
                                borderWidth: 2
                            },
                            {
                                label: "Conversions",
                                data: convesrionSumPCPV,
                                borderColor: [
                                    '#41a8df',
                                ],
                                borderWidth: 2
                            },
                            {
                                label: "Cost",
                                data: costArr,
                                borderColor: [
                                    '#57c10a',
                                ],
                                borderWidth: 2
                            }
                        ]
                    },
                    
                    options: {
                        responsive: true,
                        maintainAspectRatio: false
                    }
                });  

                }else{
                //console.log('no');
               }       

                
              }
             }
        });
            var sendCampId = sessionStorage.getItem("campaignId");

            jQuery(".messageDisplay").hover(function() {
                var remainBal = jQuery("#remainBalance");
                jQuery.ajax({
                    type: remainBal.attr('method'),
                    url: remainBal.attr('action'),
                    data: remainBal.serialize(),
                    success: function(data) {
                        if (data.status.statusCode == 'F_200') {
                            jQuery(".destroyCookie").trigger("click");
                        }
                        if (data.status.statusCode == 'S_200') {
                            if (data.remainingBudget.showTopUpMessage == true) {
                                // jQuery(".messageHide").toggle();
                            }
                        }
                    }
                });

            });


              jQuery(document).on("click", ".bannerpaused", function() {
                    jQuery(".failedpausebanner").show();
                });

              jQuery(document).on("click", ".closepausedbanner", function() {
                    jQuery(".failedpausebanner").hide();
                });

              jQuery(document).on("click", ".bannerotherpaused", function() {
                    jQuery(".failedpauseotherbanner").show();
                });

              jQuery(document).on("click", ".closepausedotherbanner", function() {
                    jQuery(".failedpauseotherbanner").hide();
                });

              jQuery(document).on("click", ".btnpaused_hundred", function() {
                    jQuery(".failedpauseohundredbanner").show();
                });

              jQuery(document).on("click", ".closepauseohundredbanner", function() {
                    jQuery(".failedpauseohundredbanner").hide();
                });

              jQuery(document).on("click", ".btncampaignpaused", function() {
                    jQuery(".failedcmapaignpaused").show();
                });

              jQuery(document).on("click", ".closecmapaignpaused", function() {
                    jQuery(".failedcmapaignpaused").hide();
                });

            jQuery('.refreshBut').click(function() {

                jQuery("#mytable").find("tr:not(:nth-child(1)):not(:nth-child(2))").remove();
                var form = jQuery("#paymentsettings");
                jQuery.ajax({
                    type: form.attr('method'),
                    url: form.attr('action'),
                    data: form.serialize(),
                    success: function(data) {
                        if (data.status.statusCode == 'F_200') {
                            jQuery(".destroyCookie").trigger("click");
                        }
                        if (data.status.statusCode == 'S_200') {
                            var paymentCount = data.paymentDetails;
                            var payarrayLen = paymentCount.length;
                            var i;
                            for (i = 0; i < payarrayLen; i++) {
                                jQuery('.remainBudget').html(data.remainingBudget + ' €');
                                jQuery('.totalBudget').html(data.totalBudget + ' €');
                                jQuery('.paymentRecevied').html(data.totalPaymentReceived + ' €');
                                jQuery('.totalFundRemain').html(data.totalRemainingFundAvailable + ' €');
                                jQuery('<tr><td>' + data.paymentDetails[i].PaidDate + '</td><td>' + data.paymentDetails[i].PaidAmount + ' €</td><td>' + data.paymentDetails[i].PaymentType + '</td></tr>').insertAfter(jQuery('.paydyncrow'));
                                // jQuery('.remainBudget').html(data.remainingBudget+' €');
                                if (data.totalBudget > data.totalPaymentReceived) {
                                    totalSpend = data.totalPaymentReceived - data.remainingBudget;
                                } else {
                                    totalSpend = data.totalBudget - data.remainingBudget;
                                }
                                jQuery('.totalSpentBud').html(totalSpend);
                            }
                        }
                    }
                });
            });

            jQuery(document).on( "click", ".editbanner", function() {
               jQuery('.edit_banner_popup').show();
               jQuery('.flagbtn').val(0);
            });
            // jQuery('.hover_bkgr_fricc').click(function(){
            //     jQuery('.hover_bkgr_fricc').hide();
            // });
            jQuery('.popupCloseButton').click(function(){
                jQuery('.hover_bkgr_fricc').hide();
            });

            jQuery('.popupCloseButton_editbanner').click(function(){
                jQuery('.edit_banner_popup').hide();
            });

            setTimeout(function() {
                sortDropDownListByText();
                jQuery('#stragName option[value="empty"]').insertBefore('#stragName option[value="23"]');
                jQuery('#camptpy option[value="empty"]').insertBefore('#camptpy option[value="2"]');
                jQuery('#chanelNm option[value="empty"]').insertBefore('#chanelNm option[value="3"]');

                jQuery("select#chanelNm").change(function() {
                    var selectedOption = jQuery(this).children("option:selected").text();
                    if (selectedOption == 'Branding' || selectedOption == 'Prospecting') {
                        jQuery('#stragName option').each(function(index) {
                            if (jQuery(this).text() == 'MainAd Private Audience' || jQuery(this).text() == 'Public Audience') {
                                jQuery("#stragName").prop("selectedIndex", 2).val();
                                jQuery(this).show();
                            } else {
                                jQuery(this).hide();
                            }
                        });
                    } else {
                        jQuery('#stragName option').each(function(index) {
                            jQuery("#stragName").prop("selectedIndex", 1).val();
                            jQuery(this).show();
                        });
                    }
                });
            }, 1200);


                 jQuery('#updatesettingSubmit').click(function(){
                      var freqcp = jQuery('#freqCap').val();
                      var pv = jQuery('#cokvTime').val();
                      var pc = jQuery('#cokieTime').val();
                      var dailybud = jQuery('#daiBud').val();
                      var monthbud = jQuery('#mntBud').val();
                      var landing =  jQuery('#landPage').val();
                      var landingURL = 0 ;
                      if( jQuery('.landignerror').is(':visible') ) {
                               landingURL = 1;
                            }
                      if(freqcp == '' ||pv == '' || pc == '' || dailybud == ''|| monthbud ==''|| landing== '' || landingURL == 1){
                        if(freqcp == ''){
                          jQuery('.freqerror').show();
                        }
                        if(pv == ''){
                          jQuery('.pverror').show();
                        }
                        if(pc == ''){
                          jQuery('.pcerror').show();
                        }
                        if(dailybud == ''){
                          jQuery('.dailybuderror').show();
                        }
                        if(monthbud == ''){
                          jQuery('.totalbuderror').show();
                          jQuery('.totalBUDGETMore').hide();
                          
                        }
                        if(landing == ''){
                          jQuery('.landignerror').show(); 
                        }

                      }else{
                        if (freqcp > 255 || pc>255 || pv >255 || dailybud < 0 || monthbud < 0 || pv<0 ||pc<0 ||freqcp<0 ) {
                          //console.log('1');
                            jQuery('.freqerror').hide();
                            jQuery('.pcerror').hide();
                            jQuery('.pverror').hide();
                            jQuery('.landignerror').hide(); 
                            jQuery('.dailybuderror').hide();
                            jQuery('.totalbuderror').hide();

                            if(freqcp > 255){
                              jQuery('.freqerror').show();
                            }
                            if(pc > 255){
                              jQuery('.pcerror').show();
                            }
                            if(pv > 255){
                              jQuery('.pverror').show();
                            }

                          }else{

                    if( parseInt(dailybud) > parseInt(monthbud)){
                      //console.log(dailybud);
                      //console.log(monthbud);
                      jQuery('.dailybuderror').show();
                      jQuery('.totalBUDGETMore').hide();
                      jQuery('.totalbuderror').show();
                      } else {
                            if(totalSpend > monthbud){
                             jQuery('.totalBUDGETMore').show();
                             jQuery('.totalbuderror').hide();
                            }else{
                             var form= jQuery("#updateSettings");
                             
                              jQuery('.totalBUDGETMore').hide();
                              jQuery('.freqerror').hide();
                              jQuery('.pcerror').hide();
                              jQuery('.pverror').hide();
                              jQuery('.landignerror').hide(); 
                              jQuery('.dailybuderror').hide();
                              jQuery('.totalbuderror').hide();
                              // console.log(form.serialize());

                              // jQuery('.api-loader').css('display','block');
                              jQuery.ajax({

                                  type: form.attr('method'),
                                  url: form.attr('action'),
                                  data: form.serialize(),
                                  success: function (data) {
                                  // console.log(data);
                                  if(data.status.statusCode =='F_200')
                                   {
                                     jQuery('.failedalert').show();
                                   }
                                   if(data.status.statusCode =='S_200')
                                   {
                                     jQuery('.successalert').show();
                                   }
                                  }
                              });
                           }
                         }
                       }
                      }
                     });
            jQuery('a[data-toggle="tab"]').on('show.bs.tab', function(e) {
                localStorage.setItem('activeTab', jQuery(e.target).attr('href'));
            });
            var activeTab = localStorage.getItem('activeTab');
            // console.log(activeTab);
            if (activeTab) {
                setTimeout(
                    function() {
                        $('#tabs a[href="' + activeTab + '"]').tab('show');
                    }, 3000);
            }

            jQuery('.pageRefresh').click(function() {
                jQuery('.api-loader').show();
                location.reload(true);
            });
            jQuery('.btn-green').click(function() {
                // jQuery('.api-loader').show();
                location.reload(true);
            });
            jQuery('.btn-red').click(function() {
                jQuery('.failedalert').hide();
            });
            jQuery(".trigger_popup_fricc").click(function() {
                jQuery('.hover_bkgr_fricc').show();
                jQuery('.flagcreatebtn').val(0);
                jQuery('#createbanner .form-wrp').each(function(){
                    jQuery(this).find('input').val('');
                });
                jQuery('#createbanner .form-wrp').each(function(){
                    jQuery(this).find('#descrval').val('');
                });

            });
            jQuery(document).on("click", ".closefailbanner", function() {
                jQuery(".failedcreatebanner").hide();
            });
            // $('.hover_bkgr_fricc').click(function(){
            //     $('.hover_bkgr_fricc').hide();
            // });
            jQuery('.popupCloseButton').click(function() {
                jQuery('.hover_bkgr_fricc').hide();
            });
            jQuery('.data-show').click(function() {
                jQuery(".data-show").removeClass("active");
                jQuery(this).addClass('active');
                var title = jQuery(this).find('.title').val();
                var brand = jQuery(this).find('.brand').val();
                var description = jQuery(this).find('.description').val();
                var price = jQuery(this).find('.price').val();
                var imgurl = jQuery(this).find('.imgurl').val();
                var landurl = jQuery(this).find('.handle').val();
                var shopname = jQuery('#shopname').val();
                var productId = jQuery(this).find('.product-id').val();


                jQuery('#titleval').val(title);
                jQuery('#brandval').val(brand);
                jQuery('#descrval').val(description);
                jQuery('#priceval').val(price);
                jQuery('#imageurl').val(imgurl);
                jQuery('#landingpageurl').val(landurl);
                jQuery('#prdIDCR').val(productId);
            });

            jQuery('#dynamicbannercreate').click(function(event){
                event.preventDefault()
                var formcr= jQuery("#createbanner");
                jQuery.ajax({
                    type: formcr.attr('method'),
                    url: formcr.attr('action'),
                    data: formcr.serialize(),
                    success: function (data) {
                    // console.log(data);
                    if(data.status.statusCode =='F_200')
                     {
                        jQuery('.failedcreatebanner').show();

                     }
                     if(data.status.statusCode =='S_200')
                     {
                      jQuery('.hover_bkgr_fricc').hide();
                      jQuery('.successcreatebanner').show();
                       
                     }
                    }
                });
            });
        });

           jQuery('.successcreatebtnbanner').click(function() {
            jQuery("#tablebanner").find("tr:not(:nth-child(1)):not(:nth-child(2))").remove();
            var form = jQuery("#banner");
            jQuery.ajax({
                type: form.attr('method'),
                url: form.attr('action'),
                data: form.serialize(),
                success: function(data) {
                    // console.log(data);
                    if (data.status.statusCode == 'F_200') {

                    }
                    if (data.status.statusCode == 'S_200') {
                        var token = jQuery('.token').val();
                        var bannerPrev = data.bannerPreview;
                        var arrayLen = bannerPrev.length;
                        var i;
                        for (i = 0; i < arrayLen; i++) {
                            // alert(data.bannerPreview[i].sizeCode);
                        var bannerSize = data.bannerPreview[i].sizeCode;
                        var bannerType = data.bannerPreview[i].campaignBannerType;
                        var bannerCode = "<iframe src='" + data.bannerPreview[i].bannerurl + "' width='" + data.bannerPreview[i].width + "'  height= '" + data.bannerPreview[i].height + "' Marginwidth='0' Marginheight='0' Hspace='0' Vspace='0' Frameborder='0' Scrolling='No'></iframe>";
                        var campaignType = data.bannerPreview[i].type;
                        var bannerStatus = data.bannerPreview[i].bidderstatus;
                        var cretiD = data.bannerPreview[i].creativeid;
                        var campaignbidderstatus = data.bannerPreview[i].campaignbidderstatus;
                        var sizcd = data.bannerPreview[i].sizeCode;
                            var bidding_value = data.bannerPreview[i].audit;
                            var bidding_val_type = '';
                            if(bidding_value == 1){
                             bidding_val_type = 'Approved';
                            }else{
                             bidding_val_type = 'Pending Approval';
                            }
                            if (sizcd == '999') {
                              // console.log(bannerStatus);
                             jQuery('<tr><td class="bannerSize">Auto Created Dynamic Banner</td><td class="bannerSize">' + bannerSize + '</td><td>' + cretiD + '</td><td class="bannerType">' + (campaignType == 2 && bannerType == 1 || campaignType == 1 && bannerType == 2 ? '<h1 class="reddot"></h1>' : ' <span class="greendot"></span>') + (bannerType == 1 ? 'Static' : 'Dynamic') + '</td><td class="bannerStatus_val">'+bidding_val_type+'</td><td class="bannerStatus" id=' + (bannerStatus == 43 ? 'active' : 'deactive') + '>' +(bannerStatus == 100 ? 'Forced Pause' : (bannerStatus == 43 ? 'Active' : 'Deactive|Pause'))  + '</td><td class="bannerCode"><div class="bannnerIframeWrap"><button class="btn btn-green bannerClose"  style="opacity:1">X</button><div class="bannnerIframe">Loading...</div></div><button class="btn btn-green bannerPreview" data-pre="' + bannerCode + '">Preview</button>'
                              + (campaignbidderstatus == 'Active' ? (bannerStatus == 43 || bannerStatus == 49 || bannerStatus == 45  ? '<button class="btn btn-green ' + (bidding_value == 0 ? 'bannerpaused' : 'pausebanner') + '" creativeid="'+cretiD+'" sizecode="'+sizcd+'" bidderstatus="'+(bannerStatus == 43 ? '49' : '43')+'">'+ (bannerStatus == 43 ? 'Pause' : 'Activate') +'</button>' : '<button class="btnpaused_hundred btn btn-green">Activate</button>') : '<button class="btncampaignpaused btn btn-green">Activate</button>')+'</td></tr>').insertAfter(jQuery('.dyncrow'));
                            
                            } else if (sizcd == '888') {


                            var bannerTitle = JSON.parse(data.bannerPreview[i].creativeMacro);
                            var fnltt = bannerTitle[3].value;
                            // console.log(fnltt+bannerStatus+campaignbidderstatus);
                            jQuery('<tr><td class="bannerSize">' + fnltt + '</td><td class="bannerSize hideinmobile">' + bannerSize + '</td><td>' + cretiD + '</td><td class="bannerType">' + (campaignType == 2 && bannerType == 1 || campaignType == 1 && bannerType == 2 ? '<h1 class="reddot"></h1>' : ' <span class="greendot"></span>') + (bannerType == 1 ? 'Static' : 'Dynamic') + '</td><td class="bannerStatus_val">'+bidding_val_type+'</td><td class="bannerStatus" id=' + (bannerStatus == 43 ? 'active' : 'deactive') + '>' +(bannerStatus == 100 ? 'Forced Pause' : (bannerStatus == 43 ? 'Active' : 'Deactive|Pause'))  + '</td><td class="bannerCode"><div class="bannnerIframeWrap"><button class="btn btn-green bannerClose"  style="opacity:1">X</button><div class="bannnerIframe">Loading...</div></div><button class="btn btn-green bannerPreview" data-pre="' + bannerCode + '">Preview</button><button class="btn btn-green editbanner" creativeID=' + cretiD + ' sizeCode=' + sizcd + '>Edit</button><button class="btn btn-green deletebanner" creativeID=' + cretiD + ' sizeCode=' + sizcd + '>Delete</button>'
                              + (campaignbidderstatus == 'Active' ? (bannerStatus == 43 || bannerStatus == 49 || bannerStatus == 45  ? '<button class="btn btn-green ' + (bidding_value == 0 ? 'bannerpaused' : 'pausebanner') + '" creativeid="'+cretiD+'" sizecode="'+sizcd+'" bidderstatus="'+(bannerStatus == 43 ? '49' : '43')+'">'+ (bannerStatus == 43 ? 'Pause' : 'Activate') +'</button>' : '<button class="btnpaused_hundred btn btn-green">Activate</button>') : '<button class="btncampaignpaused btn btn-green">Activate</button>')+'</td></tr>').insertAfter(jQuery('.dyncrow'));
                          }
                            else {
                              // console.log('fnltt'+bannerStatus);
                             jQuery('<tr><td class="bannerSize"></td><td class="bannerSize hideinmobile">' + bannerSize + '</td><td>' + cretiD + '</td><td class="bannerType">' + (campaignType == 2 && bannerType == 1 || campaignType == 1 && bannerType == 2 ? '<h1 class="reddot"></h1>' : ' <span class="greendot"></span>') + (bannerType == 1 ? 'Static' : 'Dynamic') + '</td><td class="bannerStatus_val">'+bidding_val_type+'</td><td class="bannerStatus" id=' + (bannerStatus == 43 ? 'active' : 'deactive') + '>' +(bannerStatus == 100 ? 'Forced Pause' : (bannerStatus == 43 ? 'Active' : 'Deactive|Pause'))  + '</td><td class="bannerCode"><div class="bannnerIframeWrap"><button class="btn btn-green bannerClose"  style="opacity:1">X</button><div class="bannnerIframe">Loading...</div></div><button class="btn btn-green bannerPreview" data-pre="' + bannerCode + '">Preview</button><a class="editbannerbtn" target="_blank" href="https://smartbid.preciso.net/#/login?ref=createstaticbyid&token='+token+'&cid='+cretiD+'">Edit</a><button class="btn btn-green deletebanner" creativeID=' + cretiD + ' sizeCode=' + sizcd + '>Delete</button>'+ (campaignbidderstatus == 'Active' ? (bannerStatus == 43 || bannerStatus == 49 || bannerStatus == 45  ? '<button class="btn btn-green ' + (bidding_value == 0 ? 'bannerpaused' : 'pausebanner') + '" creativeid="'+cretiD+'" sizecode="'+sizcd+'" bidderstatus="'+(bannerStatus == 43 ? '49' : '43')+'">'+ (bannerStatus == 43 ? 'Pause' : 'Activate') +'</button>' : '<button class="btnpaused_hundred btn btn-green">Activate</button>') : '<button class="btncampaignpaused btn btn-green">Activate</button>')+'</td></tr>').insertAfter(jQuery('.dyncrow'));
                            }
                        }
                        jQuery('.successcreatebanner').hide();
                    }
                }
            });

        });

           jQuery('.udatesettingssuccess').click(function(){
            var formSet= jQuery("#getsettings");
                //console.log(formSet.serialize());
                jQuery.ajax({
                    type: formSet.attr('method'),
                    url: formSet.attr('action'),
                    data: formSet.serialize(),
                    success: function (data) {
                    //console.log(data);
                    if(data.status.statusCode =='F_200')
                     {
                        var shopNm = jQuery('#shop').val();
                        var othtk = jQuery('#outhTk').val();
                        window.location.href = 'https://apppartner.preciso.net/login.php?shop='+shopNm+'&oauth_token='+othtk;
                        sessionStorage.removeItem("login");
                        sessionStorage.removeItem("campaignId");
                        sessionStorage.removeItem("token");
                        sessionStorage.removeItem("userId");
                     }
                     if(data.status.statusCode =='S_200')
                     {
                        var campaignId = data.campaignDetails[0].campaignId;
                        jQuery('.cmpID').val(campaignId);
                        var campaignName = data.campaignDetails[0].campaignName;
                        jQuery('#cmpName').val(campaignName);
                        var programName = data.campaignDetails[0].programName;
                        jQuery('#prmName').val(programName);
                        var regionName = data.campaignDetails[0].regionName;
                        jQuery('#regName').val(regionName);
                        var channelName = data.campaignDetails[0].channelName;
                        jQuery('#chanelNm option').each(function(index){
                         if(jQuery( this ).text() == channelName){
                            jQuery(this).prop('selected', true);
                         }else{

                         }
                         });
                        var languageName = data.campaignDetails[0].languageName;
                        jQuery('#langName').val(languageName);
                        var deviceName = data.campaignDetails[0].deviceName;
                        jQuery('#device').val(deviceName);
                        var currency = data.campaignDetails[0].currency;
                        jQuery('#currency').val(currency);
                        var statusId = data.campaignDetails[0].statusId;
                        if(statusId == 1 ){
                          jQuery('#campSat').val('Active');
                        }else{
                          jQuery('#campSat').val('Pause');
                        }

                        var monthlybudget = data.campaignDetails[0].totalBudget;
                        jQuery('#mntBud').val(monthlybudget);
                        var dailyBudget = data.campaignDetails[0].dailyBudget;
                        jQuery('#daiBud').val(dailyBudget);
                        var landingPage =  data.campaignDetails[0].landingPage;
                        jQuery('#landPage').val(landingPage);
                        var frequencyCap = data.campaignDetails[0].frequencyCap;
                        jQuery('#freqCap').val(frequencyCap);
                        var biddingStatus = data.campaignDetails[0].biddingStatus;
                        jQuery('#bidStatus option').each(function(index){
                          if(jQuery( this ).text() == biddingStatus){
                            jQuery(this).prop('selected', true);
                         }else{
                         }
                         });
                                            if(biddingStatus == 'Active'){
                             jQuery('.biddingstatus').html('<span style="font-size: 18px;color:green;margin-right:10px;">Bidding: Active!</span>');
                            }else{
                             jQuery('.biddingstatus').html('<span style="font-size: 18px;color:red;margin-right:10px;">Bidding: Pause!</span>');
                            }
                        var strategyName = data.campaignDetails[0].strategyName;
                        jQuery('#stragName option').each(function(index){
                         if(jQuery( this ).text() == strategyName){
                            jQuery(this).prop('selected', true);
                         }else{
                         }
                         });
                        var campaignType = data.campaignDetails[0].campaignType;
                        jQuery('#camptpy option').each(function(index){
                         if(jQuery( this ).val() == campaignType){
                            jQuery(this).prop('selected', true);
                         }else{
                         }
                         });

                        var payoutType = data.campaignDetails[0].payoutType;
                        jQuery('#payuType').val(payoutType);
                        var pc = data.campaignDetails[0].pc;
                        jQuery('#cokieTime').val(pc);
                        var pv = data.campaignDetails[0].pv;
                        jQuery('#cokvTime').val(pv);
                       var selectedOption = jQuery('#chanelNm').children("option:selected").text();
                       //console.log(selectedOption);
                       if (selectedOption =='Branding' || selectedOption =='Prospecting') {
                        jQuery('#stragName option').each(function(index){
                          if(jQuery(this).text() == 'MainAd Private Audience' || jQuery(this).text() == 'Public Audience'){
                           jQuery(this).show();
                          }else{
                           jQuery(this).hide();
                          }
                        });
                       }else{
                        jQuery('#stragName option').each(function(index){
                          jQuery(this).show();
                        });
                       } 
                        jQuery('.api-loader').css('display','none');
                        jQuery('.successalert').css('display','none');
                        

                     }
                    }
                });


                jQuery("#tablebanner").find("tr:not(:nth-child(1)):not(:nth-child(2))").remove();
                var form = jQuery("#banner");
                jQuery.ajax({
                    type: form.attr('method'),
                    url: form.attr('action'),
                    data: form.serialize(),
                    success: function(data) {
                        //console.log(data);
                        if (data.status.statusCode == 'F_200') {}
                    if (data.status.statusCode == 'S_200') {
                        var token = jQuery('.token').val();
                        var bannerPrev = data.bannerPreview;
                        var arrayLen = bannerPrev.length;
                        var i;
                        for (i = 0; i < arrayLen; i++) {
                            // alert(data.bannerPreview[i].sizeCode);
                            var bannerSize = data.bannerPreview[i].sizeCode;
                            var bannerType = data.bannerPreview[i].campaignBannerType;
                            var bannerCode = "<iframe src='" + data.bannerPreview[i].bannerurl + "' width='" + data.bannerPreview[i].width + "'  height= '" + data.bannerPreview[i].height + "' Marginwidth='0' Marginheight='0' Hspace='0' Vspace='0' Frameborder='0' Scrolling='No'></iframe>";
                            var campaignType = data.bannerPreview[i].type;
                            var bannerStatus = data.bannerPreview[i].bidderstatus;
                            var cretiD = data.bannerPreview[i].creativeid;
                            var sizcd = data.bannerPreview[i].sizeCode;
                            var campaignbidderstatus = data.bannerPreview[i].campaignbidderstatus;
                            var bidding_value = data.bannerPreview[i].audit;
                            var bidding_val_type = '';
                                if(bidding_value == 1){
                                 bidding_val_type = 'Approved';
                                }else{
                                 bidding_val_type = 'Pending Approval';
                                }
                                if (sizcd == '999') {
                                  // console.log(bannerStatus);
                                 jQuery('<tr><td class="bannerSize">Auto Created Dynamic Banner</td><td class="bannerSize hideinmobile">' + bannerSize + '</td><td>' + cretiD + '</td><td class="bannerType">' + (campaignType == 2 && bannerType == 1 || campaignType == 1 && bannerType == 2 ? '<h1 class="reddot"></h1>' : ' <span class="greendot"></span>') + (bannerType == 1 ? 'Static' : 'Dynamic') + '</td><td class="bannerStatus_val">'+bidding_val_type+'</td><td class="bannerStatus" id=' + (bannerStatus == 43 ? 'active' : 'deactive') + '>' +(bannerStatus == 100 ? 'Forced Pause' : (bannerStatus == 43 ? 'Active' : 'Deactive|Pause'))  + '</td><td class="bannerCode"><div class="bannnerIframeWrap"><button class="btn btn-green bannerClose"  style="opacity:1">X</button><div class="bannnerIframe">Loading...</div></div><button class="btn btn-green bannerPreview" data-pre="' + bannerCode + '">Preview</button>'
                                  + (campaignbidderstatus == 'Active' ? (bannerStatus == 43 || bannerStatus == 49 || bannerStatus == 45  ? '<button class="btn btn-green ' + (bidding_value == 0 ? 'bannerpaused' : 'pausebanner') + '" creativeid="'+cretiD+'" sizecode="'+sizcd+'" bidderstatus="'+(bannerStatus == 43 ? '49' : '43')+'">'+ (bannerStatus == 43 ? 'Pause' : 'Activate') +'</button>' : '<button class="btnpaused_hundred btn btn-green">Activate</button>') : '<button class="btncampaignpaused btn btn-green">Activate</button>')+'</td></tr>').insertAfter(jQuery('.dyncrow'));
                                
                                } else if (sizcd == '888') {


                                var bannerTitle = JSON.parse(data.bannerPreview[i].creativeMacro);
                                var fnltt = bannerTitle[3].value;
                                // console.log(fnltt+bannerStatus+campaignbidderstatus);
                                jQuery('<tr><td class="bannerSize">' + fnltt + '</td><td class="bannerSize hideinmobile">' + bannerSize + '</td><td>' + cretiD + '</td><td class="bannerType">' + (campaignType == 2 && bannerType == 1 || campaignType == 1 && bannerType == 2 ? '<h1 class="reddot"></h1>' : ' <span class="greendot"></span>') + (bannerType == 1 ? 'Static' : 'Dynamic') + '</td><td class="bannerStatus_val">'+bidding_val_type+'</td><td class="bannerStatus" id=' + (bannerStatus == 43 ? 'active' : 'deactive') + '>' +(bannerStatus == 100 ? 'Forced Pause' : (bannerStatus == 43 ? 'Active' : 'Deactive|Pause'))  + '</td><td class="bannerCode"><div class="bannnerIframeWrap"><button class="btn btn-green bannerClose"  style="opacity:1">X</button><div class="bannnerIframe">Loading...</div></div><button class="btn btn-green bannerPreview" data-pre="' + bannerCode + '">Preview</button><button class="btn btn-green editbanner" creativeID=' + cretiD + ' sizeCode=' + sizcd + '>Edit</button><button class="btn btn-green deletebanner" creativeID=' + cretiD + ' sizeCode=' + sizcd + '>Delete</button>'
                                  + (campaignbidderstatus == 'Active' ? (bannerStatus == 43 || bannerStatus == 49 || bannerStatus == 45  ? '<button class="btn btn-green ' + (bidding_value == 0 ? 'bannerpaused' : 'pausebanner') + '" creativeid="'+cretiD+'" sizecode="'+sizcd+'" bidderstatus="'+(bannerStatus == 43 ? '49' : '43')+'">'+ (bannerStatus == 43 ? 'Pause' : 'Activate') +'</button>' : '<button class="btnpaused_hundred btn btn-green">Activate</button>') : '<button class="btncampaignpaused btn btn-green">Activate</button>')+'</td></tr>').insertAfter(jQuery('.dyncrow'));
                              }
                                else {
                                  // console.log('fnltt'+bannerStatus);
                                 jQuery('<tr><td class="bannerSize"></td><td class="bannerSize hideinmobile">' + bannerSize + '</td><td>' + cretiD + '</td><td class="bannerType">' + (campaignType == 2 && bannerType == 1 || campaignType == 1 && bannerType == 2 ? '<h1 class="reddot"></h1>' : ' <span class="greendot"></span>') + (bannerType == 1 ? 'Static' : 'Dynamic') + '</td><td class="bannerStatus_val">'+bidding_val_type+'</td><td class="bannerStatus" id=' + (bannerStatus == 43 ? 'active' : 'deactive') + '>' +(bannerStatus == 100 ? 'Forced Pause' : (bannerStatus == 43 ? 'Active' : 'Deactive|Pause'))  + '</td><td class="bannerCode"><div class="bannnerIframeWrap"><button class="btn btn-green bannerClose"  style="opacity:1">X</button><div class="bannnerIframe">Loading...</div></div><button class="btn btn-green bannerPreview" data-pre="' + bannerCode + '">Preview</button><a class="editbannerbtn" target="_blank" href="https://smartbid.preciso.net/#/login?ref=createstaticbyid&token='+token+'&cid='+cretiD+'">Edit</a><button class="btn btn-green deletebanner" creativeID=' + cretiD + ' sizeCode=' + sizcd + '>Delete</button>'+ (campaignbidderstatus == 'Active' ? (bannerStatus == 43 || bannerStatus == 49 || bannerStatus == 45  ? '<button class="btn btn-green ' + (bidding_value == 0 ? 'bannerpaused' : 'pausebanner') + '" creativeid="'+cretiD+'" sizecode="'+sizcd+'" bidderstatus="'+(bannerStatus == 43 ? '49' : '43')+'">'+ (bannerStatus == 43 ? 'Pause' : 'Activate') +'</button>' : '<button class="btnpaused_hundred btn btn-green">Activate</button>') : '<button class="btncampaignpaused btn btn-green">Activate</button>')+'</td></tr>').insertAfter(jQuery('.dyncrow'));
                                }
                        }
                    }
                    }
                });
           });

        jQuery(document).ready(function() {
            jQuery('body').on("click", ".bannerPreview", function() {
                var bannercode = jQuery(this).attr("data-pre");
                jQuery(this).parent().find(".bannnerIframe").html(bannercode);
                jQuery(this).parent().find(".bannnerIframeWrap").addClass('active');

            });
            jQuery('body').on("click", ".bannerClose", function() {
                jQuery(".bannnerIframeWrap").removeClass('active');
                jQuery(this).parent().find(".bannnerIframe").html("");
            });
            setTimeout(
                function() {
                    jQuery('.loader').hide();
                }, 8000);
        });
    };
    return main;
});
