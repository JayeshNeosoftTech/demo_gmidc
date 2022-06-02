$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:3,
        onInitialized: inlargItem,
        loop: true,
        margin: 36,
        nav: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 1000,
        smartSpeed:1500,
        autoplayHoverPause:true,
        addClassActive:true,
        focusOnSelect: true,
        responsive:{
          0:{
            items:1
          },
          600:{
            items:2
          },
          768:{
            items:2.5
          },
        },
      });
      $('.owl-carousel').on('changed.owl.carousel', function (event) {
        inlargItem(event)
      })
      function inlargItem(event){
        let OwlNumber = event.item.index;
        $(".slide").removeClass("big");
        $(".slide").eq(OwlNumber).addClass("big");
      }
      var owl = $('.owl-carousel');
      owl.owlCarousel();
      $('.slideNext').click(function() {
        owl.trigger('next.owl.carousel');
      });
      $('.slidePre').click(function() {
        owl.trigger('prev.owl.carousel');
      });
});
