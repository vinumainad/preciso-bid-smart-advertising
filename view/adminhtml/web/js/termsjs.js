define([
    "jquery",
    "jquery/ui"
], function($) {
    "use strict";

    function main(config, element) {
        var $element = $(element);
        var origin = config.AdminBaseUrl; //window.location.origin;
        var customurl = origin + '/precisobidsmartadvertising/ajax/index/';
        var CurrentPage = config.CurrentPage;
        $(document).ready(function() {
            var ctoken = sessionStorage.getItem("token");
            var ttoken = ctoken.trim();
            if (ttoken) {
                jQuery('#token').val(ttoken);
            }
            jQuery(document).ready(function() {
                jQuery('.api-loader').css('display', 'none');
                jQuery("#regisnSubmit").click(function(event) {
                    jQuery('.api-loader').css('display', 'block');
                    var form = jQuery("#terms");
                    jQuery.ajax({
                        type: form.attr('method'),
                        url: form.attr('action'),
                        data: form.serialize(),
                        success: function(data) {
                            //console.log(data);
                            if (data.status.statusCode == 'F_200') {

                            }
                            if (data.status.statusCode == 'S_200') {
                                jQuery.ajax({
                                    url: customurl,
                                    type: 'post',
                                    data: {
                                        form_key: window.FORM_KEY,
                                        term_page: 'submit',
                                        campaignId: sessionStorage.getItem('campaignId'),
                                        token: sessionStorage.getItem('token'),
                                        userId: sessionStorage.getItem('userId'),
                                        username: sessionStorage.getItem('login'),
                                        userpass: sessionStorage.getItem('userpass')
                                    },
                                    success: function(response) {
                                        // console.log(response);
                                        location.reload();
                                    }
                                });
                            }
                        }
                    });
                });
            });
        });
    };
    return main;
});