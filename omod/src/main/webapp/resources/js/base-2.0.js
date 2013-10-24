jq.fn.isBefore = function(elem) {
    if(typeof(elem) == "string") elem = jq(elem);
    return this.add(elem).index(elem) > 0;
}

jq(document).ready(function(){

    // get rid of the banner, user bar, and footer
    jq("#userBar").remove();
    jq("#banner").remove();
    jq("#footer").remove();

    // create the header
    jq("body").prepend('<header></header>');

    // add the logo
    jq("header").append('<div class="logo">' +
        '<a href="/openmrs-standalone/referenceapplication/home.page">' +
        '<img src="/openmrs-standalone/ms/uiframework/resource/uicommons/images/logo/openmrs-with-title-small.png">' +
        '</a></div>');

    // add the user options
    jq("header").append('<ul class="user-options">' +
        '<li class="identifier">' +
        '<i class="icon-user small"></i>' +
        'bob' +
        '</li>' +
        '<li class="change-location">' +
        '<a href="#" class="">' +
        '<i class="icon-map-marker small"></i>' +
        '<span data-bind="text: text">Outpatient Clinic</span>' +
        '<i class="link icon-caret-down"></i>' +
        '</a>' +
        '</li>' +
        '<li class="logout">' +
        '<a href="/openmrs-standalone/logout">' +
        'Logout' +
        '<i class="icon-signout small"></i>' +
        '</a>' +
        '</li>' +
        '</ul>');

    // make some adjustments to be more like the refapp template
    jq("#openmrs_dwr_error").insertBefore("#pageBody");
    jq("#openmrs_msg").insertBefore("#pageBody");
    jq("#openmrs_error").insertBefore("#pageBody");
    jq("#pageBody").attr("id", "body-wrapper");
    jq("#content").addClass("container");
    jq("#content > br:last").remove();

    // fix up the header and menu
    jq("#content h2:first").addClass("content-header");
    if (jq("#content #menu:first").isBefore("#content h2:first")) {
        jq("#content #menu:first").insertAfter("#content h2:first");
        jq("#content #menu:first").addClass("submenu");
    } else {
        jq("#content h2:first").css("margin-bottom", "10px");
    }

    jq("#menu.submenu li a").addClass("button")
    jq("#menu.submenu li a").addClass("task");

    // add list styles
    $j("ul").each(function(){
        if ($j(this).attr("id") == "" && $j(this).attr("class") == "") {
            $j(this).addClass("list");
        }
    });

});