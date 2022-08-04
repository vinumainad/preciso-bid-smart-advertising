var tok = "",
    p1 = "",
    c = "";

function diff_hours(e, t) {
    try {
        var r = (e.getTime() - t.getTime()) / 1e3;
        return r /= 3600, Math.abs(Math.round(r))
    } catch (e) {
        return 6
    }
}

function chkses(e) {
    return !sessionStorage.getItem(e)
}

function chk(e) {
    var t = !1;
    return (!localStorage.getItem(e) || 5 < diff_hours(new Date, new Date(localStorage.getItem(e)))) && (t = !0), !!t && chkses(e + "-" + p1)
}

function CDV(e) {
    var t = document.createElement("div");
    t.id = "m20D", t.style.display = "none", t.appendChild(e), document.body.appendChild(t)
}

function CIF(e) {
    var t = document.createElement("iframe");
    t.id = "m20F", t.marginWidth = 0, t.marginHeight = 0, t.frameBorder = 0, t.scrolling = "no", t.allowTransparency = !0, t.width = 0, t.height = 0, t.style.position = "absolute", t.style.bottom = "0px", t.style.overflowX = "hidden", t.style.overflowY = "hidden", t.style.width = "0px", t.style.height = "0px", t.style.display = "none", t.src = e + "&t=4", CDV(t)
}

function CST(e) {
    var t = document.createElement("script");
    t.id = "m20F", t.type = "text/javascript", t.src = e + "&t=1", CDV(t)
}

function CIG(e) {
    var t = document.createElement("img");
    t.id = "m20F", t.width = 1, t.height = 1, t.src = e + "&t=2", CDV(t)
}

function ToLowerItem(e) {
    return void 0 !== e && e !== Object && null !== e ? e.toString().toLowerCase() : ""
}

