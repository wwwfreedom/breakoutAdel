$(document).ready(function($){
  navigation();

});


// THIS IS THE FUNCITON TO CONTROL NAVIGATION BEHAVIOURS
function navigation() {
  //if you change this breakpoint in the style.css file (or _layout.scss if you use SASS), don't forget to update this value as well
  var MQL = 1170;

  //primary navigation slide-in effect
  if($(window).width() > MQL) {
    var headerHeight = $('.header').height();
    $(window).on('scroll',
    {
          previousTop: 0
      },
      function () {
        var currentTop = $(window).scrollTop();
        //check if user is scrolling up
        if (currentTop < this.previousTop ) {
          //if scrolling up...
          if (currentTop > 0 && $('.header').hasClass('is-fixed')) {
            $('.header').addClass('is-visible');
          } else {
            $('.header').removeClass('is-visible is-fixed');
          }
        } else {
          //if scrolling down...
          $('.header').removeClass('is-visible');
          if( currentTop > headerHeight && !$('.header').hasClass('is-fixed')) $('.header').addClass('is-fixed');
        }
        this.previousTop = currentTop;
    });
  }

  //open/close primary navigation
  $('.primary-nav-trigger').on('click', function(){
    $('.menu-icon').toggleClass('is-clicked');
    $('.header').toggleClass('menu-is-open');

    //in firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
    if( $('.primary-nav').hasClass('is-visible') ) {
      $('.primary-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
        $('body').removeClass('overflow-hidden');
      });
    } else {
      $('.primary-nav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
        $('body').addClass('overflow-hidden');
      });
    }
  });

// this is to close the menu once one of the link is clicked
  $('.primary-nav li a').click(function(e){
    // this is a mistake here it's a link so you want it to link somewhere if you prevent default it will not link anywhere. the prevent default is only good for submit button
    // e.preventDefault();
    if( $('.primary-nav').hasClass('is-visible') ) {
      $('.primary-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
        $('body').removeClass('overflow-hidden');
      });
    } else {
      $('.primary-nav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
        $('body').addClass('overflow-hidden');
      });
    }
  });
}