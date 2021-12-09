define([
    "jquery",
    "Preciso_login",
    "jquery/ui"
], function($) {

    function main(config, element) {
        var $element = $(element);
        var origin = config.AdminBaseUrl; //window.location.origin;
        var customurl = origin + '/precisobidsmartadvertising/ajax/index/';
        var CurrentPage = config.CurrentPage;
        $(document).ready(function() {
            jQuery('#mypassword').keypress(function (evt) {
              var keycode = evt.charCode || evt.keyCode;
              if (keycode  == 32) { 
                return false;
              }
            });
            jQuery("a.messageDisplaylogin").hover(function() {
                jQuery("a.messageHidelogin").html('<p>(This will reset your password of all accounts!)</p>');
                jQuery(".messageHidelogin").show();
            });

            jQuery(document).ready(function() {
              
                // jQuery('.loader').hide();
                setTimeout(
                    function() {
                     
                        var name = jQuery('#myusername').val();
                        var pass = jQuery('#mypassword').val();
                        if (name != '' && pass != '') {
                            jQuery("#loginSubmit").trigger("click");
                        } else {
                            jQuery('.loader').hide();
                        }
                    }, 2000);

                jQuery("#loginSubmit").click(function(event) {
                    var name = jQuery('#myusername').val();
                    var pass = jQuery('#mypassword').val();
                    if (name == '') {
                        jQuery('.usererror').show();
                    }
                    if (pass == '') {
                        jQuery('.passerror').show();
                    }
                    if (name != '' && pass != '') {
                        // jQuery('.api-loader').css('display', 'block');
                        var shop = jQuery('#shop').val();
                        var form = jQuery("#target");
                        jQuery.ajax({
                            type: form.attr('method'),
                            url: form.attr('action'),
                            data: form.serialize(),
                            success: function(data) {
                                // console.log(data);
                                console.log("data test");
                                console.log(data);
                                if (data.status.statusCode == 'F_200') {
                                    jQuery('.api-loader').css('display', 'none');
                                    jQuery('.failedalert').show();
                                }
                                else if (data.status.statusCode == 'S_200') {
                                    var campaignId = data.campaigns[1].campaignId;
                                    var token = data.token;
                                    var userId = data.userId;
                                    var termpage = data.tc;
                                    if (typeof(Storage) !== "undefined") {
                                        var username = jQuery('.custom_username').val();
                                        sessionStorage.setItem('login', username);
                                        sessionStorage.setItem('userpass', pass);
                                        sessionStorage.setItem('campaignId', campaignId);
                                        sessionStorage.setItem('token', token);
                                        sessionStorage.setItem('userId', userId);
                                        shop = sessionStorage.getItem("lastname");

                                        function createCookie(cookieName, cookieValue, daysToExpire) {
                                            var date = new Date();
                                            date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
                                            document.cookie = cookieName + "=" + cookieValue + "; expires=" + date.toGMTString();
                                        }

                                        function accessCookie(cookieName) {
                                            var name = cookieName + "=";
                                            var allCookieArray = document.cookie.split(';');
                                            for (var i = 0; i < allCookieArray.length; i++) {
                                                var temp = allCookieArray[i].trim();
                                                if (temp.indexOf(name) == 0)
                                                    return temp.substring(name.length, temp.length);
                                            }
                                            return "";
                                        }
                                        var user = accessCookie("campaignId");
                                        createCookie("campaignId", campaignId, 1);
                                        if (termpage == false) {
                                            jQuery.ajax({
                                                url: customurl,
                                                type: 'post',
                                                data: {
                                                    form_key: window.FORM_KEY,
                                                    term_page: 1,
                                                    campaignId1: campaignId,
                                                },
                                                success: function(response) {
                                                    // console.log(response);
                                                    jQuery('.loader').hide();
                                                    location.reload(true);
                                                }
                                            });
                                        } else {
                                            jQuery.ajax({
                                                url: customurl,
                                                type: 'post',
                                                data: {
                                                    form_key: window.FORM_KEY,
                                                    login: 'loginSubmit',
                                                    campaignId: sessionStorage.getItem('campaignId'),
                                                    token: sessionStorage.getItem('token'),
                                                    userId: sessionStorage.getItem('userId'),
                                                    username: sessionStorage.getItem('login'),
                                                    userpass: pass
                                                },
                                                success: function(response) {
                                                    // console.log(response);
                                                    jQuery('.loader').hide();
                                                    location.reload(true);
                                                }
                                            });
                                        }
                                    } else {
                                        alert("Sorry, your browser does not support Web Storage...");
                                    }
                                }
                                else if (data.status.statusCode == 'S_202') {
                                    jQuery.ajax({
                                                url: customurl,
                                                type: 'post',
                                                data: {
                                                    form_key: window.FORM_KEY,
                                                    userDelete: 1,
                                                },
                                                success: function(response) {
                                                    sessionStorage.setItem('login', "");
                                                    sessionStorage.setItem('userpass', "");
                                                    sessionStorage.setItem('campaignId', "");
                                                    sessionStorage.setItem('token', "");
                                                    sessionStorage.setItem('userId', "");
                                                    // console.log(response);
                                                    jQuery('.loader').hide();
                                                    location.reload(true);
                                                }
                                    });
                                }
                                else if (data.status.statusCode == 'S_204') {
                                    jQuery('.loader').hide();
                                    jQuery('.failed_login_alert').show();
                                    jQuery('.login-username #myusername').val("");
                                    jQuery('.login-password #mypassword').val("");
                                }
                                else if(data.status.statusCode =='S_205'){
                                                console.log("status 205");
                                             jQuery.ajax({
                                                url: customurl,
                                                type: 'post',
                                                data: {
                                                    form_key: window.FORM_KEY,
                                                    is205 : 'blank_page',
                                                },
                                                success: function(response) {
                                                   
                                                    jQuery('.loader').hide();
                                                    location.reload(true);
                                                    
                                                }
                                            });
                                            
                                  }
                            }
                        });
                    }
                });
                jQuery('.btn-green').click(function() {
                    jQuery('.api-loader').show();
                    // location.reload();
                });
                jQuery('.btn-red').click(function() {
                    jQuery('.failedalert').hide();
                    jQuery('.failed_login_alert').hide();
                });
            });
        });
    };
    return main;
});