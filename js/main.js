// fixed navigation on scroll

$(document).ready(function () {
 // $('.navbar').addClass('navbar-fixed-top'); // navbar at top onload
    $(window).scroll(function() {
                     
       if ($(window).scrollTop() > 970 ) {
         $('.navbar').addClass('navbar-fixed-top');
        
        }      
      if ($(window).scrollTop() < 971 ) {
         
          $('.navbar').removeClass('navbar-fixed-top');
          
        
        }  
                     
    });
    
});

// Links LINKS Links LINKS Links LINKS Links LINKS Links LINKS Links LINKS Links LINKS

$(".navbar-dark ul li a[href^='#']").click(function(e) {
    
    //alert(this.hash + " HASH b4");
    e.preventDefault();
    
    var hash = this.hash;
    
    $('html, body').animate({
        scrollTop: $(hash).offset().top}, 1000, function(){
        window.location.hash = hash;
    
    });
    
    
});

$("#section-parallax .col-sm-8 a[href^='#']").click(function(e) {
    
    //alert(this.hash + " HASH b4");
    e.preventDefault();
    
    var hash = this.hash;
    
    $('html, body').animate({
        scrollTop: $(hash).offset().top}, 1000, function(){
        window.location.hash = hash;
    
    });
    
    
});

$(".footer .scroll-to-top-button a[href^='#']").click(function(e) {
    
    //alert(this.hash + " HASH b4");
    e.preventDefault();
    
    var hash = this.hash;
    
    $('html, body').animate({
        scrollTop: $(hash).offset().top}, 1000, function(){
        window.location.hash = hash;
    
    
    });
    
    
});

$(".wall-sticker a[href^='#']").click(function(e) {
    
    //alert(this.hash + " HASH b4");
    e.preventDefault();
    
    var hash = this.hash;
    
    $('html, body').animate({
        scrollTop: $(hash).offset().top}, 1000, function(){
        window.location.hash = hash;
    
    });
    
    
});

$("#main-nav a[href^='#']").click(function(e) {
    
    //alert(this.hash + " HASH b4");
    e.preventDefault();
    
    var hash = this.hash;
    
    $('html, body').animate({
        scrollTop: $(hash).offset().top}, 1000, function(){
        window.location.hash = hash;
    
    });
    
    
});

$(".arrow a[href^='#']").click(function(e) {
    
    //alert(this.hash + " HASH b4");
    e.preventDefault();
    
    var hash = this.hash;
    
    $('html, body').animate({
        scrollTop: $(hash).offset().top}, 1000, function() {
        window.location.hash = hash;
    
    });
    
    
});

// ANIMATIONS animation ANIMATIONS animations ANIMATIONS animation ANIMATIONS animations


// What we Do 
$('.js-wp-1').waypoint(function(direction) {
    $('.js-wp-1').addClass('animated fadeInDown');
}, {
    offset: '80%'
});


// fa-tree fade left 

$('.js-wp-2').waypoint(function(direction) {
    $('.js-wp-2').addClass('animated fadeInLeft');
}, {
    offset: '80%'
});

// fa-leaf Fade down

$('.Animate-Leaf').waypoint(function(direction) {
    $('.Animate-Leaf').addClass('animated fadeInUp');
}, {
    offset: '80%'
});

//Animate fa-pageline
$('.Animate-Pageline').waypoint(function(direction) {
    $('.Animate-Pageline').addClass('animated fadeInUp');
}, {
    offset: '80%'
});

// Animate fa-Square 
$('.Animate-Square').waypoint(function(direction) {
    $('.Animate-Square').addClass('animated fadeInRight');
}, {
    offset: '80%'
});

// Animate Timeline  Animate Timeline  Animate Timeline  Animate Timeline  Animate Timeline  

$('.An-Our-TimeLine').waypoint(function(direction) {
    $('.An-Our-TimeLine').addClass('animated fadeInDown');
}, {
    offset: '80%'
});


$('.An-Badge-16').waypoint(function(direction) {
    $('.An-Badge-16').addClass('animated fadeInUp');
}, {
    offset: '80%'
});

$('.An-Panel-16').waypoint(function(direction) {
    $('.An-Panel-16').addClass('animated fadeInLeft');
}, {
    offset: '80%'
});

$('.An-Badge-15').waypoint(function(direction) {
    $('.An-Badge-15').addClass('animated fadeInUp');
}, {
    offset: '80%'
});

$('.An-Panel-15').waypoint(function(direction) {
    $('.An-Panel-15').addClass('animated fadeInRight');
}, {
    offset: '80%'
});

$('.An-Panel-14').waypoint(function(direction) {
    $('.An-Panel-14').addClass('animated fadeInLeft');
}, {
    offset: '80%'
});
$('.An-Badge-14').waypoint(function(direction) {
    $('.An-Badge-14').addClass('animated fadeInUp');
}, {
    offset: '80%'
});

