/*! 
 
 =========================================================
 
 *Leasing Monk Javascript
 
 =========================================================
 
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 
 */

$(document).ready(function () {

    //header-menutoggle js
    $('.left_menu a').on('click', function () {
        $('.select_toggle').toggle("medium");
    });

    //blogmenu toggle
    $('.blog_dropdown').on('click', function () {
        $('.blog_togglemenu').toggle("medium");
    });

    //youtube video
    $(".play_grey").click(function () {
        $(".play_btn, .play_bg").hide();
        $(".yt")[0].src += "?autoplay=0";
        $(".yt").show();
    });

    // FAQ Accordion
    $('.accordion').find('.accordion-title').on('click', function () {
        // Adds Active Class
        $(this).toggleClass('active');
        // Expand or Collapse This Panel
        $(this).next().slideToggle('fast');
        // Hide The Other Panels
        $('.accordion-content').not($(this).next()).slideUp('fast');
        // Removes Active Class From Other Titles
        $('.accordion-title').not($(this)).removeClass('active');
    });

    //homeslider
    $('.home_slider ').slick({
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    //home tab js
    $(".tab_content").hide();
    $(".tab_content:first").show();
    /* if in tab mode */
    $("ul.tabs li").click(function () {

        $(".tab_content").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();

        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");

        $(".tab_drawer_heading").removeClass("d_active");
        $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");

    });
    /* if in drawer mode */
    $(".tab_drawer_heading").click(function () {

        $(".tab_content").hide();
        var d_activeTab = $(this).attr("rel");
        $("#" + d_activeTab).fadeIn();

        $(".tab_drawer_heading").removeClass("d_active");
        $(this).addClass("d_active");

        $("ul.tabs li").removeClass("active");
        $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");
    });
    $('ul.tabs li').last().addClass("tab_last");

    //colection filter 
    $(document).on('click', '.filter_menu a', function () {
        $('.collection_sidebar').animate({left: '0'});
        $('body').addClass('collection-filter');
    });
    $('.filter_colse,.filter-overlay').on("click", function () {
        var collection_sidebar = $('.collection_sidebar').outerWidth();
        $('.collection_sidebar').animate({left: -collection_sidebar});
        $('body').removeClass('collection-filter');
    });
    // Filter Toggle 
    $(document).on("click", ".category_close_icon", function (a) {
        $(this).parent('.category_list_title').siblings('.layer-filter').slideToggle();
        $(this).parent('.category_list_title').toggleClass('open-filter');
    });
    $(document).on("click", ".box_content_sidebar .side_filter_box_heading", function () {
        $(this).toggleClass("deactive");
        $(this).siblings("ul.side_filter_box_detail").slideToggle("fast");

    });
    //mCustomScrollbar
    if ($('.mCustomScrollbar').length > 0) {
        $('.mCustomScrollbar').mCustomScrollbar();
    }
    //Collection Sidebar  Height
    var s_title = $('.sidebar_title').outerHeight();
    var s_height = $(window).height();
    var s_total = s_height - s_title;
    $('.filter_content').css('height', s_total - 60);

    //home banner dropdown
    $('.field_toggle1').on('click', function () {
        $('.field_dropdown_open1').toggle("medium");
    });
    $('.field_toggle2').on('click', function () {
        $('.field_dropdown_open2').toggle("medium");
    });
    $('.field_toggle3').on('click', function () {
        $('.field_dropdown_open3').toggle("medium");
    });
    $('.field_toggle4').on('click', function () {
        $('.field_dropdown_open4').toggle("medium");
    });
    $('.field_toggle5').on('click', function () {
        $('.field_dropdown_open5').toggle("medium");
    });
    
    //spacedetail popup slider
    $('.space_popup_slider').slick({
        dots: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    

// faq page js


    //testimonialslider
    $('.content_testimonial').slick({
        dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    
    // tab2bed content
    $(".tab2_content").hide();
    $(".tab2_content:first").show();
    /* if in tab2 mode */
    $("ul.tab2s li").click(function () {

        $(".tab2_content").hide();
        var activetab2 = $(this).attr("rel");
        $("#" + activetab2).fadeIn();

        $("ul.tab2s li").removeClass("active");
        $(this).addClass("active");

        $(".tab2_drawer_heading").removeClass("d_active");
        $(".tab2_drawer_heading[rel^='" + activetab2 + "']").addClass("d_active");

    });
    
    // faq2 accordion2
    $('.accordion2').find('.accordion2-title').on('click', function () {
        // Adds Active Class
        $(this).toggleClass('active');
        // Expand or Collapse This Panel
        $(this).next().slideToggle('fast');
        // Hide The Other Panels
        $('.accordion2-content').not($(this).next()).slideUp('fast');
        // Removes Active Class From Other Titles
        $('.accordion2-title').not($(this)).removeClass('active');
    });




// My Account JS
$('#example').DataTable({
    dom: 'Bfrtip',
    buttons: [
         'csv','print'
    ]
});


});