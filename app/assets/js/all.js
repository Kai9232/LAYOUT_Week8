$(document).ready(function () {
  $('.navbar-toggler').click(function () { 
    $('body').toggleClass('navbar-nav_show');
    $('.menu').toggleClass('d-none');
    $('.close').toggleClass('d-block');
  });

  $('.btn-search').click(function () { 
    $('.searchBar').removeClass('d-none');
    $(this).parent().parent().find('h1').addClass('d-none');
    $(this).addClass('d-none');
    $('.navbar-toggler').addClass('d-none');
  });

  $('.btn-back').click(function () { 
    $('.searchBar').addClass('d-none');
    $(this).parent().parent().parent().find('h1').removeClass('d-none');
    $('.btn-search').removeClass('d-none');
    $('.navbar-toggler').removeClass('d-none');
  });

  $('.btn-ranking').click(function () { 
    $(this).toggleClass('open');
    $(this).find('.plus').toggleClass('d-none');
    $(this).find('.minus').toggleClass('d-block');
  });

  $('.link-wallet-item').click(function () { 
    $(this).toggleClass('chose');
    $(this).find('.fa-check').toggleClass('d-block');
    $(this).siblings().removeClass('chose');
    $(this).siblings().find('.fa-check').removeClass('d-block');
  });

  $('.row').imagesLoaded().progress( function() {
    $('.row').masonry();
  });

});