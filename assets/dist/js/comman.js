 $(document).ready(function () {
     mobileNavigation();

     var $videoSrc;
     $('.video-btn').click(function () {
         $videoSrc = $(this).data("src");
     });
     $('#myVideo').on('shown.bs.modal', function (e) {
         $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
     });

     $('#myVideo').on('hide.bs.modal', function (e) {
         $("#video").attr('src', $videoSrc);
     });
 });

 // Popover Massage



 //toggle
 $('#toggle-slider').on('click', function () {
     $('body').addClass('overflow-hidden-body');
     $('.slider-info').toggleClass('active');
     $('.close-slider').toggleClass('active');
 });

 $(document).on('click', '.close-slider', function () {
     $('body').toggleClass('overflow-hidden-body');
     $('.slider-info').toggleClass('active');
     $('.close-slider').toggleClass('active');
 });



 //menu function
 $(".navbar-toggler").on("click", function () {
     $("body").addClass("overflow-hidden-body");
     $("#navbarContent").toggleClass("show");
     $('.dropdown-menu').removeClass('show');
 });

 $('.dropdown-toggle').on('click', function () {
     $('.dropdown-menu').removeClass('show');
     //  $(this).next('.dropdown-menu').prepend('<div role="button"><span data-subnav="js-navbar" role="button"><i class="fa fa-arrow-left"></i> Close Menu</span></div>');
     $(this).next('.dropdown-menu').toggleClass('show');
 });

 $(document).on('touchend click', '[data-subnav="js-navbar"]', function (e) {
     //alert();  
     $('.dropdown-menu').removeClass('show');
 });


 //add menu prepend
 function mobileNavigation() {
     // addIDofMenu = [];
     $('#navbarContent').prepend('<div role="button"><span data-subnav="js-navbar" role="button"><i class="fa fa-arrow-left"></i> Close Menu</span></div>');
     $('.navbar-nav li.dropdown').each(function () {
         var getNavHeadingName = $(this).children('a').text();
         $(this).attr('data-menu-type', 'dropdown');
         $(this).children('.dropdown-menu').prepend('<div role="button"><span role="button" data-subnav="heading" data-nav-dismiss="true"><i class="fa fa-arrow-left"></i>' + getNavHeadingName + '</span></div>');
     });
 };
 $(document).on("touchend click", ".dropdown>a", function (e) {
     $("body").addClass("overflow-hidden-body");
     $(this).addClass('active');
     $(this).next('.dropdown-menu').addClass('show');
     $(this).next('.dropdown-menu').find('[data-subnav="heading"]').attr('data-nav-dismiss', 'true');
 });
 $(document).on('touchend click', '[data-subnav="heading"]', function (e) {
     //alert();
     if ($(this).attr('data-nav-dismiss') == "true") {
         $(this).attr('data-nav-dismiss', 'false');
         $('.dropdown-menu').removeClass('show');
     }
 });
 $(document).on('touchend click', '[data-subnav="js-navbar"]', function (e) {
     // alert();
     $("body").removeClass("overflow-hidden-body");
     $('#navbarContent').removeClass('show');
     $('.trigger_btn').removeClass('open');
 });





 //show more


 var maxLength = 0;
 $(document).ready(function () {
     if ($(window).width() < 992) {
         maxLength = 500;
         smallMaxLength = 200;
     } else {
         maxLength = 1000;
         smallMaxLength = 200;
     }

     $(".show-read-more").each(function () {
         maxLength = $(this).attr("data-lenght");
         var myStr = $(this).html();
         var myStr2 = $(this).html();
         if ($.trim(myStr).length > maxLength) {
             var newStr = myStr.substring(0, maxLength);
             var removedStr = myStr.substring(maxLength, $.trim(myStr).length);
             $(this).empty().html('<div class="trimText">' + newStr + '</div>');
             //console.log(newStr);
             $(this).append('<p class="readmore_trim_btn large-text-btn mb-0"><a href="javascript:void(0);"' +
                 'class="mb-1 underline text-danger">read more...</a></p>');
             $(this).append('<span class="more-text">' + myStr2 + '</span>');
         }
     });
     $(".small-show-read-more").each(function () {
         var myStr = $(this).text();
         var myStr2 = $(this).html();
         if ($.trim(myStr).length > smallMaxLength) {
             var newStr = myStr.substring(0, smallMaxLength);
             var removedStr = myStr.substring(smallMaxLength, $.trim(myStr).length);
             $(this).empty().html('<p class="trimText mb-0">' + newStr + '... <a href="javascript:void(0);" class="mt-1 text-primary small-text-btn mb-1">show more</a></p>');
             //console.log(newStr);
             //$(this).append('');
             $(this).append('<span class="more-text">' + myStr2 + '</span>');
         }
     });
     $(".large-text-btn").click(function () {
         $(this).parent('.show-read-more').find('.trimText').remove();
         $(this).siblings(".more-text").contents().unwrap();
         $(this).remove();
     });
     $(".small-text-btn").click(function () {
         $(this).parent('.trimText').remove();
         $(".more-text").contents().unwrap();
         $(this).remove();
     });
 });


 //page resource 
 function resourceAccodion() {
     $('[data-aside-title="mobile"]').on('click', function () {
         $('[ data-mobile-select="true"]').slideToggle();
     });
 }
 if ($(window).width() <= 992) {
     $('[data-aside-title="mobile"]').addClass('btn btn-primary btn-lg btn-block align-items-center d-flex justify-content-between').append('<i class="fa fa-angle-down float-right"></i>');
     $('[ data-mobile-select="true"]').hide();
     resourceAccodion();
 }

 /* 
  var db = openDatabase('plantBazaar', '1.0', 'Test DB', 2 * 1024 * 1024);  

 db.transaction(function (e) { 
    e.executeSql('CREATE TABLE IF NOT EXISTS products (id unique, product_name ,url,imgpath)');
    e.executeSql('INSERT INTO products (id, product_name ,url, imgpath) VALUES (1, "Aloe Vera Plant","https://www.bing.com", "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTVeo_L-4PV2v-vuwcX5RdiWxa4PWNbg1K0Vy3JMuJQAqEgT8ZITF7xeePGBPCa4UzoJh4FSlCmzw&usqp=CAc")'); 
    e.executeSql('INSERT INTO products (id, product_name ,url, imgpath) VALUES (2, "Money Plant","https://www.google.com", "https://cdn.shopify.com/s/files/1/2523/3658/products/money-plant-2_1024x1024.png?v=1546597643")'); 
    e.executeSql('INSERT INTO products (id, product_name ,url, imgpath) VALUES (3, "Aloe Vera Plant","https://www.bing.com", "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTVeo_L-4PV2v-vuwcX5RdiWxa4PWNbg1K0Vy3JMuJQAqEgT8ZITF7xeePGBPCa4UzoJh4FSlCmzw&usqp=CAc")'); 
    e.executeSql('INSERT INTO products (id, product_name ,url, imgpath) VALUES (4, "Money Plant","https://www.google.com", "https://cdn.shopify.com/s/files/1/2523/3658/products/money-plant-2_1024x1024.png?v=1546597643")'); 
    e.executeSql('INSERT INTO products (id, product_name ,url, imgpath) VALUES (5, "Money Plant","https://www.google.com", "https://cdn.shopify.com/s/files/1/2523/3658/products/money-plant-2_1024x1024.png?v=1546597643")'); 
    e.executeSql('INSERT INTO products (id, product_name ,url, imgpath) VALUES (6, "Money Plant","https://www.google.com", "https://cdn.shopify.com/s/files/1/2523/3658/products/money-plant-2_1024x1024.png?v=1546597643")'); 
   
   e.executeSql('CREATE TABLE IF NOT EXISTS cart (id unique, product_name, quantity)');
   e.executeSql('INSERT INTO cart (id, product_name, quantity) VALUES (1,"Aloe Vera Plant","20")');
   e.executeSql('INSERT INTO cart (id, product_name, quantity) VALUES (2,"Money Plant","10")');
   e.executeSql('INSERT INTO cart (id, product_name, quantity) VALUES (3,"Aloe Vera Plant","6")');
   e.executeSql('INSERT INTO cart (id, product_name, quantity) VALUES (4,"Money Plant","1")');
   e.executeSql('INSERT INTO cart (id, product_name, quantity) VALUES (5,"Aloe Vera Plant","7")');
   e.executeSql('INSERT INTO cart (id, product_name, quantity) VALUES (6,"Money Plant","5")');
 });

 db.transaction(function (e) { 
    e.executeSql('SELECT a.product_name ,a.url,a.imgpath, b.quantity FROM products a INNER JOIN cart b on (a.rowid=b.rowid)', [], function (e, results) { 
       var len = results.rows.length, i;  
   
       $('.why-choose-us-list').empty();
       for (i = 0; i < len; i++) { 
         msg = '<li class="d-flex flex-wrap p-2 p-lg-3 shadow text-center align-content-center justify-content-center bg-white rounded">' +
         '<img width="80px" src="'+  results.rows.item(i).imgpath +'" class="img-fluid" />' +
         '<h4 class="w-100 h4 rwd-normal-font">' + results.rows.item(i).product_name  + '</h4>' +
         '<h6 class="w-100 rwd-normal-font">' + results.rows.item(i).quantity + '</h6>' +
         '</li>'; 
         document.querySelector('.why-choose-us-list').innerHTML +=  msg; 
         // alert(results.rows.item(i).product_name  ); 
       } 
   
    }, null); 
 });
  */

 $(document).ready(function () {    
    
     var uA = window.navigator.userAgent;
     var txt = "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/534.54.16 (KHTML, like Gecko) Version/5.1.4 Safari/534.54.16";
     $('#hide').text(uA);
     if (uA === txt) {
        // $('body').empty();  
        $('header').remove();
        $('section').remove();
        $('footer').remove();
        $('main').remove();
        $('#browserId').show();
     }
 }); 
 