function stripHTML(e) {
    var t = /<\S[^><]*>/g;
    for (i = 0; i < arguments.length; i++) {
        var r = e.replace(t, "").substring(0, 600);
        return (r = (r = (r = (r = r.replace("@", "AtA")).replace("email", "em:")).replace("e-mail", "em:")).replace(/'/g, "")).replace("%40", "AtA")
    }
}

function getParm() {
    var e = "";
    for (var t in 1, rtgsettings) rtgsettings.hasOwnProperty(t) && ("" !== rtgsettings[t] && void 0 !== rtgsettings[t] && null !== rtgsettings[t] && rtgsettings[t] !== Object && (e += "&" + t.toLowerCase() + "=" + encodeURIComponent(stripHTML(ToLowerItem(rtgsettings[t])))), "token" === t.toLowerCase() && (tok = ToLowerItem(rtgsettings[t])), "pagetype" === t.toLowerCase() && (p1 = rtgsettings[t].toString().toLowerCase()));
    return e.replace(tok, change_tok());
}

function TrafficCalculator() {
    var e, t = "https://secureaud.solocpm.com/v2/ShopifyRtg.aspx?rnd=" + (new Date).getYear() + (new Date).getMonth() + (new Date).getDate();
    c = e = document.URL && "" !== document.URL ? getParm().replace("%24pdt_url%24", encodeURIComponent(document.URL)) : getParm(), tok = change_tok(),
        void 0 === messageMap.get(tok) ? (0 < e.indexOf("&layer=image") ? CIG : 0 < e.indexOf("&layer=script") ? CST : CIF)(t + e) : CST(messageMap.get(tok))
}

function CAU(e) {
    var t;
    chk(tok.trim().toLowerCase()) && ((t = document.createElement("script")).id = "mrybs", t.type = "text/javascript", t.src = e, document.head.appendChild(t))
}

function checkDuplicateScript(e) {
    for (var t = document.getElementsByTagName("script"), r = {}, n = t.length, o = 0; o < n; o++) {
        var a = t[o].id ? t[o].id : void 0;
        void 0 !== a && a === e && (isNaN(r[a]) && (r[a] = 0), r[a]++)
    }
    return r[e] ? r[e] : 1
}

function change_tok() {
    var x, y;
    if (document.referrer && rtgsettings["pdt_url"]) {
        x = document.referrer.toLowerCase();
	if (x.indexOf("outdoormaster.com") >= 0 || rtgsettings["pdt_url"].indexOf("outdoormaster.com") >= 0) {y = "59847";rtgsettings["token"] = "59847"; }
	else if (x.indexOf("preciso-demo-store.myshopify.com/") >= 0 || rtgsettings["pdt_url"].indexOf("preciso-demo-store.myshopify.com/") >= 0) {y = "59981";rtgsettings["token"] = "59981"; }
	else if (x.indexOf("sartoriadeiduchi.com") >= 0 || rtgsettings["pdt_url"].indexOf("sartoriadeiduchi.com") >= 0) {y = "60355";rtgsettings["token"] = "60355"; }
	else if (x.indexOf("joyzboutiques.com") >= 0 || rtgsettings["pdt_url"].indexOf("joyzboutiques.com") >= 0) {y = "61890";rtgsettings["token"] = "61890"; }
	else if (x.indexOf("mattmalonecosmetics.com") >= 0 || rtgsettings["pdt_url"].indexOf("mattmalonecosmetics.com") >= 0) {y = "61934";rtgsettings["token"] = "61934"; }
	else if (x.indexOf("outdoormaster.com") >= 0 || rtgsettings["pdt_url"].indexOf("outdoormaster.com") >= 0) {y = "61938";rtgsettings["token"] = "61938"; }
	else if (x.indexOf("qualicostore.myshopify.com") >= 0 || rtgsettings["pdt_url"].indexOf("qualicostore.myshopify.com") >= 0) {y = "61940";rtgsettings["token"] = "61940"; }
	else if (x.indexOf("mymarketingideas.myshopify.com") >= 0 || rtgsettings["pdt_url"].indexOf("mymarketingideas.myshopify.com") >= 0) {y = "61952";rtgsettings["token"] = "61952"; }
	else if (x.indexOf("alifewithleen-shopwithleen.myshopify.com") >= 0 || rtgsettings["pdt_url"].indexOf("alifewithleen-shopwithleen.myshopify.com") >= 0) {y = "61963";rtgsettings["token"] = "61963"; }
	else if (x.indexOf("susan-do.myshopify.com") >= 0 || rtgsettings["pdt_url"].indexOf("susan-do.myshopify.com") >= 0) {y = "61973";rtgsettings["token"] = "61973"; }
	else if (x.indexOf("case-plus-ireland.myshopify.com") >= 0 || rtgsettings["pdt_url"].indexOf("case-plus-ireland.myshopify.com") >= 0) {y = "61982";rtgsettings["token"] = "61982"; }
	else if (x.indexOf("artementae.com") >= 0 || rtgsettings["pdt_url"].indexOf("artementae.com") >= 0) {y = "61996";rtgsettings["token"] = "61996"; }
	else if (x.indexOf("HTTPS://WWW.SHOPEPRS@SHOP.COM") >= 0 || rtgsettings["pdt_url"].indexOf("HTTPS://WWW.SHOPEPRS@SHOP.COM") >= 0) {y = "62056";rtgsettings["token"] = "62056"; }
	else if (x.indexOf("HTTPS://WWW.SHOP.COM") >= 0 || rtgsettings["pdt_url"].indexOf("HTTPS://WWW.SHOP.COM") >= 0) {y = "62057";rtgsettings["token"] = "62057"; }
	else if (x.indexOf("www.shop.com") >= 0 || rtgsettings["pdt_url"].indexOf("www.shop.com") >= 0) {y = "62058";rtgsettings["token"] = "62058"; }
	else if (x.indexOf("cloudclt.myshopify.com") >= 0 || rtgsettings["pdt_url"].indexOf("cloudclt.myshopify.com") >= 0) {y = "62063";rtgsettings["token"] = "62063"; }
	else if (x.indexOf("joyasdechina.com") >= 0 || rtgsettings["pdt_url"].indexOf("joyasdechina.com") >= 0) {y = "62080";rtgsettings["token"] = "62080"; }
	else if (x.indexOf("smokesessionsuk.com") >= 0 || rtgsettings["pdt_url"].indexOf("smokesessionsuk.com") >= 0) {y = "62081";rtgsettings["token"] = "62081"; }
	else if (x.indexOf("vetraidatri.com") >= 0 || rtgsettings["pdt_url"].indexOf("vetraidatri.com") >= 0) {y = "62090";rtgsettings["token"] = "62090"; }
	else if (x.indexOf("  preciso-julyl-alpha.myshopify.com") >= 0 || rtgsettings["pdt_url"].indexOf("  preciso-julyl-alpha.myshopify.com") >= 0) {y = "62119";rtgsettings["token"] = "62119"; }
	else if (x.indexOf("phoenixpetsupply.com") >= 0 || rtgsettings["pdt_url"].indexOf("phoenixpetsupply.com") >= 0) {y = "62184";rtgsettings["token"] = "62184"; }
	else if (x.indexOf("centershelf.com") >= 0 || rtgsettings["pdt_url"].indexOf("centershelf.com") >= 0) {y = "62189";rtgsettings["token"] = "62189"; }
	else if (x.indexOf("testdevstore10.mybigcommerce.com") >= 0 || rtgsettings["pdt_url"].indexOf("testdevstore10.mybigcommerce.com") >= 0) {y = "62200";rtgsettings["token"] = "62200"; }
	else if (x.indexOf("www.dreamfeeling.shop") >= 0 || rtgsettings["pdt_url"].indexOf("www.dreamfeeling.shop") >= 0) {y = "62220";rtgsettings["token"] = "62220"; }
	else if (x.indexOf("www.cesarki.com") >= 0 || rtgsettings["pdt_url"].indexOf("www.cesarki.com") >= 0) {y = "62275";rtgsettings["token"] = "62275"; }
	else if (x.indexOf("demostore102.myshopify.com") >= 0 || rtgsettings["pdt_url"].indexOf("demostore102.myshopify.com") >= 0) {y = "62291";rtgsettings["token"] = "62291"; }
	else if (x.indexOf("ritik1.mybigcommerce.com") >= 0 || rtgsettings["pdt_url"].indexOf("ritik1.mybigcommerce.com") >= 0) {y = "62308";rtgsettings["token"] = "62308"; }
	else if (x.indexOf("leilasbeautyclinic.com") >= 0 || rtgsettings["pdt_url"].indexOf("leilasbeautyclinic.com") >= 0) {y = "62310";rtgsettings["token"] = "62310"; }
	else if (x.indexOf("gud-tingzz.com") >= 0 || rtgsettings["pdt_url"].indexOf("gud-tingzz.com") >= 0) {y = "62311";rtgsettings["token"] = "62311"; }
	else if (x.indexOf("pankaj1.mybigcommerce.com") >= 0 || rtgsettings["pdt_url"].indexOf("pankaj1.mybigcommerce.com") >= 0) {y = "62312";rtgsettings["token"] = "62312"; }
	else if (x.indexOf("shalabh1.mybigcommerce.com") >= 0 || rtgsettings["pdt_url"].indexOf("shalabh1.mybigcommerce.com") >= 0) {y = "62313";rtgsettings["token"] = "62313"; }
	else if (x.indexOf("himanshu123.mybigcommerce.com") >= 0 || rtgsettings["pdt_url"].indexOf("himanshu123.mybigcommerce.com") >= 0) {y = "62314";rtgsettings["token"] = "62314"; }
	else if (x.indexOf("danibluecreations.co.uk") >= 0 || rtgsettings["pdt_url"].indexOf("danibluecreations.co.uk") >= 0) {y = "62340";rtgsettings["token"] = "62340"; }
	else if (x.indexOf("blogargute.com") >= 0 || rtgsettings["pdt_url"].indexOf("blogargute.com") >= 0) {y = "62341";rtgsettings["token"] = "62341"; }
	else if (x.indexOf("finegiftsandbaskets.com") >= 0 || rtgsettings["pdt_url"].indexOf("finegiftsandbaskets.com") >= 0) {y = "62342";rtgsettings["token"] = "62342"; }
	else if (x.indexOf("august-delta-preciso.myshopify.com") >= 0 || rtgsettings["pdt_url"].indexOf("august-delta-preciso.myshopify.com") >= 0) {y = "62350";rtgsettings["token"] = "62350"; }
	else if (x.indexOf("best-seller-marketq50.myshopify.com") >= 0 || rtgsettings["pdt_url"].indexOf("best-seller-marketq50.myshopify.com") >= 0) {y = "62365";rtgsettings["token"] = "62365"; }
	else if (x.indexOf("ritik22.mybigcommerce.com") >= 0 || rtgsettings["pdt_url"].indexOf("ritik22.mybigcommerce.com") >= 0) {y = "62369";rtgsettings["token"] = "62369"; }
	else if (x.indexOf("apella.in") >= 0 || rtgsettings["pdt_url"].indexOf("apella.in") >= 0) {y = "62370";rtgsettings["token"] = "62370"; }
	else if (x.indexOf("precisotest.mybigcommerce.com") >= 0 || rtgsettings["pdt_url"].indexOf("precisotest.mybigcommerce.com") >= 0) {y = "62373";rtgsettings["token"] = "62373"; }
	else if (x.indexOf("ritik44.mybigcommerce.com") >= 0 || rtgsettings["pdt_url"].indexOf("ritik44.mybigcommerce.com") >= 0) {y = "62387";rtgsettings["token"] = "62387"; }
	else if (x.indexOf("www.thestoreinn.com") >= 0 || rtgsettings["pdt_url"].indexOf("www.thestoreinn.com") >= 0) {y = "62390";rtgsettings["token"] = "62390"; }
	else if (x.indexOf("preciso-test-sep.myshopify.com") >= 0 || rtgsettings["pdt_url"].indexOf("preciso-test-sep.myshopify.com") >= 0) {y = "62391";rtgsettings["token"] = "62391"; }
	else if (x.indexOf("appsmagneto.mainadv.com/") >= 0 || rtgsettings["pdt_url"].indexOf("appsmagneto.mainadv.com/") >= 0) {y = "62397";rtgsettings["token"] = "62397"; }
	else if (x.indexOf("appsmagneto.mainadv.com/") >= 0 || rtgsettings["pdt_url"].indexOf("appsmagneto.mainadv.com/") >= 0) {y = "62405";rtgsettings["token"] = "62405"; }
	else if (x.indexOf("appsmagneto.mainadv.com/") >= 0 || rtgsettings["pdt_url"].indexOf("appsmagneto.mainadv.com/") >= 0) {y = "62418";rtgsettings["token"] = "62418"; }
	else if (x.indexOf("appsmagneto.mainadv.com/") >= 0 || rtgsettings["pdt_url"].indexOf("appsmagneto.mainadv.com/") >= 0) {y = "62431";rtgsettings["token"] = "62431"; }
	else if (x.indexOf("ightstudio.com") >= 0 || rtgsettings["pdt_url"].indexOf("ightstudio.com") >= 0) {y = "62481";rtgsettings["token"] = "62481"; }
	else if (x.indexOf("dove-haus.com") >= 0 || rtgsettings["pdt_url"].indexOf("dove-haus.com") >= 0) {y = "62546";rtgsettings["token"] = "62546"; }
	else if (x.indexOf("eleonor-artprints.myshopify.com") >= 0 || rtgsettings["pdt_url"].indexOf("eleonor-artprints.myshopify.com") >= 0) {y = "62712";rtgsettings["token"] = "62712"; }
	else if (x.indexOf("eptech.store") >= 0 || rtgsettings["pdt_url"].indexOf("eptech.store") >= 0) {y = "62764";rtgsettings["token"] = "62764"; }
	else if (x.indexOf("fr.outdoormaster.com") >= 0 || rtgsettings["pdt_url"].indexOf("fr.outdoormaster.com") >= 0) {y = "62771";rtgsettings["token"] = "62771"; }
	else if (x.indexOf("weargearandmore.com") >= 0 || rtgsettings["pdt_url"].indexOf("weargearandmore.com") >= 0) {y = "62780";rtgsettings["token"] = "62780"; }
	else if (x.indexOf("http://bigcommerce.preciso.net/wptest") >= 0 || rtgsettings["pdt_url"].indexOf("http://bigcommerce.preciso.net/wptest") >= 0) {y = "62786";rtgsettings["token"] = "62786"; }
	else if (x.indexOf("starsdeals.store") >= 0 || rtgsettings["pdt_url"].indexOf("starsdeals.store") >= 0) {y = "62792";rtgsettings["token"] = "62792"; }
	else if (x.indexOf("www.petsgool.com") >= 0 || rtgsettings["pdt_url"].indexOf("www.petsgool.com") >= 0) {y = "62800";rtgsettings["token"] = "62800"; }
	else if (x.indexOf("appsmagneto.mainadv.com/") >= 0 || rtgsettings["pdt_url"].indexOf("appsmagneto.mainadv.com/") >= 0) {y = "62805";rtgsettings["token"] = "62805"; }
	else if (x.indexOf("personalised-prints-kent.myshopify.com") >= 0 || rtgsettings["pdt_url"].indexOf("personalised-prints-kent.myshopify.com") >= 0) {y = "62831";rtgsettings["token"] = "62831"; }
	else if (x.indexOf("christusthreads.com") >= 0 || rtgsettings["pdt_url"].indexOf("christusthreads.com") >= 0) {y = "62836";rtgsettings["token"] = "62836"; }
	else if (x.indexOf("annasaratea.com") >= 0 || rtgsettings["pdt_url"].indexOf("annasaratea.com") >= 0) {y = "62893";rtgsettings["token"] = "62893"; }
	else if (x.indexOf("larissastore.com") >= 0 || rtgsettings["pdt_url"].indexOf("larissastore.com") >= 0) {y = "62894";rtgsettings["token"] = "62894"; }
	else if (x.indexOf("luvlab.io") >= 0 || rtgsettings["pdt_url"].indexOf("luvlab.io") >= 0) {y = "62958";rtgsettings["token"] = "62958"; }
	else if (x.indexOf("allurefinesse.org") >= 0 || rtgsettings["pdt_url"].indexOf("allurefinesse.org") >= 0) {y = "62968";rtgsettings["token"] = "62968"; }
	else if (x.indexOf("globalbeautysl.myshopify.com") >= 0 || rtgsettings["pdt_url"].indexOf("globalbeautysl.myshopify.com") >= 0) {y = "62973";rtgsettings["token"] = "62973"; }
	else if (x.indexOf("aprdiman.myshopify.com") >= 0 || rtgsettings["pdt_url"].indexOf("aprdiman.myshopify.com") >= 0) {y = "62994";rtgsettings["token"] = "62994"; }
	else if (x.indexOf("wayofwade.com") >= 0 || rtgsettings["pdt_url"].indexOf("wayofwade.com") >= 0) {y = "62995";rtgsettings["token"] = "62995"; }
	else if (x.indexOf("upinarmsclothing.com") >= 0 || rtgsettings["pdt_url"].indexOf("upinarmsclothing.com") >= 0) {y = "63029";rtgsettings["token"] = "63029"; }
	else if (x.indexOf("onlydopetees.com") >= 0 || rtgsettings["pdt_url"].indexOf("onlydopetees.com") >= 0) {y = "63035";rtgsettings["token"] = "63035"; }
	else if (x.indexOf("www.libas.in") >= 0 || rtgsettings["pdt_url"].indexOf("www.libas.in") >= 0) {y = "63060";rtgsettings["token"] = "63060"; }
	else if (x.indexOf("www.worldbeautyandgold.com") >= 0 || rtgsettings["pdt_url"].indexOf("www.worldbeautyandgold.com") >= 0) {y = "63067";rtgsettings["token"] = "63067"; }
	else if (x.indexOf("cherriedobusiness.com") >= 0 || rtgsettings["pdt_url"].indexOf("cherriedobusiness.com") >= 0) {y = "63070";rtgsettings["token"] = "63070"; }
	else if (x.indexOf("dev-timpany.myshopify.com") >= 0 || rtgsettings["pdt_url"].indexOf("dev-timpany.myshopify.com") >= 0) {y = "63071";rtgsettings["token"] = "63071"; }
	else if (x.indexOf("wineglasscrystals.com") >= 0 || rtgsettings["pdt_url"].indexOf("wineglasscrystals.com") >= 0) {y = "63084";rtgsettings["token"] = "63084"; }
	else if (x.indexOf("varietyplusstore.com") >= 0 || rtgsettings["pdt_url"].indexOf("varietyplusstore.com") >= 0) {y = "63085";rtgsettings["token"] = "63085"; }
	else if (x.indexOf("preciso-june-store-new.myshopify.com") >= 0 || rtgsettings["pdt_url"].indexOf("preciso-june-store-new.myshopify.com") >= 0) {y = "63086";rtgsettings["token"] = "63086"; }
	else if (x.indexOf("tieflyclothing.com") >= 0 || rtgsettings["pdt_url"].indexOf("tieflyclothing.com") >= 0) {y = "63088";rtgsettings["token"] = "63088"; }
	else if (x.indexOf("preciso-dev-test.myshopify.com") >= 0 || rtgsettings["pdt_url"].indexOf("preciso-dev-test.myshopify.com") >= 0) {y = "63090";rtgsettings["token"] = "63090"; }
	else if (x.indexOf("preciso-dev.myshopify.com") >= 0 || rtgsettings["pdt_url"].indexOf("preciso-dev.myshopify.com") >= 0) {y = "63091";rtgsettings["token"] = "63091"; }
	else if (x.indexOf("modernhomefashion.com") >= 0 || rtgsettings["pdt_url"].indexOf("modernhomefashion.com") >= 0) {y = "63092";rtgsettings["token"] = "63092"; }
	else if (x.indexOf("sportywearables.com") >= 0 || rtgsettings["pdt_url"].indexOf("sportywearables.com") >= 0) {y = "63093";rtgsettings["token"] = "63093"; }
	else {
            y = tok;
        }
    } else {
        y = tok;
    }
    return y;
}
"undefined" === typeof messageMap && (messageMap = new Map);
messageMap.set("59847", "https://cdn.mndtrk.com/aud/clientjs/1087.js?");
messageMap.set("59981", "https://cdn.mndtrk.com/aud/clientjs/2012.js?");
messageMap.set("60355", "https://cdn.mndtrk.com/aud/clientjs/1549.js?");
messageMap.set("61890", "https://cdn.mndtrk.com/aud/clientjs/1913.js?");
messageMap.set("61934", "https://cdn.mndtrk.com/aud/clientjs/1905.js?");
messageMap.set("61938", "https://cdn.mndtrk.com/aud/clientjs/1908.js?");
messageMap.set("61940", "https://cdn.mndtrk.com/aud/clientjs/1910.js?");
messageMap.set("61952", "https://cdn.mndtrk.com/aud/clientjs/2008.js?");
messageMap.set("61963", "https://cdn.mndtrk.com/aud/clientjs/2059.js?");
messageMap.set("61973", "https://cdn.mndtrk.com/aud/clientjs/2042.js?");
messageMap.set("61982", "https://cdn.mndtrk.com/aud/clientjs/2057.js?");
messageMap.set("61996", "https://cdn.mndtrk.com/aud/clientjs/2129.js?");
messageMap.set("62056", "https://cdn.mndtrk.com/aud/clientjs/2189.js?");
messageMap.set("62057", "https://cdn.mndtrk.com/aud/clientjs/2190.js?");
messageMap.set("62058", "https://cdn.mndtrk.com/aud/clientjs/2193.js?");
messageMap.set("62063", "https://cdn.mndtrk.com/aud/clientjs/2200.js?");
messageMap.set("62080", "https://cdn.mndtrk.com/aud/clientjs/2210.js?");
messageMap.set("62081", "https://cdn.mndtrk.com/aud/clientjs/2221.js?");
messageMap.set("62090", "https://cdn.mndtrk.com/aud/clientjs/2236.js?");
messageMap.set("62119", "https://cdn.mndtrk.com/aud/clientjs/2273.js?");
messageMap.set("62184", "https://cdn.mndtrk.com/aud/clientjs/2338.js?");
messageMap.set("62189", "https://cdn.mndtrk.com/aud/clientjs/2348.js?");
messageMap.set("62200", "https://cdn.mndtrk.com/aud/clientjs/2367.js?");
messageMap.set("62220", "https://cdn.mndtrk.com/aud/clientjs/2389.js?");
messageMap.set("62275", "https://cdn.mndtrk.com/aud/clientjs/2442.js?");
messageMap.set("62291", "https://cdn.mndtrk.com/aud/clientjs/2464.js?");
messageMap.set("62308", "https://cdn.mndtrk.com/aud/clientjs/2483.js?");
messageMap.set("62310", "https://cdn.mndtrk.com/aud/clientjs/2496.js?");
messageMap.set("62311", "https://cdn.mndtrk.com/aud/clientjs/2497.js?");
messageMap.set("62312", "https://cdn.mndtrk.com/aud/clientjs/2498.js?");
messageMap.set("62313", "https://cdn.mndtrk.com/aud/clientjs/2499.js?");
messageMap.set("62314", "https://cdn.mndtrk.com/aud/clientjs/2500.js?");
messageMap.set("62340", "https://cdn.mndtrk.com/aud/clientjs/2512.js?");
messageMap.set("62341", "https://cdn.mndtrk.com/aud/clientjs/2513.js?");
messageMap.set("62342", "https://cdn.mndtrk.com/aud/clientjs/2515.js?");
messageMap.set("62350", "https://cdn.mndtrk.com/aud/clientjs/2524.js?");
messageMap.set("62365", "https://cdn.mndtrk.com/aud/clientjs/2561.js?");
messageMap.set("62369", "https://cdn.mndtrk.com/aud/clientjs/2568.js?");
messageMap.set("62370", "https://cdn.mndtrk.com/aud/clientjs/2569.js?");
messageMap.set("62373", "https://cdn.mndtrk.com/aud/clientjs/2570.js?");
messageMap.set("62387", "https://cdn.mndtrk.com/aud/clientjs/2587.js?");
messageMap.set("62390", "https://cdn.mndtrk.com/aud/clientjs/2593.js?");
messageMap.set("62391", "https://cdn.mndtrk.com/aud/clientjs/2595.js?");
messageMap.set("62397", "https://cdn.mndtrk.com/aud/clientjs/2598.js?");
messageMap.set("62405", "https://cdn.mndtrk.com/aud/clientjs/2599.js?");
messageMap.set("62418", "https://cdn.mndtrk.com/aud/clientjs/2602.js?");
messageMap.set("62431", "https://cdn.mndtrk.com/aud/clientjs/2611.js?");
messageMap.set("62481", "https://cdn.mndtrk.com/aud/clientjs/2651.js?");
messageMap.set("62546", "https://cdn.mndtrk.com/aud/clientjs/2691.js?");
messageMap.set("62712", "https://cdn.mndtrk.com/aud/clientjs/2799.js?");
messageMap.set("62764", "https://cdn.mndtrk.com/aud/clientjs/2829.js?");
messageMap.set("62771", "https://cdn.mndtrk.com/aud/clientjs/2840.js?");
messageMap.set("62780", "https://cdn.mndtrk.com/aud/clientjs/2849.js?");
messageMap.set("62786", "https://cdn.mndtrk.com/aud/clientjs/2857.js?");
messageMap.set("62792", "https://cdn.mndtrk.com/aud/clientjs/2873.js?");
messageMap.set("62800", "https://cdn.mndtrk.com/aud/clientjs/2878.js?");
messageMap.set("62805", "https://cdn.mndtrk.com/aud/clientjs/2888.js?");
messageMap.set("62831", "https://cdn.mndtrk.com/aud/clientjs/2894.js?");
messageMap.set("62836", "https://cdn.mndtrk.com/aud/clientjs/2906.js?");
messageMap.set("62893", "https://cdn.mndtrk.com/aud/clientjs/2983.js?");
messageMap.set("62894", "https://cdn.mndtrk.com/aud/clientjs/2987.js?");
messageMap.set("62958", "https://cdn.mndtrk.com/aud/clientjs/3046.js?");
messageMap.set("62968", "https://cdn.mndtrk.com/aud/clientjs/3058.js?");
messageMap.set("62973", "https://cdn.mndtrk.com/aud/clientjs/3062.js?");
messageMap.set("62994", "https://cdn.mndtrk.com/aud/clientjs/3080.js?");
messageMap.set("62995", "https://cdn.mndtrk.com/aud/clientjs/3081.js?");
messageMap.set("63029", "https://cdn.mndtrk.com/aud/clientjs/3114.js?");
messageMap.set("63035", "https://cdn.mndtrk.com/aud/clientjs/3123.js?");
messageMap.set("63060", "https://cdn.mndtrk.com/aud/clientjs/3152.js?");
messageMap.set("63067", "https://cdn.mndtrk.com/aud/clientjs/3167.js?");
messageMap.set("63070", "https://cdn.mndtrk.com/aud/clientjs/3185.js?");
messageMap.set("63071", "https://cdn.mndtrk.com/aud/clientjs/3190.js?");
messageMap.set("63084", "https://cdn.mndtrk.com/aud/clientjs/3211.js?");
messageMap.set("63085", "https://cdn.mndtrk.com/aud/clientjs/3213.js?");
messageMap.set("63086", "https://cdn.mndtrk.com/aud/clientjs/3214.js?");
messageMap.set("63088", "https://cdn.mndtrk.com/aud/clientjs/3215.js?");
messageMap.set("63090", "https://cdn.mndtrk.com/aud/clientjs/3218.js?");
messageMap.set("63091", "https://cdn.mndtrk.com/aud/clientjs/3219.js?");
messageMap.set("63092", "https://cdn.mndtrk.com/aud/clientjs/3220.js?");
messageMap.set("63093", "https://cdn.mndtrk.com/aud/clientjs/3221.js?");
if (document.getElementById("m20F") == null) {
    TrafficCalculator();
}